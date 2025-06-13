import React from 'react';
import '../../estilos/TrasladoModal.css'; // Asegúrate de tener los estilos

interface Props {
  visible: boolean;
  onClose: () => void;
}

const ModalTraslado: React.FC<Props> = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <button className="btn-cerrar" onClick={onClose}>X</button>
        <h2 className="modal-titulo">Formulario de Traslado</h2>
        <form className="formulario-traslado">
          <label>Destino</label>
          <input type="text" placeholder="Escribe el destino..." />

          <label>Responsable</label>
          <input type="text" placeholder="Responsable del traslado" />

          <label>Fecha</label>
          <input type="date" />

          <button type="submit" className="btn-enviar">Guardar Traslado</button>
        </form>
      </div>
    </div>
  );
};

export default ModalTraslado;
