import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Importamos o Provider aqui também se quisermos reforçar a segurança
import { AuthProvider } from './context/AuthContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Como o seu App.jsx já tem o AuthProvider dentro dele, 
       você não precisa duplicar aqui. Pode manter como está.
       Mas se a tela vermelha voltar, coloque o AuthProvider aqui em volta do <App />
    */}
    <App />
  </React.StrictMode>
);

reportWebVitals();