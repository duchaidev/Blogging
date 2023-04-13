import React from "react";
import { DropdownProvider } from "../../../context/dropdown-context";

const DropdownHeader = ({ children, ...props }) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full transition-all cursor-pointer xs:translate-x-7 xs:-translate-y-1">
        {children}
      </div>
    </DropdownProvider>
  );
};

export default DropdownHeader;
