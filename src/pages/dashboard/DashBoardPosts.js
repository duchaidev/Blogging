import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../components/form/Button";
import Input from "../../components/form/Input";
import ActionDelete from "../../components/icon/action/ActionDelete";
import ActionEdit from "../../components/icon/action/ActionEdit";
import ActionView from "../../components/icon/action/ActionView";
import Table from "../../components/table/Table";
import { db } from "../../firebase-app/firebase-auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const StyledDashBoardPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const DashBoardPosts = () => {
  const navigate = useNavigate();
  const { control } = useForm({
    mode: "onChange",
    defaultValues: "",
  });
  const [postsList, setPostList] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const colRef = collection(db, "posts");
      const result = [];
      const docSnap = await getDocs(colRef);
      docSnap.forEach((post) => {
        result.push({
          id: post.id,
          ...post.data(),
        });
      });
      setPostList(result);
    }
    fetchPosts();
  }, []);

  const handleDelete = (postId) => {
    const singleDoc = doc(db, "posts", postId);
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
  return (
    <StyledDashBoardPosts>
      <div className="flex justify-between">
        <h2 className="text-[#02E7F5] text-[26px] font-bold">
          Manage Your Posts
        </h2>
        <div className="w-[300px] mt-[-20px] flex flex-col items-end gap-6">
          <Button to="/add-new-post/admin" type="button">
            Add New Post
          </Button>
          <Input control={control} kind="second" name="name"></Input>
        </div>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Post</th>
              <th>Category</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          {postsList.length > 0 &&
            postsList.map((post) => (
              <tbody key={post.id}>
                <tr>
                  <td></td>
                  <td>{post.id.slice(0, 8) + "...."}</td>
                  <td>
                    <div className="flex items-center gap-x-3">
                      <img
                        src={post.image}
                        alt=""
                        className="w-[66px] h-[55px] rounded object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">
                          {post?.user?.fullname}
                        </h3>
                        <time className="text-sm text-gray-500">02/11</time>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-gray-500">
                      {post?.category?.category}
                    </span>
                  </td>
                  <td>
                    <span className="text-gray-500">
                      {" "}
                      {post?.user?.fullname}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <ActionView
                        onClick={() => {
                          navigate(`/blog/${post.slug}`);
                        }}
                      ></ActionView>
                      <ActionEdit
                        onClick={() => {
                          navigate(`/manage/update-post/admin?id=${post?.id}`);
                        }}
                      ></ActionEdit>
                      <ActionDelete
                        onClick={() => {
                          handleDelete(post.id);
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

export default DashBoardPosts;
