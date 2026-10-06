# 📺 Magic TV — Official Landing Page & Web Platform

<div align="center">

![Magic TV Banner](public/favicon.svg)

### Media Center for Android & Android TV · Kodi Nexus 20.5 Port

[![Live Production](https://img.shields.io/badge/Production-Live%20on%20Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://magictv.dengnis97.workers.dev/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-DengnisR%2Fmagictv--page-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DengnisR/magictv-page)
[![Author](https://img.shields.io/badge/Author-DengnisR-8A2BE2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DengnisR)
[![Google Play Ready](https://img.shields.io/badge/Google%20Play-Store%20Ready-34A853?style=for-the-badge&logo=googleplay&logoColor=white)](https://play.google.com/store/apps/details?id=com.magictv.kodi)
[![Node.js Version](https://img.shields.io/badge/Node.js-22%20LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: GPL-2.0](https://img.shields.io/badge/License-GPL--2.0-blue.svg?style=for-the-badge)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)

**Landing page oficial y portal de distribución para la aplicación Magic TV.**  
Desplegada en Cloudflare Pages / Workers y preparada para la publicación en Google Play Store.

[🌐 Ver Sitio Web en Vivo](https://magictv.dengnis97.workers.dev/) · [📦 Repositorio GitHub](https://github.com/DengnisR/magictv-page) · [👤 Perfil del Creador](https://github.com/DengnisR)

</div>

---

## 📌 Acerca de Magic TV

**Magic TV** es una aplicación de centro multimedia optimizada para Android y Android TV, basada en la arquitectura estable y contrastada de **Kodi Nexus 20.5**. Diseñada con un enfoque ultraligero y de alto rendimiento, elimina el bloatware innecesario y garantiza compatibilidad fluida con pantallas táctiles, mandos a distancia y decodificadores de televisión.

Esta plataforma web actúa como la cara pública de la aplicación:
- 📲 **Portal de distribución para Google Play Store**: Enlace directo a la ficha oficial de la tienda.
- 🌐 **Soporte multiidioma dinámico**: Inglés como idioma primario por defecto y Español seleccionable en el footer con persistencia en `localStorage`.
- 📜 **Políticas y Términos Legales**: Rutas completas de *Privacy Policy* y *Terms and Conditions*, redactadas y formateadas con rigor para satisfacer las directrices de desarrollador de Google Play Store.
- ⚡ **Filosofía de libertad y neutralidad**: Magic TV no aloja ni distribuye contenido multimedia propietario. Ofrece conexión libre por IP, compatibilidad universal con servidores propios y soporte irrestricto de complementos (add-ons).

---

## 👨‍💻 Creador y Autoría

* **Autor y Desarrollador**: **Dengnis R.**
* **Perfil de GitHub**: [@DengnisR](https://github.com/DengnisR)
* **Repositorio del Proyecto**: [https://github.com/DengnisR/magictv-page](https://github.com/DengnisR/magictv-page)

### Relación con el proyecto
**Dengnis R.** es el creador, desarrollador principal y mantenedor de **Magic TV**, liderando tanto la ingeniería del port de Kodi Nexus 20.5 para Android como la arquitectura, diseño y despliegue de esta plataforma web oficial.

---

## 🤖 Construcción e Ingeniería con Inteligencia Artificial

Este proyecto ha sido diseñado, estructurado y desarrollado en colaboración con **Google AI Studio Build**, empleando metodologías avanzadas de ingeniería de software asistida por IA:

* **Arquitectura de Frontend**: Modelado modular de componentes bajo TypeScript estricto, React 19 y Vite 6.
* **Sistema de Identidad Visual**: Generación del isotipo vectorial `M` en SVG (`favicon.svg`) y el componente dinámico `<MagicIcon />` con efectos de iluminación y gradiente cyan-violeta (`#00D2FF` $\rightarrow$ `#9D4EDD`).
* **Internacionalización Integral**: Contexto reactivo de traducción sin dependencias pesadas, respetando estándares de accesibilidad y SEO.
* **Pipeline de Despliegue Robusto**: Configuración de GitHub Actions para verificación de CI y archivos de compatibilidad para Cloudflare Pages y Wrangler.

---

## 🚀 Despliegue e Infraestructura

La web se encuentra alojada y distribuida a nivel global mediante la red de borde de Cloudflare:

* **URL de Producción**: [https://magictv.dengnis97.workers.dev/](https://magictv.dengnis97.workers.dev/)
* **Plataforma de Alojamiento**: Cloudflare Pages / Cloudflare Workers
* **Configuración de Wrangler**: Gestionada mediante `wrangler.toml`:
  ```toml
  name = "magictv"
  compatibility_date = "2024-11-01"
  workers_dev = true
  preview_urls = true

  [assets]
  directory = "./dist"
  ```
* **Integración Continua (CI)**: Flujo de trabajo en `.github/workflows/deploy.yml` que valida automáticamente:
  1. Verificación estricta de tipos (`npm run lint`).
  2. Compilación de producción con Vite (`npm run build`).
  3. Comprobación de integridad de artefactos en `dist/` antes de cada despliegue.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Descripción |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Librería de interfaz de usuario de última generación |
| **Lenguaje** | [TypeScript 5.8](https://www.typescriptlang.org/) | Tipado estático robusto y seguro |
| **Bundler** | [Vite 6](https://vitejs.dev/) | Empaquetador y entorno de desarrollo ultraveloz |
| **Estilos** | [Tailwind CSS v4](https://tailwindcss.com/) | Utilidades CSS modernas y reactivas |
| **Iconografía** | [Lucide React](https://lucide.dev/) | Iconos vectoriales limpios y consistentes |
| **Icono de Marca** | SVG Vectorial (`favicon.svg`) | Isotipo propio Magic TV con gradiente de neón |
| **Hosting** | [Cloudflare Pages](https://pages.cloudflare.com/) | Despliegue estático de alto rendimiento en Edge |
| **CI / CD** | GitHub Actions | Test de build y lint en Node 22 LTS |

---

## 📋 Estructura del Proyecto

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Flujo de CI para pruebas de build en GitHub
├── public/
│   ├── 404.html                # Redirección SPA para navegación por hash/rutas
│   └── favicon.svg             # Isotipo oficial de Magic TV en formato vectorial
├── src/
│   ├── components/
│   │   ├── CompatibilitySection.tsx  # Matriz de compatibilidad de pantallas y dispositivos
│   │   ├── FaqSection.tsx            # Preguntas frecuentes (legalidad, add-ons, etc.)
│   │   ├── Features.tsx              # Características técnicas (IP libre, ligereza, etc.)
│   │   ├── Footer.tsx                # Pie de página con selector de idioma y enlaces
│   │   ├── Hero.tsx                  # Sección principal con reproductor interactivo simulado
│   │   ├── LanguageSelector.tsx      # Selector de idioma (EN | ES)
│   │   ├── MagicLogo.tsx             # Componente React <MagicIcon /> con iluminación
│   │   ├── Navbar.tsx                # Barra de navegación principal y botón de Play Store
│   │   ├── PrivacyPolicy.tsx         # Documento legal completo de Política de Privacidad
│   │   └── TermsAndConditions.tsx    # Documento legal completo de Términos y Condiciones
│   ├── context/
│   │   └── LanguageContext.tsx       # Gestor de idiomas (Inglés/Español) con almacenamiento local
│   ├── translations/
│   │   ├── en.ts                     # Diccionario completo en Inglés (predeterminado)
│   │   └── es.ts                     # Diccionario completo en Español
│   ├── App.tsx                       # Componente raíz con enrutador SPA y banner de descarga
│   ├── config.ts                     # Configuración de URLs y paquete de Google Play
│   ├── main.tsx                      # Punto de entrada de la aplicación React
│   └── types.ts                      # Interfaces y tipos de TypeScript
├── .node-version                 # Versión 22 fijada para Cloudflare Pages
├── .nvmrc                        # Versión 22 fijada para NVM / CI
├── package.json                  # Definición del proyecto y scripts
├── package-lock.json             # Sincronización estricta de dependencias
├── tsconfig.json                 # Configuración de TypeScript
├── vite.config.ts                # Configuración de compilación con Vite
└── wrangler.toml                 # Configuración de despliegue para Cloudflare Workers/Pages
```

---

## 💻 Desarrollo Local

### Requisitos previos
* [Node.js](https://nodejs.org/) v22.x LTS o superior
* [npm](https://www.npmjs.com/) v10.x o superior

### Pasos de instalación y ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/DengnisR/magictv-page.git
   cd magictv-page
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

4. **Verificar tipado y sintaxis (Lint):**
   ```bash
   npm run lint
   ```

5. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos estáticos optimizados se generarán en la carpeta `dist/`.

---

## ⚖️ Términos, Licencia y Aviso Legal

### 1. Licencia de Software y Código Fuente
* El reproductor multimedia **Magic TV** está derivado del software de código abierto **Kodi** (Nexus 20.5) y se distribuye bajo la licencia **GNU General Public License v2.0 (GPL-2.0)**.
* Kodi es una marca registrada de la Fundación XBMC. Magic TV es un port independiente desarrollado por **Dengnis R.** y no está afiliado, respaldado ni patrocinado oficialmente por la Fundación XBMC.

### 2. Neutralidad de Contenido
* **Magic TV no contiene, suministra ni proporciona ningún tipo de contenido multimedia, transmisiones IPTV, enlaces o listas de reproducción preinstaladas.**
* La aplicación es exclusivamente un motor y reproductor neutro. Los usuarios son los únicos responsables de suministrar su propio contenido obtenido legalmente o conectarse a sus propios servidores de medios autorizados.
* Magic TV rechaza y no respalda la reproducción de contenido protegido por derechos de autor sin la autorización explícita de sus legítimos titulares.

---

<div align="center">

Hecho con dedicación por **[Dengnis R.](https://github.com/DengnisR)** · Asistido con **Google AI Studio**  
© 2026 Magic TV. Todos los derechos reservados.

</div>
