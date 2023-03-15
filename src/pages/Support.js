import React from "react";
import styled from "styled-components";
import TitleHeader from "../components/title/TitleHeader";
import SupportForm from "../modules/support/SupportForm";

const Support = () => {
  const StyleSupport = styled.div``;
  return (
    <StyleSupport>
      <TitleHeader></TitleHeader>
      <SupportForm></SupportForm>
    </StyleSupport>
  );
};

export default Support;
