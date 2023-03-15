import React from "react";

const InfoItem = ({ icon, title, info }) => {
  return (
    <div className="p-12 bg-[#273F48] mt-10 rounded-lg flex flex-col items-center gap-5">
      <div>{icon}</div>
      <div className="text-2xl font-medium text-white whitespace-normal">
        {title}
      </div>
      <div className="text-xl font-medium text-[#AEAEAE] whitespace-nowrap">
        {info}
      </div>
    </div>
  );
};

export default InfoItem;
