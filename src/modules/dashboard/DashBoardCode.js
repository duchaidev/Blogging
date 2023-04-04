import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
const StyledDashBoardPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const DashBoardCode = () => {
  const [searchCode, setSearchCode] = useState("");
  document.title = "Manage Code";

  const navigate = useNavigate();

  const [codeList, setCodeList] = useState([]);
  useEffect(() => {
    async function fetchCodeList() {
      const colRef = collection(db, "code");
      const newRef = searchCode
        ? query(
            colRef,
            where("title", ">=", searchCode),
            where("title", "<=", searchCode + "utf8")
          )
        : colRef;
      onSnapshot(newRef, (snapshot) => {
        const result = [];
        snapshot.forEach((post) => {
          result.push({
            id: post.id,
            ...post.data(),
          });
        });
        setCodeList(result);
        console.log(result);
      });
    }
    fetchCodeList();
  }, [searchCode]);

  const handleDelete = (codeId) => {
    const singleDoc = doc(db, "code", codeId);
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
    setSearchCode(values.target.value);
  }, 300);
  return (
    <StyledDashBoardPosts>
      <div className="flex justify-between">
        <h2 className="text-[#02E7F5] text-[26px] font-bold">Manage Code</h2>
        <div className="w-[300px] mt-[-20px] flex flex-col items-end gap-6">
          <Button to="/add-new-code/admin" type="button">
            Add New Code
          </Button>
          <div className="w-full h-full ">
            <InputSearch
              className="dark:focus:!text-white"
              placeholder="Search Code ...."
              type="text"
              onChange={handleChange}
            ></InputSearch>
          </div>
        </div>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Code</th>
              <th>Url</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          {codeList.length > 0 &&
            codeList.map((code) => (
              <tbody key={code.id}>
                <tr>
                  <td></td>
                  <td title={code?.id} className="!text-black dark:!text-white">
                    {code?.id?.slice(0, 8) + "...."}
                  </td>

                  <td>
                    <div className="flex items-center gap-x-3">
                      <img
                        src={code.image}
                        alt=""
                        className="w-[66px] h-[55px] rounded object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold" title={code?.title}>
                          {code?.title.slice(0, 15) + "..."}
                        </h3>
                        <time className="text-sm text-gray-500">
                          {new Date(
                            code?.createdAt?.seconds * 1000
                          ).toLocaleDateString("vi-VI")}
                        </time>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-gray-500" title={code.urlcode}>
                      {code?.urlcode.slice(0, 18) + "...."}
                    </span>
                  </td>
                  <td>
                    <span className="text-gray-500">
                      {code?.user?.fullname}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <ActionView
                        onClick={() => {
                          navigate(`/blog/${code.slug}`);
                        }}
                      ></ActionView>
                      <ActionEdit
                        onClick={() => {
                          navigate(`/manage/update-code/admin?id=${code?.id}`);
                        }}
                      ></ActionEdit>
                      <ActionDelete
                        onClick={() => {
                          handleDelete(code.id);
                        }}
                      ></ActionDelete>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
    </StyledDashBoardPosts>
  );
};

export default DashBoardCode;
