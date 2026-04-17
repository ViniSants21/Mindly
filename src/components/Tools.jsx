function Tools() {
  return (
    <section className="tools">

      <div className="tools-title">
        <div className="bar"></div>
        <h2>Ferramentas que se adaptam ao seu ritmo</h2>
      </div>

      <div className="tool-grid">

        <div className="tool-card">
          <div className="tool-icon">📅</div>

          <h3>Planner inteligente</h3>

          <p>
            Monte horários personalizados com blocos de
            tempo, pausas automáticas e prioridades visuais.
          </p>

          <button className="btn-outline">
            Criar plano
          </button>
        </div>

        <div className="tool-card">
          <div className="tool-icon">📊</div>

          <h3>Desempenho</h3>

          <p>
            Gráficos detalhados de horas estudadas,
            metas cumpridas e evolução por disciplina.
          </p>

          <button className="btn-outline">
            Ver painel
          </button>
        </div>

        <div className="tool-card">
          <div className="tool-icon">🏆</div>

          <h3>Desafios</h3>

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