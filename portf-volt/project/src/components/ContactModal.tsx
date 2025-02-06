import { useState } from 'react';
import { Copy, Check, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();
  const email = 'miron.port@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="relative max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Content */}
        <div className="relative bg-[#1a1a1a]/60 backdrop-blur-md rounded-lg overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 grid-background opacity-10"></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-[#4ade80]/10 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-[#4ade80] group-hover:scale-110 transition-transform" />
          </button>

          {/* Content Container */}
          <div className="relative p-8">
            <h2 className="text-2xl font-bold text-center neon-text mb-4 mt-4">
              {t('contact.title')}
            </h2>

            {/* Email Card */}
            <div 
              className=" p-4"
            >
              <div className="flex items-center justify-between">
                <span 
                  className="text-[#4ade80] font-mono relative after:content-[attr(data-content)] after:absolute after:inset-0 after:pointer-events-none"
                  data-content={email}
                >
                </span>
                <button 
                  onClick={copyEmail}
                  className="p-2 rounded-full mt-6 hover:bg-[#4ade80]/10 transition-colors"
                >
                  {copied ? (
                    <Check className="h-5 w-5 text-[#4ade80]" />
                  ) : (
                    <Copy className="h-5 w-5 text-[#4ade80]" />
                  )}
                </button>
              </div>

              {/* Copy Feedback */}
              <div className="h-6 mt-2 flex items-center justify-center">
                {copied && (
                  <p className="text-[#4ade80] mt-8 text-sm animate-fade-in pixelated">
                    {t('contact.copied')}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}