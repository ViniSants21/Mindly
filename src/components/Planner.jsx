import { useState, useEffect } from 'react';
import './Planner.css';

function Planner() {
  const days = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'];

  const [selectedDay, setSelectedDay] = useState('Segunda');

  const [weeklySchedule, setWeeklySchedule] = useState(() => {
    const saved = localStorage.getItem('planner');
    return saved ? JSON.parse(saved) : {
      'Segunda': [],
      'Terça': [],
      'Quarta': [],
      'Quinta': [],
      'Sexta': [],
      'Sábado': [],
      'Domingo': []
    };
  });

  useEffect(() => {
    localStorage.setItem('planner', JSON.stringify(weeklySchedule));
  }, [weeklySchedule]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showPauseModal, setShowPauseModal] = useState(false);

  const [form, setForm] = useState({
    time: '',
    subject: '',
    color: '#3b82f6'
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          alert('Pausa finalizada');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleSave = () => {
    if (!form.time || !form.subject) return;

    const updated = { ...weeklySchedule };

    if (editingIndex !== null) {
      updated[selectedDay][editingIndex] = form;
    } else {
      updated[selectedDay].push(form);
    }

    setWeeklySchedule(updated);
    setShowAddModal(false);
    setForm({ time: '', subject: '', color: '#3b82f6' });
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setForm(weeklySchedule[selectedDay][index]);
    setEditingIndex(index);
    setShowAddModal(true);
  };

  const handleDelete = (index) => {
    const updated = { ...weeklySchedule };
    updated[selectedDay].splice(index, 1);
    setWeeklySchedule(updated);
  };

  const startPause = (minutes) => {
    setTimeLeft(minutes * 60);
    setIsRunning(true);
    setShowPauseModal(false);
  };

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const isEnding = timeLeft <= 10;

  return (
    <section className="planner">
      <div className="planner-container">

        <h1>Monte seu planejamento, organize seus horários</h1>

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

        <div className="schedule-list">
          {weeklySchedule[selectedDay].length === 0 ? (
            <p className="empty">Nenhum horário cadastrado.</p>
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

                <div className="actions-mini">
                  <button className="btn-icon" onClick={() => handleEdit(index)}>
                    Editar
                  </button>
                  <button className="btn-icon danger" onClick={() => handleDelete(index)}>
                    Excluir
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="actions">
          <button onClick={() => setShowAddModal(true)} className="btn-add">
            + adicionar horário
          </button>

          <button onClick={() => setShowPauseModal(true)} className="btn-pause">
            Fazer pausa
          </button>
        </div>

      </div>

      {/* TIMER FULLSCREEN */}
      {isRunning && (
        <div className="timer-overlay">
          <div className="timer-box">
            <h2>Pausa em andamento</h2>

            <span className={`timer-big ${isEnding ? 'ending' : ''}`}>
              {formatTime(timeLeft)}
            </span>

            <button
              className="btn-stop"
              onClick={() => setIsRunning(false)}
            >
              Encerrar pausa
            </button>
          </div>
        </div>
      )}

      {/* MODAL ADICIONAR */}
      {showAddModal && !isRunning && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editingIndex !== null ? 'Editar horário' : 'Adicionar horário'}</h2>

            <input
              placeholder="Ex: 08:00 - 09:00"
              value={form.time}
              onChange={e => setForm({ ...form, time: e.target.value })}
            />

            <input
              placeholder="Disciplina"
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
            />

            <input
              type="color"
              value={form.color}
              onChange={e => setForm({ ...form, color: e.target.value })}
            />

            <div className="modal-buttons">
              <button onClick={handleSave}>Salvar</button>
              <button onClick={() => setShowAddModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL PAUSA */}
      {showPauseModal && !isRunning && (
        <div className="modal">
          <div className="modal-content">
            <h2>Tempo de pausa</h2>

            <div className="pause-options">
              <button onClick={() => startPause(5)}>5 min</button>
              <button onClick={() => startPause(10)}>10 min</button>
              <button onClick={() => startPause(15)}>15 min</button>
            </div>

            <button className="cancel-btn" onClick={() => setShowPauseModal(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

export default Planner;