import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout = () => {
  const StyleLayout = styled.div`
    background-color: ${(props) => props.theme.backround};
    z-index: 1000;
    padding-right: 100px;
    min-height: 100vh;
    .main {
      display: grid;
      grid-template-columns: 200px minmax(0, 1fr);
    }
    .children {
      margin-top: 90px;
      /* padding-bottom: 30px; */
    }
  `;
  return (
    <StyleLayout>
      <Header></Header>
      <div className="main">
        <NavBar></NavBar>
        <div className="children">
          <Outlet></Outlet>
        </div>
      </div>
    </StyleLayout>
  );
};

export default Layout;
