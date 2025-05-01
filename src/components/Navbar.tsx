
import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="flex gap-4 items-center w-full max-w-7xl mx-auto px-4 py-8">
      <Link to="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
        Jay Jhaveri
      </Link>

      <div className="flex justify-center flex-1">
        <div className="bg-gray-100 rounded-full px-4 py-2.5 flex items-center gap-2">
            <Link to="/about" className={`flex items-center justify-center py-1 w-28 rounded-full gap-1.5 ${location.pathname === '/about' ? 'font-medium bg-white' : 'text-gray-600'}`}>
              <i className="bi bi-person"></i>
              <span>About</span>
            </Link>
            <Link to="/projects" className={`flex items-center justify-center py-1 w-28 rounded-full gap-1.5 ${location.pathname === '/projects' ? 'font-medium bg-white' : 'text-gray-600'}`}>
              <i className="bi bi-grid"></i>
              <span>Projects</span>
            </Link>
            <Link to="/contact" className={`flex items-center justify-center py-1 w-28 rounded-full gap-1.5 ${location.pathname === '/contact' ? 'font-medium bg-white' : 'text-gray-600'}`}>
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </Link>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <a href="https://github.com/jayjhaveri" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-xl hover:opacity-70 transition-opacity">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://linkedin.com/in/jhaverijay" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-xl hover:opacity-70 transition-opacity">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
