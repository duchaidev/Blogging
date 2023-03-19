import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import AvtDefault from "../components/icon/AvtDefault";
import Trash from "../components/icon/Trash";
import Bglayout from "../components/layout/Bglayout";
import TitleAdd from "../components/title/TitleAdd";

const AddNewUser = () => {
  const { control } = useForm({
    mode: "onChange",
    defaultValues: "",
  });
  return (
    <div className="min-h-screen">
      <TitleAdd>Add new user</TitleAdd>
      <Bglayout>
        <div>
          <div className="w-[140px] h-[140px] rounded-full mx-auto border-[3px] border-[#66FCF1] mt-5 relative group">
            <AvtDefault></AvtDefault>
            <button className="w-[55px] h-[55px] p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-gray-500 cursor-pointer invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
              <Trash></Trash>
            </button>
            {/* <img src="" alt="" /> */}
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
                  <Input
                    control={control}
                    name="password"
                    kind="second"
                  ></Input>
                </div>
                <div>
                  <Label
                    htmlFor="username"
                    classname="text-lg font-semibold text-white"
                  >
                    Role
                  </Label>
                  <Input
                    control={control}
                    name="username"
                    kind="second"
                  ></Input>
                </div>
              </div>
            </div>
            <Button type="submit" className="mt-5">
              Upload
            </Button>
          </div>
        </div>
      </Bglayout>
    </div>
  );
};

export default AddNewUser;
