import React from 'react';
import { useLanguage } from '../App';

import deboraPhoto from '../src/assets/debora-photo.png';
import mariaPhoto from '../src/assets/maria-photo.png';

export default function About() {
  const { language } = useLanguage();

  const translations = {
    en: {
      hero: {
        title: 'Meet Our Team',
        subtitle: 'Experienced professionals dedicated to your real estate success in Barcelona'
      },
      team: [
        {
          name: 'María',
          photo: mariaPhoto,
          description: 'Dedicated to the Spanish rental market for over two decades, María brings rich market expertise and has developed properties across Barcelona, Madrid, and León. Having lived abroad, she has firsthand experience understanding the needs of expats—making her uniquely well-suited to guide international clients. María has an engineering background but shifted to real estate entrepreneurship two decades ago, combining analytical precision with business acumen.'
        },
        {
          name: 'Débora',
          photo: deboraPhoto,
          description: 'A Barcelona local, Débora has an intimate understanding of the city and its neighborhoods. Her business experience and extensive travels abroad have given her an in-depth understanding of the financial requirements and priorities when moving to a new country. With an economics background and previous experience in multinational companies, Débora brings strategic insight and global perspective to every client relationship.'
        }
      ],
      languages: {
        title: 'Languages',
        list: ['English', 'French', 'Italian', 'Spanish', 'Turkish']
      },
      cta: {
        title: 'Work With Us',
        subtitle: 'Experience the difference that local expertise and international understanding can make.',
        button: 'Get in Touch'
      }
    },
    es: {
      hero: {
        title: 'Conoce a Nuestro Equipo',
        subtitle: 'Profesionales experimentadas dedicadas a tu éxito inmobiliario en Barcelona'
      },
      team: [
        {
          name: 'María',
          photo: mariaPhoto,
          description: 'Dedicada al mercado de alquiler español durante más de dos décadas, María aporta una rica experiencia de mercado y ha desarrollado propiedades en Barcelona, Madrid y León. Habiendo vivido en el extranjero, tiene experiencia de primera mano en comprender las necesidades de los expatriados, lo que la hace excepcionalmente adecuada para guiar a clientes internacionales. María tiene formación en ingeniería pero cambió al emprendimiento inmobiliario hace dos décadas, combinando precisión analítica con visión empresarial.'
        },
        {
          name: 'Débora',
          photo: deboraPhoto,
          description: 'Local de Barcelona, Débora tiene un conocimiento íntimo de la ciudad y sus barrios. Su experiencia empresarial y extensos viajes al extranjero le han dado una comprensión profunda de los requisitos financieros y prioridades al mudarse a un nuevo país. Con formación en economía y experiencia previa en empresas multinacionales, Débora aporta perspectiva estratégica y visión global a cada relación con clientes.'
        }
      ],
      languages: {
        title: 'Idiomas',
        list: ['Inglés', 'Francés', 'Italiano', 'Español', 'Turco']
      },
      cta: {
        title: 'Trabaja Con Nosotras',
        subtitle: 'Experimenta la diferencia que puede marcar la experiencia local y la comprensión internacional.',
        button: 'Contáctanos'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-stone-900 to-stone-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="serif-display text-7xl font-light text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="sans-body text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-20">
            {t.team.map((member, i) => (
              <div 
                key={i} 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative w-64 h-64 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full" />
                    <img 
                      src={member.photo}
                      alt={member.name}
                      className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="serif-display text-5xl font-semibold text-stone-900 mb-6">
                    {member.name}
                  </h2>
                  <p className="sans-body text-lg text-stone-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="serif-display text-4xl font-light text-stone-900 mb-8">
            {t.languages.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {t.languages.list.map((lang, i) => (
              <span 
                key={i}
                className="bg-white px-6 py-3 rounded-full border border-stone-200 sans-body text-stone-700 font-medium"
              >
                {lang}
              </span>
            ))}
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