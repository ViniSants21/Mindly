import { useState } from "react";
import "./LearningPath.css";

const trilha = [
  {
    id: 1,
    titulo: "O que é Neurodiversidade?",
    conteudo:
      "Neurodiversidade reconhece que cérebros funcionam de maneiras diferentes. Isso inclui TDAH, autismo, dislexia e outras variações.",
    dica: "Não existe um jeito certo de aprender — existe o seu jeito.",
  },
  {
    id: 2,
    titulo: "Como o cérebro aprende",
    conteudo:
      "O aprendizado acontece com repetição, emoção e prática. Algumas pessoas aprendem melhor visualmente, outras ouvindo ou fazendo.",
    dica: "Teste diferentes métodos e observe o que funciona melhor para você.",
  },
  {
    id: 3,
    titulo: "Estratégias de estudo",
    conteudo:
      "Dividir tarefas, usar cores, mapas mentais e pausas ajudam no foco e evitam sobrecarga.",
    dica: "Estudar menos tempo com qualidade é melhor do que estudar muito sem foco.",
  },
  {
    id: 4,
    titulo: "Ambiente ideal",
    conteudo:
      "Um ambiente organizado, silencioso e confortável melhora muito a concentração.",
    dica: "Pequenas mudanças no ambiente fazem grande diferença.",
  },
  {
    id: 5,
    titulo: "Autoconhecimento",
    conteudo:
      "Entender como você aprende é essencial para evoluir.",
    dica: "Observe seus padrões — isso é sua maior vantagem.",
  },
];

function LearningPath() {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [concluidas, setConcluidas] = useState([]);

  const progresso = (concluidas.length / trilha.length) * 100;

  const marcarConcluida = () => {
    if (!concluidas.includes(etapaAtual)) {
      setConcluidas([...concluidas, etapaAtual]);
    }
  };

  const falar = () => {
    const texto = trilha[etapaAtual].conteudo;
    const msg = new SpeechSynthesisUtterance(texto);
    speechSynthesis.speak(msg);
  };

  return (
    <div className="lp-container">

      {/* SIDEBAR */}
      <aside className="lp-sidebar">
        <h2>Trilha</h2>

        {trilha.map((item, index) => (
          <div
            key={item.id}
            className={`lp-step ${index === etapaAtual ? "active" : ""}`}
            onClick={() => setEtapaAtual(index)}
          >
            <span>{index + 1}</span>
            <p>{item.titulo}</p>
          </div>
        ))}
      </aside>

      {/* CONTEÚDO */}
      <main className="lp-content">

        {/* HEADER */}
        <div className="lp-header">
          <h1>{trilha[etapaAtual].titulo}</h1>

          <span className="lp-etapa">
            Etapa {etapaAtual + 1} de {trilha.length}
          </span>
        </div>

        {/* PROGRESSO */}
        <div className="lp-progress">
          <div
            className="lp-progress-fill"
            style={{ width: `${progresso}%` }}
          ></div>
        </div>

        {/* CARD */}
        <div className="lp-card">
          <p>{trilha[etapaAtual].conteudo}</p>

          <div className="lp-tip">
            💡 {trilha[etapaAtual].dica}
          </div>
        </div>

        {/* CONTROLES */}
        <div className="lp-controls">
          <button
            onClick={() => setEtapaAtual(etapaAtual - 1)}
            disabled={etapaAtual === 0}
          >
            Voltar
          </button>

          <button onClick={falar}>
            🔊 Ouvir
          </button>

          <button onClick={marcarConcluida}>
            ✔ Concluir
          </button>

          <button
            onClick={() => setEtapaAtual(etapaAtual + 1)}
            disabled={etapaAtual === trilha.length - 1}
          >
            Próximo
          </button>
        </div>

      </main>
    </div>
  );
}

export default LearningPath;