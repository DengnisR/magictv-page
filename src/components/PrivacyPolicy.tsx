import React, { useState } from 'react';
import { RoutePath } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { ArrowLeft, Shield, HardDrive, Server, ExternalLink, Copy, Check, Printer, Mail, Network } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate: (route: RoutePath) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const text = document.getElementById('privacy-policy-body')?.innerText || '';
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
          id="back-home-privacy-btn"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#9D4EDD] hover:text-purple-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.privacy.backHome}</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyText}
            className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? t.privacy.copied : t.privacy.copyText}</span>
          </button>
          <button
            onClick={handlePrint}
            className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>{t.privacy.print}</span>
          </button>
        </div>
      </div>

      {/* Main Document Container */}
      <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
        
        {/* Neon Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] to-[#9D4EDD]" />

        {/* Header section */}
        <div className="border-b border-slate-100 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#00D2FF] text-xs font-extrabold uppercase tracking-widest mb-4 border border-blue-100">
            <Shield className="w-3.5 h-3.5" />
            <span>{t.privacy.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.privacy.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-400">
            <span><strong>{t.privacy.appLabel}</strong> Magic TV for Kodi</span>
            <span>•</span>
            <span><strong>{t.privacy.providerLabel}</strong> DengnisR</span>
            <span>•</span>
            <span><strong>{t.privacy.effectiveLabel}</strong> 2026-08-18</span>
          </div>
        </div>

        {/* Body content */}
        <div id="privacy-policy-body" className="space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
          
          {language === 'en' ? (
            /* ENGLISH PRIVACY POLICY */
            <>
              <section>
                <p className="text-base text-slate-700 leading-relaxed">
                  This privacy policy applies to the <strong>Magic TV for Kodi</strong> application for mobile and television devices (collectively, the "Application"), developed and operated as a non-commercial, open-source project by <strong>DengnisR</strong> (referred to as the "Service Provider").
                </p>
              </section>

              <section className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Nature of the Application &amp; Open Source Disclaimer
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The Application is an independent port and derivative work based on the open-source code of <strong>Kodi® Nexus 20.5</strong> (licensed under GNU General Public License v2). <strong>Kodi®</strong> is a registered trademark of the <strong>XBMC Foundation</strong>. This Application is not affiliated with, maintained, authorized, endorsed, or sponsored by the XBMC Foundation or the official Kodi development team.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-3">
                  Information Collection, Local IP Communication, and Use
                </h2>
                <p className="mb-4">
                  The Application is designed to function as a local media player and client interface. The Service Provider <strong>does not collect, store, sell, or transmit any personally identifiable information (PII) or user tracking telemetry to external servers</strong>.
                </p>
                <p className="mb-3 font-semibold text-slate-700">
                  To provide core media playback capabilities, the Application requests and utilizes specific local device permissions and network interfaces:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-100/80">
                    <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                      <Network className="w-4 h-4 text-[#00D2FF]" />
                      Local Network &amp; IP Communication (cachetv Integration)
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The Application includes pre-configured local network handling to interface with <em>cachetv</em>—an open-source local IPTV streaming server module. These local requests operate exclusively within the user's local network or loopback to enable stream capturing and playback. No device identifiers, personal data, or playback logs from local IP communications are collected or transmitted to external servers by the Service Provider.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100/80">
                      <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                        <HardDrive className="w-4 h-4 text-[#00D2FF]" />
                        Storage Access
                      </div>
                      <p className="text-xs text-slate-600">Used exclusively to read, index, and play local media files, caches, and user-installed add-ons selected on your device.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100/80">
                      <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                        <Server className="w-4 h-4 text-[#9D4EDD]" />
                        Internet / Network Access
                      </div>
                      <p className="text-xs text-slate-600">Used exclusively to fetch and stream online media content, playlists, or stream protocols configured by the user.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Cookies and Tracking Technologies
                </h2>
                <p>
                  The Application does not use cookies, tracking pixels, or third-party analytics trackers. Media buffering and cache structures operate locally on the device to maintain smooth playback.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Your Rights &amp; CCPA/GDPR Compliance
                </h2>
                <p>
                  Because the Service Provider does not collect, store, or sell your personal data on external servers, no personal data is retained to be accessed, modified, or sold. If you have any privacy questions, you may contact the Service Provider at{' '}
                  <a href="mailto:dengnis97@gmail.com" className="text-[#9D4EDD] font-semibold hover:underline">
                    dengnis97@gmail.com
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Third-Party Services
                </h2>
                <p className="mb-3">
                  The Application utilizes essential third-party operating infrastructure (such as Google Play Services) to support core Android functionality. These services operate under their own independent privacy policies:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
                  <li>
                    <a
                      href="https://www.google.com/policies/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00D2FF] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Google Play Services Privacy Policy</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Children's Privacy
                </h2>
                <p>
                  The Application is a general-purpose media player tool and does not knowingly collect or target personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Changes to This Privacy Policy
                </h2>
                <p>
                  The Service Provider may update this Privacy Policy periodically. You are advised to review this page regularly for any changes. Changes are effective immediately upon publication on this page.
                </p>
                <p className="mt-2 font-semibold text-slate-700">
                  Effective date: <strong>2026-08-18</strong>.
                </p>
              </section>
            </>
          ) : (
            /* SPANISH PRIVACY POLICY */
            <>
              <section>
                <p className="text-base text-slate-700 leading-relaxed">
                  Esta política de privacidad se aplica a la aplicación <strong>Magic TV for Kodi</strong> para dispositivos móviles y televisores (colectivamente, la "Aplicación"), desarrollada y operada como un proyecto de código abierto no comercial por <strong>DengnisR</strong> (denominado el "Proveedor del Servicio").
                </p>
              </section>

              <section className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Naturaleza de la Aplicación y Descargo de Responsabilidad de Código Abierto
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  La Aplicación es un port independiente y obra derivada basada en el código abierto de <strong>Kodi® Nexus 20.5</strong> (licenciado bajo la Licencia Pública General GNU v2). <strong>Kodi®</strong> es una marca registrada de la <strong>Fundación XBMC</strong>. Esta Aplicación no está afiliada, mantenida, autorizada, respaldada ni patrocinada oficialmente por la Fundación XBMC ni por el equipo oficial de desarrollo de Kodi.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-3">
                  Recopilación de Información, Comunicación por IP Local y Uso
                </h2>
                <p className="mb-4">
                  La Aplicación está diseñada para funcionar como un reproductor de medios local e interfaz de cliente. El Proveedor del Servicio <strong>no recopila, almacena, comercializa ni transmite ninguna información de identificación personal (PII) ni datos de telemetría a servidores externos</strong>.
                </p>
                <p className="mb-3 font-semibold text-slate-700">
                  Para proporcionar las funciones esenciales de reproducción multimedia, la Aplicación solicita y utiliza permisos locales específicos e interfaces de red:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-100/80">
                    <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                      <Network className="w-4 h-4 text-[#00D2FF]" />
                      Comunicación de Red Local e IP (Integración cachetv)
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      La Aplicación incluye configuraciones de red local para interactuar internamente con <em>cachetv</em>—un módulo servidor de streaming IPTV local de código abierto. Estas peticiones locales operan exclusivamente dentro de la red local o bucle invertido (loopback) del usuario. Ningún dato identificador del dispositivo ni registro de reproducción es transmitido a servidores externos por parte del Proveedor del Servicio.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100/80">
                      <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                        <HardDrive className="w-4 h-4 text-[#00D2FF]" />
                        Acceso al Almacenamiento Local
                      </div>
                      <p className="text-xs text-slate-600">Utilizado exclusivamente para leer, indexar y reproducir archivos multimedia locales, cachés y complementos instalados en tu dispositivo.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100/80">
                      <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                        <Server className="w-4 h-4 text-[#9D4EDD]" />
                        Acceso a Internet / Red
                      </div>
                      <p className="text-xs text-slate-600">Utilizado exclusivamente para obtener y transmitir contenido multimedia en línea, listas de reproducción o protocolos de red configurados por el usuario.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Cookies y Tecnologías de Rastreo
                </h2>
                <p>
                  La Aplicación no utiliza cookies, píxeles de seguimiento ni kits de desarrollo (SDKs) de rastreo de usuarios. Las estructuras de búfer y caché operan localmente en el dispositivo para mantener la estabilidad de la reproducción.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Tus Derechos de Privacidad
                </h2>
                <p>
                  Dado que el Proveedor del Servicio no recopila, almacena ni comercializa tus datos personales en servidores externos, no se retienen datos para ser consultados o modificados. Si tienes dudas sobre privacidad, puedes contactarnos en{' '}
                  <a href="mailto:dengnis97@gmail.com" className="text-[#9D4EDD] font-semibold hover:underline">
                    dengnis97@gmail.com
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Servicios de Terceros
                </h2>
                <p className="mb-3">
                  La Aplicación utiliza infraestructura esencial de terceros (como Google Play Services) para la compatibilidad con el sistema operativo Android:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
                  <li>
                    <a
                      href="https://www.google.com/policies/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00D2FF] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Política de Privacidad de Google Play Services</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Privacidad de Menores
                </h2>
                <p>
                  La Aplicación es un reproductor de medios neutral y no recopila deliberadamente información personal de menores de edad.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Cambios a Esta Política de Privacidad
                </h2>
                <p>
                  El Proveedor del Servicio puede actualizar periódicamente esta Política de Privacidad. Se recomienda revisar esta página periódicamente.
                </p>
                <p className="mt-2 font-semibold text-slate-700">
                  Fecha de vigencia: <strong>2026-08-18</strong>.
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
                ? 'If you have any questions or concerns regarding privacy while using the Application, please contact:'
                : 'Para preguntas sobre la política de privacidad, comunícate con nosotros a través de:'}
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
