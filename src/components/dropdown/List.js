import React, { Fragment } from "react";
import { useDropdown } from "../../context/dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <Fragment>
      {show && (
        <div className="flex flex-col border border-[#4E4D52] w-full shadow-slate-700 shadow-lg transition-all absolute bg-[#1F2833]">
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default List;
