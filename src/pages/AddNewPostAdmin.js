import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../components/form/Button";
import TitleAdd from "../components/title/TitleAdd";
import ImageUpload from "../components/image/ImageUpload";
import useFirebaseImg from "../hook/useFirebaseImg";
import Dropdown from "../components/dropdown/Dropdown";
import Select from "../components/dropdown/Select";
import List from "../components/dropdown/List";
import Option from "../components/dropdown/Option";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../firebase-app/firebase-auth";
import { useAuth } from "../context/auth-context";
import slugify from "slugify";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import BgDashBoard from "../components/layout/dashboard/BgDashBoard";

const AddNewPostAdmin = () => {
  document.title = "Add New Post AD";
  const { userInfo } = useAuth();
  const [params] = useSearchParams();
  const postId = params.get("id");
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    getValues,
    reset,
    formState: { isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      hot: false,
      image: "",
      createdAt: serverTimestamp(),
    },
  });
  const watchHot = watch("hot");
  const [category, setCategory] = useState({});
  const [selectCategory, setSelecCategory] = useState({});

  useEffect(() => {
    if (postId !== null) {
      async function getPosts() {
        const colRef = doc(db, "posts", postId);
        const singleDoc = await getDoc(colRef);
        console.log(singleDoc.data());
        if (singleDoc.data()) {
          reset(singleDoc.data());
          setContent(singleDoc.data()?.content);
          setSelecCategory(singleDoc.data()?.category || "IT");
        }
      }
      getPosts();
    }
  }, [postId, reset]);

  const {
    progress,
    image,
    handleDeleteImg,
    onSelectImage,
    setImage,
    setProgress,
  } = useFirebaseImg(setValue, getValues);
  const [content, setContent] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote"],
      [{ header: 1 }, { header: 2 }, { header: 3 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link", "image"],
    ],
  };
  useEffect(() => {
    async function fetchUser() {
      const q = query(
        collection(db, "users"),
        where("email", "==", userInfo.email)
      );
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((item) => {
        setValue("user", {
          id: item.id,
          avatar: item.data().avatar,
          email: item.data().email,
          fullname: item.data().fullname,
          role: item.data().role,
          createdAt: item.data().createdAt,
        });
      });
    }
    fetchUser();
  }, [setValue, userInfo.email, isSubmitting]);
  useEffect(() => {
    const fetchCategory = async () => {
      const colRef = collection(db, "categories");
      const docSnap = await getDocs(colRef);
      const result = [];
      docSnap.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategory(result);
    };
    fetchCategory();
  }, []);
  const handleCategory = (item) => {
    setValue("category", { ...item });
    setSelecCategory(item);
  };
  const handleUpload = async (value) => {
    if (value.title === "") {
      toast.error("Enter your title");
      return;
    } else if (value.category === undefined) {
      toast.error("Choose Category");
      return;
    } else if (value.content === "") {
      toast.error("Enter your content");
      return;
    }
    const cloneValue = { ...value };
    cloneValue.slug = slugify(value.slug || value.title, { lower: true });
    const colRef = collection(db, "posts");
    await addDoc(colRef, {
      ...cloneValue,
      image,
      subtitle: subtitle.target.value,
      content,
      createdAt: serverTimestamp(),
    });
    toast.success("Successfully!!!");
    reset({
      title: "",
      slug: "",
      hot: false,
      image: "",
      createdAt: serverTimestamp(),
    });
    setContent("");
    setImage("");
    setProgress(0);
    setSubTitle("");
    setSelecCategory({});
  };

  return (
    <form className="min-h-screen" onSubmit={handleSubmit(handleUpload)}>
      <TitleAdd
        isSubmitting={isSubmitting}
        admin={true}
        on={watchHot === true}
        onClick={() => {
          setValue("hot", !watchHot);
        }}
      >
        Add new post Admin
      </TitleAdd>
      <BgDashBoard>
        <div className="flex flex-col w-full gap-10">
          <div className="grid grid-cols-2 gap-[100px]">
            <div>
              <Label
                htmlFor="title"
                classname="text-lg font-semibold text-black dark:text-white"
              >
                Title
              </Label>
              <Input
                control={control}
                name="title"
                kind="second"
                className="dark:focus:!text-white"
              ></Input>
            </div>
            <div>
              <Label
                htmlFor="slug"
                classname="text-lg font-semibold text-black dark:text-white"
              >
                Slug
              </Label>
              <Input
                control={control}
                name="slug"
                kind="second"
                className="dark:focus:text-white"
              ></Input>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[100px]">
            <div>
              <Label
                htmlFor="image"
                classname="mb-2 text-lg font-semibold text-black dark:text-white"
              >
                Image
              </Label>
              <ImageUpload
                onChange={onSelectImage}
                progress={progress}
                image={image}
                handleDeleteimg={handleDeleteImg}
              ></ImageUpload>
            </div>
            <div className="w-full h-full">
              <Label
                htmlFor="subtitle"
                classname="mb-2 text-lg font-semibold text-black dark:text-white"
              >
                SubTitle
              </Label>
              <textarea
                name="subtitle"
                id="subtitle"
                className="w-full h-[90%] mt-2 dark:bg-[#788DA9] bg-[#fff] outline-none
                transition-all border dark:border-transparent px-5 py-2 rounded-lg text-black placeholder:text-slate-600 border-gray-600
                dark:focus:bg-[#274047] dark:focus:text-white dark:focus:border-[#66FCF1]"
                placeholder="Enter your subtitle"
                onChange={setSubTitle}
              ></textarea>
            </div>
            <div className="mt-[-60px] z-10">
              <Label
                htmlFor="category"
                classname="text-lg font-semibold text-white"
              >
                Category
              </Label>
              <Dropdown>
                <Select
                  threedot={false}
                  placehoder={`${selectCategory.category || "Select Category"}`}
                ></Select>
                <List>
                  {category.length > 0 &&
                    category.map((item) => (
                      <Option
                        key={item.id}
                        onClick={() => {
                          handleCategory(item);
                        }}
                      >
                        {item.category}
                      </Option>
                    ))}
                </List>
              </Dropdown>
            </div>
          </div>
          <div>
            <ReactQuill
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
              className="entry-content"
            />
          </div>
        </div>
        <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
          Upload
        </Button>
      </BgDashBoard>
    </form>
  );
};

export default AddNewPostAdmin;
