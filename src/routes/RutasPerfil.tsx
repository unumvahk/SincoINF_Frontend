import { Routes, Route } from 'react-router-dom';
import PerfilUsuarioVista from '../views/perfil/PerfilVista';

const RutasPerfil = () => {
  return (
    <Routes>
      <Route path="" element={<PerfilUsuarioVista />} /> {/* ruta por defecto */}
    </Routes>
  );
};

export default RutasPerfil;
