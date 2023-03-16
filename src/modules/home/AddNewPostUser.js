import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import Bglayout from "../../components/layout/Bglayout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/form/Button";
import TitleAdd from "../../components/title/TitleAdd";

const AddNewPostUser = () => {
  const { control } = useForm({
    mode: "onChange",
    defaultValues: "",
  });
  const [value, setValue] = useState("");

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
              theme="snow"
              value={value}
              onChange={setValue}
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
