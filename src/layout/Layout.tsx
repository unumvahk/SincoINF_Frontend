import { useState } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/sidebar';
import './Layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [sidebarExpandido, setSidebarExpandido] = useState(false);

  return (
    <div className="layout-contenedor">
      <Header
        toggleSidebar={() => setSidebarExpandido(!sidebarExpandido)}
      />

      <div className="layout-principal">
        <Sidebar expandido={sidebarExpandido} />

        <div className={`layout-contenido ${sidebarExpandido ? 'layout-contenido-expandido' : ''}`}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Layout;