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
      {/* Rutas públicas */}
      <Route element={<IsAuthenticated />}>
        <Route path="/login" element={<LoginView />} />
        <Route path='/email/verify/:code' element={ <VerifyEmailView /> } />
        <Route path='/password/forgot' element={<ForgotPasswordView />} />
        <Route path='/password/reset' element={<ResetPasswordView />} />
      </Route>

      {/* Rutas protegidas dentro del contenedor principal */}
      <Route path="/" element={<AppContainer />}>
        {/* Redirección al módulo de equipos por defecto */}
        <Route index element={<Navigate to="/equipos/" replace />} />

        {/* Rutas internas por módulo */}
        <Route path="/equipos/*" element={<RutasEquipos />} />
        <Route path="/licencias/*" element={<RutasLicencia />} />
        <Route path="/usuarios/*" element={<RutasUsuarios />} />
        <Route path="/perfil/*" element={<RutasPerfil />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;