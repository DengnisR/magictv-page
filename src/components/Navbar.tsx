import React, { useState, useEffect } from 'react';
import { RoutePath } from '../types';
import { GOOGLE_PLAY_URL } from '../config';
import { useLanguage } from '../context/LanguageContext';
import { Tv, Shield, FileText, Menu, X, Sparkles, HelpCircle, Smartphone } from 'lucide-react';

interface NavbarProps {
  currentRoute: RoutePath;
  onNavigate: (route: RoutePath) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: RoutePath, event?: React.MouseEvent) => {
    if (event) event.preventDefault();
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'h-20 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'h-20 bg-white/70 backdrop-blur-md border-b border-slate-100/80'
      } flex items-center`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Clean Minimalism */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group transition-transform focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D2FF] to-[#9D4EDD] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-extrabold text-xl tracking-tighter">M</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD]">
                  Magic TV
                </span>
                <span className="inline-block px-2 py-0.5 rounded-full bg-blue-50 text-[#00D2FF] text-[10px] font-bold tracking-wider uppercase border border-blue-100/80">
                  {t.nav.androidPort}
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-9 text-sm font-semibold text-slate-500">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'home'
                  ? 'text-[#9D4EDD] font-bold'
                  : 'hover:text-[#00D2FF]'
              }`}
            >
              {t.nav.home}
            </button>

            <button
              id="nav-link-features"
              onClick={() => handleNavClick('features')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'features'
                  ? 'text-[#9D4EDD] font-bold'
                  : 'hover:text-[#00D2FF]'
              }`}
            >
              {t.nav.features}
            </button>

            <button
              id="nav-link-compatibility"
              onClick={() => handleNavClick('compatibility')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'compatibility'
                  ? 'text-[#9D4EDD] font-bold'
                  : 'hover:text-[#00D2FF]'
              }`}
            >
              {t.nav.compatibility}
            </button>

            <button
              id="nav-link-faq"
              onClick={() => handleNavClick('faq')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'faq'
                  ? 'text-[#9D4EDD] font-bold'
                  : 'hover:text-[#00D2FF]'
              }`}
            >
              {t.nav.faq}
            </button>

            <div className="h-4 w-px bg-slate-200" />

            <button
              id="nav-link-privacy"
              onClick={() => handleNavClick('privacy')}
              className={`transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentRoute === 'privacy'
                  ? 'text-[#00D2FF] font-bold'
                  : 'hover:text-[#00D2FF]'
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-[#00D2FF]" />
              {t.nav.privacy}
            </button>

            <button
              id="nav-link-terms"
              onClick={() => handleNavClick('terms')}
              className={`transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentRoute === 'terms'
                  ? 'text-[#9D4EDD] font-bold'
                  : 'hover:text-[#9D4EDD]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#9D4EDD]" />
              {t.nav.terms}
            </button>
          </nav>

          {/* Header Action: Google Play Store CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-playstore-btn"
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white hover:bg-slate-800 px-5 py-2.5 rounded-2xl font-bold text-xs shadow-md active:scale-95 transition-all duration-200 flex items-center gap-2.5 border border-slate-700"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M3.6 1.8A1.8 1.8 0 0 0 3 3.3v17.4c0 .6.2 1.1.6 1.5l.1.1 9.8-9.8v-.2L3.7 2.4l-.1-.6z" fill="#00D2FF"/>
                <path d="M16.8 15.6l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2-.1.1z" fill="#FFD200"/>
                <path d="M13.5 12.1L3.6 22.2c.4.4 1.1.5 1.8.1l11.5-6.6-3.4-3.6z" fill="#FF3366"/>
                <path d="M13.5 11.9l3.4-3.6L5.4 1.7C4.7 1.3 4 1.4 3.6 1.8l9.9 10.1z" fill="#00E676"/>
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[8px] text-slate-400 font-medium">{t.nav.availableOn}</div>
                <div className="text-xs font-black text-white">{t.nav.googlePlay}</div>
              </div>
            </a>
          </div>

          {/* Mobile Menu & Quick Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              id="mobile-playstore-quick-btn"
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-slate-900 text-white shadow-sm text-xs font-bold sm:hidden flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <path d="M3.6 1.8A1.8 1.8 0 0 0 3 3.3v17.4c0 .6.2 1.1.6 1.5l.1.1 9.8-9.8v-.2L3.7 2.4l-.1-.6z" fill="#00D2FF"/>
                <path d="M16.8 15.6l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2-.1.1z" fill="#FFD200"/>
                <path d="M13.5 12.1L3.6 22.2c.4.4 1.1.5 1.8.1l11.5-6.6-3.4-3.6z" fill="#FF3366"/>
                <path d="M13.5 11.9l3.4-3.6L5.4 1.7C4.7 1.3 4 1.4 3.6 1.8l9.9 10.1z" fill="#00E676"/>
              </svg>
              <span>Play</span>
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 lg:hidden border-b border-slate-100 bg-white/95 backdrop-blur-lg px-6 pt-4 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            <button
              id="m-nav-home"
              onClick={() => handleNavClick('home')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-left cursor-pointer ${
                currentRoute === 'home' ? 'bg-purple-50 text-[#9D4EDD] font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Tv className="w-4 h-4 text-[#9D4EDD]" />
              {t.nav.home}
            </button>

            <button
              id="m-nav-features"
              onClick={() => handleNavClick('features')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-left cursor-pointer ${
                currentRoute === 'features' ? 'bg-purple-50 text-[#9D4EDD] font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#00D2FF]" />
              {t.nav.features}
            </button>

            <button
              id="m-nav-compatibility"
              onClick={() => handleNavClick('compatibility')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-left cursor-pointer ${
                currentRoute === 'compatibility' ? 'bg-purple-50 text-[#9D4EDD] font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Smartphone className="w-4 h-4 text-[#00D2FF]" />
              {t.nav.compatibility}
            </button>

            <button
              id="m-nav-faq"
              onClick={() => handleNavClick('faq')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-left cursor-pointer ${
                currentRoute === 'faq' ? 'bg-purple-50 text-[#9D4EDD] font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-[#9D4EDD]" />
              {t.nav.faq}
            </button>

            <div className="pt-2 pb-1 border-t border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 px-4 tracking-wider">
                {t.nav.legalSection}
              </span>
            </div>

            <button
              id="m-nav-privacy"
              onClick={() => handleNavClick('privacy')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-left cursor-pointer ${
                currentRoute === 'privacy' ? 'bg-blue-50 text-[#00D2FF] font-bold' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Shield className="w-4 h-4 text-[#00D2FF]" />
              {t.nav.privacy}
            </button>

            <button
              id="m-nav-terms"
              onClick={() => handleNavClick('terms')}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-left cursor-pointer ${
                currentRoute === 'terms' ? 'bg-purple-50 text-[#9D4EDD] font-bold' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4 text-[#9D4EDD]" />
              {t.nav.terms}
            </button>

            <div className="pt-2">
              <a
                id="m-nav-playstore-main"
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-slate-900 text-white font-bold text-center shadow-lg flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M3.6 1.8A1.8 1.8 0 0 0 3 3.3v17.4c0 .6.2 1.1.6 1.5l.1.1 9.8-9.8v-.2L3.7 2.4l-.1-.6z" fill="#00D2FF"/>
                  <path d="M16.8 15.6l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2-.1.1z" fill="#FFD200"/>
                  <path d="M13.5 12.1L3.6 22.2c.4.4 1.1.5 1.8.1l11.5-6.6-3.4-3.6z" fill="#FF3366"/>
                  <path d="M13.5 11.9l3.4-3.6L5.4 1.7C4.7 1.3 4 1.4 3.6 1.8l9.9 10.1z" fill="#00E676"/>
                </svg>
                <span>{t.preFooter.cta}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
