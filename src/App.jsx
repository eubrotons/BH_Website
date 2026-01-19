import React, { useState, useEffect } from 'react';
import { MapPin, Home, Users, Clock, CheckCircle, Mail, Phone, ArrowRight } from 'lucide-react';

export default function RealEstateLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      nav: {
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        badge: 'PROFESSIONAL REAL ESTATE SOLUTIONS',
        title1: 'Exceptional Service,',
        title2: 'Exceptional Results',
        subtitle: 'Expert real estate services tailored to your needs. Specializing in housing advisory for Barcelona relocations and property management across Spain\'s most desirable locations.',
        cta1: 'Explore Our Services',
        cta2: 'Get in Touch'
      },
      relocation: {
        badge: 'FEATURED SERVICE',
        title1: 'Barcelona Housing',
        title2: 'Advisory',
        description: 'Relocating to Barcelona? We provide expert housing advisory services to help you find and secure the perfect property before you arrive. Our expertise in rentals and purchases ensures a smooth transition to your new home in one of Europe\'s most vibrant cities.',
        benefits: [
          'Expert guidance on rental and purchase opportunities in Barcelona',
          'Personalized property search tailored to your housing requirements',
          'In-depth knowledge of Barcelona neighborhoods and market conditions',
          'Professional support through rental agreements and purchase processes'
        ],
        imageTitle1: 'Your Journey',
        imageTitle2: 'Starts Here',
        howTitle1: 'How We',
        howTitle2: 'Support You',
        steps: [
          { title: 'Initial Consultation', desc: 'Understand your needs, preferences, and timeline' },
          { title: 'Property Search', desc: 'Curated selection of properties matching your criteria' },
          { title: 'Secure Your Home', desc: 'Guidance through rental agreements or purchase transactions' },
          { title: 'Move-In Support', desc: 'Final assistance to ensure a smooth transition to your new home' }
        ]
      },
      services: {
        title1: 'Our',
        title2: 'Expertise',
        subtitle: 'Specialized real estate solutions focused on housing advisory and property management',
        relocation: {
          title: 'Housing Advisory',
          description: 'Specialized advisory services for individuals and families relocating to Barcelona. We focus exclusively on helping you find the right property—whether renting or purchasing—ensuring you secure ideal housing before your arrival.',
          items: [
            'Rental and purchase opportunity identification',
            'Virtual and in-person property viewings',
            'Negotiation support for rental agreements and purchases',
            'Market analysis and pricing guidance'
          ]
        },
        management: {
          title: 'Property Management',
          description: 'Professional management services for rental properties in Barcelona and León. We maintain and optimize your real estate investments with meticulous attention to detail.'
        }
      },
      about: {
        title1: 'Why Partner',
        title2: 'With Us',
        values: [
          {
            title: 'Market Expertise',
            desc: 'Deep knowledge of Barcelona and León real estate markets, ensuring informed decisions and optimal outcomes.'
          },
          {
            title: 'Personalized Approach',
            desc: 'Tailored services that adapt to your unique requirements, timeline, and preferences throughout the entire process.'
          },
          {
            title: 'Seamless Experience',
            desc: 'End-to-end support that eliminates stress and complexity, saving you valuable time and resources.'
          },
          {
            title: 'Local Insight',
            desc: 'On-the-ground knowledge of neighborhoods, amenities, and community dynamics that only local experts can provide.'
          },
          {
            title: 'Trusted Network',
            desc: 'Established relationships with property owners, legal professionals, and service providers for smooth transactions.'
          },
          {
            title: 'Commitment to Excellence',
            desc: 'Dedicated to delivering exceptional service and results that exceed expectations at every step.'
          }
        ]
      },
      contact: {
        title1: 'Get in',
        title2: 'Touch',
        subtitle: 'Ready to begin your real estate journey? We\'re here to help.',
        email: 'Email Us',
        phone: 'Call Us',
        form: {
          name: 'Your Name',
          email: 'Email Address',
          subject: 'Subject',
          message: 'Your Message',
          submit: 'Send Message'
        }
      },
      footer: {
        description: 'Professional real estate services across Spain\'s premier markets.',
        areas: 'Service Areas',
        contact: 'Contact',
        rights: 'All rights reserved.'
      }
    },
    es: {
      nav: {
        services: 'Servicios',
        about: 'Nosotros',
        contact: 'Contacto'
      },
      hero: {
        badge: 'SOLUCIONES INMOBILIARIAS PROFESIONALES',
        title1: 'Servicio Excepcional,',
        title2: 'Resultados Excepcionales',
        subtitle: 'Servicios inmobiliarios expertos adaptados a tus necesidades. Especializados en asesoramiento de vivienda para reubicaciones en Barcelona y gestión de propiedades en las ubicaciones más deseables de España.',
        cta1: 'Explora Nuestros Servicios',
        cta2: 'Contáctanos'
      },
      relocation: {
        badge: 'SERVICIO DESTACADO',
        title1: 'Asesoramiento de Vivienda',
        title2: 'en Barcelona',
        description: '¿Te mudas a Barcelona? Proporcionamos servicios expertos de asesoramiento de vivienda para ayudarte a encontrar y conseguir la propiedad perfecta antes de tu llegada. Nuestra experiencia en alquileres y compras garantiza una transición sin problemas a tu nuevo hogar en una de las ciudades más vibrantes de Europa.',
        benefits: [
          'Orientación experta sobre oportunidades de alquiler y compra en Barcelona',
          'Búsqueda personalizada de propiedades adaptada a tus necesidades de vivienda',
          'Conocimiento profundo de los barrios de Barcelona y condiciones del mercado',
          'Apoyo profesional en contratos de alquiler y procesos de compra'
        ],
        imageTitle1: 'Tu Viaje',
        imageTitle2: 'Comienza Aquí',
        howTitle1: 'Cómo Te',
        howTitle2: 'Apoyamos',
        steps: [
          { title: 'Consulta Inicial', desc: 'Comprender tus necesidades, preferencias y plazos' },
          { title: 'Búsqueda de Propiedad', desc: 'Selección curada de propiedades que coinciden con tus criterios' },
          { title: 'Asegura tu Hogar', desc: 'Orientación en contratos de alquiler o transacciones de compra' },
          { title: 'Apoyo en la Mudanza', desc: 'Asistencia final para garantizar una transición fluida a tu nuevo hogar' }
        ]
      },
      services: {
        title1: 'Nuestra',
        title2: 'Experiencia',
        subtitle: 'Soluciones inmobiliarias especializadas enfocadas en asesoramiento de vivienda y gestión de propiedades',
        relocation: {
          title: 'Asesoramiento de Vivienda',
          description: 'Servicios de asesoramiento especializados para personas y familias que se mudan a Barcelona. Nos enfocamos exclusivamente en ayudarte a encontrar la propiedad adecuada—ya sea alquilando o comprando—asegurando que consigas la vivienda ideal antes de tu llegada.',
          items: [
            'Identificación de oportunidades de alquiler y compra',
            'Visitas de propiedades virtuales y presenciales',
            'Apoyo en negociación para contratos de alquiler y compras',
            'Análisis de mercado y orientación de precios'
          ]
        },
        management: {
          title: 'Gestión de Propiedades',
          description: 'Servicios profesionales de gestión para propiedades de alquiler en Barcelona y León. Mantenemos y optimizamos tus inversiones inmobiliarias con meticulosa atención al detalle.'
        }
      },
      about: {
        title1: 'Por Qué Elegir',
        title2: 'Trabajar Con Nosotros',
        values: [
          {
            title: 'Experiencia en el Mercado',
            desc: 'Conocimiento profundo de los mercados inmobiliarios de Barcelona y León, garantizando decisiones informadas y resultados óptimos.'
          },
          {
            title: 'Enfoque Personalizado',
            desc: 'Servicios adaptados a tus requisitos únicos, plazos y preferencias durante todo el proceso.'
          },
          {
            title: 'Experiencia Sin Complicaciones',
            desc: 'Soporte integral que elimina el estrés y la complejidad, ahorrándote tiempo y recursos valiosos.'
          },
          {
            title: 'Conocimiento Local',
            desc: 'Conocimiento sobre el terreno de barrios, servicios y dinámica comunitaria que solo expertos locales pueden proporcionar.'
          },
          {
            title: 'Red de Confianza',
            desc: 'Relaciones establecidas con propietarios, profesionales legales y proveedores de servicios para transacciones fluidas.'
          },
          {
            title: 'Compromiso con la Excelencia',
            desc: 'Dedicados a ofrecer un servicio excepcional y resultados que superan las expectativas en cada paso.'
          }
        ]
      },
      contact: {
        title1: 'Ponte en',
        title2: 'Contacto',
        subtitle: '¿Listo para comenzar tu viaje inmobiliario? Estamos aquí para ayudarte.',
        email: 'Envíanos un Email',
        phone: 'Llámanos',
        form: {
          name: 'Tu Nombre',
          email: 'Correo Electrónico',
          subject: 'Asunto',
          message: 'Tu Mensaje',
          submit: 'Enviar Mensaje'
        }
      },
      footer: {
        description: 'Servicios inmobiliarios profesionales en los principales mercados de España.',
        areas: 'Áreas de Servicio',
        contact: 'Contacto',
        rights: 'Todos los derechos reservados.'
      }
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }
        
        .serif-display {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .sans-body {
          font-family: 'Manrope', sans-serif;
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), 
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        
        .hero-gradient {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
          position: relative;
        }
        
        .hero-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(139, 92, 72, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(101, 67, 33, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #d4a574 0%, #8b5e3c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        
        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        .section-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 8rem;
          font-weight: 300;
          color: rgba(139, 92, 72, 0.08);
          position: absolute;
          top: -2rem;
          left: -1rem;
          line-height: 1;
          pointer-events: none;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200 sans-body">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="serif-display text-2xl font-semibold text-stone-800">
            Brownie House
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-8 text-sm font-medium text-stone-600">
              <a href="#services" className="hover:text-stone-900 transition-colors">{t.nav.services}</a>
              <a href="#about" className="hover:text-stone-900 transition-colors">{t.nav.about}</a>
              <a href="#contact" className="hover:text-stone-900 transition-colors">{t.nav.contact}</a>
            </div>
            <div className="flex gap-2 border-l border-stone-300 pl-6">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-sm text-sm font-medium transition-all ${
                  language === 'en' 
                    ? 'bg-amber-700 text-white' 
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-sm text-sm font-medium transition-all ${
                  language === 'es' 
                    ? 'bg-amber-700 text-white' 
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="fade-in stagger-1 visible">
            <div className="inline-block px-4 py-2 bg-stone-800/40 backdrop-blur-sm rounded-full mb-6 sans-body">
              <span className="text-amber-200 text-sm font-medium tracking-wide">{t.hero.badge}</span>
            </div>
          </div>
          
          <h1 className="serif-display text-7xl md:text-8xl font-light text-white mb-6 leading-tight fade-in stagger-2 visible">
            {t.hero.title1}
            <br />
            <span className="text-gradient font-semibold">{t.hero.title2}</span>
          </h1>
          
          <p className="sans-body text-xl text-stone-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed fade-in stagger-3 visible">
            {t.hero.subtitle}
          </p>
          
          <div className="flex gap-4 justify-center fade-in stagger-4 visible">
            <a 
              href="#services" 
              className="btn-primary bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-sm sans-body font-medium flex items-center gap-2 transition-all"
            >
              {t.hero.cta1}
              <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-sm sans-body font-medium transition-all"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* Primary Service - Relocation Advisory */}
      <section id="section-relocation" className={`py-32 bg-white relative fade-in ${isVisible['section-relocation'] ? 'visible' : ''}`}>
        <div className="section-number">01</div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full mb-4 sans-body text-sm font-semibold tracking-wide">
                {t.relocation.badge}
              </div>
              <h2 className="serif-display text-6xl font-light text-stone-900 mb-6 leading-tight">
                {t.relocation.title1}
                <span className="block text-gradient font-semibold">{t.relocation.title2}</span>
              </h2>
              <p className="sans-body text-lg text-stone-600 mb-8 leading-relaxed">
                {t.relocation.description}
              </p>
              
              <div className="space-y-4 mb-10">
                {t.relocation.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-amber-700 mt-1 flex-shrink-0" size={20} />
                    <span className="sans-body text-stone-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-amber-100 to-stone-200 rounded-sm overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="serif-display text-white text-3xl font-light">
                    {t.relocation.imageTitle1}
                    <span className="block font-semibold">{t.relocation.imageTitle2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* How It Works */}
          <div className="mt-24">
            <h3 className="serif-display text-4xl font-light text-stone-900 text-center mb-16">
              {t.relocation.howTitle1} <span className="font-semibold">{t.relocation.howTitle2}</span>
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {t.relocation.steps.map((step, i) => (
                <div key={i} className="card-hover bg-stone-50 p-8 rounded-sm border border-stone-200">
                  <div className="bg-amber-700 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    {i === 0 && <Users size={24} />}
                    {i === 1 && <MapPin size={24} />}
                    {i === 2 && <Home size={24} />}
                    {i === 3 && <Clock size={24} />}
                  </div>
                  <div className="serif-display text-xl font-semibold text-stone-900 mb-3">
                    {step.title}
                  </div>
                  <p className="sans-body text-stone-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="section-services" className={`py-32 bg-stone-900 relative fade-in ${isVisible['section-services'] ? 'visible' : ''}`}>
        <div className="section-number text-white/5">02</div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="serif-display text-6xl font-light text-white mb-4">
              {t.services.title1} <span className="text-gradient font-semibold">{t.services.title2}</span>
            </h2>
            <p className="sans-body text-stone-400 text-lg max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Relocation Advisory */}
            <div className="card-hover bg-gradient-to-br from-amber-900/20 to-stone-800/20 backdrop-blur-sm p-12 rounded-sm border border-amber-700/30">
              <div className="serif-display text-5xl font-light text-amber-200 mb-4">
                {t.services.relocation.title}
              </div>
              <p className="sans-body text-stone-300 mb-6 leading-relaxed">
                {t.services.relocation.description}
              </p>
              <ul className="space-y-3 sans-body text-sm text-stone-400">
                {t.services.relocation.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Property Management */}
            <div className="card-hover bg-stone-800/40 backdrop-blur-sm p-12 rounded-sm border border-stone-700/50">
              <div className="serif-display text-5xl font-light text-white mb-4">
                {t.services.management.title}
              </div>
              <p className="sans-body text-stone-300 mb-6 leading-relaxed">
                {t.services.management.description}
              </p>
              <div className="flex gap-4 sans-body text-sm">
                <div className="flex items-center gap-2 text-stone-400">
                  <MapPin size={16} className="text-amber-600" />
                  Barcelona
                </div>
                <div className="flex items-center gap-2 text-stone-400">
                  <MapPin size={16} className="text-amber-600" />
                  León
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="section-about" className={`py-32 bg-stone-100 relative fade-in ${isVisible['section-about'] ? 'visible' : ''}`}>
        <div className="section-number">03</div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="serif-display text-6xl font-light text-stone-900 mb-4">
              {t.about.title1} <span className="text-gradient font-semibold">{t.about.title2}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {t.about.values.map((item, i) => (
              <div key={i} className="group">
                <div className="serif-display text-3xl font-semibold text-amber-700 mb-4 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </div>
                <p className="sans-body text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="serif-display text-6xl font-light text-stone-900 mb-4">
              {t.contact.title1} <span className="text-gradient font-semibold">{t.contact.title2}</span>
            </h2>
            <p className="sans-body text-stone-600 text-lg">
              {t.contact.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="card-hover bg-stone-50 p-8 rounded-sm border border-stone-200">
              <Mail className="text-amber-700 mb-4" size={32} />
              <div className="serif-display text-2xl font-semibold text-stone-900 mb-2">
                {t.contact.email}
              </div>
              <a href="mailto:info@browniehouse.com" className="sans-body text-stone-600 hover:text-amber-700 transition-colors">
                info@browniehouse.com
              </a>
            </div>
            
            <div className="card-hover bg-stone-50 p-8 rounded-sm border border-stone-200">
              <Phone className="text-amber-700 mb-4" size={32} />
              <div className="serif-display text-2xl font-semibold text-stone-900 mb-2">
                {t.contact.phone}
              </div>
              <a href="tel:+34123456789" className="sans-body text-stone-600 hover:text-amber-700 transition-colors">
                +34 123 456 789
              </a>
            </div>
          </div>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder={t.contact.form.name}
                className="sans-body w-full px-6 py-4 border border-stone-300 rounded-sm focus:outline-none focus:border-amber-700 transition-colors"
              />
              <input
                type="email"
                placeholder={t.contact.form.email}
                className="sans-body w-full px-6 py-4 border border-stone-300 rounded-sm focus:outline-none focus:border-amber-700 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder={t.contact.form.subject}
              className="sans-body w-full px-6 py-4 border border-stone-300 rounded-sm focus:outline-none focus:border-amber-700 transition-colors"
            />
            <textarea
              rows="6"
              placeholder={t.contact.form.message}
              className="sans-body w-full px-6 py-4 border border-stone-300 rounded-sm focus:outline-none focus:border-amber-700 transition-colors resize-none"
            />
            <button
              type="submit"
              className="btn-primary w-full bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-sm sans-body font-medium transition-all"
            >
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="serif-display text-2xl font-semibold text-white mb-4">
                Brownie House
              </div>
              <p className="sans-body text-sm leading-relaxed">
                {t.footer.description}
              </p>
            </div>
            
            <div>
              <div className="sans-body font-semibold text-white mb-4">{t.footer.areas}</div>
              <div className="space-y-2 text-sm">
                <div>Barcelona, Spain</div>
                <div>León, Spain</div>
              </div>
            </div>
            
            <div>
              <div className="sans-body font-semibold text-white mb-4">{t.footer.contact}</div>
              <div className="space-y-2 text-sm">
                <div>info@browniehouse.com</div>
                <div>+34 123 456 789</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 text-center sans-body text-sm">
            <p>&copy; 2026 Brownie House. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}