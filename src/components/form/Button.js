import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Loading from "../loading/Loading";

const Button = ({
  type = "button",
  onClick = () => {},
  isloading,
  children,
  ...props
}) => {
  const StyleButton = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      height: 50px;
      width: 150px;
      white-space: nowrap;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #66fcf1;
      font-weight: 600;
    }
  `;
  return (
    <StyleButton>
      <button type={type} onClick={onClick} {...props}>
        {!isloading ? children : <Loading></Loading>}
      </button>
    </StyleButton>
  );
};

Button.prototype = {
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
};
export default Button;
