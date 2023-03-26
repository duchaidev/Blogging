import React from "react";
import styled from "styled-components";
import TitleHeader from "../components/title/TitleHeader";
import ViewSupportForm from "../modules/support/ViewSupportForm";

const ViewMess = () => {
  const StyleSupport = styled.div``;
  return (
    <StyleSupport>
      <TitleHeader>Liên hệ</TitleHeader>
      <ViewSupportForm></ViewSupportForm>
    </StyleSupport>
  );
};

export default ViewMess;
