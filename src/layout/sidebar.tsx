import React from 'react';
import { FaLaptop, FaUsers, FaTools } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './sidebar.css';

interface SidebarProps {
  expandido: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ expandido }) => {
  const navigate = useNavigate();
  const location = useLocation(); // 🔍 Obtenemos la ruta actual

  // ✅ Función para determinar si la ruta está activa
  const esActivo = (ruta: string) => location.pathname === ruta;

  return (
    <div className={`sidebar-contenedor ${expandido ? 'sidebar-expandido' : ''}`}>
      <div
        className={`sidebar-item ${esActivo('/equipos') ? 'sidebar-item-activo' : ''}`}
        onClick={() => navigate('/equipos')}
      >
        <FaLaptop className="sidebar-icono" />
        <span className="sidebar-texto">Equipos</span>
      </div>

      <div
        className={`sidebar-item ${esActivo('/licencias') ? 'sidebar-item-activo' : ''}`}
        onClick={() => navigate('/licencias')}
      >
        <FaTools className="sidebar-icono" />
        <span className="sidebar-texto">Licencias</span>
      </div>

      <div
        className={`sidebar-item ${esActivo('/usuarios') ? 'sidebar-item-activo' : ''}`}
        onClick={() => navigate('/usuarios')}
      >
        <FaUsers className="sidebar-icono" />
        <span className="sidebar-texto">Usuarios</span>
      </div>
    </div>
  );
};

export default Sidebar;
