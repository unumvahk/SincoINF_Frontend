import { Routes, Route, Navigate } from 'react-router-dom';
import LoginView from '../views/auth/login/LoginView';
import VerifyEmailView from '../views/auth/verify_email/VerifyEmailView';
import ForgotPasswordView from '../views/auth/forgot_password/ForgotPasswordView';
import ResetPassword from '../views/auth/reset_password/ResetPassword';
import AppContainer from '../feature/auth/app_container/AppContainer';
import IsAuthenticated from '../feature/auth/is_authenticated/IsAuthenticated';
import RutasUsuarios from './RutasUsuarios';
import RutasEquipos from './RutasEquipos';
import RutasLicencia from './RutasLicencia';
import RutasPerfil from './RutasPerfil';

const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas publicas */}
      <Route element={<IsAuthenticated />}>
        <Route path="/login" element={<LoginView />} />
        <Route path='/email/verify/:code' element={ <VerifyEmailView /> } />
        <Route path='/password/forgot' element={<ForgotPasswordView />} />
        <Route path='/password/reset' element={<ResetPassword />} />
      </Route>

      {/* Rutas protejidas */}
      <Route path='/' element={<AppContainer />}>
        {/* Redirecciona la ruta '/' a '/equipos' para evitar una pantalla en blanco */}
        <Route index element={<Navigate to={'/equipos/'} replace />} />

        {/* Nested Routes */}
        <Route path="/equipos/*" index element={<RutasEquipos />} />
        <Route path="/licencias/*" element={<RutasLicencia />} />
        <Route path='/usuarios/*' element={<RutasUsuarios /> }  />
        <Route path='/perfil/*' element={<RutasPerfil />} />
      </Route> 
    </Routes>
  );
};

export default AppRouter;
