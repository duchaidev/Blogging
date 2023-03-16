import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/form/Button";

const MapItem = ({ image, to, title, content }) => {
  return (
    <div className=" bg-[#1C2735] p-6 rounded border border-[#495678] flex flex-col gap-3 relative max-w-[35%]">
      <div className="flex">
        <div className="max-w-[70%]">
          <NavLink to={to} className="text-xl font-bold text-gray-200">
            {title}
          </NavLink>
          <h2 className="mt-3 text-sm font-normal text-gray-300">{content}</h2>
        </div>
        <div className="ml-4 w-[120px] h-[120px] min-h-[120px] min-w-[120px] p-1 border-[#66FCF1] border-[3px] rounded-full ">
          <img
            src={image}
            alt=""
            className="w-[100%] h-full overflow-hidden rounded-full object-cover "
          />
        </div>
      </div>
      <div className="mb-8"></div>
      <div>
        <Button className="absolute bottom-8 left-5" to={to}>
          Xem chi tiết
        </Button>
      </div>
    </div>
  );
};

export default MapItem;
