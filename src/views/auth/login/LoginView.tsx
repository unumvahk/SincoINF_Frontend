import LoginForm from "../../../feature/auth/login/LoginForm";
import './LoginView.css';

const LoginView = () => {
  return (
    <div className='login-container'>
      <div className='login-left' >
        <img src="/img/logo.png" alt="Logo" className='login-logo' />
      </div>

      <div className='login-right'>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginView;
