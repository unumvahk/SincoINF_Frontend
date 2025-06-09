// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // asegúrate de que la ruta sea correcta
import './main.tsx'; // opcional

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
