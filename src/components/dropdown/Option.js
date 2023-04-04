import React from "react";
import { NavLink } from "react-router-dom";
import { useDropdown } from "../../context/dropdown-context";

const Option = ({ onClick, children, threedot, to, blank = " _blank " }) => {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div>
      {threedot ? (
        <NavLink
          to={to}
          target={blank}
          className="flex items-center w-auto gap-2 px-5 py-3 text-black transition-all dark:text-white whitespace-nowrap"
          onClick={handleClick}
        >
          {children}
        </NavLink>
      ) : (
        <div
          className="px-5 py-3 border-b-[1px] border-[#4E4D52] transition-all dark:text-white text-black"
          onClick={handleClick}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Option;
