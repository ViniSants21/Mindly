import { useState } from 'react';

function Planner() {
  const [selectedDay, setSelectedDay] = useState('Terça');
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  
  const [schedule, setSchedule] = useState([
    { time: '08:00 - 09:00', subject: 'Matemática', color: '#E91E63' },
    { time: '09:15 - 10:00', subject: 'História', color: '#7C3AED' },
    { time: '14:00 - 15:00', subject: 'Geografia', color: '#FF9800' }
  ]);

  const addSchedule = () => {
    const newSchedule = {
      time: '16:00 - 17:00',
      subject: 'Nova disciplina',
      color: '#00BCD4'
    };
    setSchedule([...schedule, newSchedule]);
  };

  return (
    <section className="planner">
      <div className="planner-container">
        <h1>Monte seu planejamento, organize seus horários</h1>
        
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

        <div className="study-hours">
          <h2>Horas de estudo</h2>
          <div className="schedule-list">
            {schedule.map((item, index) => (
              <div key={index} className="schedule-item">
                <span className="time">{item.time}</span>
                <span className="subject" style={{ backgroundColor: item.color }}>
                  {item.subject}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="actions">
          <button className="btn-add" onClick={addSchedule}>
            + adicionar horário
          </button>
          <button className="btn-pause">
            Fazer pausa
          </button>
        </div>

        <p className="tip">
          Dica: Estudos de 50 min com pausas de 10 min aumentam a retenção.
        </p>
      </div>
    </section>
  );
}

export default Planner;