import React from "react";
import styled from "styled-components";
import CodeList from "./postList/CodeList";
import Title from "./Title";

const HomeFeatureCode = () => {
  const StyleFCode = styled.div`
    margin-top: 50px;
  `;
  return (
    <StyleFCode>
      <Title to="code/detail-code">Source Code nổi bật</Title>
      <CodeList></CodeList>
    </StyleFCode>
  );
};

export default HomeFeatureCode;
