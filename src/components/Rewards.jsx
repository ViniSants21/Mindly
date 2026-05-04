import { useState } from "react";

function Rewards() {
  const [coins, setCoins] = useState(90);
  const [filter, setFilter] = useState("Tudo");
  const [message, setMessage] = useState("");

  const rewards = [
  { id: 1, name: "Dobra XP", price: 150, category: "Mais XP", locked: true },
  { id: 2, name: "Proteção", price: 180, category: "Mais XP", locked: true },
  { id: 3, name: "Dica", price: 70, category: "Dicas" },
  { id: 4, name: "Avatar", price: 90, category: "Avatar" },
];

  const filteredRewards =
    filter === "Tudo"
      ? rewards
      : rewards.filter((r) => r.category === filter);

  function showMessage(text) {
    setMessage(text);
    setTimeout(() => setMessage(""), 2500);
  }

  function handleBuy(item) {
    if (item.locked) {
      showMessage("🔒 Item bloqueado!");
      return;
    }

    if (coins < item.price) {
      showMessage("💸 Moedas insuficientes!");
      return;
    }

    setCoins(coins - item.price);
    showMessage("✨ Compra realizada!");
  }

  return (
    <div className="section rewards-section">
      <div className="section-title">
        <div className="bar"></div>
        <h2>Recompensas</h2>
      </div>

      <div className="rewards-top">
        <div className="coins-box">🪙 {coins} moedas</div>
      </div>

      <div className="filters">
        {["Tudo", "Mais XP", "Dicas", "Avatar"].map((f) => (
          <span
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </span>
        ))}
      </div>

      <hr />

      <div className="rewards-grid">
        {filteredRewards.map((item) => (
          <div
            key={item.id}
            className={`reward-card ${item.locked ? "locked" : ""}`}
          >
            <div className="icon">🎁</div>
            <p>{item.name}</p>
            <button onClick={() => handleBuy(item)}>
              {item.price} moedas
            </button>
          </div>
        ))}
      </div>

      {message && <div className="toast">{message}</div>}
    </div>
  );
}

export default Rewards;