import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-app/firebase-auth";
import PostItem from "./PostItem";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";

const PostList = () => {
  const { slug } = useParams();
  console.log(slug);

  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const colRef = collection(db, "posts");
      const newRef = slug
        ? query(collection(db, "posts"), where("category.slug", "==", slug))
        : colRef;
      const docSnap = await getDocs(newRef);
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
  }, [slug]);
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
