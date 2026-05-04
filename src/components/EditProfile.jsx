import "./EditProfile.css";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [photo, setPhoto] = useState(user?.photo || "");
  const [bio, setBio] = useState(user?.bio || "");
  const [birth, setBirth] = useState(user?.birth || "");

  const handleSave = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name,
      username,
      email,
      photo,
      bio,
      birth,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    navigate("/perfil");
  };

  return (
    <div className="edit-profile-page">

      {/* HEADER */}
      <div className="profile-header">
        <div className="bar"></div>
        <h1>Editar perfil</h1>
      </div>

      {/* CARD */}
      <div className="edit-card">

        {/* AVATAR */}
        <div className="avatar-section">
          <img
            src={photo || "https://i.pravatar.cc/100"}
            alt="avatar"
            className="avatar"
          />

          <input
            type="text"
            placeholder="URL da imagem"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />

          <small>Use uma URL de imagem para personalizar seu avatar</small>
        </div>

        {/* FORM */}
        <form className="edit-form" onSubmit={handleSave}>

          {/* DADOS BÁSICOS */}
          <h3>Informações básicas</h3>

          <label>Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Username</label>
          <input
            type="text"
            placeholder="@seuuser"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>E-mail</label>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* PERFIL */}
          <h3>Perfil</h3>

          <label>Bio</label>
          <textarea
            placeholder="Fale um pouco sobre você..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <label>Data de nascimento</label>
          <input
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />


          {/* BOTÕES */}
          <div className="buttons">
            <button
              type="button"
              className="cancel"
              onClick={() => navigate("/perfil")}
            >
              Cancelar
            </button>

            <button type="submit" className="save">
              Salvar alterações
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}