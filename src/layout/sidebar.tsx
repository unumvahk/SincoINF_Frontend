import React from 'react';
import { FaLaptop, FaUsers, FaTools } from 'react-icons/fa';
import './Sidebar.css';

interface SidebarProps {
  expandido: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ expandido }) => {
  return (
    <div className={`sidebar ${expandido ? 'expandido' : ''}`}>
      <div className="sidebar-item">
        <FaLaptop className="icono" />
        <span className="texto">Equipos</span>
      </div>
      <div className="sidebar-item">
        <FaTools className="icono" />
        <span className="texto">Licencias</span>
      </div>
      <div className="sidebar-item">
        <FaUsers className="icono" />
        <span className="texto">Usuarios</span>
      </div>
    </div>
  );
};

export default Sidebar;
