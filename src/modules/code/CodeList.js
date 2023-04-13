import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-app/firebase-auth";

import CodeItem from "./CodeItem";

const CodeList = () => {
  const [codeList, setCodeList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const colRef = collection(db, "code");

      const docSnap = await getDocs(colRef);
      const result = [];
      docSnap.forEach((code) => {
        result.push({
          id: code.id,
          ...code.data(),
        });
      });
      setCodeList(result);
    };
    fetchPosts();
  }, []);
  console.log(codeList);
  return (
    <div className="grid w-full grid-cols-4 gap-5 pb-5 sm:grid-cols-1 xs:grid-cols-2">
      {codeList.length > 0 &&
        codeList.map((item) => (
          <CodeItem
            key={item.id}
            urldemo={item?.urldemo || ""}
            image={item.image}
            title={item.title}
            urlcode={item.urlcode}
            avatar={item.user.avatar}
            name={item.user.fullname}
          ></CodeItem>
        ))}
    </div>
  );
};

export default CodeList;
