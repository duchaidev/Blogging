import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ClickHomePage from "../../components/icon/ClickHomePage";
import Facebook from "../../components/icon/Facebook";
import Github from "../../components/icon/Github";
import Instagram from "../../components/icon/Instagram";
import Youtobe from "../../components/icon/Youtobe";

const HomeSlide = () => {
  const StyleHomeSlide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .slide {
      transform: translateX(-50px);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }
    .view:hover {
      scale: 1.05;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px 0px;
    }
  `;
  return (
    <StyleHomeSlide>
      <div className="slide">
        <ClickHomePage></ClickHomePage>
        <h2 className="text-[40px] font-bold max-w-[800px] text-center text-white">
          Get your free CODE components with just few click
        </h2>
        <div className="flex gap-[80px]">
          <NavLink
            to={"https://github.com/Leduchai2k3/Blogging"}
            target="_blank"
          >
            <button className="w-[200px] h-[50px] bg-[#434246] text-[#66FCF1] font-semibold text-lg rounded-lg transition-[0.5s] view">
              View on github
            </button>
          </NavLink>

          <NavLink
            to={"https://github.com/Leduchai2k3/Blogging"}
            target="_blank"
          >
            <button className="w-[200px] h-[50px] bg-[#66FCF1] text-[#434246] font-semibold text-lg rounded-lg view transition-[0.5s]">
              Contact me
            </button>
          </NavLink>
        </div>
        <div className="flex gap-[50px] mt-[15px]">
          <NavLink
            to={"https://github.com/Leduchai2k3/Blogging"}
            target="_blank"
            className="rounded-full view"
          >
            <Facebook></Facebook>
          </NavLink>
          <NavLink
            to={"https://github.com/Leduchai2k3/Blogging"}
            target="_blank"
            className="rounded-full view"
          >
            <Youtobe></Youtobe>
          </NavLink>
          <NavLink
            to={"https://github.com/Leduchai2k3/Blogging"}
            target="_blank"
            className="rounded-full view"
          >
            <Github></Github>
          </NavLink>
          <NavLink
            to={"https://github.com/Leduchai2k3/Blogging"}
            target="_blank"
            className="rounded-full view"
          >
            <Instagram></Instagram>
          </NavLink>
        </div>
      </div>
    </StyleHomeSlide>
  );
};

export default HomeSlide;
