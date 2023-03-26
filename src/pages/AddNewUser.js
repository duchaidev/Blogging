import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import InputPassword from "../components/form/InputPassword";
import Label from "../components/form/Label";
import Trash from "../components/icon/Trash";
import ImageUpload from "../components/image/ImageUpload";
import FieldCheckboxes from "../components/radio/FieldCheckboxes";
import Radio from "../components/radio/Radio";
import TitleAdd from "../components/title/TitleAdd";
import useFirebaseImg from "../hook/useFirebaseImg";
import { useRole } from "../utils/constants";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import slugify from "slugify";
import BgDashBoard from "../components/layout/dashboard/BgDashBoard";

const schemaValidate = yup.object({
  fullname: yup.string().required("Enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Enter your email"),
  password: yup.string().required("Enter your password"),
});
const AddNewUser = () => {
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
  const handleCreateUser = async (values) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await addDoc(collection(db, "users"), {
      fullname: values.fullname,
      username: slugify(values.username || values.fullname, {
        lower: true,
        replacement: "",
        trim: true,
      }),
      email: values.email,
      role: values.role,
      avatar: image,
      createdAt: serverTimestamp(),
    });
    toast.success("Successfully!!!");
    reset({
      fullname: "",
      username: "",
      email: "",
      password: "",
      image: "",
      role: 3,
      createAt: new Date(),
    });
    setImage("");
    setProgress(0);
  };
  return (
    <div className="min-h-screen">
      <TitleAdd>Add new user</TitleAdd>
      <BgDashBoard>
        <form onSubmit={handleSubmit(handleCreateUser)}>
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
                  <Input control={control} name="email" kind="second"></Input>
                </div>
                <div>
                  <Label
                    htmlFor="password"
                    classname="text-lg font-semibold text-white"
                  >
                    Password
                  </Label>
                  <InputPassword
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
              Create
            </Button>
          </div>
        </form>
      </BgDashBoard>
    </div>
  );
};

export default AddNewUser;
