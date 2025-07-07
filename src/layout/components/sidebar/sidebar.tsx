import React, { useState } from 'react';
import { FaLaptop, FaUsers, FaTools } from 'react-icons/fa';
import './Sidebar.css';

interface SidebarProps {
  expandido: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ expandido }) => {
  const [activo, setActivo] = useState('equipos');

  return (
    <div className={`sidebar ${expandido ? 'expandido' : ''}`}>
      <div
        className={`sidebar-item ${activo === 'equipos' ? 'activo' : ''}`}
        onClick={() => setActivo('equipos')}
      >
        <FaLaptop className="icono" />
        <span className="texto">Equipos</span>
      </div>

      <div
        className={`sidebar-item ${activo === 'licencias' ? 'activo' : ''}`}
        onClick={() => setActivo('licencias')}
      >
        <FaTools className="icono" />
        <span className="texto">Licencias</span>
      </div>

      <div
        className={`sidebar-item ${activo === 'usuarios' ? 'activo' : ''}`}
        onClick={() => setActivo('usuarios')}
      >
        <FaUsers className="icono" />
        <span className="texto">Usuarios</span>
      </div>
    </div>
  );
};

export default Sidebar;
