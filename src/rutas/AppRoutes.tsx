// src/rutas/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import { Login } from '../modulos/auth/vistas/login'; // verifica esta ruta


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
