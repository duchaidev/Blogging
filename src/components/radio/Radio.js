import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ checked, control, children, props, name, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <label>
      <input
        onChange={() => {}}
        type="radio"
        className="hidden-input"
        checked={checked}
        {...field}
        {...rest}
      />
      <div className="flex items-center font-medium text-white cursor-pointer gap-x-3">
        <div
          className={`w-7 h-7 rounded-full ${
            checked ? "bg-green-400" : "bg-gray-200"
          }`}
        ></div>
        <span>{children}</span>
      </div>
    </label>
  );
};

export default Radio;
