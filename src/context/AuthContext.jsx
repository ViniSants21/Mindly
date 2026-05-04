import { createContext, useContext, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // APENAS PARA TESTE (Depois você volta ao original)
const [user, setUser] = useState({
  email: "luislindo@gmail.com",
  name: "Luis Admin",
  role: "admin"
});

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

  // 🔥 LOGIN COM GOOGLE REAL (Ajustado para seu Admin)
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      
      // Aqui criamos o objeto do usuário
      const userData = {
        email: result.user.email,
        name: result.user.displayName,
        photo: result.user.photoURL,
        // 🔥 REGRA DE ADMIN: Se for o seu e-mail, ele ganha o cargo de admin
        role: result.user.email === "vitoraugusto1079@gmail.com" ? "admin" : "user"
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error("Erro ao logar:", error);
    }
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