import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../layout/auth-layout/AuthLayout';
import LoginView from '../views/auth/login/LoginView';
import VerifyEmailView from '../views/auth/verify_email/VerifyEmailView';
import RutasEquipos from '../modules/Equipos/rutas/RutasEquipos';
import RutasLicencia from '../modules/Licencias/rutas/RutasLicencia';
import ForgotPasswordView from '../views/auth/forgot_password/ForgotPasswordView';

const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas publicas */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<LoginView />} />
        <Route path='/email/verify/:code' element={ <VerifyEmailView /> } />
        <Route path='/password/forgot' element={<ForgotPasswordView />} />
      </Route>

      {/* Rutas protejidas */}
      <Route path="/equipos/*" element={<RutasEquipos />} />
      <Route path="/licencias/*" element={<RutasLicencia />} />
    </Routes>
  );
};

export default AppRouter;
