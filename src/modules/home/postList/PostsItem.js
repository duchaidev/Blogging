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
      <NavLink to={urlPost}>
        <img
          src={image}
          alt=""
          className="h-[190px] w-full object-cover rounded-xl img-content"
          title={title}
        />
      </NavLink>
      <NavLink className="text-white" to={urlPost}>
        <h2 title={title}>{title.slice(0, 35) + "..."}</h2>
      </NavLink>
      <div className="flex gap-2 items-center">
        <NavLink to={urlAuthor}>
          <img
            src={avatarAuthor}
            alt="logo"
            className="w-6 h-6 object-cover rounded-full"
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
