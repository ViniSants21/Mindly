import "./tools.css";
import plannerIcon from "../assets/iconeplanner.png";
import graficoIcon from "../assets/iconegrafico.png";
import trofeuIcon from "../assets/iconetrofeu.png";

function Tools() {
  return (
    <section className="tools">

      <div className="tools-title">
        <div className="bar"></div>
        <h2>Ferramentas que se adaptam ao seu ritmo</h2>
      </div>

      <div className="tool-grid">

        {/* CARD 1 */}
        <div className="tool-card">
          <div className="tool-header">
          <img src={plannerIcon} alt="planner" className="tool-icon" />

          <h3>Planner inteligente</h3>
        </div>
          <p>
            Monte horários personalizados com blocos de
            tempo, pausas automáticas e prioridades visuais.
          </p>

          <button className="btn-outline">
            Criar plano
          </button>
        </div>

        {/* CARD 2 */}
        <div className="tool-card">
           <div className="tool-header">
          <img src={graficoIcon} alt="grafico" className="tool-icon" />

          <h3>Desempenho</h3>
        </div>
          <p>
            Gráficos detalhados de horas estudadas,
            metas cumpridas e evolução por disciplina.
          </p>

          <button className="btn-outline">
            Ver painel
          </button>
        </div>

        {/* CARD 3 */}
        <div className="tool-card">
          <div className="tool-header">
          <img src={trofeuIcon} alt="trofeu" className="tool-icon" />

          <h3>Desafios</h3>
        </div>
          <p>
            Missões curtas para manter a motivação:
            recompensas em XP e conquistas.
          </p>

          <button className="btn-outline">
            Explorar
          </button>
        </div>

      </div>

    </section>
  );
}

export default Tools;