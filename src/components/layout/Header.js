import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const StyleHomePage = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.backround};
    .header {
      width: 100%;
      height: 70px;
      border-bottom: 1px solid ${(props) => props.theme.placehv};
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 30px;
      .header-left {
        display: flex;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(props) => props.theme.bginput};
        img {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          margin-right: 10px;
        }
        h3 {
          font-size: 20px;
          font-weight: 600;
        }
      }
      .input {
        width: 400px;
        height: 35px;
        color: white;
        input {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background-color: ${(props) => props.theme.bgSearch};
          padding: 10px 30px;
          outline: none;
          transition: 0.3s all;
          border: 1px solid transparent;
        }
        input:focus {
          border: 1px solid ${(props) => props.theme.bgButton};
          background-color: #2e545b;
        }
      }
      .header-right {
        width: 150px;
        height: 50px;
        background-color: ${(props) => props.theme.bgButton};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
      }
    }
  `;
  return (
    <StyleHomePage>
      <div className="header">
        <div className="header-left">
          <div>
            <img src="logoo.png" alt="logo" />
          </div>
          <h3>DH Blogging</h3>
        </div>
        <div className="input">
          <input type="text" placeholder="Tìm kiếm blog, tài liệu...." />
        </div>
        <div className="header-right">
          <NavLink to={"/sign-up"} className="w-full h-full">
            <button className="w-full h-full">Sign Up</button>
          </NavLink>
        </div>
      </div>
    </StyleHomePage>
  );
};

export default Header;