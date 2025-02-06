import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import { ContactModal } from './ContactModal';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full top-0 bg-[#1a1a1a]/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold neon-text">MM</span>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#about" className="text-white hover:text-[#4ade80] transition-colors">
                  {t('menu.about')}
                </a>
                <a href="#projects" className="text-white hover:text-[#4ade80] transition-colors">
                  {t('menu.projects')}
                </a>
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="text-white hover:text-[#4ade80] transition-colors"
                >
                  {t('menu.contact')}
                </button>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                  className="flex items-center space-x-2 text-white hover:text-[#4ade80] transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language.toUpperCase()}</span>
                </button>
              </div>
            </div>

            {/* Botón del menú hamburguesa en móviles */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#1a1a1a]/95 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-6 py-6">
              <a 
                href="#about" 
                className="text-white hover:text-[#4ade80] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('menu.about')}
              </a>
              <a 
                href="#projects" 
                className="text-white hover:text-[#4ade80] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('menu.projects')}
              </a>
              <button 
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-[#4ade80] transition-colors"
              >
                {t('menu.contact')}
              </button>
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'es' : 'en');
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-white hover:text-[#4ade80] transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
