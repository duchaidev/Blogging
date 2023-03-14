import React from "react";
import { Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>{/* <Route path="/" element={App}></Route> */}</Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
