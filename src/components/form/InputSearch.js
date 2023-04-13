import React from "react";
import styled from "styled-components";

const StyleInput = styled.input`
  border: 1px solid transparent;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 400;
  background-color: ${(props) => props.theme.bginput};
  outline: none;
  border-radius: 10px;
  transition: 0.3s all;
  width: 100%;
  margin-top: 5px;
  color-scheme: white;
  ::placeholder {
    color: black;
    opacity: 0.4;
  }
  color: black;
  background-color: ${(props) => props.theme.second};
  :focus {
    background-color: ${(props) => props.theme.secondHover};
    border: 1px solid ${(props) => props.theme.bgButton};
    color: black;
  }
`;
const InputSearch = ({
  placehoder,
  type = "text",
  className = "",
  ...props
}) => {
  return (
    <StyleInput
      className={className}
      placeholder={placehoder}
      type={type}
      {...props}
    ></StyleInput>
  );
};

export default InputSearch;
