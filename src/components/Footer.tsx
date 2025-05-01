
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 py-8 text-center text-sm text-gray-500 font-outfit">
      <p>© {currentYear} Jay Jhaveri. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
