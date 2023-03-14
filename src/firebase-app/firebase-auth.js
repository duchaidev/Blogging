// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB5ZQ6--PkXKPGman3o5zciqOgmRmpSwJk",
  authDomain: "blogging-ff828.firebaseapp.com",
  projectId: "blogging-ff828",
  storageBucket: "blogging-ff828.appspot.com",
  messagingSenderId: "775531152233",
  appId: "1:775531152233:web:d707950f5456d5dd55f3f8",
  measurementId: "G-SYWQYBE2SZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
