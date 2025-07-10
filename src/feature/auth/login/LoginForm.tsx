import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../../lib/api';
import './LoginForm.css';
import Spinner from '../../../components/spinner/Spinner';

const LoginForm = () => {
  const navigate = useNavigate();

  const { mutate: SingIn, isPending, isError } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate('/equipos/', {
        replace: true,
      });
    }
  });

  const [loginData, setLoginData] = useState({
    correo: '',
    contrasena: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SingIn(loginData)
  }

  return (
    <form className="login-form" onSubmit={ handleSubmit }>
      <h2>Inicio de sesión</h2>

      { isError &&  <div className="mensaje-container">
        <p className="mensaje">Correo o contraseña invalida.</p>
      </div> }

      <div className="input-group">
        <span className="icon">👤</span>
        <input
          type="email"
          name='correo'
          placeholder="Correo"
          value={loginData.correo}
          onChange={ handleInputChange }
          required
        />
      </div>

      <div className="input-group">
        <span className="icon">🔒</span>
        <input
          type="password"
          name='contrasena'
          placeholder="Contraseña"
          value={ loginData.contrasena }
          onChange={ handleInputChange }
          onKeyDown={
            (e) => e.key === 'Enter' && SingIn(loginData)
          }
          required
        />
      </div>

      <button className="boton-login" type="submit"> { isPending ? <Spinner /> : 'Acceder' } </button>
      
      <div className="login-links">
        <Link to={"/password/forgot"}>¿Olvidaste tu contraseña?</Link>
      </div>
    </form>
  );
};

export default LoginForm;