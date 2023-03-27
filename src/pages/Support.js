import React from "react";
import styled from "styled-components";
import TitleHeader from "../components/title/TitleHeader";
import SupportForm from "../modules/support/SupportForm";

const Support = () => {
  const StyleSupport = styled.div``;
  document.title = "Support";
  return (
    <StyleSupport>
      <TitleHeader>Liên hệ</TitleHeader>
      <SupportForm></SupportForm>
    </StyleSupport>
  );
};

export default Support;
