import "./EditProfile.css";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [photo, setPhoto] = useState(user?.photo || "");

  const handleSave = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name,
      email,
      photo,
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
        </div>

        {/* FORM */}
        <form className="edit-form" onSubmit={handleSave}>
          
          <label>Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>E-mail</label>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="buttons">
            <button type="button" className="cancel" onClick={() => navigate("/perfil")}>
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