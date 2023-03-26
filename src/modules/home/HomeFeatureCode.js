import React from "react";
import styled from "styled-components";
import CodeFeatureList from "./postList/CodeFeatureList";
import Title from "./Title";

const HomeFeatureCode = () => {
  const StyleFCode = styled.div`
    margin-top: 50px;
  `;
  return (
    <StyleFCode>
      <Title to="/code">Source Code nổi bật</Title>
      <CodeFeatureList></CodeFeatureList>
    </StyleFCode>
  );
};

export default HomeFeatureCode;
