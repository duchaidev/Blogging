import React from "react";
import Input from "../components/form/Input";
import { useForm } from "react-hook-form";
import Label from "../components/form/Label";
import Field from "../components/form/Field";
import InputPassword from "../components/form/InputPassword";
import { NavLink } from "react-router-dom";
import Button from "../components/form/Button";
import AuthenLayout from "../components/layout/AuthenLayout";
const LoginPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const submit = (value) => {
    console.log(value);
  };
  return (
    <AuthenLayout>
      <form
        className="flex flex-col w-[400px] mt-2"
        onSubmit={handleSubmit(submit)}
      >
        <Field>
          <Label name="email">Email address</Label>
          <Input name="email" type="text" control={control}></Input>
        </Field>
        <Field>
          <Label name="password">Password</Label>
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
        <Button type="submit" isloading={false}>
          Đăng nhập
        </Button>
      </form>
    </AuthenLayout>
  );
};

export default LoginPage;
