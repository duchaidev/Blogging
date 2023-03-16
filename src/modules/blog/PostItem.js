import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ThreeDot from "../../components/icon/ThreeDot";
import Dot from "../../components/icon/Dot";

const PostItem = ({
  avtAuthor,
  nameAuthor,
  title,
  content,
  image,
  category,
  date,
  to,
  toInfo,
}) => {
  const StylePostItem = styled.div`
    padding: 20px;
    border: solid 2px #686c72;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    .item {
      display: grid;
      grid-template-columns: 4fr 1fr;
      gap: 20px;
    }
  `;
  return (
    <StylePostItem>
      <div className="flex items-center justify-between mb-[15px]">
        <div className="flex items-center gap-2">
          <div className="w-[30px] h-[30px] rounded-full">
            <NavLink to={toInfo}>
              <img
                src={avtAuthor}
                alt="avatar"
                className="overflow-hidden rounded-full"
              />
            </NavLink>
          </div>
          <NavLink to={toInfo}>
            <h2 className="text-gray-300">{nameAuthor}</h2>
          </NavLink>
        </div>
        <NavLink>
          <ThreeDot></ThreeDot>
        </NavLink>
      </div>
      <div className="item">
        <div className="flex flex-col gap-2">
          <NavLink to={to} className="text-white font-semibold text-[18px]">
            {title}
          </NavLink>
          <NavLink to={to}>
            <p className="text-[#8e8e8e] text-[15px]">{content}</p>
          </NavLink>
        </div>
        <div>
          <NavLink to={to}>
            <img
              src={image}
              alt="img"
              className="w-full h-[110px] overflow-hidden object-cover rounded-lg"
            />
          </NavLink>
        </div>
      </div>
      <div className="flex items-center gap-3 text-white">
        <span className="px-2 py-1  rounded-xl bg-[#605F63]">{category}</span>
        <Dot></Dot>
        <span className="text-sm text-gray-300">{date}</span>
      </div>
    </StylePostItem>
  );
};

export default PostItem;
