import React from "react";

const TitleAdd = ({ admin, children, ...props }) => {
  const { on, onClick, ...rest } = props;
  return (
    <div className="flex justify-between">
      <h2 className="font-bold text-2xl text-[#66FCF1]">{children}</h2>
      {admin ? (
        <div className="translate-y-[-10px]">
          <span className="text-gray-300 ">Fearture Post</span>
          <div className="w-[90px] h-[50px] bg-slate-500 rounded-3xl relative">
            <label>
              <input
                type="checkbox"
                checked={on}
                onClick={onClick}
                className="hidden-input"
                onChange={() => {}}
              />
              <div
                className={`inline-block w-[100px] h-[52px] relative cursor-pointer rounded-full p-1 transition-all ${
                  on ? "bg-green-500" : "bg-gray-300"
                }`}
                {...rest}
              >
                <span
                  className={`transition-all w-11 h-11 bg-white rounded-full inline-block ${
                    on ? "translate-x-[48px]" : ""
                  }`}
                ></span>
              </div>
            </label>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TitleAdd;
