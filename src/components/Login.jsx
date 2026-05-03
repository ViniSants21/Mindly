import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import lapis from "../assets/lapismindly.png";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    // login fake (depois pode trocar por backend)
    login(email);

    // 🔥 REDIRECIONAMENTO
    navigate("/planner");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Já estuda com <br /> a gente?</h1>
        <p>faça seu login e boa aula!</p>

        <form className="login-form" onSubmit={handleLogin}>
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
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <span className="forgot">esqueci minha senha</span>

          <button className="btn-primary" type="submit">
            Entrar
          </button>

          <button type="button" className="btn-google">
            LOGAR COM GOOGLE
          </button>

          <p className="register">Ainda não é cadastrado?</p>
        </form>
      </div>

      <div className="login-right">
        <h1 className="logo">MINDLY</h1>
        <img src={lapis} alt="Mascote" />
      </div>
    </div>
  );
}