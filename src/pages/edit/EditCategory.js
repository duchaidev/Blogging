import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/form/Button";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import TitleAdd from "../../components/title/TitleAdd";
import { toast } from "react-toastify";
import slugify from "slugify";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-auth";
import { useSearchParams } from "react-router-dom";
import BgDashBoard from "../../components/layout/dashboard/BgDashBoard";

const EditCategory = () => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      category: "",
      slug: "",
      createdAt: new Date(),
    },
  });
  const [params] = useSearchParams();
  const cateId = params.get("id");
  console.log(cateId);
  useEffect(() => {
    if (cateId) {
      async function fetchCategory() {
        const colRef = doc(db, "categories", cateId);
        const singleDoc = await getDoc(colRef);
        if (singleDoc.data()) {
          reset(singleDoc.data());
        }
      }
      fetchCategory();
    }
  }, [cateId]);
  const handleUpdateCategory = async (values) => {
    if (values.category === "") {
      toast.dark("Enter your category");
      return;
    }
    try {
      values.slug = slugify(values.slug || values.category, {
        lower: true,
      });
      const colRef = doc(db, "categories", cateId);
      await updateDoc(colRef, {
        ...values,
      });
      toast.success("Successfully!!!");
    } catch (err) {
      toast.error("False");
    }
  };
  return (
    <div className="min-h-screen">
      <div className="flex justify-between">
        <TitleAdd>Edit category</TitleAdd>
      </div>
      <BgDashBoard classname="">
        <form onSubmit={handleSubmit(handleUpdateCategory)}>
          <div className="flex flex-col w-full gap-10">
            <div className="grid grid-cols-2 gap-[100px]">
              <div>
                <Label
                  htmlFor="category"
                  classname="text-lg font-semibold text-white"
                >
                  Category
                </Label>
                <Input control={control} name="category" kind="second"></Input>
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
          <Button
            type="submit"
            className="mt-8"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Upload
          </Button>
        </form>
      </BgDashBoard>
    </div>
  );
};

export default EditCategory;
