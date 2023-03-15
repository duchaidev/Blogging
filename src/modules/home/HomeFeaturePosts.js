import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FeaturePostsList from "./postList/FeaturePostsList";

const HomeFeaturePosts = () => {
  const StyleHomeFP = styled.div`
    margin-top: 80px;
  `;
  return (
    <StyleHomeFP>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-white">Bài viết nổi bật</h2>
        <NavLink to={""}>
          {" "}
          <span className="text-[#66FCF1]">Xem tất cả</span>
        </NavLink>
      </div>
      <FeaturePostsList></FeaturePostsList>
    </StyleHomeFP>
  );
};

export default HomeFeaturePosts;
