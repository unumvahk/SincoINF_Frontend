import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import FormularioInformacionEquipo from '../componentes/FormularioInformacionEquipo';
import BotonesEquipoAccion from '../componentes/BotonesEquipoAccion';
import HistorialMaquina from '../componentes/HistorialEquipoEspecifico';
import ModalTraslado from '../componentes/TrasladoEquipo'; 

// Estilos
import '../estilos/FormularioInformacionEquipo.css';
import '../estilos/HistorialEquiposEspecifico.css';
import '../estilos/BotonesEquipoAccion.css';
import '../estilos/MetodoRepotenciacion.css';
import '../estilos/TrasladoEquipo.css';

const VistaInformacionEquipo: React.FC = () => {
  const [mostrarModalTraslado, setMostrarModalTraslado] = useState(false); 
  const navigate = useNavigate();

  return (
    <>
      {/*  Botón de regreso */}
      <button className="btn-volver" onClick={() => navigate('/equipos')}>
        <FaArrowLeft />
      </button>

      <div className="contenedor-info-equipo">
        {/* Columna izquierda */}
        <div className="columna-izquierda">
          <FormularioInformacionEquipo />
          <BotonesEquipoAccion />
        </div>
        {/* Columna derecha */}
        <div className="columna-derecha">
          <HistorialMaquina />
        </div>
      </div>

      {/*  Modal de traslado */}
      <ModalTraslado
        visible={mostrarModalTraslado}
        onClose={() => setMostrarModalTraslado(false)}
      />
    </>
  )
};

export default VistaInformacionEquipo;
