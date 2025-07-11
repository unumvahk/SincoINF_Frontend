import React from 'react';
import '../estilos/ModalConfirmacion.css';

interface ModalConfirmacionProps {
  visible: boolean;
  onClose: () => void;
  onConfirmar: () => void;
}

const ModalConfirmacion: React.FC<ModalConfirmacionProps> = ({ visible, onClose, onConfirmar }) => {
  if (!visible) return null;

  return (
    <div className="modal-confirmacion-overlay">
      <div className="modal-confirmacion-contenido">
        <h3>¿Está seguro que desea inactivar esta licencia?</h3>
        <div className="botones-confirmacion">
          <button className="btn rojo" onClick={onConfirmar}>Sí, Inactivar</button>
          <button className="btn gris" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacion;
