import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import lapis from "../assets/lapismindly.png";

export default function Register() {
  const navigate = useNavigate();
  const { register, loginWithGoogle } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    register(email);
    navigate("/planner");
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/planner");
    } catch {
      alert("Erro ao cadastrar com Google");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Crie sua conta <br /> agora mesmo</h1>
        <p>comece a estudar com a gente!</p>

        <form className="login-form" onSubmit={handleRegister}>
          <label>E-mail:</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha:</label>
          <input
            type="password"
            placeholder="Crie uma senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="btn-primary" type="submit">
            Cadastrar
          </button>

          <button type="button" className="btn-google" onClick={handleGoogle}>
            CADASTRAR COM GOOGLE
          </button>

          <p className="register">
            Já tem conta?{" "}
            <span
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => navigate("/login")}
            >
              Entrar
            </span>
          </p>
        </form>
      </div>

      <div className="login-right">
        <h1 className="logo">MINDLY</h1>
        <img src={lapis} alt="Mascote" />
      </div>
    </div>
  );
}