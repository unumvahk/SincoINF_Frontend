import React, { useState } from "react";
import { FaDesktop, FaUser, FaKey, FaCalendarAlt } from "react-icons/fa";
import "../estilos/EstilosModalRevocarConfirmacion.css";

interface Props {
  placa: string;
  colaborador: string;
  licencia: string;
  fechaAsignacion: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ModalConfirmarRevocacion: React.FC<Props> = ({
  placa,
  colaborador,
  licencia,
  fechaAsignacion,
  onClose,
  onConfirm,
}) => {
  const [motivo, setMotivo] = useState("");

  return (
    <div className="modal-fondo">
      <div className="modal-contenedor">
        {/* ❌ Botón de cerrar */}
        <button className="modal-cerrar" onClick={onClose}>
          &times;
        </button>

        <h2 className="modal-titulo-rojo">
          ¿Estás seguro que deseas revocar esta licencia?
        </h2>

        <div className="modal-detalles">
          <p><FaDesktop /><strong className="azul"> Placa:</strong> {placa}</p>
          <p><FaUser /><strong className="azul"> Colaborador:</strong> {colaborador}</p>
          <p><FaKey /><strong className="azul"> Licencia:</strong> {licencia}</p>
          <p><FaCalendarAlt /><strong className="azul"> Fecha de Asignación:</strong> {fechaAsignacion}</p>
        </div>

        <div className="modal-campo-select">
          <label className="modal-label" htmlFor="motivo">Motivo de revocación:</label>
          <select
            id="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            className="modal-select"
          >
            <option value="">Seleccione un motivo</option>
            <option value="caducidad">Caducidad de la licencia</option>
            <option value="reasignacion">Reasignación del equipo</option>
            <option value="baja">Baja de colaborador</option>
          </select>
        </div>

        <div className="modal-acciones">
          <button className="modal-boton-cancelar" onClick={onClose}>Cancelar</button>
          <button
            className="modal-boton-confirmar"
            onClick={() => {
              console.log("Revocando con motivo:", motivo);
              onConfirm();
            }}
            disabled={!motivo}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmarRevocacion;
