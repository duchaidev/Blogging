import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-app/firebase-auth";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  }, []);
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be uesd within AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
