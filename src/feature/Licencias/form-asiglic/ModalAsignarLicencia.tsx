import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../estilos/ModalAsignarLicencia.css';

interface Props {
  visible: boolean;
  onClose: () => void;
}

interface Empleado {
  cedula: string;
  nombre: string;
  apellido: string;
  correo: string;
  area: string;
  cargo: string;
}

const empleadosMock: Empleado[] = [
  { cedula: '1070123456', nombre: 'Juan', apellido: 'Pérez', correo: 'juan@empresa.com', area: 'Infraestructura', cargo: 'Técnico' },
  { cedula: '1070456789', nombre: 'María', apellido: 'García', correo: 'maria@empresa.com', area: 'Soporte', cargo: 'Analista' },
  { cedula: '1234567890', nombre: 'Carlos', apellido: 'Ramírez', correo: 'carlos@empresa.com', area: 'Desarrollo', cargo: 'Ingeniero' },
];

const ModalAsignarLicencia: React.FC<Props> = ({ visible, onClose }) => {
  const [criterio, setCriterio] = useState('cedula');
  const [busqueda, setBusqueda] = useState('');
  const [seleccionado, setSeleccionado] = useState<Empleado | null>(null);
  const [asignado, setAsignado] = useState(false);

  if (!visible) return null;

  const resultadosFiltrados = empleadosMock.filter(emp =>
    emp[criterio as keyof Empleado].toLowerCase().includes(busqueda.toLowerCase())
  );

  const confirmarAsignacion = () => {
    setAsignado(true);
    setTimeout(() => {
      setAsignado(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modalasignarlicencia-overlay">
      <div className="modalasignarlicencia-contenido">
        <button className="btn-cerrar" onClick={onClose}>×</button>
        <h3 className="modalasignarlicencia-titulo">Asignar Licencia</h3>

        <div className="modalasignarlicencia-filtro">
          <select
            className="modalasignarlicencia-select"
            value={criterio}
            onChange={(e) => {
              setCriterio(e.target.value);
              setBusqueda('');
              setSeleccionado(null);
            }}
          >
            <option value="cedula">Cédula</option>
            <option value="correo">Correo</option>
            <option value="nombre">Nombre</option>
          </select>

          <div className="modalasignarlicencia-inputicono">
            <input
              type="text"
              placeholder={`Buscar por ${criterio}`}
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value);
                setSeleccionado(null);
              }}
            />
            <FaSearch className="modalasignarlicencia-icono" />
          </div>
        </div>

        {resultadosFiltrados.length > 0 && (
          <ul className="modalasignarlicencia-lista">
            {resultadosFiltrados.map((emp, index) => (
              <li key={index} onClick={() => setSeleccionado(emp)}>
                {emp.nombre} {emp.apellido} - {emp[criterio as keyof Empleado]}
              </li>
            ))}
          </ul>
        )}

        {seleccionado && (
          <div className="modalasignarlicencia-card">
            <h4>Empleado Seleccionado</h4>
            <div className="modalasignarlicencia-datosgrid">
              <p><strong>Cédula:</strong> {seleccionado.cedula}</p>
              <p><strong>Nombre:</strong> {seleccionado.nombre}</p>
              <p><strong>Apellido:</strong> {seleccionado.apellido}</p>
              <p><strong>Correo:</strong> {seleccionado.correo}</p>
              <p><strong>Área:</strong> {seleccionado.area}</p>
              <p><strong>Cargo:</strong> {seleccionado.cargo}</p>
            </div>

            <button className="btn-confirmar-asignacion" onClick={confirmarAsignacion}>
              Confirmar Asignación
            </button>
          </div>
        )}

        {asignado && (
          <div className="modal-exito">
            <div className="modal-exito-contenido">
              <p>✅ Asignación confirmada</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalAsignarLicencia;
