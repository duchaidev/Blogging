import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Button from "../../components/form/Button";

import ActionDelete from "../../components/icon/action/ActionDelete";
import ActionEdit from "../../components/icon/action/ActionEdit";
import ActionView from "../../components/icon/action/ActionView";
import Table from "../../components/table/Table";
import { db } from "../../firebase-app/firebase-auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import InputSearch from "../../components/form/InputSearch";
import { debounce } from "lodash";
import { useAuth } from "../../context/auth-context";
import { useRole } from "../../utils/constants";

const DashBoardUser = () => {
  document.title = "Manage User";
  const [searchUser, setSearchUser] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const { userInfo } = useAuth();
  // const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      async function fetchUser() {
        const q = query(
          collection(db, "users"),
          where("email", "==", String(userInfo?.email))
        );
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((item) => {
          setUser({
            id: item.id,
            avatar: item.data().avatar,
            email: item.data().email,
            fullname: item.data().fullname,
            role: item.data().role,
            createAt: item.data().createAt,
          });
        });
      }
      fetchUser();
    }
  }, [userInfo]);

  useEffect(() => {
    const fetchUsers = async () => {
      const colRef = collection(db, "users");
      const newRef = searchUser
        ? query(
            colRef,
            where("email", ">=", searchUser),
            where("email", "<=", searchUser + "utf8")
          )
        : colRef;
      onSnapshot(newRef, (snapshot) => {
        const result = [];
        snapshot.forEach((user) => {
          result.push({
            id: user.id,
            ...user.data(),
          });
        });
        setUsers(result);
        console.log(result);
      });
    };
    fetchUsers();
  }, [searchUser]);
  const handleDelete = (userId) => {
    //Không thể xóa tài khoản người khác
    // deleteUser(auth, userId)
    // .then(() => {
    //   console.log("Xóa tài khoản người dùng thành công!");
    // })
    // .catch((error) => {
    //   console.error("Lỗi khi xóa tài khoản người dùng: ", error);
    // });
    const singleDoc = doc(db, "users", userId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(singleDoc);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleChange = debounce((values) => {
    setSearchUser(values.target.value);
  }, 300);
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-[#02E7F5] text-[26px] font-bold">
          Manage Your User
        </h2>
        <div className="w-[300px] mt-[-20px] flex flex-col items-end gap-6">
          <Button to="/add-new-user/admin" type="button">
            Add New User
          </Button>
          <InputSearch
            className=""
            placeholder="Search User ...."
            type="text"
            onChange={handleChange}
          ></InputSearch>
        </div>
      </div>
      <div className="mt-[10px]">
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Info</th>
              <th>FullName</th>
              <th>Email Address</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          {users?.length > 0 &&
            userInfo?.email &&
            Number(user.role) === Number(useRole.ADMIN) &&
            users.map((user) => (
              <tbody key={user.id}>
                <tr>
                  <td></td>
                  <td title={user.id}>{user.id.slice(0, 6) + "..."}</td>
                  <td>
                    <div className="flex items-center gap-x-3">
                      <img
                        src={user.avatar}
                        alt=""
                        className="w-[66px] h-[55px] rounded object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">
                          {user.username || user.fullname}
                        </h3>
                        <time className="text-sm text-gray-500">
                          {new Date(
                            user?.createdAt?.seconds * 1000
                          ).toLocaleDateString("vi-VI")}
                        </time>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-gray-500">{user.fullname}</span>
                  </td>
                  <td>
                    <span className="text-gray-500">{user.email}</span>
                  </td>
                  <td>
                    <span className="text-gray-500">{user.role}</span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <ActionView
                        onClick={() => {
                          // navigate(`/${post.slug}`);
                        }}
                      ></ActionView>
                      <ActionEdit
                        onClick={() => {
                          navigate(`/manage/update-user?id=${user?.id}`);
                        }}
                      ></ActionEdit>
                      <ActionDelete
                        onClick={() => {
                          handleDelete(user.id);
                        }}
                      ></ActionDelete>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
    </div>
  );
};

export default DashBoardUser;
