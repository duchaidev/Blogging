import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import Bglayout from "../components/layout/Bglayout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../components/form/Button";
import TitleAdd from "../components/title/TitleAdd";
import ImageUpload from "../components/image/ImageUpload";
import useFirebaseImg from "../hook/useFirebaseImg";
const AddNewPostUser = () => {
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      status: 2,
      title: "",
      slug: "",
      category: "",
      hot: false,
      image: "",
    },
  });
  const {
    progress,
    image,
    handleDeleteImg,
    onSelectImage,
    setImage,
    setProgress,
  } = useFirebaseImg(setValue, getValues);
  const [content, setContent] = useState("");

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
  return (
    <div className="min-h-screen">
      <TitleAdd>Add new post</TitleAdd>
      <Bglayout>
        <div className="flex flex-col w-full gap-10">
          <div className="grid grid-cols-2 gap-[100px]">
            <div>
              <Label
                htmlFor="title"
                classname="text-lg font-semibold text-white"
              >
                Title
              </Label>
              <Input control={control} name="title" kind="second"></Input>
            </div>
            <div>
              <Label
                htmlFor="slug"
                classname="text-lg font-semibold text-white"
              >
                Slug
              </Label>
              <Input control={control} name="slug" kind="second"></Input>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[100px]">
            <div>
              <Label
                htmlFor="image"
                classname="text-lg font-semibold text-white"
              >
                Image
              </Label>
              <ImageUpload
                className="w-[350px]"
                onChange={onSelectImage}
                progress={progress}
                image={image}
                handleDeleteImg={handleDeleteImg}
              ></ImageUpload>
            </div>
            <div>
              <Label
                htmlFor="category"
                classname="text-lg font-semibold text-white"
              >
                Category
              </Label>
            </div>
          </div>
          <div>
            <ReactQuill
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
              className="text-white "
            />
          </div>
        </div>
        <Button type="submit">Upload</Button>
      </Bglayout>
    </div>
  );
};

export default AddNewPostUser;
