import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import Button from "../../components/form/Button";
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import Address from "../../components/icon/Address";
import Email from "../../components/icon/Email";
import LogoSupport from "../../components/icon/LogoSupport";
import Phone from "../../components/icon/Phone";
import { useAuth } from "../../context/auth-context";
import { db } from "../../firebase-app/firebase-auth";
import InfoItem from "./InfoItem";

const StyleSupportForm = styled.div`
padding-bottom: 30px;

@media (min-width: 1024px){
    .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  }
  
  @media (min-width: 0px) and (max-width: 1023px) {
    .form {
    display: flex;
    flex-direction: column;
  }
  }
  @media (min-width: 1024px){ 
    .info {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }
  }
  @media (min-width: 0px) and (max-width: 1023px) {
    .info {
      display:flex;
      flex-direction: column;
    }
  }
`;
const SupportForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      createdAt: serverTimestamp(),
    },
  });
  const { userInfo } = useAuth();

  useEffect(() => {
    if (userInfo?.email) {
      async function fetchUser() {
        const q = query(
          collection(db, "users"),
          where("email", "==", String(userInfo.email))
        );
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((item) => {
          reset({
            name: item.data().fullname,
          });
          setValue("user", {
            id: item.id,
            avatar: item.data().avatar,
            email: item.data().email,
            name: item.data().fullname,
            role: item.data().role,
            createdAt: item.data().createdAt,
          });
        });
      }
      fetchUser();
    }
  }, [reset, setValue, userInfo]);

  const handleMessage = async (value) => {
    const colRef = collection(db, "message");

    await addDoc(colRef, {
      ...value,
      createdAt: serverTimestamp(),
    });
    toast.success("Successfully!!!");
    reset({
      name: getValues().name,
      title: "",
      zalo: "",
      messcontent: "",
      createdAt: serverTimestamp(),
    });
  };
  return (
    <StyleSupportForm>
      <div className="form">
        <div>
          <LogoSupport></LogoSupport>
        </div>
        <div className="bg-[#273F48] mt-8 pb-8 sm:px-2 pt-6 px-10 rounded-md">
          <form onSubmit={handleSubmit(handleMessage)}>
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

              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}
              >
                Send Message
              </Button>
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
