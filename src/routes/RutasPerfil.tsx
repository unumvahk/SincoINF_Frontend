import { Routes, Route } from 'react-router-dom';
import PerfilUsuarioVista from '../modules/Perfil/vistas/PerfilVista';

const RutasPerfil = () => {
  return (
    <Routes>
      <Route path="" element={<PerfilUsuarioVista />} /> {/* ruta por defecto */}
    </Routes>
  );
};

export default RutasPerfil;
