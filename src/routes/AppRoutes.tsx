import { Routes, Route } from 'react-router-dom';
import { Login } from '../modules/auth/vistas/login';
import RutasEquipos from '../modules/Equipos/rutas/RutasEquipos';
import RutasLicencia from '../modules/Licencias/rutas/RutasLicencia';
import RutasPerfil from '../modules/Perfil/rutas/RutasPerfil';
import RutasUsuarios from '../modules/Usuarios/rutas/RutasUsuarios';

// 👇 IMPORTA tu módulo Analítica
import RutasAnalitica from '../modules/Analítica/rutas/RutasAnalitica';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/equipos/*" element={<RutasEquipos />} />
      <Route path="/licencias/*" element={<RutasLicencia />} />
      <Route path="/perfil/*" element={<RutasPerfil />} />
      <Route path="/usuarios/*" element={<RutasUsuarios />} />

      <Route path="/analitica/*" element={<RutasAnalitica />} />
    </Routes>
  );
};

export default AppRoutes;
