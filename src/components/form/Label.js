import React from "react";

const Label = ({ name, children, classname, ...props }) => {
  return (
    <div>
      <label
        htmlFor={name}
        {...props}
        className={`text-black text-[14px] font-bold ${classname}`}
      >
        {children}
      </label>
    </div>
  );
};

export default Label;
