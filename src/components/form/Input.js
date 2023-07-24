import React from "react";
import { useController } from "react-hook-form";
import styled, { css } from "styled-components";

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
  color-scheme: white;
  :focus {
    border: 1px solid ${(props) => props.theme.bgButton};
    background-color: #fff;
  }
  ::placeholder {
    color: black;
    opacity: 0.6;
  }

  ${(props) =>
    props.kind === "second" &&
    css`
      color: black;
      background-color: ${(props) => props.theme.second};
      :focus {
        background-color: ${(props) => props.theme.secondHover};
        border: 1px solid ${(props) => props.theme.bgButton};
        color: black;
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
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Input = ({
  type = "text",
  name = "",
  children,
  value,
  control,
  className,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <DivStyled>
      <InputStyled
        type={type}
        name={name}
        id={name}
        className={className}
        placeholder={`Please enter your ${name}`}
        {...props}
        {...field}
      />
      {children}
    </DivStyled>
  );
};

export default Input;
