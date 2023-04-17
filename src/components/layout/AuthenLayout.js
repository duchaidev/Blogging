import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const SignUpPageStyled = styled.div`
  background-color: black;
  position: fixed;
  .logo {
    padding: 20px auto;
  }
  h1 {
    font-size: 40px;
    color: ${(props) => props.theme.primary};
    font-weight: 600;
    text-align: center;
    line-height: 60px;
    margin-bottom: 30px;
  }
`;
const AuthenLayout = ({ children }) => {
  return (
    <SignUpPageStyled className="z-50 min-w-full min-h-screen">
      <img
        src="bglogin.jpg"
        alt=""
        className="z-10 object-cover w-full h-full min-h-screen "
      />
      <div className="w-auto h-auto z-40 mx-auto bg-[#F3F3F3] absolute top-[32%] right-[50%] translate-y-[-50%] translate-x-[50%]  flex flex-col justify-center items-center py-8 px-48 rounded-xl">
        <NavLink to={"/"}>
          <img
            srcSet="https://firebasestorage.googleapis.com/v0/b/blogging-ff828.appspot.com/o/images%2Flogoo.png?alt=media&token=dbcd008c-241e-46aa-8337-656763be352e"
            className="w-28 aspect-square sm:w-20"
            alt="monkey-blogging"
          />
        </NavLink>
        <h1 className="sm:!text-3xl">Monkey Blogging</h1>
        {children}
      </div>
    </SignUpPageStyled>
  );
};

export default AuthenLayout;
