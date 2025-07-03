import React, { useState } from 'react';
import '../estilos/TablaUsuarios.css';
import { FaEdit, FaEye, FaBan } from 'react-icons/fa';

export interface Usuario {
  id: number;
  nombre: string;
  cedula: string;
  correo: string;
  rol: string;
  estado: string;
  area: string;
  permisos: string[];
  licencias: string[];
}

interface TablaUsuariosProps {
  onAgregarUsuario: () => void;
  onSeleccionarUsuario: (usuario: Usuario) => void;
  onEditarUsuario: (usuario: Usuario) => void;
  onInactivarUsuario: (usuario: Usuario) => void;
}

const usuariosMock: Usuario[] = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    cedula: '1070123456',
    correo: 'juan@empresa.com',
    rol: 'Técnico',
    estado: 'Activo',
    area: 'Soporte',
    permisos: ['Agregar', 'Ver'],
    licencias: ['Antivirus', 'Office']
  },
  {
    id: 2,
    nombre: 'María López',
    cedula: '1070456789',
    correo: 'maria@empresa.com',
    rol: 'Administrador',
    estado: 'Inactivo',
    area: 'TI',
    permisos: ['Gestionar Usuarios'],
    licencias: ['Office']
  }
];

const TablaUsuarios: React.FC<TablaUsuariosProps> = ({
  onAgregarUsuario,
  onSeleccionarUsuario,
  onEditarUsuario,
  onInactivarUsuario
}) => {
  const [filtro, setFiltro] = useState('');
  const [tipoFiltro, setTipoFiltro] = useState<'cedula' | 'correo' | 'nombre'>('cedula');

  const usuariosFiltrados = usuariosMock.filter((usuario) => {
    const valor = String(usuario[tipoFiltro as keyof Usuario]).toLowerCase();
    return valor.includes(filtro.toLowerCase());
  });

  return (
    <div className="contenedor-tabla-usuarios">
      <div className="cabecera-tabla-usuarios">
        <h2>👥 Usuarios Registrados</h2>
      </div>

      <div className="panel-filtros-usuarios">
        <div className="filtro-usuarios">
          <select
            className="selector-filtro"
            value={tipoFiltro}
            onChange={(e) => setTipoFiltro(e.target.value as 'cedula' | 'correo' | 'nombre')}
          >
            <option value="cedula">Cédula</option>
            <option value="correo">Correo</option>
            <option value="nombre">Nombre</option>
          </select>

          <input
            type="text"
            className="input-filtro"
            placeholder={`Buscar por ${tipoFiltro}...`}
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>

        <button className="btn-agregar-usuario-tabla" onClick={onAgregarUsuario}>
          + Añadir Usuario
        </button>
      </div>

      <div className="tabla-usuarios-scroll">
        <table className="tabla-usuarios-estilo">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cédula</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.map((usuario) => (
              <tr key={usuario.id}>
                <td data-label="Nombre">{usuario.nombre}</td>
                <td data-label="Cédula">{usuario.cedula}</td>
                <td data-label="Correo">{usuario.correo}</td>
                <td data-label="Rol">{usuario.rol}</td>
                <td data-label="Estado">{usuario.estado}</td>
                <td data-label="Acciones" className="tabla-usuarios-acciones">
                  <button title="Ver detalles" onClick={() => onSeleccionarUsuario(usuario)}>
                    <FaEye />
                  </button>
                  <button title="Editar usuario" onClick={() => onEditarUsuario(usuario)}>
                    <FaEdit />
                  </button>
                  <button title="Inactivar usuario" onClick={() => onInactivarUsuario(usuario)}>
                    <FaBan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaUsuarios;

