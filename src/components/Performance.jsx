import { useState } from 'react';

function Performance() {
  const [activeTab, setActiveTab] = useState('Tudo');
  
  const achievements = [
    { id: 1, title: 'Primeiro desafio', description: 'Complete o primeiro desafio\nDesafio - 20 coins', badge: '🏅' },
    { id: 2, title: 'Estudioso iniciante', description: 'Estude por 5 horas\nRecompensa - 50 coins', badge: '📚' },
    { id: 3, title: 'Mestre dos desafios', description: 'Complete 20 desafios\nDesafio - 100 coins', badge: '👑' },
    { id: 4, title: 'Foco total', description: 'Mantenha foco de 8 horas\nDesafio - 200 coins', badge: '🎯' },
    { id: 5, title: 'Primeira desafio', description: 'Complete e desafio\nDesafio - 20 coins', badge: '✅' },
    { id: 6, title: 'Primeiro desafio', description: 'Complete e desafio\nDesafio - 20 coins', badge: '⭐' }
  ];

  const performanceData = [
    { subject: 'Matemática', completed: 3, total: 5, color: '#4169E1' },
    { subject: 'Português', completed: 4, total: 5, color: '#32CD32' },
    { subject: 'História', completed: 2, total: 5, color: '#9932CC' },
    { subject: 'Ciências', completed: 3, total: 5, color: '#FF6347' },
    { subject: 'Artes', completed: 1, total: 5, color: '#FFD700' }
  ];

  const rewards = [
    { id: 1, name: 'Bônus ganho no', points: '50 pontos', icon: '⭐', type: 'XP' },
    { id: 2, name: 'Primeiro de conquista', points: 'Desbloqueado', icon: '🏆', type: 'Trophy' },
    { id: 3, name: 'Ideia ganha', points: 'Desbloqueado', icon: '💡', type: 'Idea' },
    { id: 4, name: 'Avatar novo', points: 'Disponível', icon: '🧑', type: 'Avatar' }
  ];

  const coins = 250;

  // Calcular o gráfico de donut
  const getDonutPath = () => {
    const total = performanceData.reduce((sum, item) => sum + item.completed, 0);
    const max = performanceData.reduce((sum, item) => sum + item.total, 0);
    
    let paths = [];
    let currentAngle = -90;
    const radius = 80;
    const innerRadius = 60;

    performanceData.forEach((item, index) => {
      const sliceAngle = (item.completed / total) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + sliceAngle;

      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;

      const x1 = 100 + radius * Math.cos(startRad);
      const y1 = 100 + radius * Math.sin(startRad);
      const x2 = 100 + radius * Math.cos(endRad);
      const y2 = 100 + radius * Math.sin(endRad);

      const ix1 = 100 + innerRadius * Math.cos(startRad);
      const iy1 = 100 + innerRadius * Math.sin(startRad);
      const ix2 = 100 + innerRadius * Math.cos(endRad);
      const iy2 = 100 + innerRadius * Math.sin(endRad);

      const largeArc = sliceAngle > 180 ? 1 : 0;

      const pathData = `
        M ${x1} ${y1}
        A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
        L ${ix2} ${iy2}
        A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix1} ${iy1}
        Z
      `;

      paths.push(
        <path key={index} d={pathData} fill={item.color} />
      );

      currentAngle = endAngle;
    });

    return paths;
  };

  return (
    <section className="performance">
      <div className="performance-container">
        
        {/* CONQUISTAS */}
        <div className="performance-section">
          <h2><span className="section-bar"></span>Conquistas</h2>
          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <div className="achievement-badge">{achievement.badge}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DESEMPENHO */}
        <div className="performance-section">
          <h2><span className="section-bar"></span>Desempenho</h2>
          <div className="performance-content">
            <div className="performance-chart">
              <div className="pie-chart-container">
                <svg width="260" height="260" viewBox="0 0 200 200" className="donut-chart">
                  {getDonutPath()}
                </svg>
                <div className="chart-center-text">
                  <p className="chart-title">Distribuição de horas</p>
                </div>
              </div>
            </div>

            <div className="performance-stats">
              <h3>Progresso por disciplina:</h3>
              {performanceData.map((item, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-header">
                    <span className="stat-name" style={{ color: item.color }}>
                      <span className="stat-color-dot" style={{ backgroundColor: item.color }}></span>
                      {item.subject}
                    </span>
                    <span className="stat-progress">{item.completed}/{item.total}</span>
                  </div>
                  <div className="progress-bar-container">
                    {[...Array(item.total)].map((_, i) => (
                      <div
                        key={i}
                        className={`progress-box ${i < item.completed ? 'filled' : ''}`}
                        style={{ backgroundColor: i < item.completed ? item.color : '#f0f0f0', borderColor: item.color }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RECOMPENSAS */}
        <div className="performance-section">
          <h2><span className="section-bar"></span>Recompensas</h2>
          
          <div className="rewards-header">
            <div className="coins-display">
              <span className="coins-icon">💰</span>
              <div>
                <p>Suas moedas são</p>
                <p className="coins-amount">{coins}</p>
              </div>
            </div>
          </div>

          <div className="rewards-tabs">
            {['Tudo', 'Meu XP', 'Dicas', 'Avatar'].map(tab => (
              <button
                key={tab}
                className={`reward-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="rewards-grid">
            {rewards.map(reward => (
              <div key={reward.id} className="reward-card">
                <div className="reward-icon">{reward.icon}</div>
                <h3>{reward.name}</h3>
                <p className="reward-status">{reward.points}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Performance;