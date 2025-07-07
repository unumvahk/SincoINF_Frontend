import React, { useState } from "react";
import {
  FaDesktop,
  FaTag,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";
import "../estilos/ConfirmacionInactivarEquipo.css";

interface Props {
  equipo: {
    placa: string;
    marca: string;
    modelo: string;
    fechaIngreso: string;
    ubicacion: string;
  };
  onCancelar: () => void;
  onConfirmar: (motivo: string) => void;
}

const ConfirmacionInactivar: React.FC<Props> = ({ equipo, onCancelar, onConfirmar }) => {
  const [motivo, setMotivo] = useState("");
  const [error, setError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  const manejarConfirmacion = () => {
    if (motivo) {
      onConfirmar(motivo);
      setMensajeExito(`✅ Equipo con placa ${equipo.placa} inactivado exitosamente.`);
      setError("");

      setTimeout(() => {
        setMensajeExito("");
        onCancelar(); 
      }, 1000);
    } else {
      setError("Por favor, selecciona un motivo de inactivación.");
    }
  };

  return (
    <div className="inactivar-equipo-modal-overlay">
      <div className="inactivar-equipo-modal">
        <button className="inactivar-equipo-cerrar" onClick={onCancelar}>
          <FaTimes />
        </button>

        <h2 className="inactivar-equipo-titulo">
          ¿Estás seguro de inactivar este equipo?
        </h2>

        <div className="inactivar-equipo-detalles">
          <p><FaDesktop /><strong>Placa:</strong> <span>{equipo.placa}</span></p>
          <p><FaTag /><strong>Marca:</strong> <span>{equipo.marca} - {equipo.modelo}</span></p>
          <p><FaCalendarAlt /><strong>Ingreso:</strong> <span>{equipo.fechaIngreso}</span></p>
          <p><FaMapMarkerAlt /><strong>Ubicación:</strong> <span>{equipo.ubicacion}</span></p>
        </div>

        <div className="inactivar-equipo-motivo">
          <label htmlFor="motivo">Motivo de inactivación:</label>
          <select
            id="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          >
            <option value="">Seleccione un motivo</option>
            <option value="Equipo dañado">Equipo dañado</option>
            <option value="Obsoleto">Obsoleto</option>
            <option value="Reposición">Reposición</option>
            <option value="Otro">Otro</option>
          </select>
          {error && <div className="inactivar-equipo-error">{error}</div>}
        </div>

        <div className="inactivar-equipo-botones">
          <button className="inactivar-equipo-boton-cancelar" onClick={onCancelar}>
            Cancelar
          </button>
          <button className="inactivar-equipo-boton-confirmar" onClick={manejarConfirmacion}>
            Confirmar
          </button>
        </div>

        {mensajeExito && (
          <div className="inactivar-equipo-mensaje-exito">
            <FaCheckCircle className="icono-exito" />
            {mensajeExito.replace("✅ ", "")}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmacionInactivar;
