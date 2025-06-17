import { Routes, Route } from 'react-router-dom';
import { Login } from '../modules/auth/vistas/login'; // Asegúrate que el archivo se llame exactamente "Login.tsx"
import RutasEquipos from '../modules/Equipos/rutas/RutasEquipos';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/equipos/*" element={<RutasEquipos />} />
    </Routes>
  );
};

export default AppRoutes;
