import React from 'react';
import { RoutePath } from '../types';
import { GOOGLE_PLAY_URL } from '../config';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Github } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-100 text-slate-500 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00D2FF] to-[#9D4EDD] flex items-center justify-center shadow-sm">
                <span className="text-white font-extrabold text-sm">M</span>
              </div>
              <span className="text-base font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD]">
                Magic TV
              </span>
            </div>

            <div className="hidden sm:block h-4 w-px bg-slate-200" />

            <p className="text-slate-400 font-medium">
              {t.footer.copyright}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 font-bold text-slate-600 flex-wrap justify-center">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#9D4EDD] transition-colors cursor-pointer"
            >
              {t.footer.navHome}
            </button>
            <button
              onClick={() => onNavigate('features')}
              className="hover:text-[#9D4EDD] transition-colors cursor-pointer"
            >
              {t.footer.navFeatures}
            </button>
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-[#00D2FF] transition-colors cursor-pointer"
            >
              {t.footer.navPrivacy}
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-[#9D4EDD] transition-colors cursor-pointer"
            >
              {t.footer.navTerms}
            </button>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00D2FF] transition-colors inline-flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <path d="M3.6 1.8A1.8 1.8 0 0 0 3 3.3v17.4c0 .6.2 1.1.6 1.5l.1.1 9.8-9.8v-.2L3.7 2.4l-.1-.6z" fill="#00D2FF"/>
                <path d="M16.8 15.6l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2-.1.1z" fill="#FFD200"/>
                <path d="M13.5 12.1L3.6 22.2c.4.4 1.1.5 1.8.1l11.5-6.6-3.4-3.6z" fill="#FF3366"/>
                <path d="M13.5 11.9l3.4-3.6L5.4 1.7C4.7 1.3 4 1.4 3.6 1.8l9.9 10.1z" fill="#00E676"/>
              </svg>
              <span>{t.footer.navPlayStore}</span>
            </a>
          </div>

          {/* Controls: Language Selector & Badge */}
          <div className="flex items-center gap-3">
            {/* Footer Language Selector */}
            <LanguageSelector variant="footer" />

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:border-slate-300 transition-all shadow-2xs"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <div className="px-2.5 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#9D4EDD] text-[11px] font-mono font-bold shadow-2xs">
              Nexus 20.5
            </div>
          </div>

        </div>

        {/* Bottom micro disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-100/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>
            {t.footer.trademark}
          </p>
          <div className="flex items-center gap-1">
            <span>{t.footer.license}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
