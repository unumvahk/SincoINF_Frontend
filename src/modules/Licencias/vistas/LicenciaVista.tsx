// src/vistas/LicenciaVista.tsx
import React from 'react';
import LicenciaDetalle from '../componentes/LicenciaDetalle';
import Layout from '../../../layout/Layout';


const LicenciaVista: React.FC = () => {
  return (
    <div className="pagina">
      <Layout>
      <LicenciaDetalle />
      </Layout>
    </div>
  );
};

export default LicenciaVista;
