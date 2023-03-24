import React from "react";
import { useDropdown } from "../../context/dropdown-context";

const Option = ({ onClick, children }) => {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="px-5 py-3 border-b-[1px] border-[#4E4D52] transition-all text-white"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Option;
