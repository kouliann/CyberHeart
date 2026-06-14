import React from 'react';
import './Hero.css';
import cyberImage from '../assets/cyberheart.png';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content animate-on-scroll">
        <h1 className="hero-title">
          La salud del futuro, <br /><span className="highlight">hoy</span>.
        </h1>
        <p className="hero-subtitle">
          CyberHeart te conecta con especialistas de primer nivel desde la comodidad de tu hogar. Telemedicina rápida, segura, y localizada.
        </p>
        <div className="hero-actions">
          <a href="#about" className="btn btn-primary">Conoce Más</a>
          <a href="#objectives" className="btn btn-secondary">Nuestros Objetivos</a>
        </div>
      </div>

      <div className="hero-image-container animate-on-scroll" style={{ animationDelay: '0.2s' }}>

        <div className="hero-image-placeholder">
          <div className="pulse-circle"></div>
          <div className="pulse-circle pulse-delayed"></div>
          <img
            src={cyberImage}
            alt="Representación médica CyberHeart"
            className="cyberImage"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;