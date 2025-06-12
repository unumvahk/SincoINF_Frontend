import { useState } from 'react';
import Header from './Header';
import Sidebar from './sidebar';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarExpandido, setSidebarExpandido] = useState(false);

  return (
    <div className="layout">
      <Header toggleSidebar={() => setSidebarExpandido(!sidebarExpandido)} />
      <div className="main-content">
        <Sidebar expandido={sidebarExpandido} />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
