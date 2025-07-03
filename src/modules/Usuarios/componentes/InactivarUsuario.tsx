import React, { useState} from 'react';
import '../estilos/InactivarUsuarios.css';
import type { Usuario } from './TablaUsuarios';

interface Props {
  usuario: Usuario | null;
  onClose: () => void;
}

const InactivarUsuario: React.FC<Props> = ({ usuario, onClose }) => {
  const [motivo, setMotivo] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  if (!usuario) return null;

  const manejarConfirmar = () => {
    // Simulación de acción (ej: llamada a backend)
    console.log('Inactivando usuario:', usuario, 'Motivo:', motivo);
    setMostrarMensaje(true);
    setTimeout(() => {
      setMostrarMensaje(false);
      onClose(); // Cierra el modal después del mensaje
    }, 1000);
  };

  const cerrarModal = () => {
    setMotivo('');
    onClose();
  };

  return (
    <div className="overlay-inactivar-usuario">
      <div className="modal-inactivar-usuario">
        <button className="cerrar-modal" onClick={cerrarModal}>×</button>
        <h3 className="titulo-modal">¿Estás seguro de inactivar este usuario?</h3>

        <div className="info-usuario">
          <p><strong>👤 Nombre:</strong> {usuario.nombre}</p>
          <p><strong>🆔 Cédula:</strong> {usuario.cedula}</p>
          <p><strong>📧 Correo:</strong> {usuario.correo}</p>
        </div>

        <label htmlFor="motivo" className="label-motivo">Motivo de inactivación:</label>
        <select
          id="motivo"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
        >
          <option value="">Seleccione un motivo</option>
          <option value="Retiro de la empresa">Retiro de la empresa</option>
          <option value="Cambio de rol">Cambio de rol</option>
          <option value="Baja temporal">Baja temporal</option>
          <option value="Otro">Otro</option>
        </select>

        <div className="botones-modal">
          <button className="btn-cancelar" onClick={cerrarModal}>Cancelar</button>
          <button
            className="btn-confirmar"
            onClick={manejarConfirmar}
            disabled={!motivo}
          >
            Confirmar
          </button>
        </div>

        {mostrarMensaje && (
          <div className="mensaje-exito-inactivar">
            ✅ Usuario inactivado exitosamente
          </div>
        )}
      </div>
    </div>
  );
};

export default InactivarUsuario;
