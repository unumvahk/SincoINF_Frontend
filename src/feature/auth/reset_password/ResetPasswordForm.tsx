import { useMutation } from '@tanstack/react-query';
import './ResetPasswordForm.css';
import { resetPassword } from '../../../lib/api';
import { useState } from 'react';
import Alert from '../../../components/alert/Alert';
import Spinner from '../../../components/spinner/Spinner';
import { Link } from 'react-router-dom';

type ResetPasswordFormProp = {
  code: number
}

const ResetPasswordForm = ({ code }: ResetPasswordFormProp) => {
  const [newPassword, setNewPassword] = useState('');
  const {
    mutate: resetUserPassword,
    isPending, 
    isSuccess,
    error,
  } = useMutation({
    mutationFn: resetPassword
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetUserPassword({ 
      nuevaContrasena: newPassword,
      codigoVerificacion: code,
    })
  }

  console.log(error);

  return (
    <>
      <h3 className='rp-h3'>Cambie su contraseña</h3>

      {
        isSuccess ? (
          <div className='pr-alert-container'>
            <Alert isPending={isPending} status='success' text='Se ha cambiado la contraseña correctamente.' />
            <p className='form-message'>Volver al <Link to={'/'}>Login</Link></p>
          </div>
        ) : 
        (
          <form className='form-container' onSubmit={ handleSubmit }>
            <p className='error-message'>
              {
                error && error?.message
              }
            </p>

            <div className="form-field">
              <label>Nueva Contraseña: </label>
              <input 
                type='password'
                name='contrasena'
                placeholder='Escribe tu nueva contraseña aquí'
                value={newPassword}
                onChange={ (e) => setNewPassword(e.target.value) }
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit}
                autoFocus
                required
              />
            </div>

            <button type="submit" className='submit-btn'>
              {
                isPending ? (
                  <Spinner />
                ) : (
                  'Cambiar Contraseña'
                )
              }
            </button>
          </form>
        )
      }
    </>
  )
}

export default ResetPasswordForm;
