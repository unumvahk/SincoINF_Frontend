import { Link } from 'react-router-dom';
import './ForgotPasswordView.css';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { sendPasswordResetEmail } from '../../../lib/api';
import Alert from '../../../components/alert/Alert';
import Spinner from '../../../components/spinner/Spinner';

const ForgotPasswordView = () => {
  const {
    mutate: sendPasswordReset,
    isPending,
    isSuccess,
    isError
  } = useMutation({
    mutationFn: sendPasswordResetEmail
  });

  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPasswordReset(email);
  }

  return (
    <div className='main-container'>
      {
        isError && <p className='error-message'>Se ha ocacionado un error.</p>
      }

      <h3 className='rp-h3'>Cambia tu contraseña</h3>

      <form className='form-container' onSubmit={ handleSubmit }>
        {
          isSuccess ? (
            <Alert isPending={isPending} status='success' text='El email ha sido enviado! Revisa tu bandeja de  entrada y sigue las instrucciones.' />
          ) : (
            <>
              <div className="form-field">
                <label>Email:</label>
                <input
                  type="email"
                  name='correo'
                  placeholder='Ingrese su correo aquí'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className='submit-btn'>
                {
                  isPending ? <Spinner /> : 'Cambiar contraseña'
                }
              </button>
            </>
          )
        }

        <p className='form-message'>Volver al <Link to={'/'}>Login</Link></p>
      </form>
    </div>
  )
}

export default ForgotPasswordView;