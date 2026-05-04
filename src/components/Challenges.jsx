import { useState } from 'react';

function Challenges() {
  const [ongoingChallenges] = useState([
    { id: 1, title: 'Matemática', description: 'Desafio e concentração de dados', badge: 'Em Andamento', progress: 60, icon: '📐' },
    { id: 2, title: 'Leitura Dinâmica', description: 'Ler e aprender com rapidez', badge: 'Em Andamento', progress: 40, icon: '📖' },
    { id: 3, title: 'Concentração total', description: 'Foque e mantenha a atenção', badge: 'Em Andamento', progress: 75, icon: '🎯' },
    { id: 4, title: 'Revisão semanal', description: 'Revise o conteúdo da semana', badge: 'Em Andamento', progress: 50, icon: '📋' }
  ]);

  const [completedChallenges] = useState([
    { id: 1, title: 'Química', description: 'Desafio e concentração de dados', badge: 'Concluído', progress: 100, icon: '🧪' },
    { id: 2, title: 'Redação', description: 'Escreva um texto interessante', badge: 'Concluído', progress: 100, icon: '✏️' },
    { id: 3, title: 'Concentração total', description: 'Foque e mantenha a atenção', badge: 'Concluído', progress: 100, icon: '🎯' },
    { id: 4, title: 'Revisão semanal', description: 'Revise o conteúdo da semana', badge: 'Concluído', progress: 100, icon: '📚' }
  ]);

  const [games] = useState([
    { id: 1, title: 'Adivinha com letras', description: 'Adivinhe as palavras com as letras embaralhadas e divirta-se a aprender coisas novas' },
    { id: 2, title: 'Charada matemática', description: 'Resolva charadas de matemática e teste suas habilidades de raciocínio lógico rápido' },
    { id: 3, title: 'Adivinha com rimas', description: 'Adivinhe as palavras através de rimas criativas e melhore seu conhecimento' }
  ]);

  const [activeGame, setActiveGame] = useState(null);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  function checkAnswer(correct) {
  if (answer.toLowerCase() === correct) {
    setMessage("🎉 Acertou!!");
  } else {
    setMessage("❌ Errou!");
  }

  setTimeout(() => setMessage(""), 2000);
  setAnswer("");
}
    return (
      <section className="challenges">
        <div className="challenges-container">

        
        {/* DESAFIOS EM ANDAMENTO */}
        <div className="challenges-section">
          <h2><span className="section-bar"></span>Desafios em andamento</h2>
          <div className="challenges-list">
            {ongoingChallenges.map((challenge) => (
              <div key={challenge.id} className="challenge-card ongoing">
                <div className="challenge-left">
                  <div className="challenge-icon">{challenge.icon}</div>
                  <div className="challenge-info">
                    <h3>{challenge.title}</h3>
                    <p>{challenge.description}</p>
                  </div>
                </div>
                <div className="challenge-middle">
                  <span className="challenge-badge ongoing-badge">{challenge.badge}</span>
                </div>
                <div className="challenge-right">
                  <div className="progress-section">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${challenge.progress}%` }}></div>
                    </div>
                    <span className="progress-text">{challenge.progress}%</span>
                  </div>
                  <button className="challenge-btn">Continuar</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESAFIOS CONCLUÍDOS */}
        <div className="challenges-section">
          <h2><span className="section-bar"></span>Desafios concluídos</h2>
          <div className="challenges-list">
            {completedChallenges.map((challenge) => (
              <div key={challenge.id} className="challenge-card completed">
                <div className="challenge-left">
                  <div className="challenge-icon">{challenge.icon}</div>
                  <div className="challenge-info">
                    <h3>{challenge.title}</h3>
                    <p>{challenge.description}</p>
                  </div>
                </div>
                <div className="challenge-middle">
                  <span className="challenge-badge completed-badge">{challenge.badge}</span>
                </div>
                <div className="challenge-right">
                  <div className="progress-section">
                    <div className="progress-bar">
                      <div className="progress-fill completed-fill" style={{ width: `${challenge.progress}%` }}></div>
                    </div>
                    <span className="progress-text">{challenge.progress}%</span>
                  </div>
                  <button className="challenge-btn">Refazer</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JOGOS */}
        <div className="challenges-section">
          <h2><span className="section-bar"></span>Jogos</h2>
          <div className="games-grid">
            {games.map((game) => (
              <div key={game.id} className="game-card">
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <button className="game-btn" onClick={() => setActiveGame(game)}>
                  Focar
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {activeGame && (
  <div className="game-overlay">
  <div className="game-modal">

    <button className="close-btn" onClick={() => setActiveGame(null)}>
      ✕
    </button>

    <div className="modal-content">

        {activeGame.id === 1 && (
          <>
            <h2>Adivinha com letras</h2>
            <p>Descubra a palavra secreta.</p>
            <div className="hint">Fruta vermelha com 6 letras</div>

            <input
              placeholder="Sua resposta"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

            <button className="submit-btn" onClick={() => checkAnswer("morango")}>
              Enviar
            </button>
          </>
        )}

        {activeGame.id === 2 && (
          <>
            <h2>Charada matemática</h2>
            <p>20 passageiros x 3 viagens = ?</p>

            <input
              placeholder="Sua resposta"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

            <button className="submit-btn" onClick={() => checkAnswer("60")}>
              Enviar
            </button>
          </>
        )}

        {activeGame.id === 3 && (
          <>
            <h2>Adivinha com rimas</h2>
            <p>Tem asas mas não voa, tem bico mas não bica.</p>
            <div className="hint">Você usa para escrever</div>

            <input
              placeholder="Sua resposta"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

            <button className="submit-btn" onClick={() => checkAnswer("caneta")}>
              Enviar
            </button>
          </>
        )}

        {message && <div className="game-message">{message}</div>}

      </div>
    </div>
  </div>
)}
    </section>
  );
}

export default Challenges;