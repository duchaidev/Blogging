import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
