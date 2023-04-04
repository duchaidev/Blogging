import React, { Fragment } from "react";
import { useDropdown } from "../../../context/dropdown-context";

const ListHeader = ({ children }) => {
  const { show } = useDropdown();
  return (
    <Fragment>
      {show && (
        <div className="flex flex-col border border-[#4E4D52] shadow-slate-700 shadow-lg rounded-xl transition-all absolute dark:bg-[#1F2833] bg-[#fff] overflow-hidden w-auto right-0 z-50 px-5 py-2">
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default ListHeader;
