import { useLanguage } from './LanguageContext';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Carrousel } from './Carrousel';

const vervadosScreenshots = [
  './src/menuV.jpeg', './src/priV.jpeg', './src/segV.jpeg', './src/terV.jpeg', './src/logroV.jpeg',
];

export function Projects() {
  const { t } = useLanguage();
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const projects = [
    {
      title: t('projects.discordClone.title'),
      description: t('projects.discordClone.description'),
      icon: (
        <div className="w-full h-64 flex items-center justify-center otro-div-con-degradado overflow-hidden group">
          <svg
            className="w-32 h-32 text-[#FF7F50] transform group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        </div>
      ),
      technologies: ['React', 'TypeScript', 'MongoDB', 'Node.js', 'Next.js', 'Prisma', 'Shadcn'],
      github: 'https://github.com/MateoMiron/Discord-Clon-1erProy.',
      live: 'https://discord-o-clone.netlify.app/',
      hasDemo: true,
    },
    {
      title: t('projects.vervados.title'),
      description: t('projects.vervados.description'),
      icon: (
        <div className="w-full h-64 div-con-degradado relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ic_launcher_background-kzy5w9iuID0ypSVEGpCcSXvCY4A3fr.xml')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="./src/logo.png"
              alt="Vervados Logo"
              className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
          </div>
        </div>
      ),
      technologies: ['Android Studio', 'Material Design'],
      github: 'https://github.com/MateoMiron/Verbados',
      hasScreenshots: true
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="neon-text">{t('projects.title')}</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="relative bg-[#0a0a0a] rounded-lg overflow-hidden border border-[#4ade80]/20 hover:border-[#4ade80] transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]"
            >
              {project.icon}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 neon-text">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm bg-[#4ade80]/10 text-[#4ade80] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="https://github.com/MateoMiron/Discord-Clon-1erProy."
                    className="flex items-center space-x-2 text-white hover:text-[#4ade80] transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>{t('projects.code')}</span>
                  </a>
                  {project.hasDemo && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-[#4ade80] transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>{t('projects.app')}</span>
                    </a>
                  )}
                  {project.hasScreenshots && (
                    <button
                      onClick={() => setIsCarouselOpen(true)}
                      className="flex items-center space-x-2 text-white hover:text-[#4ade80] transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>{t('projects.app')}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Carrousel
        isOpen={isCarouselOpen}
        onClose={() => setIsCarouselOpen(false)}
        images={vervadosScreenshots}
      />
    </section>
  );
}