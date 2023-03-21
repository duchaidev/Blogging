import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./context/auth-context";
import DetailBlog from "./pages/details/DetailBlog";
import DetailCode from "./pages/details/DetailCode";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import SignUpPage from "./pages/SignUpPage";
import Support from "./pages/Support";
import Map from "./pages/Map";
import BlogPage from "./pages/BlogPage";
import AddNewPostUser from "./modules/home/AddNewPostUser";
import AddNewPostAdmin from "./modules/home/AddNewPostAdmin";
import AddNewCategory from "./pages/AddNewCategory";
import AddNewUser from "./pages/AddNewUser";
import ChangePassword from "./pages/ChangePassword";
import DashBoardLayout from "./components/layout/DashBoardLayout";
import DashBoardPosts from "./pages/DashBoardPosts";
import DashBoardCategory from "./pages/DashBoardCategory";
import DashBoardUser from "./pages/DashBoardUser";
function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
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
          </Route>

          <Route element={<Layout></Layout>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/support" element={<Support></Support>}></Route>
            <Route path="/lo-trinh" element={<Map></Map>}></Route>
            <Route path="/blog" element={<BlogPage></BlogPage>}></Route>

            <Route
              path="/code/:slug"
              element={<DetailCode></DetailCode>}
            ></Route>
            <Route
              path="/blog/:slug"
              element={<DetailBlog></DetailBlog>}
            ></Route>
            <Route
              path="/add-new-post"
              element={<AddNewPostUser></AddNewPostUser>}
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
              path="/change-password"
              element={<ChangePassword></ChangePassword>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
