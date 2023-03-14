import React from "react";

const Label = ({ name, children, ...props }) => {
  return (
    <div>
      <label
        htmlFor={name}
        {...props}
        className="text-black text-[14px] font-bold"
      >
        {children}
      </label>
    </div>
  );
};

export default Label;
