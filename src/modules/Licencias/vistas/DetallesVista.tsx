import React from 'react';
import { useLocation } from 'react-router-dom';
import LicenciaDetalle from '../componentes/DetallesLicencia';
import Layout from '../../../layout/Layout';

const DetallesVista: React.FC = () => {
  const location = useLocation();
  const { licencia } = location.state || {};

  if (!licencia) {
    return (
      <Layout>
        <div style={{ padding: '2rem' }}>
          <h3>Error: No se encontró información de la licencia.</h3>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <LicenciaDetalle licencia={licencia} />
    </Layout>
  );
};

export default DetallesVista;
