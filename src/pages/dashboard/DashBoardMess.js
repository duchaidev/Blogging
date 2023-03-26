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
import ActionView from "../../components/icon/action/ActionView";
import Table from "../../components/table/Table";
import { db } from "../../firebase-app/firebase-auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import InputSearch from "../../components/form/InputSearch";
import { debounce } from "lodash";
const StyledDashBoardMess = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const DashBoardMess = () => {
  const [searchMessage, setSearchMessage] = useState("");

  const navigate = useNavigate();

  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    async function fetchMessage() {
      const colRef = collection(db, "message");
      const newRef = searchMessage
        ? query(
            colRef,
            where("title", ">=", searchMessage),
            where("title", "<=", searchMessage + "utf8")
          )
        : colRef;
      onSnapshot(newRef, (snapshot) => {
        const result = [];
        snapshot.forEach((mess) => {
          result.push({
            id: mess.id,
            ...mess.data(),
          });
        });
        setMessageList(result);
        console.log(result);
      });
    }
    fetchMessage();
  }, [searchMessage]);

  const handleDelete = (messId) => {
    const singleDoc = doc(db, "message", messId);
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
    setSearchMessage(values.target.value);
  }, 300);
  return (
    <StyledDashBoardMess>
      <div className="flex justify-between">
        <h2 className="text-[#02E7F5] text-[26px] font-bold">
          Manage Your Posts
        </h2>
        <div className="w-[300px] mt-[-20px] flex flex-col items-end gap-6">
          <Button to="/add-new-post/admin" type="button">
            Add New Post
          </Button>
          <InputSearch
            className=""
            placeholder="Search Posts ...."
            type="text"
            onChange={handleChange}
          ></InputSearch>
        </div>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Title</th>
              <th>Content</th>
              <th>Zalo</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          {messageList.length > 0 &&
            messageList.map((mess) => (
              <tbody key={mess.id}>
                <tr>
                  <td></td>
                  <td title={mess?.id}>{mess?.id?.slice(0, 8) + "...."}</td>

                  <td>
                    <div className="flex items-center gap-x-3">
                      <div className="flex-1">
                        <h3 className="font-semibold" title={mess?.title}>
                          {mess?.title.slice(0, 20) + "..."}
                        </h3>
                        <time className="text-sm text-gray-500">
                          {new Date(
                            mess?.createdAt?.seconds * 1000
                          ).toLocaleDateString("vi-VI")}
                        </time>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className="text-gray-500">
                      {mess?.messcontent?.slice(0, 30) + "..."}
                    </span>
                  </td>
                  <td>
                    <span className="text-gray-500">{mess?.zalo}</span>
                  </td>
                  <td>
                    <span className="text-gray-500">{mess?.user?.name}</span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <ActionView
                        onClick={() => {
                          navigate(`/mess?id=${mess?.id}`);
                        }}
                      ></ActionView>

                      <ActionDelete
                        onClick={() => {
                          handleDelete(mess.id);
                        }}
                      ></ActionDelete>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
    </StyledDashBoardMess>
  );
};

export default DashBoardMess;
