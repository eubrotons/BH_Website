import React from 'react';
import { CheckCircle, Home, Users, FileText, Euro, Wrench, Sparkles } from 'lucide-react';
import { useLanguage } from '../App';

export default function PropertyManagement() {
  const { language } = useLanguage();

  const translations = {
    en: {
      hero: {
        title: 'Property Management',
        subtitle: 'Professional management services for rental properties in Barcelona. We commercialize, maintain, and optimize your investments with meticulous attention to detail.',
        tagline: 'Happy tenants make happy landlords.'
      },
      services: {
        title: 'Our Services',
        core: {
          title: 'Core Management Services',
          items: [
            {
              title: 'Property Commercialization',
              desc: 'Professional marketing and listing of your property to reach the right tenants'
            },
            {
              title: 'Tenant Screening',
              desc: 'Thorough background checks and verification to ensure reliable, quality tenants'
            },
            {
              title: 'Compliant Contracts',
              desc: 'Legally compliant contract writing and closing that protects your interests'
            },
            {
              title: 'Rent Collection',
              desc: 'Efficient rent collection and comprehensive financial management'
            }
          ]
        },
        addon: {
          title: 'Add-On Services',
          items: [
            {
              title: 'Property Development',
              desc: 'Renovations (reformas) and furnishing to prepare your property for the market'
            },
            {
              title: 'Services Management',
              desc: 'Cleaning, maintenance, and repair services upon request'
            }
          ]
        }
      },
      optimization: {
        title: 'Investment Optimization',
        description: 'We optimize your investments and increase market value according to current demand trends and needs, ensuring your property remains competitive and profitable in Barcelona\'s dynamic rental market.'
      },
      cta: {
        title: 'Ready to Maximize Your Investment?',
        subtitle: 'Let us handle your property with the care and expertise it deserves.',
        button: 'Contact Us'
      }
    },
    es: {
      hero: {
        title: 'Gestión de Propiedades',
        subtitle: 'Servicios profesionales de gestión para propiedades de alquiler en Barcelona. Comercializamos, mantenemos y optimizamos tus inversiones con meticulosa atención al detalle.',
        tagline: 'Inquilinos felices hacen propietarios felices.'
      },
      services: {
        title: 'Nuestros Servicios',
        core: {
          title: 'Servicios de Gestión Principal',
          items: [
            {
              title: 'Comercialización de Propiedades',
              desc: 'Marketing profesional y publicación de tu propiedad para llegar a los inquilinos adecuados'
            },
            {
              title: 'Selección de Inquilinos',
              desc: 'Verificaciones exhaustivas de antecedentes para asegurar inquilinos confiables y de calidad'
            },
            {
              title: 'Contratos Conformes',
              desc: 'Redacción y cierre de contratos legalmente conformes que protegen tus intereses'
            },
            {
              title: 'Cobro de Alquileres',
              desc: 'Cobro eficiente de alquileres y gestión financiera integral'
            }
          ]
        },
        addon: {
          title: 'Servicios Adicionales',
          items: [
            {
              title: 'Desarrollo de Propiedades',
              desc: 'Reformas y amueblado para preparar tu propiedad para el mercado'
            },
            {
              title: 'Gestión de Servicios',
              desc: 'Servicios de limpieza, mantenimiento y reparación bajo solicitud'
            }
          ]
        }
      },
      optimization: {
        title: 'Optimización de Inversiones',
        description: 'Optimizamos tus inversiones y aumentamos el valor de mercado según las tendencias de demanda y necesidades actuales, asegurando que tu propiedad se mantenga competitiva y rentable en el dinámico mercado de alquiler de Barcelona.'
      },
      cta: {
        title: '¿Listo para Maximizar tu Inversión?',
        subtitle: 'Déjanos manejar tu propiedad con el cuidado y experiencia que merece.',
        button: 'Contáctanos'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-stone-900 to-stone-800">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="serif-display text-7xl font-light text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="sans-body text-xl text-stone-300 max-w-3xl mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <p className="serif-display text-2xl text-amber-300 italic">
            "{t.hero.tagline}"
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="serif-display text-5xl font-light text-stone-900 mb-4 text-center">
            {t.services.title}
          </h2>
          
          <div className="mt-16">
            <h3 className="serif-display text-3xl font-semibold text-amber-700 mb-8">
              {t.services.core.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {t.services.core.items.map((item, i) => {
                const icons = [Home, Users, FileText, Euro];
                const Icon = icons[i];
                return (
                  <div key={i} className="bg-stone-50 p-8 rounded-sm border border-stone-200 hover:shadow-lg transition-shadow">
                    <Icon className="text-amber-700 mb-4" size={32} />
                    <h4 className="serif-display text-2xl font-semibold text-stone-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="sans-body text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Add-On Services */}
          <div className="mt-16">
            <h3 className="serif-display text-3xl font-semibold text-amber-700 mb-8">
              {t.services.addon.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {t.services.addon.items.map((item, i) => {
                const icons = [Wrench, Sparkles];
                const Icon = icons[i];
                return (
                  <div key={i} className="bg-amber-50 p-8 rounded-sm border border-amber-200 hover:shadow-lg transition-shadow">
                    <Icon className="text-amber-700 mb-4" size={32} />
                    <h4 className="serif-display text-2xl font-semibold text-stone-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="sans-body text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Optimization */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="serif-display text-5xl font-light mb-6">
            {t.optimization.title}
          </h2>
          <p className="sans-body text-xl text-stone-300 leading-relaxed">
            {t.optimization.description}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="serif-display text-5xl font-light mb-4">
            {t.cta.title}
          </h2>
          <p className="sans-body text-xl mb-8 text-amber-100">
            {t.cta.subtitle}
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-amber-700 px-8 py-4 rounded-sm sans-body font-semibold hover:bg-stone-100 transition-all"
          >
            {t.cta.button}
          </a>
        </div>
      </section>
    </div>
  );
}
