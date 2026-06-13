import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="logo-icon">⚕️</span>
            CyberHeart
          </h3>
          <p className="footer-description">
            Innovando en telemedicina para llevar la salud a tu alcance, donde quiera que estés.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Contacto</h4>
          <ul className="footer-links">
            <li>📍 Dirección de ejemplo 123</li>
            <li>📞 +1 234 567 8900</li>
            <li>✉️ contacto@cyberheart.com</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Redes Sociales</h4>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">📘</a>
            <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
            <a href="#" className="social-icon" aria-label="Instagram">📸</a>
            <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CyberHeart. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
