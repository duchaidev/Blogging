import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { db } from "../../firebase-app/firebase-auth";
const Other = () => {
  const Style = styled.div`
    .item {
      &.active,
      &:hover {
        background: ${(props) => props.theme.bgButton};
        border-radius: 10px;
      }
    }
  `;
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const colRef = collection(db, "categories");
      const docSnap = await getDocs(colRef);
      const result = [];
      docSnap.forEach((category) => {
        result.push({
          id: category.id,
          ...category.data(),
        });
      });
      setCategoryList(result);
    };
    fetchPosts();
  }, []);
  console.log(categoryList);
  return (
    <Style className="mt-5">
      <h2 className="mb-4 font-medium text-gray-500 whitespace-nowrap">
        CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT
      </h2>

      {categoryList.length > 0 &&
        categoryList.map((item) => (
          <NavLink
            className="px-2 py-1  rounded-xl bg-[#605F63] whitespace-nowrap inline-block m-1 item"
            to={`/topic/${item.slug}`}
          >
            {item?.category}
          </NavLink>
        ))}
    </Style>
  );
};

export default Other;
