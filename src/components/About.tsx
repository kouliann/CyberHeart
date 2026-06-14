import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Sobre Nosotros</h2>
        <p className="section-subtitle animate-on-scroll">
          Conectando a quienes más lo necesitan con la mejor atención médica a través de tecnología accesible.
        </p>

        <div className="about-grid">
          <div className="about-card animate-on-scroll">
            <div className="about-icon">🎯</div>
            <h3>Nuestra Misión</h3>
            <p>
              Democratizar el acceso a la salud mediante la implementación de soluciones tecnológicas de telemedicina de vanguardia. Nos constituimos como un puente digital inquebrantable para aquellas poblaciones que han quedado al margen del sistema sanitario tradicional por barreras geográficas o económicas. No solo facilitamos la consulta médica profesional, sino que también optimizamos la cadena de suministro de medicamentos esenciales.
            </p>
          </div>

          <div className="about-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="about-icon">👁️</div>
            <h3>Nuestra Visión (2031)</h3>
            <p>
              CyberHeart se consolidará como el ecosistema de salud digital líder en la región, siendo reconocido por su capacidad para eliminar la exclusión sanitaria. Aspiramos a transformar la infraestructura de salud en las zonas de difícil acceso, convirtiendo la conectividad digital en bienestar humano real. Visualizamos un futuro donde la distancia física deje de ser un factor determinante en la esperanza y calidad de vida.
            </p>
          </div>

          <div className="about-card animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="about-icon">🌱</div>
            <h3>Nuestros Orígenes</h3>
            <p>
              Nuestras raíces fueron sembradas en 2026, por estudiantes de Ingeniería en Informática. Una propuesta universitaria nos impulsó a crear un proyecto empresarial completo enfocado en la Telemedicina, velando por los intereses y necesidades de las personas afectadas por la falta de acceso sanitario. Así nació la idea de crear un "Puente Digital" que logre salvar vidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
