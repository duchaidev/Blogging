import { signOut } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../context/auth-context";
import { auth, db } from "../../firebase-app/firebase-auth";
import DropdownHeader from "../dropdown/dropdownHeader/DropdownHeader";
import ListHeader from "../dropdown/dropdownHeader/ListHeader";
import OptionHeader from "../dropdown/dropdownHeader/OptionHeader";
import SelectHeader from "../dropdown/dropdownHeader/SelectHeader";
const StyleHomePage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backround};
  .header {
    position: fixed;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid ${(props) => props.theme.placehv};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    background-color: ${(props) => props.theme.backround};
    z-index: 100;
    .header-left {
      display: flex;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.bginput};
      img {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        margin-right: 10px;
      }
      h3 {
        font-size: 20px;
        font-weight: 600;
      }
    }
    .input {
      width: 400px;
      height: 35px;
      color: white;
      input {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: ${(props) => props.theme.bgSearch};
        padding: 10px 30px;
        outline: none;
        transition: 0.3s all;
        border: 1px solid transparent;
      }
      input:focus {
        border: 1px solid ${(props) => props.theme.bgButton};
        background-color: #2e545b;
      }
    }
    .header-right {
      width: 150px;
      height: 50px;
      background-color: ${(props) => props.theme.bgButton};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
    }
  }
`;
const Header = () => {
  const [user, setUser] = useState([]);
  const { userInfo } = useAuth();
  // const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      async function fetchUser() {
        const q = query(
          collection(db, "users"),
          where("email", "==", String(userInfo?.email))
        );
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((item) => {
          setUser({
            id: item.id,
            avatar: item.data().avatar,
            email: item.data().email,
            fullname: item.data().fullname,
            role: item.data().role,
            createAt: item.data().createAt,
          });
        });
      }
      fetchUser();
    }
  }, [userInfo]);

  return (
    <StyleHomePage>
      <div className="header">
        <div className="header-left">
          <div>
            <NavLink to={"/"}>
              <img src="logoo.png" alt="logo" />
            </NavLink>
          </div>
          <h3>DH Blogging</h3>
        </div>
        <div className="input">
          <input type="text" placeholder="Tìm kiếm blog, tài liệu...." />
        </div>
        {userInfo?.email ? (
          <div className="z-10 flex items-end gap-5">
            <div className="header-right z-1">
              <NavLink to={"/manage/user"} className="w-full h-full z-1">
                <button className="w-full h-full">Dashboard</button>
              </NavLink>
            </div>

            <div className="z-50 w-12 h-12 bg-white rounded-full">
              <div className="z-50 w-full h-full rounded-full">
                <DropdownHeader>
                  <SelectHeader
                    classname=""
                    avatar={user?.avatar}
                  ></SelectHeader>
                  <ListHeader>
                    <OptionHeader to="" blank="">
                      <div className="flex items-center gap-4">
                        <div className="overflow-hidden rounded-full w-14 h-14">
                          <img
                            src={user?.avatar || "/avtdf.png"}
                            alt="avtart"
                            className="object-cover w-full h-full rounded-full"
                          />
                        </div>
                        <div className="flex flex-col gap-[2px]">
                          <p className="text-white !opacity-100 whitespace-nowrap font-semibold">
                            {user?.fullname ||
                              String(user?.email).slice(0, 8) ||
                              ""}
                          </p>
                          <span className="text-sm italic !text-gray-400 whitespace-nowrap">
                            {new Date(
                              user?.createdAt?.seconds * 1000
                            ).toLocaleDateString("vi-VI")}
                          </span>
                        </div>
                      </div>
                    </OptionHeader>
                    <OptionHeader to="/add-new-post">
                      <p className="whitespace-nowrap">Viết Blog</p>
                    </OptionHeader>
                    <OptionHeader to="/add-new-post/admin">
                      <p className="whitespace-nowrap">Viết Blog Admin</p>
                    </OptionHeader>
                    <OptionHeader to="/manage-post">
                      <p className="whitespace-nowrap">Bài viết của tôi</p>
                    </OptionHeader>
                    <OptionHeader to="/change-password">
                      <p className="whitespace-nowrap">Cài đặt</p>
                    </OptionHeader>
                    <div>
                      <OptionHeader
                        threedot
                        blank=""
                        className="!border-b-transparent"
                      >
                        <p
                          className="whitespace-nowrap"
                          onClick={() => signOut(auth)}
                        >
                          Đăng xuất
                        </p>
                      </OptionHeader>
                    </div>
                  </ListHeader>
                </DropdownHeader>
              </div>
            </div>
          </div>
        ) : (
          <div className="header-right">
            <NavLink to={"/sign-up"} className="w-full h-full">
              <button className="w-full h-full">Sign Up</button>
            </NavLink>
          </div>
        )}
      </div>
    </StyleHomePage>
  );
};

export default Header;
