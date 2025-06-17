import React, { useState } from 'react';
import './Login.css'; // Asegúrate que este archivo tenga el nombre correcto

export const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const usuarioFalso = {
      email: 'usuario@ejemplo.com',
      contraseña: '123456',
    };

    if (email === usuarioFalso.email && contraseña === usuarioFalso.contraseña) {
      setMensaje('Inicio de sesión exitoso');
    } else {
      setMensaje('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-page">
      {/* Lado izquierdo con imagen/logo */}
      <div className="login-left">
        <img src="/img/logo.png" alt="Logo" className="login-logo" />
      </div>

      {/* Lado derecho con formulario */}
      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Inicio de sesión</h2>

          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="email"
              placeholder="Usuario"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>

          <button type="submit">Acceder</button>

          <div className="login-links">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>

          {mensaje && <p className="mensaje">{mensaje}</p>}
        </form>
      </div>
    </div>
  );
};
