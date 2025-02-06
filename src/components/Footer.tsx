import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export function Footer() {
  const {t} = useLanguage();
  const [text, setText] = useState("");
  const fullText = t('footer.text');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#1a1a1a] text-white text-center py-6 font-mono">
        <p className="text-sm mb-2">{text}</p>
        <p className="text-sm opacity-80">© {new Date().getFullYear()} Mateo Miron | Built with React - Typescript</p>
        <div className="flex justify-center space-x-4 mt-2">
            <a href="https://github.com/MateoMiron" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ade80] transition-colors">
            GitHub
            </a>
            <a href="https://linkedin.com/in/mateo-miron-339bb9247" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ade80] transition-colors">
            LinkedIn
            </a>
        </div>
    </footer>

  );
}
