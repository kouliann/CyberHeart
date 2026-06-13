import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          La salud del futuro, <span className="highlight">hoy</span>.
        </h1>
        <p className="hero-subtitle">
          CyberHeart te conecta con especialistas de primer nivel desde la comodidad de tu hogar. Telemedicina rápida, segura y confiable.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Agendar Cita</button>
          <button className="btn btn-secondary">Conocer Más</button>
        </div>
      </div>
      <div className="hero-image-container">
        {/* Placeholder for an image or illustration */}
        <div className="hero-image-placeholder">
          <div className="pulse-circle"></div>
          <span className="hero-icon">👨‍⚕️🩺👩‍⚕️</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
