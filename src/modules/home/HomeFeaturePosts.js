import React from "react";
import styled from "styled-components";
import FeaturePostsList from "./postList/FeaturePostsList";
import TitleFeature from "./TitleFeature";

const HomeFeaturePosts = () => {
  const StyleHomeFP = styled.div`
    margin-top: 80px;
  `;
  return (
    <StyleHomeFP className="">
      <TitleFeature to="/blog">Bài viết nổi bật</TitleFeature>
      <FeaturePostsList></FeaturePostsList>
    </StyleHomeFP>
  );
};

export default HomeFeaturePosts;
