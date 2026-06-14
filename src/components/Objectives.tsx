import React from 'react';
import './Objectives.css';

const Objectives: React.FC = () => {
  const objectives = [
    {
      title: 'Puente digital',
      description: 'Esta plataforma ayudará a personas en zonas de difícil acceso que no pueden viajar a un hospital por falta de dinero o transporte.',
      number: '01'
    },
    {
      title: 'Conectar',
      description: 'Lograr que el 100% de los usuarios en zonas rurales registradas tengan una cita médica en menos de 24 horas.',
      number: '02'
    },
    {
      title: 'Localizar',
      description: 'Mantener actualizada en tiempo real la disponibilidad de medicamentos en farmacias periféricas para evitar viajes innecesarios.',
      number: '03'
    },
    {
      title: 'Incluir',
      description: 'Desarrollar una interfaz que sea fácil de usar para personas de todas las edades y niveles educativos.',
      number: '04'
    }
  ];

  return (
    <section className="objectives" id="objectives">
      <div className="container">
        <div className="objectives-header">
          <h2 className="section-title animate-on-scroll">Nuestros Objetivos</h2>
          <p className="section-subtitle animate-on-scroll">
            Metas claras para asegurar que la salud deje de ser un privilegio geográfico.
          </p>
        </div>

        <div className="objectives-list">
          {objectives.map((obj, index) => (
            <div 
              className="objective-item animate-on-scroll" 
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="objective-number">{obj.number}</div>
              <div className="objective-content">
                <h4 className="objective-title">{obj.title}</h4>
                <p className="objective-description">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
