import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./context/auth-context";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>

          <Route element={<Layout></Layout>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
