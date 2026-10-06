import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  variant?: 'footer';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-slate-50 border border-slate-200/80 rounded-xl p-1 text-xs shadow-2xs">
      <div className="pl-1.5 pr-1 text-slate-400 flex items-center">
        <Globe className="w-3.5 h-3.5 mr-1 text-[#9D4EDD]" />
        <span className="font-semibold text-[11px] hidden sm:inline text-slate-500">
          {language === 'en' ? 'Language' : 'Idioma'}:
        </span>
      </div>
      <button
        id="footer-lang-en"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
          language === 'en'
            ? 'bg-white text-[#00D2FF] shadow-xs border border-slate-200/60'
            : 'text-slate-500 hover:text-slate-900'
        }`}
        title="English (Primary)"
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        id="footer-lang-es"
        onClick={() => setLanguage('es')}
        className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
          language === 'es'
            ? 'bg-white text-[#9D4EDD] shadow-xs border border-slate-200/60'
            : 'text-slate-500 hover:text-slate-900'
        }`}
        title="Español"
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};
