import React from "react";
import styled from "styled-components";
import FeaturePostsItem from "./FeaturePostsItem";

const FeaturePostsList = () => {
  const StyleList = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  `;
  return (
    <StyleList>
      <FeaturePostsItem></FeaturePostsItem>
      <FeaturePostsItem></FeaturePostsItem>
      <FeaturePostsItem></FeaturePostsItem>
      <FeaturePostsItem></FeaturePostsItem>
      <FeaturePostsItem></FeaturePostsItem>
      <FeaturePostsItem></FeaturePostsItem>
      <FeaturePostsItem></FeaturePostsItem>
      <FeaturePostsItem></FeaturePostsItem>
    </StyleList>
  );
};

export default FeaturePostsList;
