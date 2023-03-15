import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout = () => {
  const StyleLayout = styled.div`
    background-color: ${(props) => props.theme.backround};
    position: relative;
    z-index: 1000;
    .main {
      display: grid;
      grid-template-columns: 200px minmax(0, 1fr);
    }
    .children {
      margin-top: 15px;
    }
  `;
  return (
    <StyleLayout>
      <Header></Header>
      <div className="main">
        <NavBar></NavBar>
        <Outlet className="z-0"></Outlet>
      </div>
    </StyleLayout>
  );
};

export default Layout;
