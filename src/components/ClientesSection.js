import React from 'react';
import './ClientesSection.css';

function ClientesSection() {
  const toggleFaq = (event) => {
    const faqItem = event.currentTarget.parentElement;
    faqItem.classList.toggle('active');
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="fade-in-element">El tipo de <span className="highlight">clientes</span> que nos elige <span className="highlight">constantemente</span></h2>
        <div className="faq-container fade-in-element">
          <div className="faq-item">
            <div className="faq-question" onClick={toggleFaq}>
              <h3>★ Negocios Ecommerce</h3>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Empresas de comercio electrónico que buscan automatizar la atención al cliente, optimizar las ventas y mejorar la experiencia de sus usuarios a través de soluciones tecnológicas avanzadas.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={toggleFaq}>
              <h3>★ Instituciones Educativas</h3>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Colegios, universidades e institutos que implementan plataformas innovadoras para mejorar la enseñanza, gestionar datos y optimizar la interacción con estudiantes y docentes.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={toggleFaq}>
              <h3>★ Empresas de Logística</h3>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Compañías de logística que necesitan soluciones de IA para gestionar inventarios, optimizar rutas y reducir costos operativos, asegurando una operación fluida y eficiente.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={toggleFaq}>
              <h3>★ Los mejores Profesionales Independientes</h3>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Freelancers, consultores y emprendedores que desean mejorar la relación con sus clientes, automatizar tareas repetitivas y enfocarse en lo que realmente importa: hacer crecer su negocio.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={toggleFaq}>
              <h3>★ Empresas que Necesitan Analítica de Datos</h3>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Empresas que buscan aprovechar el poder de los datos para tomar decisiones informadas y estratégicas. Les ofrecemos soluciones avanzadas de análisis de datos que transforman la información en insights accionables, optimizando procesos, maximizando oportunidades y adelantándose a la competencia mediante la inteligencia artificial.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={toggleFaq}>
              <h3>Para quién no son estos servicios:
              </h3>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Nuestros servicios están diseñados para empresas e instituciones dispuestas a invertir en soluciones tecnológicas avanzadas para mejorar sus procesos. Si tu negocio no está preparado para invertir al menos $2000 o no está interesado en el desarrollo tecnológico, estos servicios no son para ti.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientesSection;
