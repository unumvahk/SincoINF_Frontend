import { Routes, Route, Navigate } from 'react-router-dom';
import IsAuthenticated from '../feature/auth/IsAuthenticated';
import AppContainer from '../feature/auth/AppContainer';
import LoginView from '../views/auth/LoginView';
import VerifyEmailView from '../views/auth/VerifyEmailView';
import ForgotPasswordView from '../views/auth/ForgotPasswordView';
import ResetPasswordView from '../views/auth/ResetPasswordView';
import RutasEquipos from './RutasEquipos';
import RutasLicencia from './RutasLicencia';
import RutasUsuarios from './RutasUsuarios';
import RutasPerfil from './RutasPerfil';

const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas publicas */}
      <Route element={<IsAuthenticated />}>
        <Route path="/login" element={<LoginView />} />
        <Route path='/email/verify/:code' element={ <VerifyEmailView /> } />
        <Route path='/password/forgot' element={<ForgotPasswordView />} />
        <Route path='/password/reset' element={<ResetPasswordView />} />
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