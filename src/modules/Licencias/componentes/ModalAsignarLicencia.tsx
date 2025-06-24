import React from 'react';
import '../estilos/LicenciaDetalle.css';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const ModalAsignarLicencia: React.FC<Props> = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <button className="btn-cerrar" onClick={onClose}>×</button>
        <h3 className="modal-titulo">Asignar Licencia</h3>
        <form className="grid-formulario">
          <input type="text" placeholder="Nombre Usuario" />
          <input type="text" placeholder="Área" />
          <input type="text" placeholder="Placa" />
        </form>
        <button className="btn verde">Confirmar Asignación</button>
      </div>
    </div>
  );
};

export default ModalAsignarLicencia;
