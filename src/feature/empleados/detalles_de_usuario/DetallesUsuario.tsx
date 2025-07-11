import React from 'react';
import './DetallesUsuario.css';

interface DetallesUsuarioProps {
  usuario: {
    nombre: string;
    cedula: string;
    correo: string;
    cargo: string;
    estado: string;
    area: string;
    permisos: string[];
    licencias: string[];
  };
  onClose: () => void;
}

const DetallesUsuario: React.FC<DetallesUsuarioProps> = ({ usuario, onClose }) => {
  return (
    <div className="modal-detalles-overlay">
      <div className="modal-detalles-contenido">
        <button className="btn-cerrar-modal" onClick={onClose}>
          &times;
        </button>
        <h3>Detalles del Usuario</h3>

        <div className="info-basica">
          <p><strong>Nombre:</strong> {usuario.nombre}</p>
          <p><strong>Cédula:</strong> {usuario.cedula}</p>
          <p><strong>Correo:</strong> {usuario.correo}</p>
          <p><strong>cargo:</strong> {usuario.cargo}</p>
          <p><strong>Estado:</strong> {usuario.estado}</p>
          <p><strong>Área:</strong> {usuario.area}</p>
        </div>

        <div className="detalles-extra">
          <div>
            <h4>Licencias necesarias</h4>
            <ul>
              {usuario.licencias.map((licencia, index) => (
                <li key={index}>{licencia}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Permisos asignados</h4>
            <ul>
              {usuario.permisos.map((permiso, index) => (
                <li key={index}>{permiso}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallesUsuario;
