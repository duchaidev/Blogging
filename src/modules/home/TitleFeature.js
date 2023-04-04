import React from "react";
import { NavLink } from "react-router-dom";

const TitleFeature = ({ to, children }) => {
  return (
    <div>
      <div className="flex justify-between">
        <NavLink to={to}>
          <h2 className="text-2xl font-bold text-black dark:text-white">
            {children}
          </h2>
        </NavLink>
        <NavLink to={to}>
          <span className="dark:text-[#66FCF1] text-black">Xem tất cả</span>
        </NavLink>
      </div>
    </div>
  );
};

export default TitleFeature;
