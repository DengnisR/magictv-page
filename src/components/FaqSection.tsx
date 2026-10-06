import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#00D2FF] text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
            {t.faq.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="mt-3 text-slate-500 text-base font-normal max-w-md mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {t.faq.items.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-[24px] border transition-all duration-200 bg-white overflow-hidden ${
                  isOpen
                    ? 'border-[#9D4EDD]/30 shadow-md ring-1 ring-purple-100'
                    : 'border-slate-100 shadow-sm hover:border-slate-200'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-purple-50 text-[#9D4EDD] rotate-180'
                        : 'bg-slate-50 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-500 leading-relaxed border-t border-slate-50 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legal notice */}
        <div className="mt-12 p-5 rounded-[24px] bg-white border border-slate-100 flex items-start gap-4 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-[#00D2FF] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-500 leading-relaxed font-normal">
            <strong className="text-slate-800 font-bold block mb-1">
              {t.faq.trademarkDisclaimer.split(':')[0]}:
            </strong>
            {t.faq.trademarkDisclaimer.split(':')[1] || t.faq.trademarkDisclaimer}
          </div>
        </div>

      </div>
    </section>
  );
};
