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

      <Link to="/" className="logo">
        <img src="/images/mindly-logo.png" alt="Logo Mindly" className="logo-img" />
      </Link>

      <nav className="menu">
        <Link to="/">Início</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/desempenho">Desempenho</Link>
        <Link to="/desafios">Desafios</Link>

        {/* 👇 PERFIL SÓ LOGADO */}
        {user && <Link to="/perfil">Perfil</Link>}
      </nav>

      <div className="user">
        {user ? (
          <>
            <span className="bell">🔔</span>

            {/* 🔥 FOTO REAL SE FOR GOOGLE */}
            <img
              src={user.photo || "https://i.pravatar.cc/40"}
              alt="user"
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