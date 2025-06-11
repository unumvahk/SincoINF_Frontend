

import React from 'react';
import Layout from '../../../layout/Layout'; 
import FormularioInformacionEquipo from '../componentes/FormularioInformacionEquipo';
import BotonesEquipoAccion from '../componentes/BotonesEquipoAccion';
import MetodoRepotenciacionEquipo from '../componentes/MetodoRepotenciacionEquipo';
import '../estilos/EquipoInfoGeneral.css';

const VistaInformacionEquipo: React.FC = () => {
  return (
    <Layout>
      <div className="contenedor-info-equipo">
        <FormularioInformacionEquipo />
        <BotonesEquipoAccion />
        <MetodoRepotenciacionEquipo />
      </div>
    </Layout>
  );
};

export default VistaInformacionEquipo;
