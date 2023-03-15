import React from "react";
import styled from "styled-components";

const TitleHeader = () => {
  const StyleTitleH = styled.div``;

  return (
    <StyleTitleH>
      <div>
        <h2 className="text-[30px] text-white font-semibold mb-1">Liên hệ</h2>
        <div className="w-full border border-gray-500"></div>
      </div>
    </StyleTitleH>
  );
};

export default TitleHeader;
