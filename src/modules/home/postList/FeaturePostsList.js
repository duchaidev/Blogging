import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase-app/firebase-auth";
import PostsItem from "./PostsItem";

//
const FeaturePostsList = () => {
  const StyleList = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  `;
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const colRef = collection(db, "posts");
      const docsnap = await getDocs(colRef);
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
    <StyleList>
      {postList.map((item) => (
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
