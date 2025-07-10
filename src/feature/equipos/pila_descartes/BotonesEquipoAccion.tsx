import React, { useState } from 'react';
import ModalTraslado from '../../../feature/equipos/form_traslado/TrasladoEquipo';
import ModalMantenimiento from '../../../feature/equipos/form_mantenimiento/ModalMantenimiento';
import MetodoRepotenciacionEquipo from '../../../feature/equipos/form_repotenciacion/MetodoRepotenciacionEquipo';
import './BotonesEquipoAccion.css';

const BotonesEquipoAccion: React.FC = () => {
  const [mostrarTraslado, setMostrarTraslado] = useState(false);
  const [mostrarMantenimiento, setMostrarMantenimiento] = useState(false);
  const [mostrarRepotenciacion, setMostrarRepotenciacion] = useState(false);

  return (
    <>
      <div className="botones-equipo-accion">
        <button className="btn-equipo verde-equipo" onClick={() => setMostrarTraslado(true)}>
          Añadir Traslado
        </button>
        <button className="btn-equipo naranja-equipo" onClick={() => setMostrarMantenimiento(true)}>
          Mantenimientos
        </button>
        <button className="btn-equipo azul-equipo" onClick={() => setMostrarRepotenciacion(true)}>
          Repotenciación
        </button>
      </div>

      <ModalTraslado visible={mostrarTraslado} onClose={() => setMostrarTraslado(false)} />
      <ModalMantenimiento visible={mostrarMantenimiento} onClose={() => setMostrarMantenimiento(false)} />

      {mostrarRepotenciacion && (
        <div className="modal-overlay-equipo">
          <div className="modal-contenido-equipo">
            <button className="btn-cerrar-equipo" onClick={() => setMostrarRepotenciacion(false)}>×</button>
            <MetodoRepotenciacionEquipo />
          </div>
        </div>
      )}
    </>
  );
};

export default BotonesEquipoAccion;
