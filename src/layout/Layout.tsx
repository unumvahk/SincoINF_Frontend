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
    <div className="layout">
      <Header toggleSidebar={() => setSidebarExpandido(!sidebarExpandido)} />
      <div className="main-content">
        <Sidebar expandido={sidebarExpandido} />
        <div className={`content ${sidebarExpandido ? 'contenido-expandido' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
