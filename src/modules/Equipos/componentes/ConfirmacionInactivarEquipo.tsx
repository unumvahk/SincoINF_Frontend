

import React from "react";
import "../estilos/ConfirmacionInactivarEquipo.css";

interface Props {
  equipo: {
    placa: string;
    colaborador: string;
    fechaMantenimiento: string;
    ubicacion: string;
  };
  onCancelar: () => void;
  onConfirmar: () => void;
}

const ConfirmacionInactivar: React.FC<Props> = ({ equipo, onCancelar, onConfirmar }) => {
  return (
    <div className="modal-inactivar-overlay">
      <div className="modal-inactivar-contenido">
        <h2>¿Estás seguro que deseas inactivar este equipo?</h2>
        <div className="modal-inactivar-info">
          <p><strong>Placa:</strong> {equipo.placa}</p>
          <p><strong>Colaborador:</strong> {equipo.colaborador}</p>
          <p><strong>Fecha de Mantenimiento:</strong> {equipo.fechaMantenimiento}</p>
          <p><strong>Ubicación:</strong> {equipo.ubicacion}</p>
        </div>
        <div className="modal-inactivar-botones">
          <button className="btn-cancelar" onClick={onCancelar}>Cancelar</button>
          <button className="btn-confirmar" onClick={onConfirmar}>Sí, Inactivar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionInactivar;
