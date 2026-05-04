import "./Performance.css";
import Rewards from "./Rewards";

function Performance() {
  return (
    <section className="performance">
      <div className="container">

        {/* CONQUISTAS */}
        <div className="section">
          <div className="section-title">
            <div className="bar"></div>
            <h2>Conquistas</h2>
          </div>

          <div className="achievements-grid">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`achievement-card ${i < 4 ? "active" : "locked"}`}
              >
                <h3>Primeiro desafio</h3>
                <p>Complete 1 desafio</p>
                <span>+30 coins</span>
              </div>
            ))}
          </div>
        </div>

        {/* DESEMPENHO */}
        <div className="section">
          <div className="section-title">
            <div className="bar"></div>
            <h2>Desempenho</h2>
          </div>

          <div className="performance-grid">
            <div className="card chart">
              <h3>Distribuição de tempo</h3>
              <div className="fake-chart"></div>
            </div>

            <div className="card progress">
              <h3>Progresso por disciplina</h3>

              {["Matemática", "Português", "História", "Ciências", "Artes"].map((item, i) => (
                <div key={i} className="progress-item">
                  <div className="progress-label">
                    <span>{item}</span>
                    <span>{60 - i * 5}%</span>
                  </div>
                  <div className="progress-bar">
                    <div style={{ width: `${60 - i * 5}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RECOMPENSAS */}
        <Rewards />

      </div>
    </section>
  );
}

export default Performance;