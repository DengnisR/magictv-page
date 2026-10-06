import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RoutePath } from '../types';
import { Cookie, X } from 'lucide-react';

interface CookieNoticeProps {
  onNavigate: (route: RoutePath) => void;
}

export const CookieNotice: React.FC<CookieNoticeProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('magictv_ad_consent');
    if (!consent) {
      // Show notice after a brief delay for smoother UX
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('magictv_ad_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom duration-300">
      <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl text-slate-700 text-xs">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-purple-50 text-[#9D4EDD] flex-shrink-0 mt-0.5">
            <Cookie className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-slate-900 text-xs mb-1">
              {language === 'en' ? 'Cookies & Advertising' : 'Cookies y Publicidad'}
            </p>
            <p className="text-slate-500 leading-relaxed text-[11px] mb-3">
              {language === 'en'
                ? 'We use essential cookies and partner with third-party advertising networks (like Adsterra) to support site hosting and maintenance.'
                : 'Utilizamos cookies y colaboramos con redes publicitarias (como Adsterra) para costear el hosting y mantenimiento del sitio web.'}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={handleAccept}
                className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
              >
                {language === 'en' ? 'Got it' : 'Entendido'}
              </button>
              <button
                onClick={() => {
                  onNavigate('privacy');
                  setVisible(false);
                }}
                className="px-3 py-1.5 rounded-xl text-slate-600 hover:text-[#9D4EDD] font-semibold text-xs transition-colors cursor-pointer"
              >
                {language === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
              </button>
            </div>
          </div>
          <button
            onClick={handleAccept}
            className="text-slate-400 hover:text-slate-600 p-1 -mr-1 -mt-1 cursor-pointer"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
