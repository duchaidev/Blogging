import React from "react";
import styled from "styled-components";
import FeatureDocList from "./postList/FeatureDocList";
import Title from "./Title";

const HomeFeatureDoc = () => {
  const StyleHomeFD = styled.div`
    margin-top: 50px;
  `;
  return (
    <StyleHomeFD>
      <Title to="/lo-trinh">Lộ trình(Doc)</Title>
      <FeatureDocList></FeatureDocList>
    </StyleHomeFD>
  );
};

export default HomeFeatureDoc;
