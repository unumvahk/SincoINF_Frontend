import React from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <img src="/img/logo.png" alt="Logo" className="logo" />
      <div className="usuario-circulo">
        <span>U</span>
      </div>
    </header>
  );
};

export default Header;
