import React from "react";

const TitleAdd = ({ feature, children }) => {
  return (
    <div className="flex justify-between">
      <h2 className="font-bold text-2xl text-[#66FCF1]">{children}</h2>
      {feature ? (
        <div className="translate-y-[-10px]">
          <span className="text-gray-300 ">Fearture Post</span>
          <div className="w-[90px] h-[50px] bg-slate-500 rounded-3xl relative">
            <div className="w-[40px] h-[40px] mt-[5px] ml-[5px] bg-[#66FCF1] rounded-3xl absolute"></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TitleAdd;
