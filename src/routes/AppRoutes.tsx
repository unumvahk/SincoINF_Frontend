// src/rutas/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import { Login } from '../modulos/auth/vistas/login'; // verifica esta ruta
import RutasEquipos from "../modulos/equipos/rutas/RutasEquipos";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/equipos/*" element={<RutasEquipos />} />
    </Routes>
  );
};
export default AppRoutes;