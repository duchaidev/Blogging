import React from "react";
import { NavLink } from "react-router-dom";

const CodeItem = ({ image, title, urlcode, avatar, name, urldemo }) => {
  return (
    <div className="flex flex-col gap-3 p-3 border border-[#495678] rounded-md overflow-hidden bg-[#1C2735]">
      <div>
        <NavLink to={urlcode}>
          <img
            className="object-cover w-full aspect-video overflow-hidden border border-[#495678] rounded-sm hover:scale-105 transition-all "
            src={image}
            alt=""
          />
        </NavLink>
      </div>
      <div>
        <NavLink to={urlcode}>
          <p className="text-lg font-semibold text-gray-200">{title}</p>
        </NavLink>
      </div>
      <div className="flex gap-5">
        <NavLink to={urlcode}>
          <button className="px-4 py-2 bg-[#40c6bd] rounded-sm">
            Download
          </button>
        </NavLink>
        <NavLink to={urldemo} target="_blank">
          <button className="px-4 py-2 bg-[#40c6bd] rounded-sm">Demo</button>
        </NavLink>
      </div>
      <div className="flex items-center h-8 gap-3">
        <img
          src={avatar}
          alt=""
          className="h-full rounded-full aspect-square"
        />
        <p className="text-sm text-gray-200 font">{name}</p>
      </div>
    </div>
  );
};

export default CodeItem;
