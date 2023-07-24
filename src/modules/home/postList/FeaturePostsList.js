import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase-app/firebase-auth";
import PostsItem from "./PostsItem";
const FeaturePostsList = () => {
  const StyleList = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* column-gap: 20px;
    row-gap: 40px; */
  `;

  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const colRef = collection(db, "posts");
      const queries = query(colRef, where("hot", "==", true));
      const docsnap = await getDocs(queries);
      const result = [];
      docsnap.forEach((post) => {
        result.push({
          id: post.id,
          ...post.data(),
        });
      });
      setPostList(result);
    };
    fetchPosts();
  }, []);
  return (
    <StyleList className="pb-3 overflow-x-auto gap-x-5 gap-y-10 xs:gap-x-0 xs:grid-rows-1 xs:grid-flow-col">
      {postList?.length === 0 && (<div className="col-span-4 h-[290px] flex items-center justify-center"><div className="w-32 h-32 rounded-full custom-loader"></div></div>)}
      {postList?.map((item) => (
        <PostsItem
          key={item.id}
          image={item.image}
          urlPost={`/blog/${item.slug}`}
          title={item.title}
          avatarAuthor={item?.user?.avatar}
          fullname={item?.user?.fullname}
          // urlAuthor={item?.user?.urlAuthor}
          date={new Date(item?.createdAt?.seconds * 1000).toLocaleDateString(
            "vi-VI"
          )}
        ></PostsItem>
      ))}
    </StyleList>
  );
};

export default FeaturePostsList;

