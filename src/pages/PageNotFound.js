import React from "react";
import styled from "styled-components";
import Button from "../components/form/Button";
import Header from "../components/layout/layoutmain/Header";

const PageNotFound = () => {
  const StylePageNotFound = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .number {
      font-size: 120px;
      font-weight: 800;
      letter-spacing: 10px;
      background: linear-gradient(
        132deg,
        rgb(34, 181, 254) 0%,
        rgb(255, 186, 214) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;
  return (
    <StylePageNotFound className="">
      <Header></Header>
      <div className="absolute top-0 left-0 right-0 bottom-0 !bg-[#1F2833]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] !bg-[#1F2833]">
          <div className="flex flex-col items-center">
            <h1 className="number">404</h1>
            <span className="text-[40px] font-extrabold text-white">
              Không tìm thấy nội dung 😓
            </span>
            <span className="mt-5 font-medium text-white">
              URL của nội dung này đã bị thay đổi hoặc không còn tồn tại.
            </span>
            <span className="font-medium text-white">
              Nếu bạn đang lưu URL này, hãy thử truy cập lại từ trang chủ thay
              vì dùng URL đã lưu.
            </span>
            <Button type="button" to={"/"}>
              Truy cập trang chủ
            </Button>
          </div>
        </div>
      </div>
    </StylePageNotFound>
  );
};

export default PageNotFound;
