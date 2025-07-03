import { Routes, Route } from 'react-router-dom';
import { Login } from '../modules/auth/vistas/login'; // Asegúrate que el archivo se llame exactamente "Login.tsx"
import RutasEquipos from '../modules/Equipos/rutas/RutasEquipos';
import RutasLicencia from '../modules/Licencias/rutas/RutasLicencia';
import RutasPerfil from '../modules/Perfil/rutas/RutasPerfil';
import RutasUsuarios from '../modules/Usuarios/rutas/RutasUsuarios';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/equipos/*" element={<RutasEquipos />} />
      <Route path="/licencias/*" element={<RutasLicencia />} />
      <Route path="/perfil/*" element={<RutasPerfil />} />
      <Route path="/usuarios/*" element={<RutasUsuarios />} />
    </Routes>
  );
};

export default AppRoutes;
