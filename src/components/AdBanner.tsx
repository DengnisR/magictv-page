import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export interface AdBannerProps {
  className?: string;
}

/**
 * AdBanner Component
 * 
 * Secure, isolated container for Adsterra Native Banner.
 * Never rendered on legal policy routes (/privacy, /terms).
 */
export const AdBanner: React.FC<AdBannerProps> = ({
  className = '',
}) => {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  const containerId = 'container-cf660f31f4c6d6fdb0374a608483423f';
  const scriptSrc = 'https://latherburial.com/cf660f31f4c6d6fdb0374a608483423f/invoke.js';

  useEffect(() => {
    if (scriptLoadedRef.current) return;
    
    const wrapper = containerRef.current;
    if (!wrapper) return;

    // Dynamically inject Adsterra invoke script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = scriptSrc;

    wrapper.appendChild(script);
    scriptLoadedRef.current = true;

    return () => {
      scriptLoadedRef.current = false;
    };
  }, [scriptSrc]);

  const labelText = language === 'en' ? 'Sponsored Content' : 'Contenido Patrocinado';

  return (
    <div className={`w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 my-10 ${className}`}>
      <div className="flex flex-col items-center">
        {/* Subtle, compliant ad badge */}
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
          <span>{labelText}</span>
        </div>

        {/* Native Banner Container */}
        <div
          ref={containerRef}
          className="w-full min-h-[90px] rounded-2xl border border-slate-200/80 bg-slate-50/60 p-2 sm:p-4 flex flex-col items-center justify-center text-center shadow-xs overflow-hidden transition-all"
        >
          {/* Adsterra target container ID */}
          <div id={containerId} className="w-full flex justify-center items-center" />
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
