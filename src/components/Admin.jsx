import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

function Admin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Souza', email: 'alice.s@mindly.com', plan: 'Premium', status: 'Ativo', coins: 1250 },
    { id: 2, name: 'Bruno Lima', email: 'bruno.l@mindly.com', plan: 'Grátis', status: 'Ativo', coins: 350 },
    { id: 3, name: 'Carla Dias', email: 'carla.d@mindly.com', plan: 'Premium', status: 'Inativo', coins: 0 },
    { id: 4, name: 'Marcos Silva', email: 'marcos@mindly.com', plan: 'Grátis', status: 'Ativo', coins: 100 },
  ]);

  const [tickets, setTickets] = useState([
    { id: 1, user: 'Bruno Lima', subject: 'Problema no pagamento', status: 'Aberto', date: '26/10/2025' },
    { id: 2, user: 'Alice Souza', subject: 'Dúvida sobre Desafio', status: 'Respondido', date: '25/10/2025' },
  ]);

  const [plans, setPlans] = useState([
    { id: 1, name: 'Grátis', price: 'R$ 0', desc: 'Acesso básico para iniciantes.', users: 1200 },
    { id: 2, name: 'Premium', price: 'R$ 19,99/mês', desc: 'Todos os recursos ilimitados.', users: 450 },
    { id: 3, name: 'Institucional', price: 'Contato', desc: 'Soluções para escolas e universidades.', users: 30 },
  ]);

  const [challenges, setChallenges] = useState([
    { id: 1, title: 'Matemática Gold', desc: 'Resolva 10 equações', status: 'Ativo', icon: '📐' },
    { id: 2, title: 'Leitura Rápida', desc: 'Leia 5 páginas em 5 min', status: 'Suspenso', icon: '📖' },
    { id: 3, title: 'Foco Total', desc: 'Estude 1h sem pausas', status: 'Ativo', icon: '🎯' },
  ]);

  // --- ESTADOS DOS MODAIS ---
  const [editPlan, setEditPlan] = useState(null);
  const [editChallenge, setEditChallenge] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [activeTicket, setActiveTicket] = useState(null);
  
  // Estados para Criação
  const [isCreateChallengeOpen, setIsCreateChallengeOpen] = useState(false);
  const [newChallenge, setNewChallenge] = useState({ title: '', desc: '', icon: '🌟' });
  
  const [isCreatePlanOpen, setIsCreatePlanOpen] = useState(false);
  const [newPlan, setNewPlan] = useState({ name: '', price: '', desc: '' });

  const [replyText, setReplyText] = useState('');

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleUserStatus = (id) => {
    setUsers(users.map(u => 
      u.id === id ? { ...u, status: u.status === 'Ativo' ? 'Inativo' : 'Ativo' } : u
    ));
    triggerToast("Status do usuário atualizado!");
  };

  const handleSaveUser = () => {
    setUsers(users.map(u => u.id === editUser.id ? editUser : u));
    setEditUser(null);
    triggerToast("Usuário salvo com sucesso!");
  };

  const handleCreateChallenge = () => {
    const newId = challenges.length > 0 ? Math.max(...challenges.map(c => c.id)) + 1 : 1;
    setChallenges([...challenges, { id: newId, status: 'Ativo', ...newChallenge }]);
    setIsCreateChallengeOpen(false);
    setNewChallenge({ title: '', desc: '', icon: '🌟' }); // Reseta o form
    triggerToast("Desafio criado com sucesso!");
  };

  const deleteChallenge = (id) => {
    setChallenges(challenges.filter(c => c.id !== id));
    triggerToast("Desafio apagado com sucesso!");
  };

  const toggleChallengeStatus = (id) => {
    setChallenges(challenges.map(c => 
      c.id === id ? { ...c, status: c.status === 'Ativo' ? 'Suspenso' : 'Ativo' } : c
    ));
    triggerToast("Status do desafio alterado!");
  };

  const handleCreatePlan = () => {
    const newId = plans.length > 0 ? Math.max(...plans.map(p => p.id)) + 1 : 1;
    setPlans([...plans, { id: newId, users: 0, ...newPlan }]);
    setIsCreatePlanOpen(false);
    setNewPlan({ name: '', price: '', desc: '' }); // Reseta o form
    triggerToast("Plano criado com sucesso!");
  };

  const handleOpenTicket = (ticket) => {
    setActiveTicket(ticket);
    setReplyText('');
  };

  const handleSendReply = () => {
    setTickets(tickets.map(t => 
      t.id === activeTicket.id ? { ...t, status: 'Respondido' } : t
    ));
    setActiveTicket(null);
    triggerToast("Mensagem enviada com sucesso!");
  };

  const revenueData = [
    { id: 1, month: 'Mai', amount: '3.2k', height: '40%' },
    { id: 2, month: 'Jun', amount: '4.5k', height: '55%' },
    { id: 3, month: 'Jul', amount: '4.1k', height: '50%' },
    { id: 4, month: 'Ago', amount: '6.8k', height: '75%' },
    { id: 5, month: 'Set', amount: '7.2k', height: '80%' },
    { id: 6, month: 'Out', amount: '8.9k', height: '100%' },
  ];

  const DashboardPanel = () => {
    const totalPlanUsers = plans.reduce((acc, plan) => acc + plan.users, 0);

    return (
      <div className="admin-panel-transparent">
        <h2 style={{ marginBottom: '30px', color: '#1c2c4c' }}>Painel Geral</h2>
        <div className="admin-stats-grid">
          <div className="admin-stat-card"><h3>{users.length}</h3><p>Usuários Recentes</p></div>
          <div className="admin-stat-card popular"><h3>R$ 8.9k</h3><p>Receita (Mês)</p></div>
          <div className="admin-stat-card"><h3>{challenges.filter(c => c.status === 'Ativo').length}</h3><p>Desafios Ativos</p></div>
          <div className="admin-stat-card"><h3>{tickets.filter(t => t.status === 'Aberto').length}</h3><p>Tickets Abertos</p></div>
        </div>
        <div className="admin-dashboard-row">
          <div className="admin-panel chart-panel">
            <h3>Evolução da Receita</h3>
            <div className="css-chart-container">
              {revenueData.map(data => (
                <div className="chart-bar-group" key={data.id}>
                  <div className="chart-bar-bg">
                    <div className="chart-bar-fill" style={{ height: data.height }}>
                      <span className="chart-tooltip">R$ {data.amount}</span>
                    </div>
                  </div>
                  <span className="chart-label">{data.month}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-panel subs-panel">
            <h3>Assinantes por Plano</h3>
            <div className="subs-list">
              {plans.map(plan => {
                const percent = Math.round((plan.users / totalPlanUsers) * 100) || 0;
                let barColor = '#3f7fe3';
                if (plan.name === 'Premium') barColor = '#f59a3c';
                if (plan.name === 'Institucional') barColor = '#32CD32';

                return (
                  <div className="sub-item" key={plan.id}>
                    <div className="sub-header">
                      <span className="sub-name">{plan.name}</span>
                      <strong className="sub-count">{plan.users} <small>usuários</small></strong>
                    </div>
                    <div className="sub-progress-bg">
                      <div 
                        className="sub-progress-fill" 
                        style={{ width: `${percent}%`, backgroundColor: barColor }}
                      ></div>
                    </div>
                    <span className="sub-percent">{percent}% do total</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="admin-recent-activity admin-panel">
          <h3>Atividades Recentes</h3>
          <ul className="activity-list">
            <li><span className="activity-dot blue"></span> <strong>Alice Souza</strong> assinou o plano Premium. <span>Há 10 min</span></li>
            <li><span className="activity-dot orange"></span> <strong>Bruno Lima</strong> abriu um novo ticket de suporte. <span>Há 45 min</span></li>
            <li><span className="activity-dot green"></span> <strong>Carla Dias</strong> concluiu o desafio "Matemática". <span>Há 2 horas</span></li>
            <li><span className="activity-dot blue"></span> <strong>Marcos Silva</strong> criou uma nova conta. <span>Há 3 horas</span></li>
          </ul>
        </div>
      </div>
    );
  };

  const UsersPanel = () => (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h2>Gerenciar Usuários</h2>
      </div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Plano</th>
            <th>Moedas</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td><strong>{user.name}</strong><br/><small className={user.status === 'Ativo' ? 'text-success' : 'text-danger'}>{user.status}</small></td>
              <td>{user.email}</td>
              <td><span className={user.plan === 'Premium' ? 'stat-progress' : ''}>{user.plan}</span></td>
              <td>{user.coins}</td>
              <td>
                <button className="btn-outline admin-table-btn" onClick={() => setEditUser(user)}>Editar</button>
                <button className="btn-pause admin-table-btn" onClick={() => toggleUserStatus(user.id)}>
                  {user.status === 'Ativo' ? 'Suspender' : 'Reativar'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const PlansPanel = () => (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h2>Gerenciar Planos</h2>
        <button className="btn-primary" onClick={() => setIsCreatePlanOpen(true)}>+ Novo Plano</button>
      </div>
      <div className="admin-plans-grid">
        {plans.map(plan => (
          <div key={plan.id} className={`pricing-card ${plan.name === 'Premium' ? 'popular' : ''}`}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p className="admin-plan-desc">{plan.desc}</p>
            <p style={{marginBottom: '20px', color: '#666', fontSize: '13px'}}>{plan.users} assinantes ativos</p>
            <button className="btn-outline admin-btn-sm" onClick={() => setEditPlan(plan)}>Editar Plano</button>
          </div>
        ))}
      </div>
    </div>
  );

  const ChallengesPanel = () => (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h2>Gerenciar Desafios</h2>
        <button className="btn-primary" onClick={() => setIsCreateChallengeOpen(true)}>+ Criar Desafio</button>
      </div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Ícone</th>
            <th>Título e Descrição</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {challenges.map(c => (
            <tr key={c.id}>
              <td style={{fontSize: '28px', textAlign: 'center'}}>{c.icon}</td>
              <td><strong>{c.title}</strong><br/><small>{c.desc}</small></td>
              <td>
                <span className={`challenge-badge ${c.status === 'Ativo' ? 'completed-badge' : 'ongoing-badge'}`}>
                  {c.status}
                </span>
              </td>
              <td>
                <button className="btn-outline admin-table-btn" onClick={() => setEditChallenge(c)}>Editar</button>
                <button className="btn-pause admin-table-btn" onClick={() => toggleChallengeStatus(c.id)}>
                  {c.status === 'Ativo' ? 'Suspender' : 'Reativar'}
                </button>
                <button className="btn-add admin-table-btn" style={{backgroundColor: '#ff4d4d'}} onClick={() => deleteChallenge(c.id)}>Apagar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const TicketsPanel = () => (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h2>Tickets de Suporte</h2>
      </div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Assunto</th>
            <th>Data</th>
            <th>Estado</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td><strong>{ticket.user}</strong></td>
              <td>{ticket.subject}</td>
              <td><small>{ticket.date}</small></td>
              <td>
                <span className={`challenge-badge ${ticket.status === 'Aberto' ? 'ongoing-badge' : 'completed-badge'}`}>
                  {ticket.status}
                </span>
              </td>
              <td>
                <button 
                  className="btn-primary admin-btn-sm"
                  onClick={() => handleOpenTicket(ticket)}
                  disabled={ticket.status === 'Respondido'}
                  style={{ opacity: ticket.status === 'Respondido' ? 0.5 : 1 }}
                >
                  {ticket.status === 'Respondido' ? 'Já Respondido' : 'Responder'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderPanel = () => {
    switch (activeTab) {
      case 'Usuários': return <UsersPanel />;
      case 'Planos': return <PlansPanel />;
      case 'Desafios': return <ChallengesPanel />;
      case 'Tickets': return <TicketsPanel />;
      default: return <DashboardPanel />;
    }
  };

  return (
    <div className="admin-layout">

      <div className="admin-main">
        {/* SIDEBAR */}
        <div className="admin-sidebar">
          <button className={`admin-side-btn ${activeTab === 'Dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('Dashboard')}>📊 Dashboard</button>
          <button className={`admin-side-btn ${activeTab === 'Usuários' ? 'active' : ''}`} onClick={() => setActiveTab('Usuários')}>👥 Usuários</button>
          <button className={`admin-side-btn ${activeTab === 'Planos' ? 'active' : ''}`} onClick={() => setActiveTab('Planos')}>📋 Planos</button>
          <button className={`admin-side-btn ${activeTab === 'Desafios' ? 'active' : ''}`} onClick={() => setActiveTab('Desafios')}>🏆 Desafios</button>
          <button className={`admin-side-btn ${activeTab === 'Tickets' ? 'active' : ''}`} onClick={() => setActiveTab('Tickets')}>🎟️ Tickets</button>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="admin-content">
          {renderPanel()}
        </div>
      </div>

      {/* Modal de Criação de Desafio */}
      {isCreateChallengeOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h3>Criar Novo Desafio</h3>
            <input 
              type="text" 
              className="admin-input" 
              placeholder="Ícone (Emoji, ex: 🚀)" 
              value={newChallenge.icon}
              onChange={(e) => setNewChallenge({...newChallenge, icon: e.target.value})}
            />
            <input 
              type="text" 
              className="admin-input" 
              placeholder="Título do Desafio" 
              value={newChallenge.title}
              onChange={(e) => setNewChallenge({...newChallenge, title: e.target.value})}
            />
            <textarea 
              className="admin-input" 
              rows="3" 
              placeholder="Descrição do Desafio"
              value={newChallenge.desc}
              onChange={(e) => setNewChallenge({...newChallenge, desc: e.target.value})}
            ></textarea>
            <div className="admin-modal-actions">
              <button className="btn-outline" onClick={() => setIsCreateChallengeOpen(false)}>Cancelar</button>
              <button className="btn-primary" onClick={handleCreateChallenge}>Salvar Desafio</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Criação de Plano */}
      {isCreatePlanOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h3>Criar Novo Plano</h3>
            <input 
              type="text" 
              className="admin-input" 
              placeholder="Nome do Plano" 
              value={newPlan.name}
              onChange={(e) => setNewPlan({...newPlan, name: e.target.value})}
            />
            <input 
              type="text" 
              className="admin-input" 
              placeholder="Preço (ex: R$ 29,90/mês)" 
              value={newPlan.price}
              onChange={(e) => setNewPlan({...newPlan, price: e.target.value})}
            />
            <textarea 
              className="admin-input" 
              rows="3" 
              placeholder="Descrição do Plano"
              value={newPlan.desc}
              onChange={(e) => setNewPlan({...newPlan, desc: e.target.value})}
            ></textarea>
            <div className="admin-modal-actions">
              <button className="btn-outline" onClick={() => setIsCreatePlanOpen(false)}>Cancelar</button>
              <button className="btn-primary" onClick={handleCreatePlan}>Salvar Plano</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Edição de Usuário */}
      {editUser && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h3>Editar Usuário</h3>
            <input 
              type="text" 
              className="admin-input" 
              value={editUser.name} 
              onChange={(e) => setEditUser({...editUser, name: e.target.value})}
              placeholder="Nome do Usuário" 
            />
            <input 
              type="email" 
              className="admin-input" 
              value={editUser.email} 
              onChange={(e) => setEditUser({...editUser, email: e.target.value})}
              placeholder="E-mail" 
            />
            <select 
              className="admin-input" 
              value={editUser.plan} 
              onChange={(e) => setEditUser({...editUser, plan: e.target.value})}
            >
              <option value="Grátis">Grátis</option>
              <option value="Premium">Premium</option>
              <option value="Institucional">Institucional</option>
            </select>
            <input 
              type="number" 
              className="admin-input" 
              value={editUser.coins} 
              onChange={(e) => setEditUser({...editUser, coins: parseInt(e.target.value) || 0})}
              placeholder="Moedas" 
            />
            <div className="admin-modal-actions">
              <button className="btn-outline" onClick={() => setEditUser(null)}>Cancelar</button>
              <button className="btn-primary" onClick={handleSaveUser}>Salvar Alterações</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Ticket */}
      {activeTicket && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h3>Responder Ticket</h3>
            <div className="admin-modal-info">
              <p><strong>De:</strong> {activeTicket.user}</p>
              <p><strong>Assunto:</strong> {activeTicket.subject}</p>
              <p><strong>Data:</strong> {activeTicket.date}</p>
            </div>
            <textarea 
              placeholder="Digite sua resposta aqui para o usuário..." 
              rows="5"
              className="admin-input"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            ></textarea>
            <div className="admin-modal-actions">
              <button className="btn-outline" onClick={() => setActiveTicket(null)}>Cancelar</button>
              <button className="btn-primary" onClick={handleSendReply}>Enviar Resposta</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Edição de Plano */}
      {editPlan && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h3>Editar Plano: {editPlan.name}</h3>
            <input type="text" className="admin-input" defaultValue={editPlan.name} placeholder="Nome do Plano" />
            <input type="text" className="admin-input" defaultValue={editPlan.price} placeholder="Preço (ex: R$ 19,90)" />
            <textarea className="admin-input" rows="3" defaultValue={editPlan.desc} placeholder="Descrição curta"></textarea>
            <div className="admin-modal-actions">
              <button className="btn-outline" onClick={() => setEditPlan(null)}>Cancelar</button>
              <button className="btn-primary" onClick={() => { setEditPlan(null); triggerToast("Plano salvo com sucesso!"); }}>Salvar Alterações</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Edição de Desafio */}
      {editChallenge && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h3>Editar Desafio</h3>
            <input type="text" className="admin-input" defaultValue={editChallenge.title} placeholder="Título do Desafio" />
            <textarea className="admin-input" rows="3" defaultValue={editChallenge.desc} placeholder="Descrição"></textarea>
            <div className="admin-modal-actions">
              <button className="btn-outline" onClick={() => setEditChallenge(null)}>Cancelar</button>
              <button className="btn-primary" onClick={() => { setEditChallenge(null); triggerToast("Desafio salvo com sucesso!"); }}>Salvar Alterações</button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION (Pop-up flutuante) */}
      {showToast && (
        <div className="admin-toast">
          ✅ {toastMsg}
        </div>
      )}
    </div>
  );
}

export default Admin;