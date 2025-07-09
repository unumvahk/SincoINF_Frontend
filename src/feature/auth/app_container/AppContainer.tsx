import { Navigate } from 'react-router-dom';
import Spinner from '../../../components/spinner/Spinner';
import useAuth from '../../../hooks/useAuth';
import './AppContainer.css';
import Layout from '../../../layout/Layout';

const AppContainer = () => {
  const { usuario, isLoading } = useAuth();

  return (
    isLoading ? (
      <div className="main-app-container">
        <Spinner />
      </div>
    ) : usuario ? (
      <Layout />
    ) : 
    <Navigate
      to={'/login'}
      replace
      state={{ 
        redirectUrl: window.location.pathname, 
      }} 
    />
  )
}

export default AppContainer
