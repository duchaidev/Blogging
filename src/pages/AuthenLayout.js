import React from "react";
import styled from "styled-components";
const AuthenLayout = ({ children }) => {
  const StyleDiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: black;
    overflow: hidden;
    .bg-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }
    .container {
      width: 800px;
      height: 600px;
      background-color: #f3f3f3;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
    }
  `;

  return (
    <StyleDiv>
      <div className="bg-img">
        <img src="bglogin.jpg" alt="" className="object-cover w-full h-full" />
      </div>
      <div className="container">
        <div className="mt-[30px]">
          <img src="logoo.png" alt="" className="rounded-lg" />
        </div>
        <h3 className="text-[30px] font-bold mt-[10px]">
          Đăng nhập vào DH DEV
        </h3>
        {children}
      </div>
    </StyleDiv>
  );
};

export default AuthenLayout;
