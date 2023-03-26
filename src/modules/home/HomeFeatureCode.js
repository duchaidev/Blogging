import React from "react";
import styled from "styled-components";
import FeatureCodeList from "./postList/FeatureCodeList";
import TitleFeature from "./TitleFeature";

const HomeFeatureCode = () => {
  const StyleFCode = styled.div`
    margin-top: 50px;
  `;
  return (
    <StyleFCode>
      <TitleFeature to="/code">Source Code nổi bật</TitleFeature>
      <FeatureCodeList></FeatureCodeList>
    </StyleFCode>
  );
};

export default HomeFeatureCode;
