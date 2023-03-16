import React from "react";
import styled from "styled-components";

const TitleHeader = ({ children, content = "" }) => {
  const StyleTitleH = styled.div``;

  return content ? (
    <StyleTitleH>
      <div>
        <h2 className="text-[30px] text-white font-semibold mb-1">
          {children}
        </h2>
        <h2 className="text-base font-normal text-gray-400">{content}</h2>
      </div>
    </StyleTitleH>
  ) : (
    <StyleTitleH>
      <div>
        <h2 className="text-[30px] text-white font-semibold mb-1">
          {children}
        </h2>
        <div className="w-full border border-gray-500"></div>
      </div>
    </StyleTitleH>
  );
};

export default TitleHeader;
