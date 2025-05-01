import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b px-4 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold hover:opacity-80">
          Jay Jhaveri
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center">
          <div className="bg-gray-100 rounded-full px-1.5 py-1.5 flex items-center gap-2">
            <Link to="/about" className={`flex items-center justify-center py-1 w-28 rounded-full gap-1.5 ${location.pathname === '/about' ? 'font-medium bg-white' : 'text-gray-600'}`}>
              <i className="bi bi-person"></i> <span>About</span>
            </Link>
            <Link to="/projects" className={`flex items-center justify-center py-1 w-28 rounded-full gap-1.5 ${location.pathname === '/projects' ? 'font-medium bg-white' : 'text-gray-600'}`}>
              <i className="bi bi-grid"></i> <span>Projects</span>
            </Link>
            <Link to="/contact" className={`flex items-center justify-center py-1 w-28 rounded-full gap-1.5 ${location.pathname === '/contact' ? 'font-medium bg-white' : 'text-gray-600'}`}>
              <i className="bi bi-envelope"></i> <span>Contact</span>
            </Link>
          </div>
        </nav>

        <div className='gap-6 items-center hidden md:flex'>
          <a href="https://github.com/jayjhaveri" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-70"><i className="bi bi-github"></i></a>
          <a href="https://linkedin.com/in/jhaverijay" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-70"><i className="bi bi-linkedin"></i></a>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none">
          <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3">
          <Link to="/about" onClick={() => setIsOpen(false)} className={`flex px-3 rounded-full gap-2 py-2 items-center text-gray-700 hover:text-blue-600 ${location.pathname === '/about' ? 'font-medium bg-gray-100' : ''}`}><i className="bi bi-person"></i> About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className={`flex px-3 rounded-full gap-2 py-2 items-center text-gray-700 hover:text-blue-600 ${location.pathname === '/projects' ? 'font-medium bg-gray-100' : ''}`}><i className="bi bi-grid"></i> Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={`flex px-3 rounded-full gap-2 py-2 items-center text-gray-700 hover:text-blue-600 ${location.pathname === '/contact' ? 'font-medium bg-gray-100' : ''}`}><i className="bi bi-envelope"></i> Contact</Link>
          <div className="flex gap-6 px-3 mt-2">
            <a href="https://github.com/jayjhaveri" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-70"><i className="bi bi-github"></i></a>
            <a href="https://linkedin.com/in/jhaverijay" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-70"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;