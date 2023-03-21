import { signOut } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../firebase-app/firebase-auth";

const dataNav = [
  {
    title: "User",
    url: "/manage/user",
    icon: (
      <svg
        width="31"
        height="22"
        viewBox="0 0 31 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.475 10.6897C22.9839 10.6897 23.4878 10.5909 23.9579 10.399C24.428 10.2072 24.8552 9.92598 25.215 9.57147C25.5749 9.21696 25.8603 8.79609 26.055 8.33291C26.2498 7.86972 26.35 7.37327 26.35 6.87192C26.35 5.8594 25.9417 4.88834 25.215 4.17238C24.4883 3.45641 23.5027 3.05419 22.475 3.05419C21.4473 3.05419 20.4617 3.45641 19.735 4.17238C19.0083 4.88834 18.6 5.8594 18.6 6.87192C18.6 7.37327 18.7002 7.86972 18.895 8.33291C19.0897 8.79609 19.3751 9.21696 19.735 9.57147C20.4617 10.2874 21.4473 10.6897 22.475 10.6897ZM10.85 9.16256C12.0833 9.16256 13.266 8.67989 14.138 7.82074C15.0101 6.96158 15.5 5.79631 15.5 4.58128C15.5 3.36625 15.0101 2.20098 14.138 1.34183C13.266 0.482669 12.0833 0 10.85 0C9.61674 0 8.434 0.482669 7.56195 1.34183C6.68991 2.20098 6.2 3.36625 6.2 4.58128C6.2 5.79631 6.68991 6.96158 7.56195 7.82074C8.434 8.67989 9.61674 9.16256 10.85 9.16256ZM22.475 13.7438C19.6385 13.7438 13.95 15.1488 13.95 17.9433V21.3793H31V17.9433C31 15.1488 25.3115 13.7438 22.475 13.7438ZM10.85 12.2167C7.2385 12.2167 0 14.0034 0 17.5616V21.3793H10.85V17.9433C10.85 16.6453 11.3615 14.37 14.5235 12.6443C13.175 12.3695 11.873 12.2167 10.85 12.2167Z"
          fill="white"
        />
      </svg>
    ),
  },

  {
    title: "Category",
    url: "/manage/category",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.66667 13.3333H11.6667C12.1087 13.3333 12.5326 13.1577 12.8452 12.8452C13.1577 12.5326 13.3333 12.1087 13.3333 11.6667V1.66667C13.3333 1.22464 13.1577 0.800716 12.8452 0.488155C12.5326 0.175595 12.1087 0 11.6667 0H1.66667C1.22464 0 0.800716 0.175595 0.488155 0.488155C0.175595 0.800716 0 1.22464 0 1.66667V11.6667C0 12.1087 0.175595 12.5326 0.488155 12.8452C0.800716 13.1577 1.22464 13.3333 1.66667 13.3333ZM18.3333 13.3333H28.3333C28.7754 13.3333 29.1993 13.1577 29.5118 12.8452C29.8244 12.5326 30 12.1087 30 11.6667V1.66667C30 1.22464 29.8244 0.800716 29.5118 0.488155C29.1993 0.175595 28.7754 0 28.3333 0H18.3333C17.8913 0 17.4674 0.175595 17.1548 0.488155C16.8423 0.800716 16.6667 1.22464 16.6667 1.66667V11.6667C16.6667 12.1087 16.8423 12.5326 17.1548 12.8452C17.4674 13.1577 17.8913 13.3333 18.3333 13.3333ZM1.66667 30H11.6667C12.1087 30 12.5326 29.8244 12.8452 29.5118C13.1577 29.1993 13.3333 28.7754 13.3333 28.3333V18.3333C13.3333 17.8913 13.1577 17.4674 12.8452 17.1548C12.5326 16.8423 12.1087 16.6667 11.6667 16.6667H1.66667C1.22464 16.6667 0.800716 16.8423 0.488155 17.1548C0.175595 17.4674 0 17.8913 0 18.3333V28.3333C0 28.7754 0.175595 29.1993 0.488155 29.5118C0.800716 29.8244 1.22464 30 1.66667 30ZM23.3333 30C27.01 30 30 27.01 30 23.3333C30 19.6567 27.01 16.6667 23.3333 16.6667C19.6567 16.6667 16.6667 19.6567 16.6667 23.3333C16.6667 27.01 19.6567 30 23.3333 30Z"
          fill="#DDDDDD"
        />
      </svg>
    ),
  },

  {
    title: "Posts",
    url: "/manage/posts",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.9998 8.33333C33.1498 7.75 31.1165 7.5 29.1665 7.5C25.9165 7.5 22.4165 8.16667 19.9998 10C17.5832 8.16667 14.0832 7.5 10.8332 7.5C7.58317 7.5 4.08317 8.16667 1.6665 10V34.4167C1.6665 34.8333 2.08317 35.25 2.49984 35.25C2.6665 35.25 2.74984 35.1667 2.9165 35.1667C5.1665 34.0833 8.4165 33.3333 10.8332 33.3333C14.0832 33.3333 17.5832 34 19.9998 35.8333C22.2498 34.4167 26.3332 33.3333 29.1665 33.3333C31.9165 33.3333 34.7498 33.8333 37.0832 35.0833C37.2498 35.1667 37.3332 35.1667 37.4998 35.1667C37.9165 35.1667 38.3332 34.75 38.3332 34.3333V10C37.3332 9.25 36.2498 8.75 34.9998 8.33333ZM34.9998 30.8333C33.1665 30.25 31.1665 30 29.1665 30C26.3332 30 22.2498 31.0833 19.9998 32.5V13.3333C22.2498 11.9167 26.3332 10.8333 29.1665 10.8333C31.1665 10.8333 33.1665 11.0833 34.9998 11.6667V30.8333Z"
          fill="white"
        />
        <path
          d="M29.1665 17.5C30.6332 17.5 32.0498 17.65 33.3332 17.9333V15.4C32.0165 15.15 30.5998 15 29.1665 15C26.3332 15 23.7665 15.4833 21.6665 16.3833V19.15C23.5498 18.0833 26.1665 17.5 29.1665 17.5ZM21.6665 20.8167V23.5833C23.5498 22.5167 26.1665 21.9333 29.1665 21.9333C30.6332 21.9333 32.0498 22.0833 33.3332 22.3667V19.8333C32.0165 19.5833 30.5998 19.4333 29.1665 19.4333C26.3332 19.4333 23.7665 19.9333 21.6665 20.8167ZM29.1665 23.8833C26.3332 23.8833 23.7665 24.3667 21.6665 25.2667V28.0333C23.5498 26.9667 26.1665 26.3833 29.1665 26.3833C30.6332 26.3833 32.0498 26.5333 33.3332 26.8167V24.2833C32.0165 24.0167 30.5998 23.8833 29.1665 23.8833Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    title: "Message",
    url: "/manage/message",
    icon: (
      <svg
        width="34"
        height="31"
        viewBox="0 0 34 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.9883 15.3581V15.3747M10.3269 15.3581V15.3747M23.6498 15.3581V15.3747M2 28.681L4.16498 22.1861C2.29385 19.4187 1.61695 16.1415 2.26016 12.9638C2.90337 9.78605 4.82291 6.92408 7.66187 4.90998C10.5008 2.89589 14.066 1.86673 17.6946 2.01385C21.3232 2.16097 24.7682 3.47437 27.3891 5.70984C30.0099 7.94531 31.6284 10.9507 31.9435 14.1673C32.2586 17.3839 31.2488 20.5927 29.102 23.1972C26.9552 25.8017 23.8175 27.6245 20.2721 28.3269C16.7268 29.0293 13.0151 28.5633 9.82724 27.0157L2 28.681Z"
          stroke="#DDDDDD"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Setting",
    url: "/manage/setting",
    icon: (
      <svg
        width="30"
        height="32"
        viewBox="0 0 30 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0058 11.5245C13.9473 11.5245 12.9561 11.9351 12.2056 12.6856C11.4587 13.4361 11.0445 14.4273 11.0445 15.4857C11.0445 16.5442 11.4587 17.5354 12.2056 18.2859C12.9561 19.0328 13.9473 19.447 15.0058 19.447C16.0642 19.447 17.0554 19.0328 17.8059 18.2859C18.5528 17.5354 18.967 16.5442 18.967 15.4857C18.967 14.4273 18.5528 13.4361 17.8059 12.6856C17.4393 12.3162 17.003 12.0234 16.5224 11.824C16.0417 11.6247 15.5261 11.5229 15.0058 11.5245ZM29.6012 19.8612L27.286 17.8823C27.3958 17.2097 27.4524 16.523 27.4524 15.8397C27.4524 15.1565 27.3958 14.4662 27.286 13.7972L29.6012 11.8183C29.7761 11.6686 29.9013 11.4692 29.9601 11.2466C30.0189 11.024 30.0085 10.7888 29.9304 10.5722L29.8986 10.4802C29.2614 8.69846 28.3067 7.04693 27.0807 5.60559L27.017 5.53125C26.8681 5.35621 26.6697 5.23038 26.4479 5.17034C26.2261 5.11031 25.9913 5.11889 25.7744 5.19495L22.9 6.21802C21.838 5.34717 20.6556 4.66041 19.3741 4.18251L18.8183 1.17705C18.7764 0.95064 18.6666 0.742347 18.5034 0.579845C18.3403 0.417342 18.1316 0.308323 17.905 0.26727L17.8094 0.24957C15.9686 -0.0831901 14.0287 -0.0831901 12.1879 0.24957L12.0923 0.26727C11.8658 0.308323 11.657 0.417342 11.4939 0.579845C11.3308 0.742347 11.2209 0.95064 11.179 1.17705L10.6197 4.19667C9.35035 4.67838 8.16787 5.36348 7.11863 6.22509L4.22291 5.19495C4.00614 5.11829 3.77117 5.1094 3.54923 5.16947C3.32729 5.22954 3.12888 5.35572 2.98037 5.53125L2.91665 5.60559C1.69284 7.04846 0.738382 8.69958 0.0988054 10.4802L0.0669453 10.5722C-0.0923548 11.0147 0.0386254 11.5103 0.396166 11.8183L2.73965 13.8184C2.62991 14.4839 2.57681 15.1636 2.57681 15.8362C2.57681 16.5159 2.62991 17.1956 2.73965 17.854L0.403246 19.8541C0.228354 20.0038 0.103182 20.2032 0.0443741 20.4258C-0.0144341 20.6484 -0.00409211 20.8836 0.0740252 21.1002L0.105885 21.1922C0.746626 22.9728 1.69181 24.619 2.92373 26.0668L2.98745 26.1412C3.13632 26.3162 3.33474 26.442 3.55655 26.5021C3.77836 26.5621 4.01315 26.5535 4.22999 26.4775L7.12571 25.4473C8.18063 26.3146 9.35591 27.0014 10.6268 27.4757L11.1861 30.4954C11.228 30.7218 11.3379 30.9301 11.501 31.0926C11.6641 31.2551 11.8728 31.3641 12.0994 31.4051L12.195 31.4228C14.0539 31.7574 15.9576 31.7574 17.8165 31.4228L17.9121 31.4051C18.1387 31.3641 18.3474 31.2551 18.5105 31.0926C18.6737 30.9301 18.7835 30.7218 18.8254 30.4954L19.3812 27.4899C20.6627 27.0085 21.845 26.3252 22.907 25.4544L25.7815 26.4775C25.9983 26.5541 26.2333 26.563 26.4552 26.5029C26.6771 26.4429 26.8756 26.3167 27.0241 26.1412L27.0878 26.0668C28.3197 24.6119 29.2649 22.9728 29.9056 21.1922L29.9375 21.1002C30.0897 20.6612 29.9587 20.1692 29.6012 19.8612ZM15.0058 21.7091C11.5684 21.7091 8.78243 18.9231 8.78243 15.4857C8.78243 12.0484 11.5684 9.26242 15.0058 9.26242C18.4431 9.26242 21.2291 12.0484 21.2291 15.4857C21.2291 18.9231 18.4431 21.7091 15.0058 21.7091Z"
          fill="#DDDDDD"
        />
      </svg>
    ),
  },
  {
    title: "Logout",
    icon: (
      <svg
        width="30"
        height="34"
        viewBox="0 0 30 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6667 25V20H10V13.3333H21.6667V8.33333L30 16.6667L21.6667 25ZM18.3333 0C19.2174 0 20.0652 0.351189 20.6904 0.976311C21.3155 1.60143 21.6667 2.44928 21.6667 3.33333V6.66667H18.3333V3.33333H3.33333V30H18.3333V26.6667H21.6667V30C21.6667 30.8841 21.3155 31.7319 20.6904 32.357C20.0652 32.9821 19.2174 33.3333 18.3333 33.3333H3.33333C2.44928 33.3333 1.60143 32.9821 0.976311 32.357C0.351189 31.7319 0 30.8841 0 30V3.33333C0 2.44928 0.351189 1.60143 0.976311 0.976311C1.60143 0.351189 2.44928 0 3.33333 0H18.3333Z"
          fill="#DDDDDD"
        />
      </svg>
    ),
    onClick: () => signOut(auth),
  },
];
const DashBoardNav = () => {
  const StyleDashBoardNav = styled.div`
    .nav {
      box-shadow: 0px 1px 30px -14px rgba(80, 227, 194, 1);
      border-radius: 10px;
      height: 500px;
      padding: 20px;
      .nav-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 3px;
        border-radius: 10px;
        gap: 20px;
        .menu-item {
          display: flex;
          align-items: center;
          text-align: center;
          height: 100%;
          gap: 30px;
          fontweight: 400;
          color: white;
          cursor: pointer;
          padding: 10px 20px;
          width: 100%;
          span {
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          p {
            font-size: 16px;
            fontweight: 600;
          }
          &.active,
          &:hover {
            background: #668588;
            padding: 10px 20px;
            border-radius: 10px;
          }
        }
      }
    }
  `;
  return (
    <StyleDashBoardNav className="">
      <div className="nav">
        <div className="nav-menu">
          {dataNav.map((item) => {
            if (item.onClick) {
              return (
                <NavLink
                  to={item.url}
                  key={item.url}
                  className="menu-item"
                  onClick={item.onClick}
                >
                  <span>{item.icon}</span>
                  <p>{item.title}</p>
                </NavLink>
              );
            }
            return (
              <NavLink to={item.url} key={item.url} className="menu-item">
                <span>{item.icon}</span>
                <p>{item.title}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div></div>
    </StyleDashBoardNav>
  );
};

export default DashBoardNav;
