import React from "react";
import { NavLink } from "react-router-dom";

const Title = ({ to, children }) => {
  return (
    <div>
      <div className="flex justify-between">
        <NavLink to={to}>
          <h2 className="text-2xl font-bold text-white">{children}</h2>
        </NavLink>
        <NavLink to={to}>
          <span className="text-[#66FCF1]">Xem tất cả</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Title;
