import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PropertyManagement from './pages/PropertyManagement';
import HousingAdvisory from './pages/HousingAdvisory';
import About from './pages/About';
import Contact from './pages/Contact';
import { ChevronDown } from 'lucide-react';

// Create context for language
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

function Navigation() {
  const { language, setLanguage } = useLanguage();
  const [servicesOpen, setServicesOpen] = useState(false);
  let closeTimeout;

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setServicesOpen(false);
    }, 300);
  };

  const t = {
    en: {
      services: 'Services',
      propertyManagement: 'Property Management',
      housingAdvisory: 'Housing Advisory',
      about: 'About',
      contact: 'Contact'
    },
    es: {
      services: 'Servicios',
      propertyManagement: 'Gestión de Propiedades',
      housingAdvisory: 'Asesoramiento de Vivienda',
      about: 'Nosotros',
      contact: 'Contacto'
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap');
        
        .serif-display {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .sans-body {
          font-family: 'Manrope', sans-serif;
        }
      `}</style>
      
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200 sans-body">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="serif-display text-2xl font-semibold text-stone-800">
            Brownie House
          </Link>
          
          <div className="flex items-center gap-8">
            <div className="flex gap-8 text-sm font-medium text-stone-600">
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="hover:text-stone-900 transition-colors flex items-center gap-1">
                  {t[language].services}
                  <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-sm border border-stone-200 py-2 min-w-[200px]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link 
                      to="/property-management" 
                      className="block px-4 py-2 text-sm hover:bg-stone-50 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {t[language].propertyManagement}
                    </Link>
                    <Link 
                      to="/housing-advisory" 
                      className="block px-4 py-2 text-sm hover:bg-stone-50 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {t[language].housingAdvisory}
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/about" className="hover:text-stone-900 transition-colors">
                {t[language].about}
              </Link>
              <Link to="/contact" className="hover:text-stone-900 transition-colors">
                {t[language].contact}
              </Link>
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
    </>
  );
}

export default function App() {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/property-management" element={<PropertyManagement />} />
          <Route path="/housing-advisory" element={<HousingAdvisory />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
}