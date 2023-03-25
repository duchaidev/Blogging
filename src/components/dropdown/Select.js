import React from "react";
import { useDropdown } from "../../context/dropdown-context";
import ThreeDot from "../icon/ThreeDot";

const Select = ({ placehoder = " ", children, threedot }) => {
  const { show, toggle } = useDropdown();
  return (
    <div className="mt-2">
      {threedot === true ? (
        <div onClick={toggle} className="p-5 transition-all">
          <ThreeDot></ThreeDot>
        </div>
      ) : (
        <div
          className="w-full h-[50px] bg-[#788DA9] rounded-t-lg flex justify-between rounded-xl px-5 items-center border border-[#788DA9]"
          onClick={toggle}
        >
          <span className="text-lg font-semibold text-white">{placehoder}</span>
          {show ? (
            <svg
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12.3333L0 2.33333L2.33333 0L10 7.66667L17.6667 0L20 2.33333L10 12.3333Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.33333 12.6667L0 10.3333L10 0.333344L20 10.3333L17.6667 12.6667L10 5.00001L2.33333 12.6667Z"
                fill="black"
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
