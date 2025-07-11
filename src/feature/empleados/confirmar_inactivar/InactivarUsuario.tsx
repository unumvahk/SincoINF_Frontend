import React, { useState } from 'react';
import type { Usuario } from '../../../feature/empleados/tabla_empleados/TablaUsuarios';
import { FaUser, FaIdCard, FaEnvelope, FaTimes } from 'react-icons/fa';
import './InactivarUsuarios.css';

interface Props {
  usuario: Usuario | null;
  onClose: () => void;
}

const InactivarUsuario: React.FC<Props> = ({ usuario, onClose }) => {
  const [motivo, setMotivo] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  if (!usuario) return null;

  const manejarConfirmar = () => {
    console.log('Inactivando usuario:', usuario, 'Motivo:', motivo);
    setMostrarMensaje(true);
    setTimeout(() => {
      setMostrarMensaje(false);
      onClose();
    }, 1000);
  };

  const cerrarModal = () => {
    setMotivo('');
    onClose();
  };

  return (
    <div className="modal-inactivar-usuario-overlay">
      <div className="modal-inactivar-usuario-contenedor">
        <button className="modal-inactivar-usuario-cerrar" onClick={cerrarModal}>
          <FaTimes />
        </button>
        <h3 className="modal-inactivar-usuario-titulo">
          ¿Estás seguro de inactivar este usuario?
        </h3>

        <div className="modal-inactivar-usuario-info">
          <p>
            <strong><FaUser /> Nombre:</strong> <span>{usuario.nombre}</span>
          </p>
          <p>
            <strong><FaIdCard /> Cédula:</strong> <span>{usuario.cedula}</span>
          </p>
          <p>
            <strong><FaEnvelope /> Correo:</strong> <span>{usuario.correo}</span>
          </p>
        </div>

        <label htmlFor="motivo" className="modal-inactivar-usuario-label">
          Motivo de inactivación:
        </label>
        <select
          id="motivo"
          className="modal-inactivar-usuario-select"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
        >
          <option value="">Seleccione un motivo</option>
          <option value="Retiro de la empresa">Retiro de la empresa</option>
          <option value="Baja temporal">Baja temporal</option>
          <option value="Otro">Otro</option>
        </select>

        <div className="modal-inactivar-usuario-botones">
          <button
            className="modal-inactivar-usuario-btn-cancelar"
            onClick={cerrarModal}
          >
            Cancelar
          </button>
          <button
            className="modal-inactivar-usuario-btn-confirmar"
            onClick={manejarConfirmar}
            disabled={!motivo}
          >
            Confirmar
          </button>
        </div>

        {mostrarMensaje && (
          <div className="modal-inactivar-usuario-mensaje">
            ✅ Usuario inactivado exitosamente
          </div>
        )}
      </div>
    </div>
  );
};

export default InactivarUsuario;
