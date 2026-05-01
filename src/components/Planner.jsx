import { useState } from 'react';
import './Planner.css';

function Planner() {
  const [selectedDay, setSelectedDay] = useState('Terça');

  const days = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo'
  ];

  // 🔥 horários separados por dia
  const [weeklySchedule, setWeeklySchedule] = useState({
    'Segunda': [
      { time: '08:00 - 09:00', subject: 'Matemática', color: '#E91E63' }
    ],
    'Terça': [
      { time: '09:15 - 10:00', subject: 'História', color: '#7C3AED' }
    ],
    'Quarta': [
      { time: '14:00 - 15:00', subject: 'Geografia', color: '#FF9800' }
    ],
    'Quinta': [],
    'Sexta': [],
    'Sábado': [],
    'Domingo': []
  });

  // ➕ adicionar horário no dia atual
  const addSchedule = () => {
    const newSchedule = {
      time: '16:00 - 17:00',
      subject: 'Nova disciplina',
      color: '#00BCD4'
    };

    setWeeklySchedule(prev => ({
      ...prev,
      [selectedDay]: [...prev[selectedDay], newSchedule]
    }));
  };

  return (
    <section className="planner">
      <div className="planner-container">

        <h1>Monte seu planejamento, organize seus horários</h1>

        {/* ===== DIAS ===== */}
        <div className="days-selector">
          <p>Escolha o dia:</p>

          <div className="days-buttons">
            {days.map(day => (
              <button
                key={day}
                className={`day-btn ${selectedDay === day ? 'active' : ''}`}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* ===== HORÁRIOS ===== */}
        <div className="study-hours">
          <h2>Horas de estudo</h2>

          <div className="schedule-list">
            {weeklySchedule[selectedDay].length === 0 ? (
              <p>Nenhum horário cadastrado.</p>
            ) : (
              weeklySchedule[selectedDay].map((item, index) => (
                <div key={index} className="schedule-item">
                  <span className="time">{item.time}</span>

                  <span
                    className="subject"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.subject}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ===== BOTÕES ===== */}
        <div className="actions">
          <button className="btn-add" onClick={addSchedule}>
            + adicionar horário
          </button>

          <button className="btn-pause">
            Fazer pausa
          </button>
        </div>

        {/* ===== DICA ===== */}
        <p className="tip">
          Dica: Estudos de 50 min com pausas de 10 min aumentam a retenção.
        </p>

      </div>
    </section>
  );
}

export default Planner;