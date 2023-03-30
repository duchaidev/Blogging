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
const OptionSearch = ({
  onClick,
  children,
  to,
  title,
  image,
  blank = "",
  className,
}) => {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <StyleOption className={` px-5 ${className}`}>
      <NavLink
        to={to}
        target={blank}
        className={`flex items-center w-auto gap-2 py-3 border-b-gray-500 text-white transition-all whitespace-nowrap border border-x-transparent border-t-transparent `}
        onClick={handleClick}
      >
        <div className="flex items-center max-w-full gap-2 overflow-hidden">
          <img
            src={image}
            className="object-cover rounded-full w-7 h-7"
            alt="img"
          />
          <p className="whitespace-normal">{String(title)}</p>
          {children}
        </div>
      </NavLink>
    </StyleOption>
  );
};

export default OptionSearch;
