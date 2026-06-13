import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Consultas Generales',
      description: 'Atención médica inmediata para malestares comunes desde tu dispositivo.',
      icon: '🩺'
    },
    {
      id: 2,
      title: 'Salud Mental',
      description: 'Terapia y apoyo psicológico con profesionales certificados en línea.',
      icon: '🧠'
    },
    {
      id: 3,
      title: 'Seguimiento Crónico',
      description: 'Control continuo de enfermedades crónicas sin salir de casa.',
      icon: '📈'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2 className="section-title">Nuestros <span className="highlight">Servicios</span></h2>
        <p className="section-subtitle">
          Ofrecemos atención integral adaptada a tus necesidades. (Esta información se actualizará con tus datos reales).
        </p>
      </div>
      
      <div className="services-grid">
        {services.map(service => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
