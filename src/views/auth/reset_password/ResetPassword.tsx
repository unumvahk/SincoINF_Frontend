import { Link, useSearchParams } from 'react-router-dom';
import Alert from '../../../components/alert/Alert';
import './ResetPassword.css';
import ResetPasswordForm from '../../../feature/auth/reset_password/ResetPasswordForm';

const ResetPassword = () => {
  const [searchParams ] = useSearchParams();
  const code = Number(searchParams.get('code'));
  const exp = Number(searchParams.get('exp'));
  const now = Date.now();

  const linkIsValid = code && exp && exp > now;

  return (
    <div className='main-container'>
      <div className="content-container">
        {
          linkIsValid ? (
            <ResetPasswordForm code={code} />
          ) : (
            <>
              <Alert isPending={false} status='error' text='El link ha espirado o es invalido' />
              <p className='form-message'>Volver a generar un <Link to={'/password/forgot'}>Nuevo Link</Link></p>
            </>
          )
        }
      </div>
    </div>
  )
}

export default ResetPassword;
