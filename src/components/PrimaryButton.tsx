
import React from 'react';
import { Link } from 'react-router-dom';

interface PrimaryButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  icon?: string;
  external?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  children, 
  to, 
  href, 
  onClick,
  icon,
  external = false
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300";
  
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

export default PrimaryButton;
