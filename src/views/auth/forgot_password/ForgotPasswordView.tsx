import { Link } from 'react-router-dom';
import './ForgotPasswordView.css';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { sendPasswordResetEmail } from '../../../lib/api';
import Alert from '../../../components/alert/Alert';

const ForgotPasswordView = () => {
  const {
    mutate: sendPasswordReset,
    isPending,
    isSuccess,
    isError,
    error
  } = useMutation({
    mutationFn: sendPasswordResetEmail
  });

  const [email, setEmail] = useState('');

  return (
    <div className='main-container'>
      {
        isError && <p className='error-message'>
          {
            error?.message || 'Un error ha ocurrido.'
          }
        </p>
      }

      <h3>Cambia tu contraseña</h3>

      {
        isSuccess ? (
          <Alert  />
        ) : (
          <form className='form-container'>
            <div className="form-field">
              <label>Email:</label>
              <input type="email" placeholder='Ingrese su correo aquí' onChange={ (e) => setEmail(e.target.value) }/>
            </div>

            <button type="submit" className='submit-btn' onClick={ () => sendPasswordReset(email) }>Cambiar Contraseña</button>

            <p className='form-message'>Volver al <Link to={'/'}>login</Link></p>
          </form>
        )
      }
    </div>
  )
}

export default ForgotPasswordView;