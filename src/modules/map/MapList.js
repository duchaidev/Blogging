import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/form/Button";
import MapItem from "./MapItem";

const data = [
  {
    image:
      "https://files.fullstack.edu.vn/f8-prod/learning-paths/3/63b4641535b16.png",
    to: "https://fullstack.edu.vn/learning-paths/back-end-development",
    title: "Lộ trình học Back-end",
    content:
      "Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.",
  },
  {
    image:
      "https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png",
    to: "https://fullstack.edu.vn/courses/lessons-for-newbie",
    title: "Lộ trình học Front-end",
    content:
      "Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.",
  },
];

const MapList = () => {
  return (
    <div className="mt-6">
      <div className="flex mt-[80px] gap-8 xs:flex-col">
        {data.map((item) => (
          <MapItem
            key={item.image}
            image={item.image}
            title={item.title}
            to={item.to}
            content={item.content}
          ></MapItem>
        ))}
      </div>
      <div className="flex flex-row items-center justify-between mt-[40px]">
        <div className="w-[30%] xs:w-full flex flex-col justify-start gap-5">
          <NavLink className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Tham gia cộng đồng học viên DHD trên Facebook
          </NavLink>
          <span className="text-gray-800 dark:text-gray-300">
            Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia
            hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
          </span>
          <Button to={"/"}>Tham gia nhóm</Button>
        </div>
        <div className="w-[25%] xs:hidden">
          <img
            src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png"
            alt="f8"
          />
        </div>
      </div>
    </div>
  );
};

export default MapList;
