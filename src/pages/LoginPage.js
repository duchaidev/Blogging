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
import { useAuth } from "../context/auth-context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-app/firebase-auth";
import { toast } from "react-toastify";
import * as yup from "yup";

const LoginPage = () => {
  const schemaValidate = yup.object({
    email: yup
      .string()
      .required("Please your email")
      .email("Please enter valid email address"),

    password: yup
      .string()
      .required("Please your password")
      .min(6, "Your password must be at least 8 characters or greater"),
  });
  const navigate = useNavigate();
  document.title = "Login";
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaValidate),
  });
  const { userInfo } = useAuth();
  useEffect(() => {
    if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  useEffect(() => {
    const errorsMessage = Object.values(errors);
    if (errorsMessage.length > 0) {
      toast.error(errorsMessage[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  const submit = async (value) => {
    if (!isValid) return;
    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      toast.success("Successfully!!!");
      navigate("/");
    } catch (error) {
      if (error.message.includes("wrong-password"))
        toast.error("It seems your password was wrong");
    }
  };

  return (
    <AuthenLayout>
      <form
        className="flex flex-col w-[400px] mt-2"
        onSubmit={handleSubmit(submit)}
      >
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
            Bạn chưa có tài khoản?
            <NavLink to={"/sign-up"} className="font-bold text-red-600">
              Đăng kí
            </NavLink>
          </span>
        </div>
        <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
          Đăng nhập
        </Button>
      </form>
    </AuthenLayout>
  );
};

export default LoginPage;
