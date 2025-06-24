import { useState, type ReactNode } from 'react';
import Header from './Header';
import Sidebar from './sidebar';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarExpandido, setSidebarExpandido] = useState(false);

  return (
    <div className="layout-contenedor">
      <Header toggleSidebar={() => setSidebarExpandido(!sidebarExpandido)} />
      <div className="layout-principal">
        <Sidebar expandido={sidebarExpandido} />
        <div className={`layout-contenido ${sidebarExpandido ? 'layout-contenido-expandido' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
