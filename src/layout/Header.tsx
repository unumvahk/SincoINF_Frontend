import React from 'react';
import './header.css';



const Header: React.FC = () => {
  return (
    <header className="header">
      <img src="/imag/logo.png" alt="Logo" className="logo" />
      <div className="usuario-circulo">
        <span>U</span>
      </div>
    </header>
  );
};

export default Header;
