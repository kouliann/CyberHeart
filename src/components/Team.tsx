import React from 'react';
import './Team.css';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Eliannibeth Padrino',
      role: 'CEO (Director Ejecutivo)',
      description: 'Liderazgo estratégico, toma de decisiones finales y representación legal de la empresa.',
      avatar: '👩‍💼'
    },
    {
      name: 'Sebastian Zonati',
      role: 'CTO (Director de Tecnología)',
      description: 'Arquitectura del software, seguridad de datos médicos y garantía de funcionamiento en redes de baja conectividad.',
      avatar: '👨‍💻'
    },
    {
      name: 'Juan Dawaher',
      role: 'COO (Director de Operaciones)',
      description: 'Gestión de la red de médicos y farmacias. Optimiza los procesos de atención para que sean rápidos y eficientes.',
      avatar: '👨‍🔧'
    },
    {
      name: 'Cesar Ascanio',
      role: 'CFO (Director de Finanzas)',
      description: 'Planificación administrativa, gestión del presupuesto y búsqueda de modelos de sostenibilidad económica.',
      avatar: '👨‍💼'
    },
    {
      name: 'Yosbert Martinez',
      role: 'CPO (Director de Producto)',
      description: 'Diseño de la experiencia de usuario (UX/UI). Asegura que la plataforma sea fácil de usar para personas con poca formación digital.',
      avatar: '👨‍🎨'
    },
    {
      name: 'Miguel Lara',
      role: 'CMO (Director de Comunicación)',
      description: 'Encargado del marketing social y las alianzas comunitarias. Difunde la solución en zonas de difícil acceso.',
      avatar: '👨‍📢'
    }
  ];

  return (
    <section className="team" id="team">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Directiva y Equipo</h2>
        <p className="section-subtitle animate-on-scroll">
          Conoce a los fundadores comprometidos con la transformación de la infraestructura de salud en zonas aisladas.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              className="team-card animate-on-scroll" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="team-avatar">
                <div className="avatar-placeholder">{member.avatar}</div>
              </div>
              <div className="team-info">
                <h4 className="team-name">{member.name}</h4>
                <div className="team-role">{member.role}</div>
                <p className="team-desc">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
