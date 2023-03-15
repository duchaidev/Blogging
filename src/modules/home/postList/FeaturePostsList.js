import React from "react";
import styled from "styled-components";
import PostsItem from "./PostsItem";

const data = [
  {
    image:
      "https://files.fullstack.edu.vn/f8-prod/blog_posts/6629/63fd6b46601a3.jpg",
    urlPost: "Check",
    title:
      "Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế ",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678815927938-0fb01822962c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
  {
    image:
      "https://images.unsplash.com/photo-1678729465114-a9a2b955d4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    urlPost: "Check",
    title:
      "Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế ",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678729465114-a9a2b955d4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
  {
    image:
      "https://images.unsplash.com/photo-1678823253457-c0f20c388f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlPost: "Check",
    title:
      "Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế ",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678823253457-c0f20c388f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
  {
    image:
      "https://files.fullstack.edu.vn/f8-prod/blog_posts/6583/63f81c57d8c7d.jpg",
    urlPost: "Check",
    title:
      "Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế ",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678827502516-95bb7caedf66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
  {
    image:
      "https://images.unsplash.com/photo-1678808314540-bc7155965d74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlPost: "Check",
    title:
      "Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế ",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678808314540-bc7155965d74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
  {
    image:
      "https://images.unsplash.com/photo-1678808314540-bc7155965d74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlPost: "Check",
    title:
      "Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế ",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678808314540-bc7155965d74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
  {
    image:
      "https://images.unsplash.com/photo-1678808314540-bc7155965d74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlPost: "Check",
    title:
      "Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế ",
    avatarAuthor:
      "https://images.unsplash.com/photo-1678808314540-bc7155965d74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    urlAuthor: "Check",
    fullname: "Lê Đức Hải",
    date: "02/11/2022",
  },
];
const FeaturePostsList = () => {
  const StyleList = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  `;
  return (
    <StyleList>
      {data.map((item) => (
        <PostsItem
          key={item.title}
          image={item.image}
          urlPost="blog/:slug"
          title={item.title}
          avatarAuthor={item.avatarAuthor}
          fullname={item.fullname}
          urlAuthor={item.urlAuthor}
          date={item.date}
        ></PostsItem>
      ))}
    </StyleList>
  );
};

export default FeaturePostsList;
