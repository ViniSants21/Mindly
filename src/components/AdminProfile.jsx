import "./AdminProfile.css";

export default function AdminProfile() {
  return (
    <div className="admin-page">

      {/* HEADER */}
      <div className="admin-header">
        <div className="bar"></div>
        <h1>Perfil do administrador</h1>
      </div>

      {/* CARD */}
      <div className="admin-card">
        <div className="admin-info">
          <img
            src="https://i.pravatar.cc/150"
            alt="avatar"
            className="avatar"
          />

          <div>
            <h2>Luis Cardoso de Lindo</h2>
            <p>Funcionário desde 2023</p>
          </div>
        </div>

        <button className="edit-btn">Editar dados</button>
      </div>

      {/* SEÇÕES */}
      <div className="admin-sections">

        {/* ACESSO */}
        <div className="box">
          <h3>Seu acesso</h3>

          <div className="access">
            <div className="icon-circle">👤</div>
            <div>
              <p>Painel administrativo</p>
              <span>Acesso completo ao sistema</span>
            </div>
          </div>
        </div>

        {/* CONQUISTAS */}
        <div className="box">
          <h3>Conquistas</h3>

          <div className="badges">
            <div className="badge">🏆</div>
            <div className="badge">🥇</div>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="admin-footer">
        <div>
          <h4>Contato</h4>
          <p>Telefone: (12) 99999-9999</p>
          <p>Email: contato@mindly.com</p>
        </div>

        <div>
          <h4>Redes Sociais</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>

        <div>
          <h4>Políticas</h4>
          <p>Privacidade</p>
          <p>Termos</p>
        </div>
      </div>

    </div>
  );
}