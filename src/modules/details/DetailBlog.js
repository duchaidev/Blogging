import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase-app/firebase-auth";
import parse from "html-react-parser";
import Dropdown from "../../components/dropdown/Dropdown";
import Select from "../../components/dropdown/Select";
import List from "../../components/dropdown/List";
import Option from "../../components/dropdown/Option";
import { toast } from "react-toastify";
import PageNotFound from "../../pages/PageNotFound";
import { useSelector } from "react-redux";

const DetailBlog = () => {
  const darkMode = useSelector((state) => state.darkMode.dark);
  const url = window.location.href;
  console.log(url);
  const { slug } = useParams();
  document.title = "Blog";

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    toast.success("Coppy Success!!!");
  };

  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      const colRef = query(
        collection(db, "posts"),
        where("slug", "==", slug),
        limit(1)
      );
      onSnapshot(colRef, (snapshot) => {
        snapshot.forEach((doc) => {
          setPost({
            id: doc?.id,
            ...doc?.data(),
          });
        });
      });
    };
    fetchPost();
  }, [slug]);
  if (!slug) return <PageNotFound></PageNotFound>;

  return (
    <div className="min-h-screen  lg:px-[15%] xl:px-[15%] 2xl:px-[15%] xs:pr-3 xs:w-screen">
      <div>
        <div>
          <h1 className="text-[40px] xs:text-[24px] xs:font-semibold font-bold text-gray-900 dark:text-gray-200 mb-8">
            {post?.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <div className="w-[50px] h-[50px] rounded-full border-[3px] border-[#66FCF1] ">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src={post?.user?.avatar}
                  alt="avt"
                />
              </div>
              <div className="text-black dark:text-white">
                <span>{post?.user?.fullname}</span>
                <div>
                  <time className="text-sm font-light text-gray-700 dark:text-gray-300 ">
                    {new Date(
                      post?.createdAt?.seconds * 1000
                    ).toLocaleDateString("vi-VI")}
                  </time>
                </div>
              </div>
            </div>
            <div>
              <Dropdown>
                <Select threedot></Select>
                <List threedot>
                  <Option threedot to="https://github.com/Leduchai2k3">
                    <div className="w-5 h-5">
                      {darkMode === true ? (
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 8.5213C17 3.81754 13.192 0 8.5 0C3.808 0 0 3.81754 0 8.5213C0 12.6456 2.924 16.0797 6.8 16.8722V11.0777H5.1V8.5213H6.8V6.39098C6.8 4.74637 8.1345 3.40852 9.775 3.40852H11.9V5.96491H10.2C9.7325 5.96491 9.35 6.34837 9.35 6.81704V8.5213H11.9V11.0777H9.35V17C13.6425 16.5739 17 12.9439 17 8.5213Z"
                            fill="white"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 8.5213C17 3.81754 13.192 0 8.5 0C3.808 0 0 3.81754 0 8.5213C0 12.6456 2.924 16.0797 6.8 16.8722V11.0777H5.1V8.5213H6.8V6.39098C6.8 4.74637 8.1345 3.40852 9.775 3.40852H11.9V5.96491H10.2C9.7325 5.96491 9.35 6.34837 9.35 6.81704V8.5213H11.9V11.0777H9.35V17C13.6425 16.5739 17 12.9439 17 8.5213Z"
                            fill="black"
                          />
                        </svg>
                      )}
                    </div>

                    <p className="whitespace-nowrap">Chia sẻ lên Facebook</p>
                  </Option>
                  <Option
                    threedot
                    to="https://www.figma.com/file/jJu7eekCiJlAUfNx9lGW3h/Untitled?node-id=15-60&t=ZKIoqI2Dq880qKj0-0"
                  >
                    <div className="w-5 h-5">
                      {darkMode === true ? (
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 1.41176C14.4479 1.65882 13.8528 1.82118 13.2361 1.89882C13.8671 1.52471 14.3547 0.931765 14.5841 0.218823C13.989 0.571765 13.3294 0.818824 12.6338 0.96C12.0674 0.352941 11.2715 0 10.3681 0C8.68308 0 7.30641 1.35529 7.30641 3.02824C7.30641 3.26824 7.33509 3.50118 7.38528 3.72C4.8327 3.59294 2.55975 2.38588 1.04685 0.557647C0.781549 1.00235 0.630975 1.52471 0.630975 2.07529C0.630975 3.12706 1.16874 4.05882 2.00048 4.58824C1.4914 4.58824 1.01816 4.44706 0.602295 4.23529V4.25647C0.602295 5.72471 1.66348 6.95294 3.06883 7.22824C2.61763 7.34979 2.14395 7.36671 1.68499 7.27765C1.87974 7.8794 2.26114 8.40594 2.77559 8.78325C3.29003 9.16055 3.91165 9.36967 4.55306 9.38118C3.4658 10.2285 2.11807 10.6866 0.731358 10.68C0.487572 10.68 0.243786 10.6659 0 10.6376C1.36233 11.4988 2.98279 12 4.71797 12C10.3681 12 13.4728 7.38353 13.4728 3.38118C13.4728 3.24706 13.4728 3.12 13.4656 2.98588C14.0679 2.56235 14.5841 2.02588 15 1.41176Z"
                            fill="white"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 1.41176C14.4479 1.65882 13.8528 1.82118 13.2361 1.89882C13.8671 1.52471 14.3547 0.931765 14.5841 0.218823C13.989 0.571765 13.3294 0.818824 12.6338 0.96C12.0674 0.352941 11.2715 0 10.3681 0C8.68308 0 7.30641 1.35529 7.30641 3.02824C7.30641 3.26824 7.33509 3.50118 7.38528 3.72C4.8327 3.59294 2.55975 2.38588 1.04685 0.557647C0.781549 1.00235 0.630975 1.52471 0.630975 2.07529C0.630975 3.12706 1.16874 4.05882 2.00048 4.58824C1.4914 4.58824 1.01816 4.44706 0.602295 4.23529V4.25647C0.602295 5.72471 1.66348 6.95294 3.06883 7.22824C2.61763 7.34979 2.14395 7.36671 1.68499 7.27765C1.87974 7.8794 2.26114 8.40594 2.77559 8.78325C3.29003 9.16055 3.91165 9.36967 4.55306 9.38118C3.4658 10.2285 2.11807 10.6866 0.731358 10.68C0.487572 10.68 0.243786 10.6659 0 10.6376C1.36233 11.4988 2.98279 12 4.71797 12C10.3681 12 13.4728 7.38353 13.4728 3.38118C13.4728 3.24706 13.4728 3.12 13.4656 2.98588C14.0679 2.56235 14.5841 2.02588 15 1.41176Z"
                            fill="black"
                          />
                        </svg>
                      )}
                    </div>

                    <p className="whitespace-nowrap">Chia sẻ lên Twiter</p>
                  </Option>
                  <Option threedot to="mailto: duchaidev@gmail.com">
                    <div className="w-5 h-5">
                      {darkMode === true ? (
                        <svg
                          width="16"
                          height="13"
                          viewBox="0 0 16 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4 0H1.6C0.72 0 0.00799999 0.73125 0.00799999 1.625L0 11.375C0 12.2688 0.72 13 1.6 13H14.4C15.28 13 16 12.2688 16 11.375V1.625C16 0.73125 15.28 0 14.4 0ZM14.08 3.45312L8.424 7.04437C8.168 7.20687 7.832 7.20687 7.576 7.04437L1.92 3.45312C1.83978 3.40739 1.76954 3.3456 1.71351 3.27149C1.65749 3.19739 1.61685 3.11251 1.59406 3.02199C1.57127 2.93147 1.5668 2.8372 1.58093 2.74487C1.59505 2.65255 1.62747 2.5641 1.67623 2.48487C1.72498 2.40564 1.78906 2.33728 1.86458 2.28393C1.9401 2.23058 2.0255 2.19335 2.1156 2.17449C2.2057 2.15563 2.29863 2.15554 2.38876 2.17421C2.4789 2.19288 2.56437 2.22993 2.64 2.28312L8 5.6875L13.36 2.28312C13.4356 2.22993 13.5211 2.19288 13.6112 2.17421C13.7014 2.15554 13.7943 2.15563 13.8844 2.17449C13.9745 2.19335 14.0599 2.23058 14.1354 2.28393C14.2109 2.33728 14.275 2.40564 14.3238 2.48487C14.3725 2.5641 14.405 2.65255 14.4191 2.74487C14.4332 2.8372 14.4287 2.93147 14.4059 3.02199C14.3832 3.11251 14.3425 3.19739 14.2865 3.27149C14.2305 3.3456 14.1602 3.40739 14.08 3.45312Z"
                            fill="white"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="13"
                          viewBox="0 0 16 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4 0H1.6C0.72 0 0.00799999 0.73125 0.00799999 1.625L0 11.375C0 12.2688 0.72 13 1.6 13H14.4C15.28 13 16 12.2688 16 11.375V1.625C16 0.73125 15.28 0 14.4 0ZM14.08 3.45312L8.424 7.04437C8.168 7.20687 7.832 7.20687 7.576 7.04437L1.92 3.45312C1.83978 3.40739 1.76954 3.3456 1.71351 3.27149C1.65749 3.19739 1.61685 3.11251 1.59406 3.02199C1.57127 2.93147 1.5668 2.8372 1.58093 2.74487C1.59505 2.65255 1.62747 2.5641 1.67623 2.48487C1.72498 2.40564 1.78906 2.33728 1.86458 2.28393C1.9401 2.23058 2.0255 2.19335 2.1156 2.17449C2.2057 2.15563 2.29863 2.15554 2.38876 2.17421C2.4789 2.19288 2.56437 2.22993 2.64 2.28312L8 5.6875L13.36 2.28312C13.4356 2.22993 13.5211 2.19288 13.6112 2.17421C13.7014 2.15554 13.7943 2.15563 13.8844 2.17449C13.9745 2.19335 14.0599 2.23058 14.1354 2.28393C14.2109 2.33728 14.275 2.40564 14.3238 2.48487C14.3725 2.5641 14.405 2.65255 14.4191 2.74487C14.4332 2.8372 14.4287 2.93147 14.4059 3.02199C14.3832 3.11251 14.3425 3.19739 14.2865 3.27149C14.2305 3.3456 14.1602 3.40739 14.08 3.45312Z"
                            fill="black"
                          />
                        </svg>
                      )}
                    </div>

                    <p className="whitespace-nowrap">Chia sẻ lên Email</p>
                  </Option>
                  <div
                    onClick={() => {
                      copy();
                    }}
                  >
                    <Option threedot blank="">
                      <div className="w-5 h-5">
                        {darkMode === true ? (
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 4.22263V3.125C5 2.82663 5.11853 2.54048 5.3295 2.3295C5.54048 2.11853 5.82663 2 6.125 2H15.875C16.1734 2 16.4595 2.11853 16.6705 2.3295C16.8815 2.54048 17 2.82663 17 3.125V12.875C17 13.1734 16.8815 13.4595 16.6705 13.6705C16.4595 13.8815 16.1734 14 15.875 14H14.7564"
                              stroke="white"
                              strokeWidth="3.33333"
                            />
                            <path
                              d="M13.625 4.25H3.125C2.50368 4.25 2 4.75368 2 5.375V15.875C2 16.4963 2.50368 17 3.125 17H13.625C14.2463 17 14.75 16.4963 14.75 15.875V5.375C14.75 4.75368 14.2463 4.25 13.625 4.25Z"
                              stroke="white"
                              strokeWidth="3.33333"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.41509 9.16625L9.39959 7.1C9.94372 6.55588 10.8385 6.5675 11.3976 7.127C11.9567 7.68613 11.9687 8.58088 11.4246 9.125L10.7083 9.88363M5.54984 11.2801C5.35859 11.4714 4.96297 11.8539 4.96297 11.8539C4.41847 12.398 4.40347 13.3681 4.96297 13.9276C5.52172 14.4864 6.41647 14.4988 6.96097 13.9543L8.89747 12.1963"
                              stroke="white"
                              strokeWidth="3.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.49858 11.123C7.24948 10.8755 7.09876 10.5459 7.07446 10.1956C7.06009 9.9991 7.08816 9.80179 7.15674 9.61707C7.22532 9.43235 7.33283 9.26453 7.47196 9.125M8.87033 10.1979C9.42946 10.757 9.44146 11.6518 8.89733 12.1963"
                              stroke="white"
                              strokeWidth="3.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 4.22263V3.125C5 2.82663 5.11853 2.54048 5.3295 2.3295C5.54048 2.11853 5.82663 2 6.125 2H15.875C16.1734 2 16.4595 2.11853 16.6705 2.3295C16.8815 2.54048 17 2.82663 17 3.125V12.875C17 13.1734 16.8815 13.4595 16.6705 13.6705C16.4595 13.8815 16.1734 14 15.875 14H14.7564"
                              stroke="black"
                              strokeWidth="3.33333"
                            />
                            <path
                              d="M13.625 4.25H3.125C2.50368 4.25 2 4.75368 2 5.375V15.875C2 16.4963 2.50368 17 3.125 17H13.625C14.2463 17 14.75 16.4963 14.75 15.875V5.375C14.75 4.75368 14.2463 4.25 13.625 4.25Z"
                              stroke="black"
                              strokeWidth="3.33333"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.41509 9.16625L9.39959 7.1C9.94372 6.55588 10.8385 6.5675 11.3976 7.127C11.9567 7.68613 11.9687 8.58088 11.4246 9.125L10.7083 9.88363M5.54984 11.2801C5.35859 11.4714 4.96297 11.8539 4.96297 11.8539C4.41847 12.398 4.40347 13.3681 4.96297 13.9276C5.52172 14.4864 6.41647 14.4988 6.96097 13.9543L8.89747 12.1963"
                              stroke="black"
                              strokeWidth="3.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.49858 11.123C7.24948 10.8755 7.09876 10.5459 7.07446 10.1956C7.06009 9.9991 7.08816 9.80179 7.15674 9.61707C7.22532 9.43235 7.33283 9.26453 7.47196 9.125M8.87033 10.1979C9.42946 10.757 9.44146 11.6518 8.89733 12.1963"
                              stroke="black"
                              strokeWidth="3.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>

                      <p className="whitespace-nowrap">Sao chép liên kết</p>
                    </Option>
                  </div>
                </List>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="mt-[30px]">
          <p className="text-sm italic font-normal leading-6 text-gray-600 dark:text-gray-400">
            {post?.subtitle}
          </p>
        </div>
        <div className="!text-gray-800 dark:!text-gray-100 entry-content">
          {parse(post?.content || "")}
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
