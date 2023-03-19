import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DashBoardNav from "../../modules/dashboard/DashBoardNav";
import Header from "./Header";

const DashBoardLayout = () => {
  const StyleLayout = styled.div`
    padding-top: 120px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 40px;
  `;
  return (
    <div className="min-h-screen bg-[#1F2833]">
      <Header></Header>
      <StyleLayout className="px-[30px]">
        <DashBoardNav></DashBoardNav>
        <Outlet></Outlet>
      </StyleLayout>
    </div>
  );
};

export default DashBoardLayout;
