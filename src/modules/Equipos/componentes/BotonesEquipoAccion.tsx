import React, { useState } from 'react';
import ModalTraslado from './TrasladoModal';
import ModalMantenimiento from './ModalMantenimiento';
import MetodoRepotenciacionEquipo from './MetodoRepotenciacionEquipo';

const BotonesEquipoAccion: React.FC = () => {
  const [mostrarTraslado, setMostrarTraslado] = useState(false);
  const [mostrarMantenimiento, setMostrarMantenimiento] = useState(false);
  const [mostrarRepotenciacion, setMostrarRepotenciacion] = useState(false); // nuevo

  return (
    <>
      <div className="botones-accion">
        <button className="btn verde" onClick={() => setMostrarTraslado(true)}>Añadir Traslado</button>
        <button className="btn naranja" onClick={() => setMostrarMantenimiento(true)}>Mantenimientos</button>
        <button className="btn azul" onClick={() => setMostrarRepotenciacion(true)}>Repotenciación</button>
      </div>

      <ModalTraslado visible={mostrarTraslado} onClose={() => setMostrarTraslado(false)} />
      <ModalMantenimiento visible={mostrarMantenimiento} onClose={() => setMostrarMantenimiento(false)} />

      {mostrarRepotenciacion && (
        <div className="modal-overlay">
          <div className="modal-contenido">
            <button className="btn-cerrar" onClick={() => setMostrarRepotenciacion(false)}>×</button>
            <MetodoRepotenciacionEquipo />
          </div>
        </div>
      )}
    </>
  );
};

export default BotonesEquipoAccion;
