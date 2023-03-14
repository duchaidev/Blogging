import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputStyled = styled.input`
  border: 1px solid transparent;
  padding: 16px 16px;
  font-size: 18px;
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

const Input = ({ type = "text", name = "", children, control, ...props }) => {
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
        placeholder={`Please enter your ${name}`}
        {...props}
        {...field}
      />
      {children}
    </DivStyled>
  );
};
Input.prototype = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
  children: PropTypes.any,
};
export default Input;
