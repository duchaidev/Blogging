import * as yup from "yup";
import slugify from "slugify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFirebaseImg from "../../hook/useFirebaseImg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase-app/firebase-auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import TitleAdd from "../../components/title/TitleAdd";
import Bglayout from "../../components/layout/Bglayout";
import ImageUpload from "../../components/image/ImageUpload";
import Trash from "../../components/icon/Trash";
import Label from "../../components/form/Label";
import Input from "../../components/form/Input";
import InputPassword from "../../components/form/InputPassword";
import FieldCheckboxes from "../../components/radio/FieldCheckboxes";
import Radio from "../../components/radio/Radio";
import { useRole } from "../../utils/constants";
import Button from "../../components/form/Button";
import { useSearchParams } from "react-router-dom";

const schemaValidate = yup.object({
  fullname: yup.string().required("Enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Enter your email"),
});
const EditUser = () => {
  const [params] = useSearchParams();
  const userId = params.get("id");
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    getValues,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      role: 3,
      createAt: new Date(),
    },
    resolver: yupResolver(schemaValidate),
  });
  const watchRole = watch("role");
  const {
    progress,
    image,
    handleDeleteImg,
    onSelectImage,
    setImage,
    setProgress,
  } = useFirebaseImg(setValue, getValues);
  useEffect(() => {
    const errorsMessage = Object.values(errors);
    if (errorsMessage.length > 0) {
      toast.error(errorsMessage[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  useEffect(() => {
    const fetchUser = async () => {
      const colRef = doc(db, "users", userId);
      const singleDoc = await getDoc(colRef);
      reset({
        ...singleDoc.data(),
      });
    };
    fetchUser();
  }, []);
  const handleEditUser = async (values) => {
    const colRef = doc(db, "users", userId);
    values.username = slugify(values.username || values.fullname, {
      lower: true,
      replacement: "",
      trim: true,
    });
    if (image === "") {
      await updateDoc(colRef, { ...values });
    } else {
      await updateDoc(colRef, { ...values, avatar: image });
    }
    toast.success("Successfully!!!");
  };
  return (
    <div className="min-h-screen">
      <TitleAdd>Edit user</TitleAdd>
      <Bglayout>
        <form onSubmit={handleSubmit(handleEditUser)}>
          <div className="w-[140px] h-[140px] rounded-full mx-auto border-[3px] border-[#66FCF1] mt-5 relative group overflow-hidden">
            <ImageUpload
              className="!w-full !h-full border-none !rounded-full !mt-0"
              onChange={onSelectImage}
              progress={progress}
              image={image}
              handleDeleteimg={handleDeleteImg}
            ></ImageUpload>
            {image && (
              <button
                className="w-[55px] h-[55px] p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-gray-500 cursor-pointer invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all"
                onClick={handleDeleteImg}
              >
                <Trash></Trash>
              </button>
            )}
          </div>
          <div>
            <div className="flex flex-col w-full gap-10 mt-8">
              <div className="grid grid-cols-2 gap-x-[100px] gap-y-[30px]">
                <div>
                  <Label
                    htmlFor="fullname"
                    classname="text-lg font-semibold text-white"
                  >
                    Fullname
                  </Label>
                  <Input
                    control={control}
                    name="fullname"
                    kind="second"
                  ></Input>
                </div>
                <div>
                  <Label
                    htmlFor="username"
                    classname="text-lg font-semibold text-white"
                  >
                    Username
                  </Label>
                  <Input
                    control={control}
                    name="username"
                    kind="second"
                  ></Input>
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    classname="text-lg font-semibold text-white"
                  >
                    Email
                  </Label>
                  <Input
                    control={control}
                    name="email"
                    kind="second"
                    disabled
                  ></Input>
                </div>
                <div>
                  <Label
                    htmlFor="password"
                    classname="text-lg font-semibold text-white"
                  >
                    Password
                  </Label>
                  <InputPassword
                    disabled
                    control={control}
                    name="password"
                    kind="second"
                  ></InputPassword>
                </div>
                <div>
                  <Label
                    htmlFor="role"
                    classname="text-lg font-semibold text-white"
                  >
                    Role
                  </Label>
                  <FieldCheckboxes>
                    <Radio
                      control={control}
                      name="role"
                      checked={Number(watchRole) === useRole.ADMIN}
                      value={useRole.ADMIN}
                    >
                      Admin
                    </Radio>
                    <Radio
                      control={control}
                      name="role"
                      checked={Number(watchRole) === useRole.MOD}
                      value={useRole.MOD}
                    >
                      Mod
                    </Radio>
                    <Radio
                      control={control}
                      name="role"
                      checked={Number(watchRole) === useRole.USER}
                      value={useRole.USER}
                    >
                      User
                    </Radio>
                  </FieldCheckboxes>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="mt-5"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Update
            </Button>
          </div>
        </form>
      </Bglayout>
    </div>
  );
};

export default EditUser;
