import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      <div className="user" ref={menuRef}>
        {user ? (
          <>
            <span className="bell">🔔</span>

            {/* AVATAR */}
            <img
              src={user.photo || "https://i.pravatar.cc/40"}
              alt="user"
              className="avatar-click"
              onClick={() => setOpen(!open)}
            />

            {/* DROPDOWN */}
            {open && (
              <div className="dropdown">
                <p className="user-name">
                  {user.name || user.email}
                </p>

                <button onClick={() => navigate("/perfil")}>
                  Perfil
                </button>

                <button onClick={() => navigate("/editar-perfil")}>
                  Editar perfil
                </button>

                <button className="logout" onClick={handleLogout}>
                  Sair
                </button>
              </div>
            )}
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