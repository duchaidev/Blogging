import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-app/firebase-auth";
import PostItem from "./PostItem";
import parse from "html-react-parser";

const fakeData = [
  {
    avtAuthor: "logoo.png",
    nameAuthor: "Le Duc Hai",
    title:
      "Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế ",
    content:
      "Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham khảo bài viết này để biết ngành gì đang hot hiện nay và top các ngành nghề được dự đoán sẽ trở thành xu thế nhé! (Lưu ý: thứ tự các ngành nghề không sắp xếp theo mức độ tăng/giảm dần mà là ngẫu nhiên)",
    image:
      "https://files.fullstack.edu.vn/f8-prod/blog_posts/6630/63fd6b687b938.jpg",
    category: "IT",
    date: "2 ngày trước",
    to: "/blog/le-duc-hai",
  },
  {
    avtAuthor: "logoo.png",
    nameAuthor: "Le Duc Hai",
    title: "Lương lập trình website cao hay thấp? Cơ hội nghề nghiệp ra sao?",
    content:
      "Lập trình website hay lập trình web chính là công việc của một web developer. Những người này sẽ có nhiệm vụ là: sau khi nhận toàn bộ dữ liệu (giao diện website tĩnh) từ bộ phận thiết kế, họ sẽ chuyển nó thành một hệ thống website hoàn chỉnh, bao gồm cả việc tương tác với CSDL và có thể tương tác với người dùng dựa trên các ngôn ngữ máy tính.",
    image:
      "https://files.fullstack.edu.vn/f8-prod/blog_posts/6626/63fc19cf0ecb7.jpg",
    category: "Lập trình viên",
    date: "5 ngày trước",
    to: "/blog/duc-hai",
    toInfo: "/blog",
  },
  {
    avtAuthor: "logoo.png",
    nameAuthor: "Le Duc Hai",
    title: "Điểm danh những ngành nghề thu nhập cao nhất hiện nay",
    content:
      "Lập trình website hay lập trình web chính là công việc của một web developer. Những người này sẽ có nhiệm vụ là: sau khi nhận toàn bộ dữ liệu (giao diện website tĩnh) từ bộ phận thiết kế, họ sẽ chuyển nó thành một hệ thống website hoàn chỉnh, bao gồm cả việc tương tác với CSDL và có thể tương tác với người dùng dựa trên các ngôn ngữ máy tính.",
    image:
      "https://files.fullstack.edu.vn/f8-prod/blog_posts/6584/63f81cb512e5f.png",
    category: "Lập trình viên",
    date: "5 ngày trước",
    to: "/blog",
  },
  {
    avtAuthor: "logoo.png",
    nameAuthor: "Le Duc Hai",
    title: "Góc chia sẻ: Nữ giới có nên lựa chọn theo nghề IT không? ",
    content:
      "Lập trình website hay lập trình web chính là công việc của một web developer. Những người này sẽ có nhiệm vụ là: sau khi nhận toàn bộ dữ liệu (giao diện website tĩnh) từ bộ phận thiết kế, họ sẽ chuyển nó thành một hệ thống website hoàn chỉnh, bao gồm cả việc tương tác với CSDL và có thể tương tác với người dùng dựa trên các ngôn ngữ máy tính.",
    image:
      "https://files.fullstack.edu.vn/f8-prod/blog_posts/6574/63f72b782aa83.jpg",
    category: "Lập trình viên",
    date: "5 ngày trước",
    to: "/blog",
  },
];

const PostList = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const colRef = collection(db, "posts");
      const docSnap = await getDocs(colRef);
      const result = [];
      docSnap.forEach((post) => {
        result.push({
          id: post.id,
          ...post.data(),
        });
      });
      setPostList(result);
    };
    fetchPosts();
  }, []);
  console.log(postList);
  return (
    <div className="flex flex-col gap-8">
      {postList.length > 0 &&
        postList.map((item) => (
          <PostItem
            key={item.id}
            // toInfo={item.toInfo}
            to={`/blog/${item.slug}`}
            avtAuthor={item.user?.avatar}
            nameAuthor={item.user?.fullname}
            title={item.title}
            content={item.subtitle || parse(item.content.slice(0, 210) + "...")}
            image={item.image}
            category={item.category?.category}
            date={new Date(item?.createdAt?.seconds * 1000).toLocaleDateString(
              "vi-VI"
            )}
          ></PostItem>
        ))}
    </div>
  );
};

export default PostList;
