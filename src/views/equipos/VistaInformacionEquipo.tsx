import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import FormularioInformacionEquipo from '../../feature/equipos/detalles/FormularioInformacionEquipo';
import BotonesEquipoAccion from '../../feature/equipos/pila_descartes/BotonesEquipoAccion';
import HistorialMaquina from '../../feature/equipos/historial/HistorialEquipoEspecifico';
import ModalTraslado from '../../feature/equipos/form_traslado/TrasladoEquipo';
import './EquiposVista.css'

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
