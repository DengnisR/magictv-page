import React, { useId } from 'react';

export interface MagicIconProps {
  size?: number | string;
  className?: string;
  showGlow?: boolean;
}

export const MagicIcon: React.FC<MagicIconProps> = ({
  size = 40,
  className = '',
  showGlow = false,
}) => {
  const rawId = useId();
  const idPrefix = rawId.replace(/:/g, '');
  const bgGradId = `magic-bg-${idPrefix}`;
  const sheenGradId = `magic-sheen-${idPrefix}`;
  const shadowFilterId = `magic-shadow-${idPrefix}`;

  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      style={{ width: pixelSize, height: pixelSize }}
      className={`relative inline-flex items-center justify-center flex-shrink-0 select-none ${className}`}
    >
      {showGlow && (
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[#00D2FF] to-[#9D4EDD] opacity-50 blur-md rounded-2xl pointer-events-none"
        />
      )}
      <svg
        viewBox="0 0 512 512"
        width="100%"
        height="100%"
        className="w-full h-full rounded-[24%] overflow-hidden shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Brand Gradient: Cyan to Purple */}
          <linearGradient id={bgGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" />
            <stop offset="50%" stopColor="#4361EE" />
            <stop offset="100%" stopColor="#9D4EDD" />
          </linearGradient>

          {/* Top Sheen Highlight */}
          <linearGradient id={sheenGradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Drop Shadow for M */}
          <filter id={shadowFilterId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0B132B" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Rounded Squircle Background */}
        <rect width="512" height="512" rx="118" ry="118" fill={`url(#${bgGradId})`} />

        {/* Subtle Specular Sheen */}
        <path
          d="M 0 118 C 0 52.8 52.8 0 118 0 L 394 0 C 459.2 0 512 52.8 512 118 L 512 210 L 0 256 Z"
          fill={`url(#${sheenGradId})`}
          opacity="0.65"
        />

        {/* Inner Border Highlight */}
        <rect
          x="2"
          y="2"
          width="508"
          height="508"
          rx="116"
          ry="116"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.25"
          strokeWidth="4"
        />

        {/* Stylized Bold M Monogram */}
        <path
          d="M 120 376
             L 120 148
             C 120 138 128 130 138 130
             L 168 130
             C 178 130 186 135 192 144
             L 256 248
             L 320 144
             C 326 135 334 130 344 130
             L 374 130
             C 384 130 392 138 392 148
             L 392 376
             C 392 384 384 390 376 390
             L 342 390
             C 334 390 326 384 326 376
             L 326 242
             L 272 328
             C 264 340 248 340 240 328
             L 186 242
             L 186 376
             C 186 384 178 390 170 390
             L 136 390
             C 128 390 120 384 120 376 Z"
          fill="#FFFFFF"
          filter={`url(#${shadowFilterId})`}
        />
      </svg>
    </div>
  );
};

export default MagicIcon;
