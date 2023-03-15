import React from "react";
import styled from "styled-components";
import FeaturePostsList from "./postList/FeaturePostsList";
import Title from "./Title";

const HomeFeaturePosts = () => {
  const StyleHomeFP = styled.div`
    margin-top: 80px;
  `;
  return (
    <StyleHomeFP>
      <Title to="/blog">Bài viết nổi bật</Title>
      <FeaturePostsList></FeaturePostsList>
    </StyleHomeFP>
  );
};

export default HomeFeaturePosts;
