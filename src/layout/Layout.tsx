import type { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './sidebar';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
  
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
