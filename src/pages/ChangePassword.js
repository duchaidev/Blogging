import { updatePassword } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import InputPassword from "../components/form/InputPassword";
import Label from "../components/form/Label";
import Trash from "../components/icon/Trash";
import TitleAdd from "../components/title/TitleAdd";
import { useAuth } from "../context/auth-context";
import { auth, db } from "../firebase-app/firebase-auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useFirebaseImg from "../hook/useFirebaseImg";
import { toast } from "react-toastify";
import ImageUpload from "../components/image/ImageUpload";
import slugify from "slugify";
import BgDashBoard from "../components/layout/dashboard/BgDashBoard";
import { useNavigate } from "react-router-dom";

const schemaValidate = yup.object({
  fullname: yup.string().required("Enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Enter your email"),
});

const ChangePassword = () => {
  const {
    control,
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
    },
    resolver: yupResolver(schemaValidate),
  });

  const navigate = useNavigate();
  const { userInfo } = useAuth();
  if (!userInfo?.email) navigate("/");
  const imageUrl = getValues("avatar");
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (userInfo) {
      async function fetchUser() {
        const q = query(
          collection(db, "users"),
          where("email", "==", String(userInfo.email))
        );
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((item) => {
          setUser({
            ...item.data(),
          });
          reset({
            fullname: item?.data()?.fullname || "",
            username: item?.data()?.username || "",
            email: item?.data()?.email || "",
            avatar: item?.data().avatar,
          });
        });
      }
      fetchUser();
    }
  }, [reset, userInfo]);
  const { progress, image, setImage, handleDeleteImg, onSelectImage } =
    useFirebaseImg(setValue, getValues);

  useEffect(() => {
    setImage(imageUrl);
  }, [imageUrl, setImage]);
  useEffect(() => {
    const errorsMessage = Object.values(errors);
    if (errorsMessage.length > 0) {
      toast.error(errorsMessage[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);

  const handleChangePassword = async (values) => {
    if (values.email === "") {
      toast.error("Enter your email");
      return;
    } else if (values.password === "") {
      toast.error("Enter your password");
      return;
    }
    console.log(values);
    let userId = "";
    const q = query(
      collection(db, "users"),
      where("email", "==", String(userInfo?.email))
    );
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((item) => {
      userId = item.id;
    });
    values.username = slugify(values.username || values.fullname, {
      lower: true,
      replacement: "",
      trim: true,
    });
    const colRef = doc(db, "users", userId);
    if (values.password !== userInfo?.password) {
      toast.error("Password not same !");
      return;
    }
    if (values.new_password !== values.renew_password) {
      toast.error("Password not same!");
      return;
    }
    if (
      values.new_password &&
      values.password === user?.password &&
      values.new_password === values.renew_password
    ) {
      if (image === "") {
        await updateDoc(colRef, { ...values, createdAt: user?.createdAt });
      } else {
        await updateDoc(colRef, {
          ...user,
          fullname: values.fullname,
          username: values.username,
          avatar: image,
          password: values.new_password,
          createdAt: user?.createdAt,
        });
      }
      await updatePassword(auth.currentUser, values.new_password);
      toast.success("Successfully!!!");
    } else if (
      values.password === user?.password &&
      values.new_password === "" &&
      values.renew_password === ""
    ) {
      if (image === "") {
        await updateDoc(colRef, { ...values, createdAt: user?.createdAt });
      } else {
        await updateDoc(colRef, {
          ...user,
          fullname: values.fullname,
          username: values.username,
          avatar: image,
          createdAt: user?.createdAt,
        });
      }
      toast.success("Successfully!!!");
    } else {
      toast.error("Fail!!!");
    }
    reset({
      fullname: user?.fullname,
      username: user?.username,
      email: user?.email,
      password: "",
      new_password: "",
      renew_password: "",
    });
    setImage(imageUrl);
  };
  return (
    <form
      className="min-h-screen"
      onSubmit={handleSubmit(handleChangePassword)}
    >
      <TitleAdd isSubmitting={isSubmitting}>Change Password</TitleAdd>
      <BgDashBoard>
        <div>
          <div className="w-[140px] h-[140px] rounded-full mx-auto border-[3px] border-[#66FCF1] mt-5 relative group">
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
                    UserName
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
                    control={control}
                    name="password"
                    kind="second"
                  ></InputPassword>
                </div>
                <div>
                  <Label
                    htmlFor="new_password"
                    classname="text-lg font-semibold text-white"
                  >
                    New Password
                  </Label>
                  <InputPassword
                    control={control}
                    name="new_password"
                    kind="second"
                  ></InputPassword>
                </div>
                <div>
                  <Label
                    htmlFor="renew_password"
                    classname="text-lg font-semibold text-white"
                  >
                    ReNew Password
                  </Label>
                  <InputPassword
                    control={control}
                    name="renew_password"
                    kind="second"
                  ></InputPassword>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="mt-5"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Upload
            </Button>
          </div>
        </div>
      </BgDashBoard>
    </form>
  );
};

export default ChangePassword;
