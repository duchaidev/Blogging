import React from "react";

const BgDashBoard = ({ classname, children }) => {
  return (
    <div
      className={`min-h-screen px-16 py-8 mx-10 mt-5 border border-b-transparent ${classname}`}
    >
      {children}
      <div className="mt-14"></div>
    </div>
  );
};

export default BgDashBoard;
