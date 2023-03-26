import React, { useEffect } from "react";
import Input from "../components/form/Input";
import { useForm } from "react-hook-form";
import Label from "../components/form/Label";
import Field from "../components/form/Field";
import InputPassword from "../components/form/InputPassword";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/form/Button";
import AuthenLayout from "../components/layout/AuthenLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRole } from "../utils/constants";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth-context";
const schemaValidate = yup.object({
  fullname: yup.string().required("Please your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please your email"),
  password: yup
    .string()
    .required("Please your password")
    .min(6, "Your password must be at least 8 characters or greater"),
});
const SignUpPage = () => {
  const navigate = useNavigate();

  const { userInfo } = useAuth();
  useEffect(() => {
    if (userInfo?.email) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  document.title = "Sign Up";

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaValidate),
  });
  const handleSignUp = async (value) => {
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, value.email, value.password);
    await updateProfile(auth.currentUser, {
      displayName: value.fullname,
      photoURL: "/avtdf.png",
    });
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      fullname: value.fullname,
      password: value.password,
      email: value.email,
      avatar: "/avtdf.png",
      avatardf: "/avtdf.png",
      role: useRole.USER,
      createAt: serverTimestamp(),
    });
    toast.success("Successfully!!!");
    navigate("/");
  };

  useEffect(() => {
    const errorsMessage = Object.values(errors);
    if (errorsMessage.length > 0) {
      toast.error(errorsMessage[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  return (
    <AuthenLayout>
      <form
        className="flex flex-col w-[400px] mt-0"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <Field>
          <Label htmlFor="fullname">Fullname</Label>
          <Input type="text" name="fullname" control={control} />
        </Field>
        <Field>
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" name="email" control={control} />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <InputPassword name="password" control={control}></InputPassword>
        </Field>

        <div>
          <span className="text-xs">
            Bạn đã có tài khoản?
            <NavLink to={"/login"} className="font-bold text-red-600">
              Đăng nhập
            </NavLink>
          </span>
        </div>
        <Button type="submit" isloading={isSubmitting} disable={isSubmitting}>
          Đăng nhập
        </Button>
      </form>
    </AuthenLayout>
  );
};

export default SignUpPage;
