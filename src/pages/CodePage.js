import React from "react";
import styled from "styled-components";
import TitleHeader from "../components/title/TitleHeader";
import CodeList from "../modules/code/CodeList";
const StyleBlog = styled.div`
  .content {
    margin-top: 30px;
    display: grid;
    gap: 40px;
  }
`;
const BlogPage = () => {
  return (
    <StyleBlog className="min-h-screen">
      <TitleHeader content="Tổng hợp các suorce code lập trình web.">
        Bài viết nổi bật
      </TitleHeader>
      <div className="content">
        <CodeList></CodeList>
      </div>
    </StyleBlog>
  );
};

export default BlogPage;
