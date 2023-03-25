import React from "react";
import { useDropdown } from "../../../context/dropdown-context";
import ThreeDot from "../../icon/ThreeDot";

const SelectHeader = ({ placehoder = " ", children, classname }) => {
  const { toggle } = useDropdown();
  return (
    <div className="">
      <div onClick={toggle} className={`p-5 transition-all ${classname}`}>
        <ThreeDot></ThreeDot>
      </div>
    </div>
  );
};

export default SelectHeader;
