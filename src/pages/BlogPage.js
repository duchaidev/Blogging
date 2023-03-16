import React from "react";
import styled from "styled-components";
import TitleHeader from "../components/title/TitleHeader";
import Other from "../modules/blog/Other";
import PostList from "../modules/blog/PostList";

const BlogPage = () => {
  const StyleBlog = styled.div`
    .content {
      margin-top: 30px;
      display: grid;
      grid-template-columns: 7fr 2fr;
      gap: 40px;
    }
  `;
  return (
    <StyleBlog className="min-h-screen">
      <TitleHeader
        content="Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online
          và các kỹ thuật lập trình web."
      >
        Bài viết nổi bật
      </TitleHeader>
      <div className="content">
        <PostList></PostList>
        <Other></Other>
      </div>
    </StyleBlog>
  );
};

export default BlogPage;
