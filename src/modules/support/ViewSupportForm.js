import { serverTimestamp } from "firebase/firestore";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import Address from "../../components/icon/Address";
import Email from "../../components/icon/Email";
import LogoSupport from "../../components/icon/LogoSupport";
import Phone from "../../components/icon/Phone";
import { db } from "../../firebase-app/firebase-auth";
import InfoItem from "./InfoItem";
import { useSearchParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

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
const ViewSupportForm = () => {
  const { control, reset } = useForm({
    defaultValues: {
      createdAt: serverTimestamp(),
    },
  });
  const [params] = useSearchParams();
  const messId = params.get("id");
  useEffect(() => {
    if (messId !== null) {
      async function getPosts() {
        const colRef = doc(db, "message", messId);
        const singleDoc = await getDoc(colRef);
        if (singleDoc.data()) {
          reset(singleDoc.data());
        }
      }
      getPosts();
    } else {
      return;
    }
  }, [messId, reset]);
  return (
    <StyleSupportForm>
      <div className="form">
        <div>
          <LogoSupport></LogoSupport>
        </div>
        <form className="bg-[#273F48] mt-8 pb-8 pt-6 px-10 rounded-md">
          <div>
            <div className="grid gap-2">
              <h2 className="text-[25px] font-bold text-center text-white mb-2">
                Liên hệ
              </h2>
              <Input
                control={control}
                type="text"
                name="name"
                kind="second"
                disabled
              ></Input>
              <Input
                control={control}
                type="text"
                name="title"
                kind="second"
                disabled
              ></Input>
              <Input
                control={control}
                type="number"
                name="zalo"
                kind="second"
                disabled
              ></Input>
              <Textarea
                control={control}
                name="messcontent"
                disabled
              ></Textarea>
            </div>
          </div>
        </form>
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

export default ViewSupportForm;
