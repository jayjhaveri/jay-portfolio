
import React from 'react';
import { Link } from 'react-router-dom';

interface SecondaryButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  icon?: string;
  external?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ 
  children, 
  to, 
  href, 
  onClick,
  icon,
  external = false
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors duration-300";
  
  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {icon && <i className={`bi bi-${icon}`}></i>}
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a 
        href={href} 
        className={baseClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {icon && <i className={`bi bi-${icon}`}></i>}
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClasses}>
      {icon && <i className={`bi bi-${icon}`}></i>}
      {children}
    </button>
  );
};

export default SecondaryButton;
