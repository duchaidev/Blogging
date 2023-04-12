import React from "react";
import styled from "styled-components";
import HomeFeatureCode from "../modules/home/HomeFeatureCode";
import HomeFeaturePosts from "../modules/home/HomeFeaturePosts";
import HomeSlide from "../modules/home/HomeSlide";

const HomePage = () => {
  const StyleHomePage = styled.div`
    margin-top: 30px;
    padding-bottom: 50px;
    min-height: 100vh;
  `;
  document.title = "Home";
  return (
    <StyleHomePage
      className="!overflow-x-hidden"
    >
      <HomeSlide></HomeSlide>
      <HomeFeaturePosts></HomeFeaturePosts>
      <HomeFeatureCode></HomeFeatureCode>
    </StyleHomePage >
  );
};

export default HomePage;

