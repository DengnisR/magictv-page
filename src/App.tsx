import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { GOOGLE_PLAY_URL } from './config';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CompatibilitySection } from './components/CompatibilitySection';
import { FaqSection } from './components/FaqSection';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { Footer } from './components/Footer';
import { Sparkles } from 'lucide-react';

function AppContent() {
  const { t } = useLanguage();
  const [currentRoute, setCurrentRoute] = useState<RoutePath>('home');

  // Sync with Browser Hash for direct URLs (#privacy, #terms, etc.)
  useEffect(() => {
    const handleHashChange = () => {
      // Check if arriving from a 404.html redirect
      if (sessionStorage.redirect) {
        const redirectUrl = sessionStorage.redirect;
        delete sessionStorage.redirect;
        try {
          const url = new URL(redirectUrl);
          const pathSegment = url.pathname.split('/').filter(Boolean).pop() as RoutePath;
          if (['privacy', 'terms', 'features', 'compatibility', 'faq'].includes(pathSegment)) {
            setCurrentRoute(pathSegment);
            window.location.hash = pathSegment;
            return;
          }
        } catch {
          // ignore parsing error
        }
      }

      const hash = window.location.hash.replace('#', '') as RoutePath;
      if (['privacy', 'terms', 'features', 'compatibility', 'faq'].includes(hash)) {
        setCurrentRoute(hash);
        if (hash !== 'privacy' && hash !== 'terms') {
          // Scroll to the specific section on the home landing view
          const el = document.getElementById(hash);
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: RoutePath) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '' : route;

    if (route === 'privacy' || route === 'terms') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(route);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500/20 selection:text-purple-700">
      
      {/* Top Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentRoute === 'privacy' ? (
          <PrivacyPolicy onNavigate={navigateTo} />
        ) : currentRoute === 'terms' ? (
          <TermsAndConditions onNavigate={navigateTo} />
        ) : (
          /* Landing Page View */
          <div>
            <Hero
              onNavigateToFeatures={() => navigateTo('features')}
            />

            <Features />

            <CompatibilitySection />

            <FaqSection />

            {/* Bottom Call to Action Pre-Footer Banner - Clean Minimalism */}
            <section className="py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
              <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden bg-slate-900 p-8 sm:p-14 text-white shadow-2xl border border-slate-800">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D2FF]/10 blur-[90px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9D4EDD]/15 blur-[90px] rounded-full pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                  <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/10 text-[#00D2FF] text-xs font-extrabold uppercase tracking-widest mb-4 border border-[#00D2FF]/20">
                      <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
                      {t.preFooter.badge}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-tight">
                      {t.preFooter.title}
                    </h2>
                    <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                      {t.preFooter.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                    <a
                      id="footer-cta-playstore"
                      href={GOOGLE_PLAY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-black text-base shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3 border border-white group cursor-pointer"
                    >
                      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M3.6 1.8A1.8 1.8 0 0 0 3 3.3v17.4c0 .6.2 1.1.6 1.5l.1.1 9.8-9.8v-.2L3.7 2.4l-.1-.6z" fill="#00D2FF"/>
                        <path d="M16.8 15.6l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2-.1.1z" fill="#FFD200"/>
                        <path d="M13.5 12.1L3.6 22.2c.4.4 1.1.5 1.8.1l11.5-6.6-3.4-3.6z" fill="#FF3366"/>
                        <path d="M13.5 11.9l3.4-3.6L5.4 1.7C4.7 1.3 4 1.4 3.6 1.8l9.9 10.1z" fill="#00E676"/>
                      </svg>
                      <span className="group-hover:text-[#9D4EDD] transition-colors">{t.preFooter.cta}</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
