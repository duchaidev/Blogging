import React, { useState } from "react";
import { useController } from "react-hook-form";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import EyeClose from "../icon/EyeClose";
import EyeOpen from "../icon/EyeOpen";

const InputStyled = styled.input`
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
  :focus {
    border: 1px solid ${(props) => props.theme.bgButton};
    background-color: #fff;
  }
  ::placeholder {
    color: black;
    opacity: 0.4;
  }
  ${(props) =>
    props.kind === "second" &&
    css`
      color: black;
      background-color: ${(props) => props.theme.second};
      :focus {
        background-color: ${(props) => props.theme.secondHover};
        border: 1px solid ${(props) => props.theme.bgButton};
        color: white;
      }
    `}
`;
const DivStyled = styled.div`
  position: relative;
  .input-icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-40%);
    cursor: pointer;
  }
`;

const InputPassword = ({ name = "", children, control, ...props }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <DivStyled>
      <InputStyled
        type={togglePassword ? "text" : "password"}
        name={name}
        id={name}
        placeholder={`Please enter your ${name}`}
        {...props}
        {...field}
      />
      {!togglePassword ? (
        <EyeClose onClick={() => setTogglePassword(true)}></EyeClose>
      ) : (
        <EyeOpen
          onClick={() => {
            setTogglePassword(false);
          }}
        ></EyeOpen>
      )}
    </DivStyled>
  );
};
InputPassword.prototype = {
  name: PropTypes.string,
  control: PropTypes.any.isRequired,
  children: PropTypes.any,
};
export default InputPassword;
