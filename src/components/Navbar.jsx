import { Link } from "react-router-dom";

function Navbar() {
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
        <Link to="/admin">Entrar</Link>
        <a href="#perfil">Perfil</a>

      </nav>

      <div className="user">
        <span className="bell">🔔</span>
        <img src="https://i.pravatar.cc/40" alt="user" />
      </div>

    </header>
  );
}

export default Navbar;