import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Loading from "../loading/Loading";

const Button = ({
  type = "button",
  onClick = () => {},
  isLoading,
  classname,
  children,
  to,
  ...props
}) => {
  // const {}
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

  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to}>
        <StyleButton>
          <button type={type} {...props} className={classname}>
            {children}
          </button>
        </StyleButton>
      </NavLink>
    );
  }

  return (
    <StyleButton>
      <button type={type} onClick={onClick} {...props} className={classname}>
        {!isLoading ? children : <Loading></Loading>}
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
