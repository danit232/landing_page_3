import React, { useEffect, useState } from 'react';
import './BenefitsSection.css';
import CRMIA from '../assets/products_images/CRMIA.webp';
import BOTIA from '../assets/products_images/BOTIA.webp';
import SMARTBOOKIA from '../assets/products_images/SMARTBOOKIA.webp';
import SOLUCIONESPERSONALIZADAS from '../assets/products_images/BOTBlack2.png';

function BenefitsSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="demo" className="demo">
      <div className="container">
        <div className="demo-item fade-in-element">
          <div className="demo-content">
            <h3>CRM <span className="highlight">IA</span></h3>
            <p>El CRM más avanzado con IA nativa. Analítica instantánea y chat en tiempo real para informes personalizados. Eficaz y totalmente integrado.</p>
          </div>
          <div className="video-gradient-container">
            <div className="video-place">
              <img src={CRMIA} alt="CRMIA" />
            </div>
          </div>
        </div>
        {isMobile ? (
          <>
            <div className="demo-item fade-in-element">
              <div className="demo-content">
                <h3>Bot<span className="highlight"> IA</span></h3>
                <p>Asistente inteligente que habla con tus clientes, agenda citas y responde preguntas. Ahorra tiempo automatizando tareas repetitivas. Entrenado para tus necesidades.</p>
              </div>
              <div className="video-gradient-container">
                <div className="video-place">
                  <img src={BOTIA} alt="BOTIA" />
                </div>
              </div>
            </div>
            <div className="demo-item fade-in-element">
              <div className="demo-content">
                <h3>SmartBook <span className="highlight">IA</span></h3>
                <p>Convierte cualquier libro en interactivo. Haz consultas, genera actividades y recibe respuestas inmediatas desde el texto.</p>
              </div>
              <div className="video-gradient-container">
                <div className="video-place3">
                  <img src={SMARTBOOKIA} alt="SMARTBOOKIA" />
                </div>
              </div>
            </div>
            <div className="demo-item fade-in-element">
              <div className="demo-content">
                <h3>Soluciones <span className="highlight">Personalizadas</span></h3>
                <p>Impulsa tu negocio con tecnología diseñada solo para ti. Aumenta tu eficiencia y alcanza resultados extraordinarios con nuestras soluciones a medida.</p>
              </div>
              <div className="video-gradient-container">
                <div className="video-place3">
                  <img src={SOLUCIONESPERSONALIZADAS} alt="SOLUCIONES PERSONALIZADAS" />
                </div>
              </div>
            </div>
            
          </>
        ) : (
          <>
            <div className="demo-item fade-in-element">
              <div className="video-gradient-container">
                <div className="video-place2">
                  <img src={BOTIA} alt="BOTIA" />
                </div>
              </div>
              <div className="demo-content">
                <h3>Bot<span className="highlight"> IA</span></h3>
                <p>Asistente inteligente que habla con tus clientes, agenda citas y responde preguntas. Ahorra tiempo automatizando tareas repetitivas. Entrenado para tus necesidades.</p>
              </div>
            </div>
            <div className="demo-item fade-in-element">
              <div className="demo-content">
                <h3>SmartBook <span className="highlight">IA</span></h3>
                <p>Convierte cualquier libro en interactivo. Haz consultas, genera actividades y recibe respuestas inmediatas desde el texto.</p>
              </div>
              <div className="video-gradient-container">
                <div className="video-place">
                  <img src={SMARTBOOKIA} alt="SMARTBOOKIA" />
                </div>
              </div>
            </div>
            <div className="demo-item fade-in-element">
              <div className="video-gradient-container">
                <div className="video-place4">
                  <img src={SOLUCIONESPERSONALIZADAS} alt="SOLUCIONES PERSONALIZADAS" />
                </div>
              </div>
              <div className="demo-content">
                <h3>Soluciones<span className="highlight"> Personalizadas</span></h3>
                <p>Impulsa tu negocio con tecnología diseñada solo para ti. Aumenta tu eficiencia y alcanza resultados extraordinarios con nuestras soluciones a medida.</p>
              </div>
            </div>
            
          </>
        )}
      </div>
    </section>
  );
}

export default BenefitsSection;
