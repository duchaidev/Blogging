import React from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import Bglayout from "../components/layout/Bglayout";
import TitleAdd from "../components/title/TitleAdd";

const AddNewCategory = () => {
  const { control } = useForm({
    mode: "onChange",
    defaultValues: "",
  });

  return (
    <div className="min-h-screen">
      <div className="flex justify-between">
        <TitleAdd>Add new category</TitleAdd>
      </div>
      <Bglayout classname="">
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
        </div>
        <Button type="submit" className="mt-8">
          Upload
        </Button>
      </Bglayout>
    </div>
  );
};

export default AddNewCategory;
