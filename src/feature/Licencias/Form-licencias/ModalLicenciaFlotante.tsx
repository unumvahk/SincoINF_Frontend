import React from "react";
import "../estilos/EstilosModalLicencia.css";

interface Props {
  onClose: () => void;
}

const ModalLicenciaFlotante: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="modal-fondo">
      <div className="modal-contenedor">
        {/* botón de cierre con X */}
        <button className="modal-cerrar" onClick={onClose}>
          &times;
        </button>

        <h2 className="modal-titulo">Añadir Licencia</h2>

        <input
          type="text"
          placeholder="Nombre de licencia"
          className="modal-input"
        />
        <input
          type="number"
          placeholder="Cantidad"
          className="modal-input"
        />
        <input
          type="text"
          placeholder="Proveedor"
          className="modal-input"
        />

        <button className="modal-boton" onClick={onClose}>
          Agregar Licencia
        </button>
      </div>
    </div>
  );
};

export default ModalLicenciaFlotante;
