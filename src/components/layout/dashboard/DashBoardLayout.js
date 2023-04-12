import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DashBoardNav from "./DashBoardNav";
import Header from "../layoutmain/Header";

const DashBoardLayout = () => {
  const Bg = styled.div`
    background: ${(props) => props.theme.backround};
  `;
  const StyleLayout = styled.div`
    padding-top: 120px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 40px;
  `;
  return (
    <Bg className="min-h-screen dark:!bg-[#1F2833] ">
      <Header></Header>
      <StyleLayout className="px-[30px]">
        <DashBoardNav></DashBoardNav>
        <Outlet></Outlet>
      </StyleLayout>
    </Bg>
  );
};

export default DashBoardLayout;
