import React from 'react';
import { useLocation } from 'react-router-dom';
import LicenciaDetalle from '../componentes/DetallesLicencia';
 
const DetallesVista: React.FC = () => {
  const location = useLocation();
  const { licencia } = location.state || {};
 
  if (!licencia) {
    return (
      <>
        <div style={{ padding: '2rem' }}>
          <h3>Error: No se encontró información de la licencia.</h3>
        </div>
      </>
    );
  }
 
  return (
    <>
      <LicenciaDetalle licencia={licencia} />
    </>
  );
};
 
export default DetallesVista;
 