import React, { useEffect } from "react";
import { useDropdown } from "../../../context/dropdown-context";

const ListSearch = ({ showh, focused, className, children }) => {
  const { show, setShow } = useDropdown();

  useEffect(() => {
    if (showh !== "" && focused === true) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [focused, setShow, showh]);
  return (
    <div>
      {show && (
        <div
          className={`${className} xs:mt-14 mt-2 rounded-lg bg-[#4E4D52] w-full shadow-lg shadow-gray-600 border border-gray-500 pb-2 z-10`}
        >
          <div className="flex gap-1 px-5 pt-2 text-gray-400">
            <span className="text-sm">Kết quả cho</span>
            <span className="text-sm ">{`"${showh}"`}</span>
          </div>
          {children}
        </div>
      )}
    </div>
  );
};

export default ListSearch;
