import React from 'react';
import './Values.css';

const Values: React.FC = () => {
  const values = [
    {
      title: 'Soberanía Tecnológica',
      description: 'No dependemos de grandes empresas extranjeras para manejar nuestros datos.',
      icon: '🔐'
    },
    {
      title: 'Inclusión',
      description: 'Precios solidarios (tipo cooperativa) y los excedentes se reinvierten en mejorar las antenas de internet de la zona.',
      icon: '🤝'
    },
    {
      title: 'Prevención',
      description: 'Realizamos campañas por WhatsApp para educar a las personas sobre cómo evitar enfermedades.',
      icon: '🛡️'
    },
    {
      title: 'Accesibilidad Radical',
      description: 'Diseñamos herramientas que funcionen incluso con baja conexión a internet para que el "puente" nunca se caiga.',
      icon: '📶'
    },
    {
      title: 'Solidaridad Logística',
      description: 'No solo decimos dónde está el medicamento, sino que trabajamos para que el paciente encuentre el precio más justo o la donación más cercana.',
      icon: '📦'
    },
    {
      title: 'Compromiso Social',
      description: 'Anteponemos la atención en zonas críticas sobre la rentabilidad en zonas urbanas.',
      icon: '❤️'
    },
    {
      title: 'Eficiencia',
      description: 'Reducimos los tiempos de espera tanto para una consulta como para la obtención de una receta médica válida.',
      icon: '⚡'
    }
  ];

  return (
    <section className="values" id="values">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Nuestros Valores</h2>
        <p className="section-subtitle animate-on-scroll">
          A diferencia de una corporación tradicional, nos regimos por principios diseñados para maximizar el impacto social.
        </p>

        <div className="values-grid">
          {values.map((value, index) => (
            <div 
              className="value-card animate-on-scroll" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="value-icon">{value.icon}</div>
              <h4 className="value-title">{value.title}</h4>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
