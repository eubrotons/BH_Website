import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../App';

export default function Contact() {
  const { language } = useLanguage();

  const translations = {
    en: {
      hero: {
        title: 'Get in Touch',
        subtitle: 'Ready to begin your real estate journey in Barcelona? We\'re here to help.'
      },
      email: 'Email Us',
      phone: 'Call Us'
    },
    es: {
      hero: {
        title: 'Ponte en Contacto',
        subtitle: '¿Listo para comenzar tu viaje inmobiliario en Barcelona? Estamos aquí para ayudarte.'
      },
      email: 'Envíanos un Email',
      phone: 'Llámanos'
    }
  };

  const t = translations[language];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="serif-display text-7xl font-light text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="sans-body text-xl text-amber-100 leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-hover bg-stone-50 p-12 rounded-sm border border-stone-200 text-center">
              <Mail className="text-amber-700 mb-6 mx-auto" size={48} />
              <h2 className="serif-display text-3xl font-semibold text-stone-900 mb-4">
                {t.email}
              </h2>
              <a 
                href="mailto:admin@browniehouse.com" 
                className="sans-body text-xl text-stone-600 hover:text-amber-700 transition-colors"
              >
                admin@browniehouse.com
              </a>
            </div>
            
            <div className="card-hover bg-stone-50 p-12 rounded-sm border border-stone-200 text-center">
              <Phone className="text-amber-700 mb-6 mx-auto" size={48} />
              <h2 className="serif-display text-3xl font-semibold text-stone-900 mb-4">
                {t.phone}
              </h2>
              <a 
                href="tel:+34932010193" 
                className="sans-body text-xl text-stone-600 hover:text-amber-700 transition-colors"
              >
                +34 932 010 193
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .card-hover {
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}