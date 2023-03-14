import React from "react";
import Input from "../components/form/Input";
import { useForm } from "react-hook-form";
import Label from "../components/form/Label";
import AuthenLayout from "./AuthenLayout";
import Field from "../components/form/Field";
import InputPassword from "../components/form/InputPassword";
const LoginPage = () => {
  const { control } = useForm({
    defaultValues: {
      firstName: "",
    },
  });
  return (
    <AuthenLayout>
      <form className="flex flex-col w-[400px] mt-2">
        <Field>
          <Label name="email">Email address</Label>
          <Input name="email" type="text" control={control}></Input>
        </Field>
        <Field>
          <Label name="password">Password</Label>
          <InputPassword name="password" control={control}></InputPassword>
        </Field>
      </form>
    </AuthenLayout>
  );
};

export default LoginPage;
