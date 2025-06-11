
import React, { useState } from 'react';
import { FaHome, FaUsers, FaTools } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`sidebar ${isHovered ? 'expandido' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="sidebar-item">
        <FaHome className="icono" />
        {isHovered && <span className="texto">Inicio</span>}
      </div>
      <div className="sidebar-item">
        <FaUsers className="icono" />
        {isHovered && <span className="texto">Usuarios</span>}
      </div>
      <div className="sidebar-item">
        <FaTools className="icono" />
        {isHovered && <span className="texto">Equipos</span>}
      </div>
    </div>
  );
};

export default Sidebar;
