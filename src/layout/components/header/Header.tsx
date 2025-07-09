import React from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <img src="/img/logo-blanco-erp.png" alt="Logo" className="logo" />
      <div className="usuario-circulo" onClick={() => navigate('/perfil')}>
        <span>U</span>
      </div>
    </header>
  );
};

export default Header;
