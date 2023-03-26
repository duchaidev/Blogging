import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDropdown } from "../../../context/dropdown-context";

const StyleOption = styled.div`
  p {
    cursor: pointer;
    color: white;
    opacity: 0.6;
  }
`;
const OptionHeader = ({ onClick, children, to, blank = "", className }) => {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <StyleOption
      className={`border border-x-transparent border-t-transparent border-b-gray-600 border-opacity-50 ${className}`}
    >
      <NavLink
        to={to}
        target={blank}
        className={`flex items-center w-auto gap-2 py-3 text-white transition-all whitespace-nowrap `}
        onClick={handleClick}
      >
        {children}
      </NavLink>
    </StyleOption>
  );
};

export default OptionHeader;
