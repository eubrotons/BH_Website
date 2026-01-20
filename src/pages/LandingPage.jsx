import React, { useState, useEffect } from 'react';
import { MapPin, Home, Users, CheckCircle, Mail, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../App';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const { language } = useLanguage();

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

  const translations = {
    en: {
      hero: {
        badge: 'PROFESSIONAL REAL ESTATE SOLUTIONS',
        title1: 'Exceptional Service,',
        title2: 'Exceptional Results',
        subtitle: 'Expert real estate services tailored to your needs. From property management to housing advisory in Barcelona.',
        cta1: 'Explore Our Services',
        cta2: 'Get in Touch'
      },
      relocation: {
        title1: 'Barcelona Housing',
        title2: 'Advisory',
        description: 'Relocating to Barcelona? We\'re here to assist you before your arrival or in your early days, to find your ideal home. We search widely and are committed to finding the best for our tenants. Not linked to any real estate company, we access a large, diverse pool of housing options.',
        benefits: [
          'Expert guidance on rental and purchase opportunities in Barcelona',
          'Access to on and off-market properties through our wide search',
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
          { title: 'Seamless Transition', desc: 'Easy, hassle-free move to your new Barcelona home' }
        ]
      },
      services: {
        title1: 'Our',
        title2: 'Expertise',
        subtitle: 'We understand end-to-end housing services by delivering both property management and housing advisory',
        management: {
          title: 'Property Management',
          description: 'Professional management services for rental properties in Barcelona. We commercialize, maintain, and optimize your real estate investments with meticulous attention to detail. Happy tenants make happy landlords.',
          items: [
            'Property commercialization and tenant screening',
            'Compliant contract writing and closing',
            'Rent collection and financial management',
            'Property development: renovations and furnishing',
            'Optimize investments and increase market value according to current demand trends'
          ]
        },
        advisory: {
          title: 'Housing Advisory',
          description: 'Specialized advisory services for individuals and families relocating to Barcelona. We focus exclusively on helping you find the right property—whether renting or purchasing—ensuring you secure ideal housing.',
          items: [
            'Wide search across on and off-market properties',
            'Virtual and in-person property viewings',
            'Negotiation support for rental agreements and purchases',
            'Market analysis and pricing guidance'
          ]
        }
      },
      about: {
        title1: 'Why Partner',
        title2: 'With Us',
        values: [
          {
            title: 'Market Expertise',
            desc: 'Deep knowledge of Barcelona real estate market, ensuring informed decisions and optimal outcomes.'
          },
          {
            title: 'Wide Search & Openness',
            desc: 'Access to on and off-market properties. Independent from real estate companies, we find the best options for you.'
          },
          {
            title: 'Seamless Experience',
            desc: 'Navigate Spanish bureaucracy and new regulations with ease. End-to-end support that eliminates stress and complexity.'
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
        phone: 'Call Us'
      }
    },
    es: {
      hero: {
        badge: 'SOLUCIONES INMOBILIARIAS PROFESIONALES',
        title1: 'Servicio Excepcional,',
        title2: 'Resultados Excepcionales',
        subtitle: 'Servicios inmobiliarios expertos adaptados a tus necesidades. Desde gestión de propiedades hasta asesoramiento de vivienda en Barcelona.',
        cta1: 'Explora Nuestros Servicios',
        cta2: 'Contáctanos'
      },
      relocation: {
        title1: 'Asesoramiento de Vivienda',
        title2: 'en Barcelona',
        description: '¿Te mudas a Barcelona? Antes de tu llegada o en tus primeros días, si no estás satisfecho con lo que tienes, o si necesitas ayuda para encontrar tu hogar ideal—estamos aquí para ayudarte. Buscamos ampliamente y nos comprometemos a encontrar lo mejor para nuestros inquilinos. Sin vínculos con ninguna empresa inmobiliaria, accedemos a un gran y diverso conjunto de opciones de vivienda.',
        benefits: [
          'Orientación experta sobre oportunidades de alquiler y compra en Barcelona',
          'Acceso a propiedades dentro y fuera del mercado mediante nuestra búsqueda amplia',
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
          { title: 'Transición Sin Problemas', desc: 'Mudanza fácil y sin complicaciones a tu nuevo hogar en Barcelona' }
        ]
      },
      services: {
        title1: 'Nuestra',
        title2: 'Experiencia',
        subtitle: 'Entendemos los servicios de vivienda de principio a fin al ofrecer tanto gestión de propiedades como asesoramiento de vivienda',
        management: {
          title: 'Gestión de Propiedades',
          description: 'Servicios profesionales de gestión para propiedades de alquiler en Barcelona. Comercializamos, mantenemos y optimizamos tus inversiones inmobiliarias con meticulosa atención al detalle. Inquilinos felices hacen propietarios felices.',
          items: [
            'Comercialización de propiedades y selección de inquilinos',
            'Redacción y cierre de contratos cumpliendo normativas',
            'Cobro de alquileres y gestión financiera',
            'Desarrollo de propiedades: reformas y amueblado',
            'Optimización de inversiones y aumento del valor de mercado según tendencias actuales'
          ]
        },
        advisory: {
          title: 'Asesoramiento de Vivienda',
          description: 'Servicios de asesoramiento especializados para personas y familias que se mudan a Barcelona. Nos enfocamos exclusivamente en ayudarte a encontrar la propiedad adecuada—ya sea alquilando o comprando—asegurando que consigas la vivienda ideal.',
          items: [
            'Búsqueda amplia en propiedades dentro y fuera del mercado',
            'Visitas de propiedades virtuales y presenciales',
            'Apoyo en negociación para contratos de alquiler y compras',
            'Análisis de mercado y orientación de precios'
          ]
        }
      },
      about: {
        title1: 'Por Qué Elegir',
        title2: 'Trabajar Con Nosotros',
        values: [
          {
            title: 'Experiencia en el Mercado',
            desc: 'Conocimiento profundo del mercado inmobiliario de Barcelona, garantizando decisiones informadas y resultados óptimos.'
          },
          {
            title: 'Búsqueda Amplia y Apertura',
            desc: 'Acceso a propiedades dentro y fuera del mercado. Independientes de empresas inmobiliarias, encontramos las mejores opciones para ti.'
          },
          {
            title: 'Experiencia Sin Complicaciones',
            desc: 'Navega la burocracia española y nuevas regulaciones con facilidad. Soporte integral que elimina el estrés y la complejidad.'
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
        phone: 'Llámanos'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="bg-stone-50 min-h-screen">
      <style>{`
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
      `}</style>

      {/* Hero Section with Barcelona Photo */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Barcelona aerial photo background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-900/60" />
        
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
              href="#section-services" 
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

      {/* Housing Advisory Section */}
      <section id="section-relocation" className={`py-32 bg-white relative fade-in ${isVisible['section-relocation'] ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
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
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
                  alt="Happy person entering home"
                 className="w-full h-full object-cover"
                />
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
                    {i === 3 && <CheckCircle size={24} />}
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
            {/* Property Management - FIRST */}
            <div className="card-hover bg-gradient-to-br from-amber-900/20 to-stone-800/20 backdrop-blur-sm p-12 rounded-sm border border-amber-700/30">
              <div className="serif-display text-5xl font-light text-amber-200 mb-4">
                {t.services.management.title}
              </div>
              <p className="sans-body text-stone-300 mb-6 leading-relaxed">
                {t.services.management.description}
              </p>
              <ul className="space-y-3 sans-body text-sm text-stone-400">
                {t.services.management.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-stone-700">
                <div className="flex items-center gap-2 text-stone-400">
                  <MapPin size={16} className="text-amber-600" />
                  Barcelona
                </div>
              </div>
            </div>
            
            {/* Housing Advisory - SECOND */}
            <div className="card-hover bg-stone-800/40 backdrop-blur-sm p-12 rounded-sm border border-stone-700/50">
              <div className="serif-display text-5xl font-light text-white mb-4">
                {t.services.advisory.title}
              </div>
              <p className="sans-body text-stone-300 mb-6 leading-relaxed">
                {t.services.advisory.description}
              </p>
              <ul className="space-y-3 sans-body text-sm text-stone-400">
                {t.services.advisory.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="section-about" className={`py-32 bg-stone-100 relative fade-in ${isVisible['section-about'] ? 'visible' : ''}`}>
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
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-hover bg-stone-50 p-8 rounded-sm border border-stone-200">
              <Mail className="text-amber-700 mb-4" size={32} />
              <div className="serif-display text-2xl font-semibold text-stone-900 mb-2">
                {t.contact.email}
              </div>
              <a href="mailto:admin@browniehouse.com" className="sans-body text-stone-600 hover:text-amber-700 transition-colors">
                admin@browniehouse.com
              </a>
            </div>
            
            <div className="card-hover bg-stone-50 p-8 rounded-sm border border-stone-200">
              <Phone className="text-amber-700 mb-4" size={32} />
              <div className="serif-display text-2xl font-semibold text-stone-900 mb-2">
                {t.contact.phone}
              </div>
              <a href="tel:+34932010193" className="sans-body text-stone-600 hover:text-amber-700 transition-colors">
                +34 932 010 193
              </a>
            </div>
          </div>
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
                Professional real estate services in Barcelona.
              </p>
            </div>
            
            <div>
              <div className="sans-body font-semibold text-white mb-4">Service Area</div>
              <div className="text-sm">Barcelona, Spain</div>
            </div>
            
            <div>
              <div className="sans-body font-semibold text-white mb-4">Contact</div>
              <div className="space-y-2 text-sm">
                <div>admin@browniehouse.com</div>
                <div>+34 932 010 193</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 text-center sans-body text-sm">
            <p>&copy; 2026 Brownie House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}