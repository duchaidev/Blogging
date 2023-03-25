import React from "react";
import { NavLink } from "react-router-dom";
import { useDropdown } from "../../../context/dropdown-context";

const OptionHeader = ({
  onClick,
  children,
  threedot,
  to,
  blank = " _blank ",
}) => {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div className="">
      {threedot ? (
        <NavLink
          to={to}
          target={blank}
          className="flex items-center w-auto gap-2 px-5 py-3 text-white transition-all whitespace-nowrap"
          onClick={handleClick}
        >
          {children}
        </NavLink>
      ) : (
        <div
          className="px-5 py-3 border-b-[1px] border-[#4E4D52] transition-all text-white"
          onClick={handleClick}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default OptionHeader;
