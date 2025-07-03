import React from 'react';
import '../estilos/ModalEditarUsuario.css';

interface ModalConfirmarProps {
  nombre: string;
  onClose: () => void;
  onConfirmar: () => void;
}

const ModalConfirmarInactivar: React.FC<ModalConfirmarProps> = ({ nombre, onClose, onConfirmar }) => {
  return (
    <div className="modal-editar-overlay">
      <div className="modal-editar-contenido">
        <button className="btn-cerrar-modal" onClick={onClose}>
          &times;
        </button>
        <h3>Confirmar inactivación</h3>
        <p>¿Está seguro que desea inactivar a <strong>{nombre}</strong>?</p>
        <div className="botones-confirmar">
          <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
          <button className="btn-confirmar" onClick={onConfirmar}>Inactivar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmarInactivar;
