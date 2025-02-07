import { useState } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { Navbar } from './components/Navbar';
import { ContactModal } from './components/ContactModal';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { useLanguage } from './components/LanguageContext';
import { Github, Linkedin } from 'lucide-react';

function MainContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white relative overflow-x-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 grid-background opacity-30 pointer-events-none"></div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4ade80]/5 rounded-full blur-3xl rotating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4ade80]/10 rounded-full blur-3xl rotating" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <p className="text-xl neon-text">{t('hero.greeting')}</p>
              
              <div className="space-y-4">
                <h1 className="text-6xl font-bold tracking-tight">
                  {t('hero.soy')} <span className="neon-text">{t('hero.name')}</span>
                </h1>
                <h2 className="text-5xl font-bold neon-text">
                  {t('hero.lastname')}
                </h2>
              </div>

              <h3 className="text-3xl">
                {t('hero.soyUn')} <span className="neon-text">{t('hero.role')}</span>
              </h3>
              
              <p className="text-gray-400 max-w-2xl">
                {t('hero.description')}
              </p>

              <div className="flex space-x-6 pt-4">
                <a
                  href="https://github.com/MateoMiron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#4ade80] transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-8 w-8" />
                </a>
                <a
                  href="https://linkedin.com/in/mateo-miron-339bb9247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#4ade80] transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
              </div>
            </div>

            <div className="relative z-10 flex justify-center">
              <div className="neon-box w-full max-w-[400px] h-auto aspect-[4/3] floating mx-auto">
                <span className="absolute inset-0 flex items-center justify-center text-7xl md:text-[120px] font-bold neon-text">
                  M
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 neon-border rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 neon-border rounded-full opacity-20"></div>
      </section>

      {/* About Me Section */}
      <About />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <Projects />

      {/* Footer Section */}
      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;