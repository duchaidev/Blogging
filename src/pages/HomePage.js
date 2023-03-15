import React from "react";
import styled from "styled-components";
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
    </StyleHomePage>
  );
};

export default HomePage;
