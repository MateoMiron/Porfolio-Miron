import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Terminal } from 'lucide-react';

export function About() {
  const { t } = useLanguage();
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setIsTyping(true);
    setDisplayedText('');
    let currentText = '';
    const fullText = t('about.description');
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setDisplayedText(currentText);
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [t]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="neon-box p-8 relative">
          {/* Terminal Header */}
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="h-6 w-6 text-[#4ade80]" />
            <h2 className="text-2xl font-bold neon-text pixelated">{t('about.title')}</h2>
          </div>
          
          {/* Terminal Screen */}
          <div className="relative bg-[#0a0a0a] p-6 rounded-lg border border-[#4ade80]/20">
            <div className="absolute inset-0 grid-background opacity-10"></div>
            
            {/* Boot Sequence */}
            <div className="text-[#4ade80] font-mono space-y-2 mb-4">
              <p>{t('about.sequence')}</p>
              <p>{t('about.load')}</p>
              <p>{t('about.access')}</p>
              <p className="mb-6"> {'>'} {t('about.exec')}</p>
            </div>

            {/* Main Content */}
            <div className="relative text-[#4ade80] font-mono leading-relaxed">
              {displayedText}
              {(isTyping || cursorVisible) && (
                <span className="inline-block w-3 h-5 bg-[#4ade80] ml-1"></span>
              )}
            </div>

            {/* Scanline Effect */}
            <div className="scanline"></div>
          </div>

          {/* System Status */}
          <div className="mt-4 flex justify-between text-[#4ade80]/80 text-sm font-mono">
            <span>MEM OK</span>
            <span>SYSTEM OPERATIONAL</span>
            <span>NO ERRORS FOUND</span>
          </div>
        </div>
      </div>
    </section>
  );
}