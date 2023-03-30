import React, { Fragment } from "react";
import { useDropdown } from "../../context/dropdown-context";

const List = ({ children, threedot }) => {
  const { show } = useDropdown();
  return (
    <Fragment>
      {show && !threedot && (
        <div className="flex flex-col border border-[#4E4D52] w-full shadow-slate-700 shadow-lg transition-all absolute bg-[#1F2833]">
          {children}
        </div>
      )}
      {show && threedot && (
        <div className="flex flex-col border border-[#4E4D52] shadow-slate-700 shadow-lg rounded-xl transition-all absolute bg-[#1F2833] overflow-hidden w-auto right-0">
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default List;
