import React from 'react';
import { Phone, MapPin, Home, CheckCircle } from 'lucide-react';
import { useLanguage } from '../App';

export default function HousingAdvisory() {
  const { language } = useLanguage();

  const translations = {
    en: {
      hero: {
        title: 'Housing Advisory',
        subtitle: 'Specialized services for individuals and families relocating to Barcelona. We help you find and secure the perfect property—whether renting or purchasing.'
      },
      products: {
        title: 'Our Services',
        subtitle: 'Choose the level of support that fits your needs',
        items: [
          {
            title: 'Rental Consultation',
            price: 'Introductory Service',
            description: 'Initial call to introduce you to the Barcelona rental market and current situation. Get expert advice on neighborhoods, pricing, and rental processes.',
            features: [
              '30-minute consultation call',
              'Overview of Barcelona rental market',
              'Neighborhood recommendations',
              'Rental process guidance',
              'Answer your questions'
            ]
          },
          {
            title: 'Barcelona Tours',
            price: 'In-Person Experience',
            description: 'Guided tours in selected areas to gain a deep understanding of the local context, amenities, and community feel.',
            features: [
              'Personalized neighborhood tours',
              'Local insights and context',
              'Area comparisons',
              'Transportation and amenities overview',
              'Cultural and lifestyle information'
            ]
          },
          {
            title: 'Full Search Service',
            price: 'Premium Service',
            description: 'Complete support from initial scoping to signing the contract. Arrive in Barcelona with your flat keys ready.',
            features: [
              'Comprehensive property search',
              'Virtual and in-person viewings',
              'Negotiation support',
              'Contract review and signing',
              'Move-in coordination',
              'Arrive with keys in hand'
            ],
            featured: true
          }
        ]
      },
      commitment: {
        title: 'Our Commitment',
        description: 'We search widely and are committed to finding the best for our tenants. Not linked to any real estate company, we access a large, diverse pool of housing options—both on and off-market properties.',
        features: [
          'Independent from real estate companies',
          'Access to on and off-market properties',
          'Wide, diverse property pool',
          'Tenant-focused approach',
          'Transparent, unbiased advice'
        ]
      },
      cta: {
        title: 'Ready to Find Your Barcelona Home?',
        subtitle: 'Let us guide you through every step of the process.',
        button: 'Get Started'
      }
    },
    es: {
      hero: {
        title: 'Asesoramiento de Vivienda',
        subtitle: 'Servicios especializados para personas y familias que se mudan a Barcelona. Te ayudamos a encontrar y asegurar la propiedad perfecta—ya sea alquilando o comprando.'
      },
      products: {
        title: 'Nuestros Servicios',
        subtitle: 'Elige el nivel de apoyo que se ajuste a tus necesidades',
        items: [
          {
            title: 'Consulta de Alquiler',
            price: 'Servicio Introductorio',
            description: 'Llamada inicial para presentarte el mercado de alquiler de Barcelona y la situación actual. Obtén asesoramiento experto sobre barrios, precios y procesos de alquiler.',
            features: [
              'Consulta telefónica de 30 minutos',
              'Visión general del mercado de alquiler de Barcelona',
              'Recomendaciones de barrios',
              'Orientación sobre el proceso de alquiler',
              'Respuesta a tus preguntas'
            ]
          },
          {
            title: 'Tours por Barcelona',
            price: 'Experiencia Presencial',
            description: 'Tours guiados en áreas seleccionadas para obtener una comprensión profunda del contexto local, servicios y ambiente comunitario.',
            features: [
              'Tours personalizados de barrios',
              'Perspectivas y contexto local',
              'Comparaciones de áreas',
              'Visión general de transporte y servicios',
              'Información cultural y de estilo de vida'
            ]
          },
          {
            title: 'Servicio de Búsqueda Completo',
            price: 'Servicio Premium',
            description: 'Apoyo completo desde la búsqueda inicial hasta la firma del contrato. Llega a Barcelona con las llaves de tu piso listas.',
            features: [
              'Búsqueda integral de propiedades',
              'Visitas virtuales y presenciales',
              'Apoyo en negociaciones',
              'Revisión y firma de contrato',
              'Coordinación de mudanza',
              'Llega con las llaves en mano'
            ],
            featured: true
          }
        ]
      },
      commitment: {
        title: 'Nuestro Compromiso',
        description: 'Buscamos ampliamente y nos comprometemos a encontrar lo mejor para nuestros inquilinos. Sin vínculos con ninguna empresa inmobiliaria, accedemos a un gran y diverso conjunto de opciones de vivienda—tanto propiedades en el mercado como fuera de él.',
        features: [
          'Independientes de empresas inmobiliarias',
          'Acceso a propiedades dentro y fuera del mercado',
          'Amplio y diverso conjunto de propiedades',
          'Enfoque centrado en el inquilino',
          'Asesoramiento transparente e imparcial'
        ]
      },
      cta: {
        title: '¿Listo para Encontrar tu Hogar en Barcelona?',
        subtitle: 'Déjanos guiarte en cada paso del proceso.',
        button: 'Comenzar'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="serif-display text-7xl font-light text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="sans-body text-xl text-amber-100 max-w-3xl leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Service Products */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="serif-display text-5xl font-light text-stone-900 mb-4">
              {t.products.title}
            </h2>
            <p className="sans-body text-xl text-stone-600">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.products.items.map((product, i) => {
              const icons = [Phone, MapPin, Home];
              const Icon = icons[i];
              return (
                <div 
                  key={i} 
                  className={`rounded-sm border-2 p-8 ${
                    product.featured 
                      ? 'border-amber-700 bg-amber-50 shadow-xl scale-105' 
                      : 'border-stone-200 bg-white'
                  } hover:shadow-lg transition-all`}
                >
                  {product.featured && (
                    <div className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                      Premium
                    </div>
                  )}
                  <Icon className={`${product.featured ? 'text-amber-700' : 'text-stone-600'} mb-4`} size={40} />
                  <h3 className="serif-display text-3xl font-semibold text-stone-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="sans-body text-sm text-stone-500 mb-4">
                    {product.price}
                  </p>
                  <p className="sans-body text-stone-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-3">
                    {product.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className={`${product.featured ? 'text-amber-700' : 'text-stone-400'} mt-0.5 flex-shrink-0`} size={18} />
                        <span className="sans-body text-sm text-stone-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="serif-display text-5xl font-light mb-6">
                {t.commitment.title}
              </h2>
              <p className="sans-body text-xl text-stone-300 leading-relaxed">
                {t.commitment.description}
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {t.commitment.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                    <span className="sans-body text-stone-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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