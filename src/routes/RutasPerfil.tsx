import { Routes, Route } from 'react-router-dom';
import PerfilVista from '../views/perfil/PerfilVista';

const RutasPerfil = () => {
  return (
    <Routes>
      <Route path="/" element={<PerfilVista />} />
    </Routes>
  );
};

export default RutasPerfil;
