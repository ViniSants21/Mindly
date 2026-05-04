import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login");
  };

  // fechar dropdown ao clicar fora
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
      <NavLink to="/" className="logo">
        <img
          src="/images/mindly-logo.png"
          alt="Logo Mindly"
          className="logo-img"
        />
      </NavLink>

      {/* MENU */}
      <nav className="menu">
        <NavLink to="/" end className="nav-item">
          Início
        </NavLink>

        <NavLink to="/planner" className="nav-item">
          Planner
        </NavLink>

        <NavLink to="/desempenho" className="nav-item">
          Desempenho
        </NavLink>

        <NavLink to="/desafios" className="nav-item">
          Desafios
        </NavLink>

        {/* 🔥 LINK ADMIN (CONDICIONAL) */}
        {user?.role === "admin" && (
          <NavLink
            to="/admin"
            className="nav-item"
            style={{ color: "#ffcc00", fontWeight: "bold" }}
          >
            Painel Admin
          </NavLink>
        )}
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

                <button
                  onClick={() => {
                    navigate("/perfil");
                    setOpen(false);
                  }}
                >
                  Perfil
                </button>

                <button
                  onClick={() => {
                    navigate("/editar-perfil");
                    setOpen(false);
                  }}
                >
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