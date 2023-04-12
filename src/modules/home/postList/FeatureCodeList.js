import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PostsItem from "./PostsItem";
import { db } from "../../../firebase-app/firebase-auth";
import { collection, getDocs, query, where } from "firebase/firestore";
const FeatureCodeList = () => {
  const StyleCodeList = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  `;

  const [codeList, setCodeList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const colRef = collection(db, "code");
      const queries = query(colRef, where("hot", "==", true));
      const docsnap = await getDocs(queries);
      const result = [];
      docsnap.forEach((code) => {
        result.push({
          id: code.id,
          ...code.data(),
        });
      });
      setCodeList(result);
    };
    fetchPosts();
  }, []);
  return (
    <StyleCodeList className="xs:overflow-x-auto xs:grid-rows-1 xs:grid-flow-col xs:pb-3">
      {codeList.map((item) => (
        <PostsItem
          key={item.id}
          target="_blank"
          image={item.image}
          urlPost={item.urlcode}
          title={item.title}
          avatarAuthor={item?.user?.avatar}
          fullname={item?.user?.fullname}
          date={new Date(item?.createdAt?.seconds * 1000).toLocaleDateString(
            "vi-VI"
          )}
        ></PostsItem>
      ))}
    </StyleCodeList>
  );
};

export default FeatureCodeList;
