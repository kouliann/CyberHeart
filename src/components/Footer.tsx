import React from 'react';
import './Footer.css';
import instagram from '../assets/instagram.png';
import whatsapp from '../assets/whatsapp.png';
import github from '../assets/github.png';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Sección 1: Marca y Redes */}
        <div className="footer-section">
          <h3 className="footer-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--secondary-color)" />
            </svg>
            CyberHeart
          </h3>
          <p className="footer-description">
            Startup de Impacto Social y Base Tecnológica (EBT), especializada en Tele-Salud e Inteligencia Logística.
          </p>

          {/* Aquí faltaban las redes sociales que tenías en el CSS */}
          <div className="social-links" style={{ marginTop: '1.5rem' }}>
            <a href="https://www.instagram.com/_cyberheart?igsh=MWdtb2VvZmZ1YXA3bA==" className="social-icon" aria-label="Instagram"><img src={instagram} /></a>
            <a href="https://wa.me/qr/IBFG45EXNOE4I1" className="social-icon" aria-label="WhatsApp"><img src={whatsapp} /></a>
            <a href="https://github.com/kouliann/CyberHeart.git" className="social-icon" aria-label="GitHub"><img src={github} /></a>
          </div>
        </div>

        {/* Sección 2: Navegación */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Navegación</h4>
          <ul className="footer-links">
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#values">Valores</a></li>
            <li><a href="#objectives">Objetivos</a></li>
            <li><a href="#team">Equipo</a></li>
          </ul>
        </div>

        {/* Sección 3: Contacto */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Contacto & Ubicación</h4>
          <ul className="footer-links">
            <li>📍 San Juan de los Morros, Estado Guárico, Venezuela.</li>
            <li>🏫 UNERG - Area de Ingeniería de Sistemas.</li>
            <li>✉️ contacto@cyberheart.com.ve</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CyberHeart C.A. Todos los derechos reservados. | Proyecto Académico - Control de Proyecto.</p>
      </div>
    </footer>
  );
};

export default Footer;