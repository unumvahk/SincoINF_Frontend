// src/rutas/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import { Login } from '../modules/auth/vistas/login'; // verifica esta ruta
import RutasEquipos from "../modules/Equipos/rutas/RutasEquipos";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/equipos/*" element={<RutasEquipos />} />
    </Routes>
  );
};
export default AppRoutes;