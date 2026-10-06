import React, { useState } from 'react';
import { RoutePath } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { ArrowLeft, FileText, ExternalLink, Copy, Check, Printer, Mail, AlertTriangle, Radio } from 'lucide-react';

interface TermsAndConditionsProps {
  onNavigate: (route: RoutePath) => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const text = document.getElementById('terms-conditions-body')?.innerText || '';
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 px-6 sm:px-10 lg:px-12 max-w-5xl mx-auto">
      
      {/* Navigation Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <button
          id="back-home-terms-btn"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#9D4EDD] hover:text-purple-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.terms.backHome}</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyText}
            className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? t.terms.copied : t.terms.copyText}</span>
          </button>
          <button
            onClick={handlePrint}
            className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>{t.terms.print}</span>
          </button>
        </div>
      </div>

      {/* Main Document Container */}
      <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
        
        {/* Neon Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9D4EDD] to-[#00D2FF]" />

        {/* Header section */}
        <div className="border-b border-slate-100 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-[#9D4EDD] text-xs font-extrabold uppercase tracking-widest mb-4 border border-purple-100">
            <FileText className="w-3.5 h-3.5" />
            <span>{t.terms.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.terms.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-400">
            <span><strong>{t.terms.appLabel}</strong> Magic TV for Kodi</span>
            <span>•</span>
            <span><strong>{t.terms.providerLabel}</strong> DengnisR</span>
            <span>•</span>
            <span><strong>{t.terms.effectiveLabel}</strong> 2026-08-18</span>
          </div>
        </div>

        {/* Body content */}
        <div id="terms-conditions-body" className="space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
          
          {language === 'en' ? (
            /* ENGLISH TERMS */
            <>
              <section>
                <p className="text-base text-slate-700 leading-relaxed mb-3">
                  These terms and conditions apply to the <strong>Magic TV for Kodi</strong> mobile and TV application (collectively, the "Application"), operated as a non-commercial open-source project by <strong>DengnisR</strong> (referred to as the "Service Provider").
                </p>
                <p className="font-semibold text-slate-900">
                  By downloading, installing, or using the Application, you agree to be bound by these Terms and Conditions.
                </p>
              </section>

              <section className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Open Source License &amp; Derivative Work Notice
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The Application is an independent port based on the open-source code of <strong>Kodi® Nexus 20.5</strong>, distributed under the <strong>GNU General Public License v2 (GPLv2)</strong>. You are granted rights to inspect, use, and redistribute this software in compliance with the GPLv2 license.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Trademark Disclaimer
                </h2>
                <p>
                  <strong>Kodi®</strong> is a registered trademark of the <strong>XBMC Foundation</strong>. The Service Provider and this Application are independent and are <strong>not affiliated with, authorized, sponsored, or endorsed by the XBMC Foundation</strong> or the official Kodi project.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-purple-50/70 border border-purple-100/90">
                <h2 className="text-lg font-bold text-purple-950 mb-2 flex items-center gap-2">
                  <Radio className="w-5 h-5 text-[#9D4EDD]" />
                  Local Streaming Architecture &amp; cachetv Disclaimer
                </h2>
                <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                  The Application includes internal technical configurations (including local IP network communication) to interface with <em>cachetv</em>—an open-source media streaming server software. The Service Provider provides this strictly as a client interface.
                </p>
                <div className="pt-2">
                  <p className="font-bold text-xs uppercase tracking-wider text-purple-900 mb-2">
                    Content Liability Exclusions:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>The Service Provider <strong>does not provide, host, control, or index any IPTV playlists, streams, channels, or media content</strong> accessed through <em>cachetv</em> or local/remote IP configurations.</li>
                    <li>End-users and network administrators are solely responsible for any IPTV content, playlists, or streams configured, streamed, or rendered through their servers.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-3">
                  Acceptable Use &amp; User Responsibilities
                </h2>
                <p className="mb-3">
                  The Application is provided strictly as a neutral media player. You agree not to use the Application to:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-slate-600">
                  <li>Stream or distribute copyrighted media without authorization from the rightful copyright holder.</li>
                  <li>Access illegal or unauthorized media streams in your jurisdiction.</li>
                  <li>Violate any applicable intellectual property or broadcasting laws.</li>
                </ul>
              </section>

              <section className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <h2 className="text-lg font-bold text-amber-950 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Limitation of Liability &amp; Disclaimer of Warranty
                </h2>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-mono uppercase tracking-tight">
                  THE APPLICATION IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE PROVIDER SHALL NOT BE HELD LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING FROM USER-PROVIDED CONTENT, HOSTED IPTV LISTS, OR THIRD-PARTY STREAMS.
                </p>
              </section>
            </>
          ) : (
            /* SPANISH TERMS */
            <>
              <section>
                <p className="text-base text-slate-700 leading-relaxed mb-3">
                  Estos términos y condiciones se aplican a la aplicación móvil y de TV <strong>Magic TV for Kodi</strong> (colectivamente, la "Aplicación"), operada como un proyecto de código abierto sin fines comerciales por <strong>DengnisR</strong> (denominado el "Proveedor del Servicio").
                </p>
                <p className="font-semibold text-slate-900">
                  Al descargar, instalar o utilizar la Aplicación, aceptas cumplir con estos Términos y Condiciones.
                </p>
              </section>

              <section className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Licencia de Código Abierto y Aviso de Obra Derivada
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  La Aplicación es un port independiente basado en el código abierto de <strong>Kodi® Nexus 20.5</strong>, distribuido bajo la <strong>Licencia Pública General GNU v2 (GPLv2)</strong>. Tienes derecho a inspeccionar, usar y redistribuir este software de acuerdo con la licencia GPLv2.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Aviso de Marcas Registradas
                </h2>
                <p>
                  <strong>Kodi®</strong> es una marca registrada de la <strong>Fundación XBMC</strong>. El Proveedor del Servicio y esta Aplicación son independientes y <strong>no están afiliados, autorizados, patrocinados ni respaldados por la Fundación XBMC</strong> ni por el proyecto oficial Kodi.
                </p>
              </section>

              <section className="p-6 rounded-2xl bg-purple-50/70 border border-purple-100/90">
                <h2 className="text-lg font-bold text-purple-950 mb-2 flex items-center gap-2">
                  <Radio className="w-5 h-5 text-[#9D4EDD]" />
                  Arquitectura de Streaming Local y Descargo de cachetv
                </h2>
                <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                  La Aplicación incluye configuraciones técnicas internas (incluida la comunicación por red IP local) para interactuar con <em>cachetv</em>—un software servidor de streaming IPTV de código abierto. El Proveedor del Servicio ofrece esta integración estrictamente como cliente de reproducción.
                </p>
                <div className="pt-2">
                  <p className="font-bold text-xs uppercase tracking-wider text-purple-900 mb-2">
                    Exclusiones de Responsabilidad sobre el Contenido:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>El Proveedor del Servicio <strong>no proporciona, aloja, controla ni indexa listas IPTV, canales ni contenidos protegidos</strong> a través de servidores <em>cachetv</em> o configuraciones de IP.</li>
                    <li>Los usuarios y administradores de red son los únicos responsables del contenido, listas de reproducción o transmisiones reproducidas a través de sus propios servidores.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-3">
                  Uso Aceptable y Responsabilidades del Usuario
                </h2>
                <p className="mb-3">
                  La Aplicación se proporciona como una herramienta neutral de reproducción. Te comprometes a no utilizar la Aplicación para:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-slate-600">
                  <li>Transmitir o distribuir medios protegidos sin la debida autorización de los titulares de los derechos.</li>
                  <li>Acceder a transmisiones ilegales o no autorizadas en tu jurisdicción.</li>
                  <li>Infringir cualquier ley local o internacional de propiedad intelectual o radiodifusión.</li>
                </ul>
              </section>

              <section className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <h2 className="text-lg font-bold text-amber-950 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Limitación de Responsabilidad y Garantía
                </h2>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-mono uppercase tracking-tight">
                  LA APLICACIÓN SE PROPORCIONA "TAL CUAL", SIN GARANTÍAS DE NINGÚN TIPO. EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, EL PROVEEDOR DEL SERVICIO NO SERÁ RESPONSABLE DE DAÑOS DIRECTOS O INDIRECTOS DERIVADOS DE CONTENIDOS O LISTAS IPTV SUMINISTRADAS POR EL USUARIO.
                </p>
              </section>
            </>
          )}

          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              {language === 'en' ? 'Contact Us' : 'Contacto'}
            </h2>
            <p className="mb-2">
              {language === 'en'
                ? 'For questions or suggestions regarding these Terms and Conditions, please contact:'
                : 'Para preguntas o sugerencias respecto a estos Términos y Condiciones, contáctanos en:'}
            </p>
            <a
              href="mailto:dengnis97@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 text-[#9D4EDD] font-bold text-sm hover:bg-purple-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>dengnis97@gmail.com</span>
            </a>
          </section>

        </div>

      </div>

    </div>
  );
};
