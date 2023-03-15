import React from "react";
import styled from "styled-components";
import PostsItem from "./PostsItem";
const data = [
  {
    image: "https://duykhoa.com/images/code2.png",
    urlPost: "Check",
    title: "Code Web DVMXH",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678815927938-0fb01822962c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
  {
    image: "https://i.imgur.com/TpJKg6q.png",
    urlPost: "Check",
    title: "Code ShopClone",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678729465114-a9a2b955d4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
  {
    image: "https://duykhoa.com/images/code3.png",
    urlPost: "Check",
    title: "Code Shop Acc Game",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678823253457-c0f20c388f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
  {
    image: "https://i.imgur.com/TpJKg6q.png",
    urlPost: "Check",
    title: "Share Code Hosting ",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678827502516-95bb7caedf66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
  {
    image: "https://i.imgur.com/lgk63om.png",
    urlPost: "Check",
    title: "Code Gạch Thẻ Cào ",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678808314540-bc7155965d74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
  {
    image: "https://duykhoa.com/images/code9.png",
    urlPost: "Check",
    title: "Code Trái Tim Thủ Khoa Lý ",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678808314540-bc7155965d74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
];
const CodeList = () => {
  const StyleCodeList = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  `;
  return (
    <StyleCodeList>
      {data.map((item) => (
        <PostsItem
          key={item.image}
          image={item.image}
          urlPost={item.urlPost}
          title={item.title}
          avatarAuthor={item.avatarAuthor}
          fullname={item.fullname}
          urlAuthor={item.urlAuthor}
          date={item.date}
        ></PostsItem>
      ))}
    </StyleCodeList>
  );
};

export default CodeList;
