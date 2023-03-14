import React from "react";
import Input from "../components/form/Input";
import { useForm } from "react-hook-form";
import Label from "../components/form/Label";
import AuthenLayout from "./AuthenLayout";
import Field from "../components/form/Field";
import InputPassword from "../components/form/InputPassword";
import { NavLink } from "react-router-dom";
import Button from "../components/form/Button";
const SignUpPage = () => {
  const { control } = useForm({
    defaultValues: {
      email: "",
    },
  });
  return (
    <AuthenLayout>
      <form className="flex flex-col w-[400px] mt-0">
        <Field>
          <Label name="email">Email address</Label>
          <Input name="email" type="text" control={control}></Input>
        </Field>
        <Field>
          <Label name="password">Password</Label>
          <InputPassword name="password" control={control}></InputPassword>
        </Field>
        <Field>
          <Label name="password">Password</Label>
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
        <Button type="submit" isloading={false}>
          Đăng nhập
        </Button>
      </form>
    </AuthenLayout>
  );
};

export default SignUpPage;
