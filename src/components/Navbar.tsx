import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <span className="logo-icon">⚕️</span>
          CyberHeart
        </a>
        <div className="navbar-menu">
          <a href="#hero" className="nav-link">Inicio</a>
          <a href="#services" className="nav-link">Servicios</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
