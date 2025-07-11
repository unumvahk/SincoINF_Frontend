import React, { useState } from 'react';
import { FaUser, FaIdCard, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import './RegistroUsuario.css';
interface Props {
  onClose: () => void;
}

const RegistroUsuario: React.FC<Props> = ({ onClose }) => {
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [area, setArea] = useState('');
  const [cargo, setCargo] = useState('');
  const [exito, setExito] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simular envío (en la realidad llamarías a tu backend aquí)
    setExito(true);

    // Cierra el modal después de 2.5s
    setTimeout(() => {
      setExito(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-registro-usuario-overlay">
      <div className="modal-registro-usuario">
        <button className="cerrar-modal" onClick={onClose}>×</button>
        <h3 className="titulo-modal-usuario">Registrar Usuario</h3>

        <form className="formulario-usuario" onSubmit={handleSubmit}>
          <div className="campo-formulario">
            <label><FaUser /> Nombre</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej: Juan Pérez" required />
          </div>

          <div className="campo-formulario">
            <label><FaIdCard /> Cédula</label>
            <input type="text" value={cedula} onChange={(e) => setCedula(e.target.value)} placeholder="Ej: 123456789" required />
          </div>

          <div className="campo-formulario">
            <label><FaEnvelope /> Correo</label>
            <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Ej: juan@empresa.com" required />
          </div>

          <div className="campo-formulario">
            <label><FaBriefcase /> Cargo</label>
            <select value={cargo} onChange={(e) => setCargo(e.target.value)} required>
              <option value="">Seleccione un cargo</option>
              <option value="Técnico">Técnico</option>
              <option value="Empleado General">Empleado General</option>
            </select>
          </div>

          <div className="campo-formulario">
            <label>Área</label>
            <select value={area} onChange={(e) => setArea(e.target.value)} required>
              <option value="">Seleccione un área</option>
              <option value="Soporte">Soporte</option>
              <option value="TI">TI</option>
              <option value="Administración">Administración</option>
              <option value="Logística">Logística</option>
              <option value="Operaciones">Operaciones</option>
            </select>
          </div>

          <button type="submit" className="btn-guardar-usuario">Guardar</button>

          {exito && (
            <div className="mensaje-exito"> Usuario agregado exitosamente</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegistroUsuario;
