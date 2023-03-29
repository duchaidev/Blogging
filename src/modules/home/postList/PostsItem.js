import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Dot from "../../../components/icon/Dot";

const PostsItem = ({
  image,
  urlPost,
  title,
  avatarAuthor,
  urlAuthor,
  fullname,
  target = "",
  date,
}) => {
  const StyleItem = styled.div`
    .img-content {
      transition: 0.2s;
    }
    .img-content:hover {
      opacity: 0.6;
    }
  `;
  return (
    <StyleItem className="grid gap-2">
      <NavLink to={urlPost} target={target}>
        <img
          src={image}
          alt=""
          className="object-cover w-full border border-gray-500  rounded-xl aspect-video img-content"
          title={title}
        />
      </NavLink>
      <NavLink className="text-white" to={urlPost} target={target}>
        <h2 title={title}>{title.slice(0, 35) + "..."}</h2>
      </NavLink>
      <div className="flex items-center gap-2">
        <NavLink to={urlAuthor}>
          <img
            src={avatarAuthor}
            alt="logo"
            className="object-cover w-6 h-6 rounded-full"
          />
        </NavLink>
        <NavLink>
          <span className="text-white ">{fullname}</span>
        </NavLink>
        <span>
          <Dot></Dot>
        </span>
        <NavLink>
          <span className="text-sm text-[#797E85]">{date}</span>
        </NavLink>
      </div>
    </StyleItem>
  );
};

export default PostsItem;
