import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
  const StyleHomePage = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .slide {
      transform: translateX(-100px);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }
    .view:hover {
      scale: 0.95;
    }
  `;
  return (
    <StyleHomePage>
      <div className="slide">
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5"
            y="2.5"
            width="85"
            height="85"
            fill="#1F2833"
            stroke="#66FCF1"
            stroke-width="5"
          />
          <path
            d="M54.4915 54.491L63.5375 63.5374M35.5532 25L37.2098 31.1766M31.1784 37.2083L25 35.5517M49.9696 28.8612L45.4456 33.3855M33.385 45.4445L28.8653 49.9688M39.4164 39.415L50.0762 65L53.8583 53.8577L65 50.0754L39.4164 39.415Z"
            stroke="white"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-[40px] font-bold max-w-[800px] text-center text-white">
          Get your free CODE components with just few click
        </h2>
        <div className="flex gap-[80px]">
          <NavLink
            to={"https://github.com/Leduchai2k3/Blogging"}
            target="_blank"
          >
            <button className="w-[200px] h-[50px] bg-[#434246] text-[#66FCF1] font-semibold text-lg rounded-lg transition-shadow view">
              View on github
            </button>
          </NavLink>

          <NavLink
            to={"/https://github.com/Leduchai2k3/Blogging"}
            target="_blank"
          >
            <button className="w-[200px] h-[50px] bg-[#66FCF1] text-[#434246] font-semibold text-lg rounded-lg view">
              Contact me
            </button>
          </NavLink>
        </div>
      </div>
    </StyleHomePage>
  );
};

export default HomePage;
