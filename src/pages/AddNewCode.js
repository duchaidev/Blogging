import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import "react-quill/dist/quill.snow.css";
import Button from "../components/form/Button";
import TitleAdd from "../components/title/TitleAdd";
import ImageUpload from "../components/image/ImageUpload";
import useFirebaseImg from "../hook/useFirebaseImg";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../firebase-app/firebase-auth";
import { useAuth } from "../context/auth-context";
import { toast } from "react-toastify";
import slugify from "slugify";
import BgDashBoard from "../components/layout/dashboard/BgDashBoard";

const AddNewCode = () => {
  const { userInfo } = useAuth();

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
      urlcode: "",
      createdAt: serverTimestamp(),
    },
  });
  const watchHot = watch("hot");
  const {
    progress,
    image,
    handleDeleteImg,
    onSelectImage,
    setImage,
    setProgress,
  } = useFirebaseImg(setValue, getValues);

  useEffect(() => {
    async function fetchUser() {
      const q = query(
        collection(db, "users"),
        where("email", "==", String(userInfo.email))
      );
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((item) => {
        setValue("user", {
          id: item.id,
          avatar: item.data().avatar,
          email: item.data().email,
          fullname: item.data().fullname,
          role: item.data().role,
          createAt: item.data().createAt,
        });
      });
    }
    fetchUser();
  }, [setValue, userInfo.email, isSubmitting]);

  const handleUpload = async (value) => {
    if (value.title === "") {
      toast.error("Enter your title !");
      return;
    } else if (value.urlcode === "") {
      toast.error("Enter your url !");
      return;
    } else if (image === "") {
      toast.error("Chosee image demo !");
      return;
    }
    const cloneValue = { ...value };
    cloneValue.slug = slugify(value.slug || value.title, { lower: true });
    const colRef = collection(db, "code");
    await addDoc(colRef, {
      ...cloneValue,
      image,
      // createdAt: serverTimestamp(),
    });
    toast.success("Successfully!!!");
    reset({
      title: "",
      slug: "",
      hot: false,
      image: "",
      urlcode: "",
      createdAt: serverTimestamp(),
    });
    setImage("");
    setProgress(0);
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
        Add new code
      </TitleAdd>
      <BgDashBoard>
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
                classname="mb-2 text-lg font-semibold text-white"
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

            <div>
              <Label
                htmlFor="urlcode"
                classname="!mb-2 text-lg font-semibold text-white"
              >
                UrlCode
              </Label>
              <Input control={control} name="urlcode" kind="second"></Input>
            </div>
          </div>
        </div>
        <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
          Upload
        </Button>
      </BgDashBoard>
    </form>
  );
};

export default AddNewCode;
