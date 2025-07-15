import { Routes, Route, Navigate } from 'react-router-dom';

// Vistas públicas
import LoginView from '../views/auth/login/LoginView';
import VerifyEmailView from '../views/auth/verify_email/VerifyEmailView';
import ForgotPasswordView from '../views/auth/forgot_password/ForgotPasswordView';
import ResetPassword from '../views/auth/reset_password/ResetPassword';

// Componentes de seguridad y layout
import AppContainer from '../feature/auth/app_container/AppContainer';
import IsAuthenticated from '../feature/auth/is_authenticated/IsAuthenticated';

// Rutas internas por módulo
import RutasUsuarios from './RutasUsuarios';
import RutasEquipos from './RutasEquipos';
import RutasLicencia from './RutasLicencia';
import RutasPerfil from './RutasPerfil';

const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<IsAuthenticated />}>
        <Route path="/login" element={<LoginView />} />
        <Route path="/email/verify/:code" element={<VerifyEmailView />} />
        <Route path="/password/forgot" element={<ForgotPasswordView />} />
        <Route path="/password/reset" element={<ResetPassword />} />
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
