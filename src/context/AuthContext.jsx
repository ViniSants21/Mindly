import { createContext, useContext, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (email) => {
    const userData = { email };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const register = (email) => {
    const userData = { email };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // 🔥 LOGIN COM GOOGLE REAL
  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const userData = {
      email: result.user.email,
      name: result.user.displayName,
      photo: result.user.photoURL,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loginWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}