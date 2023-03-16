import React from "react";
import { NavLink } from "react-router-dom";
const Other = () => {
  return (
    <div className="mt-5">
      <h2 className="mb-4 font-medium text-gray-500 whitespace-nowrap">
        CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT
      </h2>
      <div>
        <NavLink className="px-2 py-1  rounded-xl bg-[#605F63] whitespace-nowrap inline-block m-1">
          Front-end/Mobile apps
        </NavLink>
        <NavLink className="px-2 py-1  rounded-xl bg-[#605F63] whitespace-nowrap inline-block m-1">
          Back-end
        </NavLink>
        <NavLink className="px-2 py-1  rounded-xl bg-[#605F63] whitespace-nowrap inline-block m-1">
          UX / UI / Design
        </NavLink>
        <NavLink className="px-2 py-1  rounded-xl bg-[#605F63] whitespace-nowrap inline-block m-1">
          Others
        </NavLink>
      </div>
    </div>
  );
};

export default Other;
