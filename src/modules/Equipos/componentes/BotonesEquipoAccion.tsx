import React, { useState } from 'react';
import ModalTraslado from './TrasladoModal'; // Ajusta la ruta si está en otra carpeta

const BotonesEquipoAccion: React.FC = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <>
      <div className="botones-accion">
        <button className="btn verde" onClick={abrirModal}>
          Añadir Traslado
        </button>
        <button className="btn naranja">Mantenimientos</button>
        <button className="btn azul">Repotenciación</button>
      </div>

      <ModalTraslado visible={mostrarModal} onClose={cerrarModal} />
    </>
  );
};

export default BotonesEquipoAccion;
