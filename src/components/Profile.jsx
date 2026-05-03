import "./Profile.css";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="profile-page">

      {/* TÍTULO */}
      <div className="profile-header">
        <div className="bar"></div>
        <h1>Perfil do jogador</h1>
      </div>

      {/* CARD PRINCIPAL */}
      <div className="profile-card">
        <div className="profile-left">
          <img
            src={user?.photo || "https://i.pravatar.cc/100"}
            alt="user"
            className="avatar"
          />
        </div>

        <div className="profile-info">
          <h2>{user?.name || "Usuário Mindly"}</h2>
          <p className="sub">Aluno desde 2024</p>

          <p className="streak">🔥 Ofensiva: 10 dias seguidos!</p>

          <p className="xp-text">XP Nível 3 - 180 / 200 xp</p>
          <div className="xp-bar">
            <div className="xp-fill"></div>
          </div>
        </div>

        <button className="edit-btn">Editar dados</button>
      </div>

      {/* SEÇÃO INFERIOR */}
      <div className="profile-bottom">

        {/* CONTINUE APRENDENDO */}
        <div className="card">
          <h3>Continue aprendendo</h3>

          <div className="learning-item">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            <div>
              <p>Matemática Básica</p>
              <div className="progress-bar">
                <div className="progress fill1"></div>
              </div>
            </div>
          </div>

          <hr />

          <div className="learning-item">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" />
            <div>
              <p>Interpretação de texto</p>
              <div className="progress-bar">
                <div className="progress fill2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CONQUISTAS */}
        <div className="card">
          <h3>Conquistas</h3>

          <div className="badges">
            <div className="badge">
              🏆
              <p>Conclua 10 desafios</p>
            </div>

            <div className="badge">
              🥇
              <p>Mantenha ofensiva</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}