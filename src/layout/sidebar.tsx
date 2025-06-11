
import React, { useState } from 'react';
import { FaLaptop  , FaUsers, FaTools } from 'react-icons/fa';
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
        <FaLaptop className="icono" />
        {isHovered && <span className="texto">Equipos</span>}
      </div>
      <div className="sidebar-item">
        <FaTools className="icono" />
        {isHovered && <span className="texto">licencias</span>}
      </div>
      <div className="sidebar-item">
        <FaUsers className="icono" />
        {isHovered && <span className="texto">Usuarios</span>}
      </div>
    </div>
  );
};

export default Sidebar;
