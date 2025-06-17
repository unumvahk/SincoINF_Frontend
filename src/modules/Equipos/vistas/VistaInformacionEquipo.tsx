import React, { useState } from 'react';
import Layout from '../../../layout/Layout'; 
import FormularioInformacionEquipo from '../componentes/FormularioInformacionEquipo';
import BotonesEquipoAccion from '../componentes/BotonesEquipoAccion';
import MetodoRepotenciacionEquipo from '../componentes/MetodoRepotenciacionEquipo';
import HistorialMaquina from '../componentes/HistorialEquipoEspecifico';
import ModalTraslado from '../componentes/TrasladoModal'; 

// Estilos
import '../estilos/EquipoInfoGeneral.css';
import '../estilos/HistorialMaquina.css';
import '../estilos/BotonesEquipoAccion.css';
import '../estilos/MetodoRepotenciacion.css';
import '../estilos/TrasladoModal.css';

const VistaInformacionEquipo: React.FC = () => {
  const [mostrarModalTraslado, setMostrarModalTraslado] = useState(false); 

  return (
    <Layout>
      <div className="contenedor-info-equipo">
        {/* Columna izquierda */}
        <div className="columna-izquierda">
          <FormularioInformacionEquipo />
          <BotonesEquipoAccion />
          <MetodoRepotenciacionEquipo />
        </div>
        {/* Columna derecha */}
        <div className="columna-derecha">
          <HistorialMaquina />
        </div>
      </div>

      {/* ✅ Modal de traslado */}
      <ModalTraslado
        visible={mostrarModalTraslado}
        onClose={() => setMostrarModalTraslado(false)}
      />
    </Layout>
  );
};

export default VistaInformacionEquipo;
