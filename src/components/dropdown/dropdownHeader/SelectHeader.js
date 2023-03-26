import React from "react";
import { useDropdown } from "../../../context/dropdown-context";

const SelectHeader = ({ avatar, children, classname }) => {
  const { toggle } = useDropdown();
  return (
    <div className="w-full h-full">
      <div
        onClick={toggle}
        className={`transition-all ${classname} w-full h-full `}
      >
        <img
          src={`${avatar || "/avtdf.png"}`}
          alt=""
          className="object-cover w-full h-12 rounded-full border-[2px] border-[#66FCF1] mb-2"
        />
      </div>
    </div>
  );
};

export default SelectHeader;
