import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Estilos
import './App.css';

// Logos
import logo from './assets/icons/logo4.png'; // Logo negro
import logoWhite from './assets/icons/logo3.png'; // Logo blanco
import openaiLogo from './assets/logos_proveedores_blanco/openAIlogoblanco.png';
import metaLogo from './assets/logos_proveedores_blanco/metalogoblanco.png';
import googleLogo from './assets/logos_proveedores_blanco/googlelogoblanco.png';
import anthropicLogo from './assets/logos_proveedores_blanco/anthropiclogoblanco2.png';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Importar componentes de pagina
import BenefitsSection from './components/BenefitsSection.js';
import ClientesSection from './components/ClientesSection';
import Footer from './components/Footer.js';

import Plyr from 'plyr';

SwiperCore.use([Autoplay]);

function AppAlternative() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentSection, setCurrentSection] = useState('');
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setIsHeaderHidden(currentScrollY > lastScrollY && currentScrollY > 60);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-element');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('fade-in');
        }
      });

      // Detect current section
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      setCurrentSection(current);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const buttons = document.querySelectorAll('.neon-button');

    const animate = (event) => {
      const button = event.currentTarget;
      const letters = button.querySelectorAll('.letter');
      // Ocultar RIN y mover I y A
      letters[1].classList.add('hide');
      letters[2].classList.add('hide');
      letters[3].classList.add('hide');
      letters[0].classList.add('move-left');
      letters[4].classList.add('move-right');
    };

    const reset = (event) => {
      const button = event.currentTarget;
      const letters = button.querySelectorAll('.letter');
      // Mostrar RIN y devolver I y A a su posición original
      letters[1].classList.remove('hide');
      letters[2].classList.remove('hide');
      letters[3].classList.remove('hide');
      letters[0].classList.remove('move-left');
      letters[4].classList.remove('move-right');
    };

    buttons.forEach(button => {
      button.addEventListener('mouseenter', animate);
      button.addEventListener('mouseleave', reset);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', animate);
        button.removeEventListener('mouseleave', reset);
      });
    };
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll('.neon-button');

    function toggleBackground() {
      buttons.forEach(button => {
        button.classList.toggle('active-background');
      });
    }

    const backgroundInterval = setInterval(toggleBackground, 1100);

    return () => clearInterval(backgroundInterval);
  }, []);

  useEffect(() => {
    const comments = document.querySelectorAll('.comment');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let intervalId;

    function showComment(index) {
      comments.forEach((comment, i) => {
        comment.classList.remove('active');
        comment.style.transform = `translateX(${100 * (i - index)}%) scale(${i === index ? 1 : 0.8})`;
        comment.style.zIndex = i === index ? 1 : 0;
      });
      comments[index].classList.add('active');
    }

    function nextComment() {
      currentIndex = (currentIndex + 1) % comments.length;
      showComment(currentIndex);
    }

    function prevComment() {
      currentIndex = (currentIndex - 1 + comments.length) % comments.length;
      showComment(currentIndex);
    }

    function startAutoSlide() {
      intervalId = setInterval(nextComment, 20000); // Cambia cada 5 segundos
    }

    function stopAutoSlide() {
      clearInterval(intervalId);
    }

    if (prevBtn && nextBtn) {
      nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextComment();
        startAutoSlide();
      });

      prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevComment();
        startAutoSlide();
      });

      showComment(currentIndex);
      startAutoSlide();
    }
  }, []);

  useEffect(() => {
    const player = new Plyr('#video-benefits');
  }, []);

  return (
    <Router>
      <div className="App">
        {/* HEADER */}
        <header className={`header ${isHeaderHidden ? 'hidden' : ''}`}>
          <img src={logo} alt="Relatividad IA" className="logo logo-black" />
          <img src={logoWhite} alt="Relatividad IA" className="logo logo-white" />
          <button className="button-cita" onClick={() => window.location.href = 'https://irina.relatividadia.com/#smicro'}>
            <span className="diseño"></span>
            <span className="diseño"></span>
            <span className="diseño"></span>
            <span className="diseño"></span>
            <span className="text">
              <span className="text-line">Agendar</span>
              <span className="text-line">Cita</span>
            </span>
          </button>
        </header>

        <button className="button-cita" onClick={() => window.location.href = 'https://irina.relatividadia.com/#smicro'}>
          <span className="diseño"></span>
          <span className="diseño"></span>
          <span className="diseño"></span>
          <span className="diseño"></span>
          <span className="text">
            <span className="text-line">Agendar</span>
            <span className="text-line">Cita</span>
          </span>
        </button>

        {/* SECCION HERO */}
        <section className="hero" id="hero">
          {/* <video src={video_back_oferta} autoPlay loop muted playsInline></video> */}
          <div className="container">
            <div className="Text1">
              <span className='highlight'>
                <span>Inteligencia</span>
                <span>Artificial</span>
                <span>Personalizada</span>
              </span>
            </div>

            <div className='divisorLine'></div>

            <div className='Text2'>
              Construimos una Inteligencia Artificial 100% personalizada y entrenada para resolver un problema de tu empresa, en apenas de 7 a 14 días,
              completamente gratis.
            </div>
            <p className="fade-in-element">
              {/*Construimos tu plataforma educativa personalizada con IA que automatiza la creación de planificaciones, evaluaciones y actividades; califica de manera automatizada y personaliza la educación de cada estudiante. En el video de abajo te explicamos como empezar.*/}
            </p>
            <button className="button-cita1" onClick={() => window.location.href = 'https://irina.relatividadia.com/#smicro'}>
              <span className="diseño"></span>
              <span className="diseño"></span>
              <span className="diseño"></span>
              <span className="diseño"></span>
              <span className="text">
                <span className="text-line">Agendar</span>
                <span className="text-line">Cita</span>
              </span>
            </button>
          </div>
          <br />
          <div className="arrow-container fade-in-element">
            <img src={require('./assets/icons/arrow.png')} alt="Flecha hacia abajo" className="arrow-down" onClick={() => scrollToSection('demo')} />
          </div>
        </section>

        <BenefitsSection />

        {/* SECCION CONTACTO */}
        <section id="contact" className="contact">
          {/* <video src={irinavideo} autoPlay loop muted playsInline className="background-video"></video> */}
          <div className="container">
            <h2 className="fade-in-element">Agenda una cita en <span className="highlight">segundos</span> con nuestra <span className="highlight">IA</span></h2>
            <p className="fade-in-element">
              {/* Para más información o para adquirir el producto, por favor ingresa a la experiencia IA */}
            </p>
            <button className="neon-button fade-in-element" onClick={() => window.location.href = 'https://irina.relatividadia.com/#smicro'}>
              <span className="diseño"></span>
              <span className="diseño"></span>
              <span className="diseño"></span>
              <span className="diseño"></span>

              <span className="letter i-left">I</span>
              <span className="letter r">R</span>
              <span className="letter i-right">I</span>
              <span className="letter n">N</span>
              <span className="letter a">A</span>
            </button>
          </div>
        </section>

        {/* SECCION PROVEEDORES */}
        <section className="providers" id="providers">
          <div className="container">
            <h2 className="fade-in-element">Nuestros <span className="highlight">proveedores</span> asociados</h2>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={isMobile ? 3 : 4}
              loop={true}
              autoplay={{
                delay: 1300,
                disableOnInteraction: false,
              }}
              className='fade-in-element'
            >
              <SwiperSlide>
                <img src={openaiLogo} alt="OpenAI" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={metaLogo} alt="Meta" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={googleLogo} alt="Google" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={anthropicLogo} alt="Anthropic" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={openaiLogo} alt="OpenAI" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={metaLogo} alt="Meta" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={googleLogo} alt="Google" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={anthropicLogo} alt="Anthropic" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* SECCION COMENTARIOS */}
        <section className="comments-section" id="comments">
          <div className="comments-container fade-in-element">
            <h2 className='fade-in-element'>
              Lo que dicen nuestros <span className="highlight">clientes</span>
            </h2>
            <div className="comment-carousel fade-in-element">
              <div className="comment">
                <div className="comment-card">
                  <div className="stars">★★★★★</div>
                  <p className="comment-text">"Nuestro chatbot nos ayuda respondiendo más de 200 mensajes que nos llegaban diariamente, y no solo eso sino que orienta al cliente hacia la venta e incluso es capaz de cobrarle de marera automática."</p>
                  <p className="author">- Juan Proaño, Gerente de Suplementos Vida Sana (eCommerce)</p>
                </div>
              </div>
              <div className="comment">
                <div className="comment-card">
                  <div className="stars">★★★★☆</div>
                  <p className="comment-text">"Desde que Incorporamos Inteligencia Artificial para hacer nuestra analítica de datos, nuestra retención de clientes aumentó en un 40% y lo mejor es que le podemos hablar a esta herramienta de analítica por audios lo que ahorra más tiempo."</p>
                  <p className="author">- Héctor Andrade, Presidente de Cooperativa de Ahorro San José</p>
                </div>
              </div>
              <div className="comment">
                <div className="comment-card">
                  <div className="stars">★★★★★</div>
                  <p className="comment-text">"Nos construyeron una IA que maneja la logística de nuestra empresa, ahora usamos menos camiones y estamos ahorrando al menos 2000 dólares cada mes."</p>
                  <p className="author">- Lucía Flores, Gerente de Bioagro Estimulantes</p>
                </div>
              </div>
            </div>
            <div className="carousel-controls fade-in-element">
              <button className="prev">&#10094;</button>
              <button className="next">&#10095;</button>
            </div>
          </div>
        </section>


        {/* SECCION CONTACTO */}
        <section id="contact2" className="contact">
          {/* <video src={irinavideo} autoPlay loop muted playsInline className="background-video"></video> */}
          <div className="container">
            <h2 className="fade-in-element">Agenda una cita en <span className="highlight">segundos</span> con nuestra <span className="highlight">IA</span></h2>
            <p className="fade-in-element">
              {/* Para más información o para adquirir el producto, por favor ingresa a la experiencia IA */}
            </p>
            <button className="neon-button fade-in-element" onClick={() => window.location.href = 'https://irina.relatividadia.com/#smicro'}>
              <span className="diseño"></span>
              <span className="diseño"></span>
              <span className="diseño"></span>
              <span className="diseño"></span>

              <span className="letter i-left">I</span>
              <span className="letter r">R</span>
              <span className="letter i-right">I</span>
              <span className="letter n">N</span>
              <span className="letter a">A</span>
            </button>
          </div>
        </section>

        {/* SECCIÓN CLIENTES */}
        <ClientesSection />

        {/* FOOTER */}
        <Footer />


        {/* Navegación lateral */}
        <div className="side-nav">
          <div onClick={() => scrollToSection('hero')} className={currentSection === 'hero' ? 'nav-dot active' : 'nav-dot'}></div>
          <div onClick={() => scrollToSection('demo')} className={currentSection === 'demo' ? 'nav-dot active' : 'nav-dot'}></div>
          <div onClick={() => scrollToSection('contact')} className={currentSection === 'contact' ? 'nav-dot active' : 'nav-dot'}></div>
          <div onClick={() => scrollToSection('providers')} className={currentSection === 'providers' ? 'nav-dot active' : 'nav-dot'}></div>
          <div onClick={() => scrollToSection('comments')} className={currentSection === 'comments' ? 'nav-dot active' : 'nav-dot'}></div>
          <div onClick={() => scrollToSection('contact2')} className={currentSection === 'contact2' ? 'nav-dot active' : 'nav-dot'}></div>
          <div onClick={() => scrollToSection('faq')} className={currentSection === 'faq' ? 'nav-dot active' : 'nav-dot'}></div>
        </div>
      </div>
    </Router>
  );
}

export default AppAlternative;