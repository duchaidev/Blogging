import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../components/form/Button";
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import Address from "../../components/icon/Address";
import Email from "../../components/icon/Email";
import LogoSupport from "../../components/icon/LogoSupport";
import Phone from "../../components/icon/Phone";
import InfoItem from "./InfoItem";

const StyleSupportForm = styled.div`
  .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;
const SupportForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const submit = (value) => {
    console.log(value);
  };
  return (
    <StyleSupportForm>
      <div className="form">
        <div>
          <LogoSupport></LogoSupport>
        </div>
        <div className="bg-[#273F48] mt-8 pb-8 pt-6 px-10 rounded-md">
          <form onSubmit={handleSubmit(submit)}>
            <div className="grid gap-2">
              <h2 className="text-[25px] font-bold text-center text-white mb-2">
                Liên hệ
              </h2>
              <Input
                control={control}
                type="text"
                name="name"
                kind="second"
              ></Input>
              <Input
                control={control}
                type="text"
                name="title"
                kind="second"
              ></Input>
              <Input
                control={control}
                type="number"
                name="zalo"
                kind="second"
              ></Input>
              <Textarea control={control} name="messcontent"></Textarea>

              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="info">
        <InfoItem
          icon={<Phone></Phone>}
          title="Phone number"
          info="034-333-5657"
        ></InfoItem>
        <InfoItem
          icon={<Email></Email>}
          title="Email address"
          info="duchaidev@gmail.com"
        ></InfoItem>
        <InfoItem
          icon={<Address></Address>}
          title="My address"
          info="Hà Đông - Hà Nội - Việt Nam"
        ></InfoItem>
      </div>
    </StyleSupportForm>
  );
};

export default SupportForm;
