
import React, { useState } from 'react';

import './login.css'

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
    <div className="login-container">
      <img src="/img/logo.png" alt="Logo" className="logo" />

      <h2>LOGIN</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />

        <button id= 'boton'type="submit">Ingresar</button>
      </form>
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
};
