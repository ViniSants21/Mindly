import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo">
        <img src="/images/mindly-logo.png" alt="Logo Mindly" className="logo-img" />
      </Link>

      {/* MENU */}
      <nav className="menu">
        <Link to="/">Início</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/desempenho">Desempenho</Link>
        <Link to="/desafios">Desafios</Link>
      </nav>

      {/* USER */}
      <div className="user">
        {user ? (
          <>
            <span className="bell">🔔</span>

            {/* 🔥 CLICÁVEL */}
            <img
              src={user.photo || "https://i.pravatar.cc/40"}
              alt="user"
              className="avatar-click"
              onClick={() => navigate("/perfil")}
            />

            <button className="logout-btn" onClick={handleLogout}>
              Sair
            </button>
          </>
        ) : (
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Entrar
          </button>
        )}
      </div>

    </header>
  );
}

export default Navbar;