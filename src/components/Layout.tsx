
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center items-center max-w-7xl w-full mx-auto px-4 animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
