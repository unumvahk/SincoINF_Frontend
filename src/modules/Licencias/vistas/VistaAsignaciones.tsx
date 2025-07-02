
import React from 'react';
import ControlDeAsignaciones from '../componentes/ControlDeAsignaciones';
import Layout from '../../../layout/Layout';


const VistaAsignaciones: React.FC = () => {
  return (
    <div className="pagina">
      <Layout>
      <ControlDeAsignaciones />
      </Layout>
    </div>
  );
};

export default VistaAsignaciones ;
