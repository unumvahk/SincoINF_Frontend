import React from 'react';

const BotonesEquipoAccion: React.FC = () => {
  return (
    <div className="botones-accion">
      <button className="btn verde">Añadir Traslado</button>
      <button className="btn naranja">Mantenimientos</button>
      <button className="btn azul">Repotenciación</button>
    </div>
  );
};

export default BotonesEquipoAccion;
