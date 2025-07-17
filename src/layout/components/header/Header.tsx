import React from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa';
import AvatarMenu from '../../../components/AvatarMenu';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      
      <AvatarMenu />
    </header>
  );
};

export default Header;
