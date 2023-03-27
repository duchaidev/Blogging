import { collection, getDocs, query, where } from "firebase/firestore";
import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/auth-context";
import { db } from "./firebase-app/firebase-auth";
import { useRole } from "./utils/constants";
// import { AuthProvider, useAuth } from "./context/auth-context";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const Support = React.lazy(() => import("./pages/Support"));
const Map = React.lazy(() => import("./pages/Map"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const AddNewPostAdmin = React.lazy(() => import("./pages/AddNewPostAdmin"));
const AddNewCategory = React.lazy(() => import("./pages/AddNewCategory"));
const AddNewUser = React.lazy(() => import("./pages/AddNewUser"));
const AddNewPostUser = React.lazy(() => import("./pages/AddNewPostUser"));
const ChangePassword = React.lazy(() => import("./pages/ChangePassword"));
const ViewMess = React.lazy(() => import("./pages/ViewMess"));
const AddNewCode = React.lazy(() => import("./pages/AddNewCode"));
const ManagePostUser = React.lazy(() => import("./pages/ManagePostUser"));
const CodePage = React.lazy(() => import("./pages/CodePage"));
const EditPost = React.lazy(() => import("./modules/edit/EditPost"));
const EditCategory = React.lazy(() => import("./modules/edit/EditCategory"));
const EditUser = React.lazy(() => import("./modules/edit/EditUser"));

const Layout = React.lazy(() =>
  import("./components/layout/layoutmain/Layout")
);
const DashBoardLayout = React.lazy(() =>
  import("./components/layout/dashboard/DashBoardLayout")
);
const DetailBlog = React.lazy(() => import("./modules/details/DetailBlog"));

const DashBoardUser = React.lazy(() =>
  import("./modules/dashboard/DashBoardUser")
);
const DashBoardCategory = React.lazy(() =>
  import("./modules/dashboard/DashBoardCategory")
);
const DashBoardPosts = React.lazy(() =>
  import("./modules/dashboard/DashBoardPosts")
);
const DashBoardMess = React.lazy(() =>
  import("./modules/dashboard/DashBoardMess")
);
const DashBoardCode = React.lazy(() =>
  import("./modules/dashboard/DashBoardCode")
);

function App() {
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
    <div>
      <Suspense
        fallback={<div className="bg-[#1F2833] min-h-screen">...Loading</div>}
      >
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          {userInfo?.email && Number(user.role) === Number(useRole.ADMIN) && (
            <Route element={<DashBoardLayout></DashBoardLayout>}>
              <Route
                path="/manage/user"
                element={<DashBoardUser></DashBoardUser>}
              ></Route>
              <Route
                path="/manage/category"
                element={<DashBoardCategory></DashBoardCategory>}
              ></Route>
              <Route
                path="/manage/posts"
                element={<DashBoardPosts></DashBoardPosts>}
              ></Route>
              <Route
                path="/add-new-post/admin"
                element={<AddNewPostAdmin></AddNewPostAdmin>}
              ></Route>
              <Route
                path="/add-new-category/admin"
                element={<AddNewCategory></AddNewCategory>}
              ></Route>
              <Route
                path="/add-new-user/admin"
                element={<AddNewUser></AddNewUser>}
              ></Route>
              <Route
                path="/add-new-code/admin"
                element={<AddNewCode></AddNewCode>}
              ></Route>
              <Route
                path="/manage/update-post/admin"
                element={<EditPost></EditPost>}
              ></Route>
              <Route
                path="/manage/update-category"
                element={<EditCategory></EditCategory>}
              ></Route>
              <Route
                path="/manage/update-user"
                element={<EditUser></EditUser>}
              ></Route>
              <Route
                path="/manage/message"
                element={<DashBoardMess></DashBoardMess>}
              ></Route>
              <Route
                path="/manage/code"
                element={<DashBoardCode></DashBoardCode>}
              ></Route>
              <Route path="/mess" element={<ViewMess></ViewMess>}></Route>
            </Route>
          )}
          <Route element={<Layout></Layout>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/support" element={<Support></Support>}></Route>
            <Route path="/lo-trinh" element={<Map></Map>}></Route>
            <Route path="/blog" element={<BlogPage></BlogPage>}></Route>

            <Route
              path="/blog/:slug"
              element={<DetailBlog></DetailBlog>}
            ></Route>
            <Route
              path="/manage-post"
              element={<ManagePostUser></ManagePostUser>}
            ></Route>
            <Route
              path="/manage/update-post"
              element={<EditPost admin={false}></EditPost>}
            ></Route>

            <Route path="/topic/:slug" element={<BlogPage></BlogPage>}></Route>
            <Route
              path="/add-new-post"
              element={<AddNewPostUser></AddNewPostUser>}
            ></Route>
            <Route path="/code" element={<CodePage></CodePage>}></Route>

            <Route
              path="/change-password"
              element={<ChangePassword></ChangePassword>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
