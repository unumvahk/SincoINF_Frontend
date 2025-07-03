import { Routes, Route } from 'react-router-dom';
import PerfilVista from '../vistas/PerfilVista';

const RutasPerfil = () => {
  return (
    <Routes>
      <Route path="" element={<PerfilVista />} /> {/* ruta por defecto */}
    </Routes>
  );
};

export default RutasPerfil;
