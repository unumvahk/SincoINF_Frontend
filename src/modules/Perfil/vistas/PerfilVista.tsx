// src/modules/Usuarios/vistas/PerfilUsuarioVista.tsx
import React from 'react';
import Layout from '../../../layout/Layout';
import PerfilUsuario from '../componentes/PerfilUsuario';

const PerfilUsuarioVista: React.FC = () => {
  return (
    <Layout>
      <PerfilUsuario />
    </Layout>
  );
};

export default PerfilUsuarioVista;
