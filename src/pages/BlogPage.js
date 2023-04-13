import React from "react";
import styled from "styled-components";
import TitleHeader from "../components/title/TitleHeader";
import Other from "../modules/blog/Other";
import PostList from "../modules/blog/PostList";
const StyleBlog = styled.div`
padding-bottom: 30px;
@media (min-width: 1024px)  {
  .content {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 7fr 2fr;
    gap: 10px;
  }
}
    @media (min-width: 0px) and (max-width: 1023px) {
      .content{
        display: flex;
        gap: 10px;
        width: 100vw;
        padding-right: 20px;
        flex-direction: column-reverse;
      }
    }

`;
const BlogPage = () => {
  document.title = "Blog";
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
