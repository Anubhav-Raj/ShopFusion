import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB45Gv6HPmUJ8-VsiGJnCh51d3mMhSqlpY",
  authDomain: "zonehub-268d2.firebaseapp.com",
  projectId: "zonehub-268d2",
  storageBucket: "zonehub-268d2.appspot.com",
  messagingSenderId: "241769782775",
  appId: "1:241769782775:web:674ecc5c4bf5daaeb4a2f2",
  measurementId: "G-TV24QPH6KH",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
