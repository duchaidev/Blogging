import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/form/Button";
import ClipBoard from "../../components/icon/ClipBoard";
import Html5 from "../../components/icon/Html5";
import Javas from "../../components/icon/Javas";
import Reactjs from "../../components/icon/Reactjs";
import Responsive from "../../components/icon/Responsive";

const MapItem = ({ image, to, title, content }) => {
  const StyleMapItem = styled.div`
    .listitem {
      margin-bottom: 40px;
      div {
        width: 50%;
        path {
          transition: 0.15s all;
          fill: gray;
        }
        :hover {
          /* width: 100%; */
          path {
            fill: #66fcf1;
          }
        }
      }
    }
  `;
  return (
    <StyleMapItem
      className=" bg-[#232830] p-6 rounded border border-[#495678] flex 
    flex-col gap-3 relative max-w-[35%] dark:bg-[#1C2735] "
    >
      <div className="flex">
        <div className="max-w-[70%]">
          <NavLink to={to} className="text-xl font-bold text-gray-200">
            {title}
          </NavLink>
          <h2 className="mt-3 text-sm font-normal text-gray-300">{content}</h2>
        </div>
        <div className="ml-4 w-[120px] h-[120px] min-h-[120px] min-w-[120px] p-1 border-[#66FCF1] border-[3px] rounded-full ">
          <NavLink>
            <img
              src={image}
              alt=""
              className="w-[100%] h-full overflow-hidden rounded-full object-cover "
            />
          </NavLink>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex flex-row items-end gap-3 align-bottom listitem">
          <NavLink
            className="flex items-center justify-center border rounded-full hover:border-[#66FCF1]"
            title="Kiến thức nhập môn IT"
          >
            <ClipBoard></ClipBoard>
          </NavLink>
          <NavLink
            className="flex items-center justify-center border rounded-full hover:border-[#66FCF1]"
            title="HTML 5"
          >
            <Html5></Html5>
          </NavLink>
          <NavLink
            className="flex items-center justify-center border rounded-full hover:border-[#66FCF1]"
            title="Responsive"
          >
            <Responsive></Responsive>
          </NavLink>
          <NavLink
            className="flex items-center justify-center border rounded-full hover:border-[#66FCF1]"
            title="JavaScript"
          >
            <Javas></Javas>
          </NavLink>
          <NavLink
            className="flex items-center justify-center border rounded-full hover:border-[#66FCF1]"
            title="ReactJs"
          >
            <Reactjs></Reactjs>
          </NavLink>
        </div>
        <div>
          <Button className="absolute flex items-center justify-center align-middle">
            <NavLink to={to} className="w-full p-2" target="_blank">
              Xem chi tiết
            </NavLink>
          </Button>
        </div>
      </div>
    </StyleMapItem>
  );
};

export default MapItem;
