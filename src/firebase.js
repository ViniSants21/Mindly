import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEBzbzovkA67KSCyiMaivT8h4XzXtxFuc",
  authDomain: "mindly-842fb.firebaseapp.com",
  projectId: "mindly-842fb",
  storageBucket: "mindly-842fb.firebasestorage.app",
  messagingSenderId: "444102707415",
  appId: "1:444102707415:web:bcab90db36b853ae710892",
  measurementId: "G-NSDQ4N2GGQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();