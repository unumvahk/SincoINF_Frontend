import { Routes, Route } from 'react-router-dom';
import PerfilUsuarioVista from '../feature/perfil/PerfilUsuario';


const RutasPerfil = () => {
  return (
    <Routes>
      <Route path="" element={<PerfilUsuarioVista />} /> {/* ruta por defecto */}
    </Routes>
  );
};

export default RutasPerfil;
