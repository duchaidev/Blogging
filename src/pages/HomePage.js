import React from "react";
import styled from "styled-components";
import HomeFeatureCode from "../modules/home/HomeFeatureCode";
import HomeFeatureDoc from "../modules/home/HomeFeatureDoc";
import HomeFeaturePosts from "../modules/home/HomeFeaturePosts";
import HomeSlide from "../modules/home/HomeSlide";

const HomePage = () => {
  const StyleHomePage = styled.div`
    margin-right: 100px;
  `;
  return (
    <StyleHomePage>
      <HomeSlide></HomeSlide>
      <HomeFeaturePosts></HomeFeaturePosts>
      <HomeFeatureDoc></HomeFeatureDoc>
      <HomeFeatureCode></HomeFeatureCode>
    </StyleHomePage>
  );
};

export default HomePage;
