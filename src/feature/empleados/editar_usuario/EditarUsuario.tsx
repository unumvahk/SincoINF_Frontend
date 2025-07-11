import React, { useState } from 'react';
import './EditarUsuario.css';

interface ModalEditarUsuarioProps {
  usuario: any;
  onClose: () => void;
  onGuardar: (area: string, rol: string) => void;
}

const ModalEditarUsuario: React.FC<ModalEditarUsuarioProps> = ({
  usuario,
  onClose,
  onGuardar
}) => {
  const [area, setArea] = useState(usuario.area || '');
  const [rol, setRol] = useState(usuario.rol || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGuardar(area, rol);
  };

  return (
    <div className="modal-editar-overlay">
      <div className="modal-editar-contenido">
        <button className="btn-cerrar-modal" onClick={onClose}>
          &times;
        </button>
        <h3>Editar Usuario</h3>

        <div className="info-basica">
          <p><strong>Nombre:</strong> {usuario.nombre}</p>
          <p><strong>Cédula:</strong> {usuario.cedula}</p>
          <p><strong>Correo:</strong> {usuario.correo}</p>
          <p><strong>Estado:</strong> {usuario.estado}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label>Área</label>
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <label>Rol</label>
            <input
              type="text"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-guardar-edicion">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
};

export default ModalEditarUsuario;
