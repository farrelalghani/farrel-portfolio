import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'h-4 w-4' }) => {
  const normalized = name.toLowerCase().trim();

  // Python
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M11.914 2C6.88 2 7.195 4.18 7.195 4.18l.006 2.26h4.79v.678H5.215S2 6.758 2 11.8c0 5.04 2.805 4.87 2.805 4.87h1.674v-2.348s-.09-2.805 2.75-2.805h4.735s2.63.045 2.63-2.585V4.742S16.994 2 11.914 2zm-2.61 1.455a.86.86 0 110 1.72.86.86 0 010-1.72z"
          fill="#3776AB"
        />
        <path
          d="M12.086 22c5.034 0 4.72-2.18 4.72-2.18l-.006-2.26h-4.79v-.678h6.775S22 17.242 22 12.2c0-5.04-2.805-4.87-2.805-4.87h-1.674v2.348s.09 2.805-2.75 2.805H10.036s-2.63-.045-2.63 2.585v4.191S7.006 22 12.086 22zm2.61-1.455a.86.86 0 110-1.72.86.86 0 010 1.72z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M7.5 18.5c-.8 0-1.5-.4-1.8-1.1l1.4-.8c.2.4.5.6.8.6.5 0 .8-.3.8-.8v-5.9h1.7v6c0 1.3-.9 2-2.1 2zm6.2 0c-1.4 0-2.3-.9-2.3-2.2l1.6-.7c.2.7.6 1.3 1.2 1.3.6 0 1-.3 1-.7 0-.4-.3-.6-1-.8l-.8-.3c-1.3-.4-2-.9-2-2 0-1.2 1-2.1 2.3-2.1 1.1 0 1.9.5 2.2 1.4l-1.4.8c-.2-.5-.5-.7-.8-.7-.4 0-.7.3-.7.6 0 .4.3.6.8.8l.8.3c1.5.5 2.2 1 2.2 2.1 0 1.4-1.1 2.3-2.7 2.3z"
          fill="#000"
        />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M4.5 10.5h6v1.6H8.5V19H6.5v-6.9H4.5v-1.6zm8.2 8.5c-1.4 0-2.3-.9-2.3-2.2l1.6-.7c.2.7.6 1.3 1.2 1.3.6 0 1-.3 1-.7 0-.4-.3-.6-1-.8l-.8-.3c-1.3-.4-2-.9-2-2 0-1.2 1-2.1 2.3-2.1 1.1 0 1.9.5 2.2 1.4l-1.4.8c-.2-.5-.5-.7-.8-.7-.4 0-.7.3-.7.6 0 .4.3.6.8.8l.8.3c1.5.5 2.2 1 2.2 2.1 0 1.4-1.1 2.3-2.7 2.3z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // PHP
  if (normalized.includes('php')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          fill="#777BB4"
        />
        <path
          d="M6.5 15h1.6l.6-2.5h1.2c1.4 0 2.2-.7 2.4-1.8.2-1-.4-1.7-1.7-1.7H7.7L6.5 15zm2.5-3.6l.3-1.4h.9c.5 0 .8.2.7.6-.1.4-.4.8-.9.8H9zm4.2 3.6h1.5l.6-2.5h.9c.7 0 1.2-.2 1.4-.6.2-.4.1-.9-.2-1.2l-.1-.2c.5-.3.8-.8 1-1.3.2-1-.4-1.7-1.7-1.7h-2.9L13.2 15zm2.5-3.6l.3-1.4h.8c.5 0 .7.2.6.6-.1.4-.4.8-.8.8h-.6z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // C# (Unity)
  if (normalized.includes('c#') || normalized.includes('csharp')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"
          fill="#9B4993"
        />
        <path
          d="M10.8 14.8c-.8.8-1.8 1.2-2.9 1.2-2.3 0-3.9-1.8-3.9-4s1.6-4 3.9-4c1.1 0 2.1.4 2.9 1.2l-1.2 1.3c-.5-.5-1-.7-1.7-.7-1.2 0-2.1.9-2.1 2.2s.9 2.2 2.1 2.2c.7 0 1.2-.2 1.7-.7l1.2 1.3zm3.7-4.8h-1.2v6h1.2v-6zm3.5 0h-1.2v6h1.2v-6zm-4.7 1.8h3.8v-1.1h-3.8v1.1zm0 2.4h3.8v-1.1h-3.8v1.1z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Laravel
  if (normalized.includes('laravel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M20.8 7.3l-8.4-4.8c-.3-.2-.7-.2-1 0L3 7.3c-.3.2-.5.5-.5.8v9.8c0 .3.2.7.5.8l8.4 4.8c.3.2.7.2 1 0l8.4-4.8c.3-.2.5-.5.5-.8V8.1c0-.3-.2-.6-.5-.8zm-8.9 13.5l-7.3-4.2V8.7l7.3 4.2v7.9zm1-8.5L5.6 8.1 12 4.4l6.4 3.7-5.5 4.2zm6.3 4.3l-5.3 3.1v-7.9l5.3-3.1v7.9z"
          fill="#FF2D20"
        />
      </svg>
    );
  }

  // Livewire
  if (normalized.includes('livewire')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M15.4 3.8L6.2 13h5.6l-3.2 7.2 9.2-9.2h-5.6l3.2-7.2z"
          fill="#FB70A9"
        />
      </svg>
    );
  }

  // React
  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.6" fill="#61DAFB" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // Vite
  if (normalized.includes('vite')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M20.2 3.8l-8 14.8c-.1.2-.4.2-.5 0L3.8 3.8c-.2-.3 0-.6.3-.6h15.8c.3 0 .5.3.3.6z"
          fill="url(#vite-gradient)"
        />
        <path
          d="M13.6 3.2l-3.9 7.6 2.4-.4-1.9 4.8 4.4-6.8-2.3.4 1.3-5.6z"
          fill="#FFD43B"
        />
        <defs>
          <linearGradient id="vite-gradient" x1="3" y1="3" x2="20" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Unity 3D
  if (normalized.includes('unity')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.4 12l-3.9-3.9 1.4-1.4 3.9 3.9V6.1h2v4.5l3.9-3.9 1.4 1.4L15.2 12l3.9 3.9-1.4 1.4-3.9-3.9v4.5h-2v-4.5l-3.9 3.9-1.4-1.4 3.9-3.9zM12 2L2 7.8v11.5L12 22l10-2.7V7.8L12 2zm8 16.2l-8 2.1-8-2.1V8.9l8-4.6 8 4.6v9.3z" />
      </svg>
    );
  }

  // Three.js
  if (normalized.includes('three')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 21l9-18 9 18H3zm3.5-2h11L12 7l-5.5 12zM12 10.5L14.7 17H9.3L12 10.5z" />
      </svg>
    );
  }

  // Blender
  if (normalized.includes('blender')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12.5 9.5c0 1.9-1.6 3.5-3.5 3.5S5.5 11.4 5.5 9.5 7.1 6 9 6s3.5 1.6 3.5 3.5z"
          fill="#EA7600"
        />
        <circle cx="9" cy="9.5" r="1.6" fill="#255799" />
        <path
          d="M9 14.5c4.1 0 7.5-2.7 7.5-6s-3.4-6-7.5-6C6.7 2.5 4.8 3.6 3.5 5.2l5.7 3.3c.3-.1.6-.2 1-.2 1.8 0 3.3 1.3 3.3 3s-1.5 3-3.3 3c-.4 0-.8-.1-1.1-.3l-5.4 3.2C5 18.6 6.8 19.5 9 19.5c5.5 0 10-3.6 10-8H22c0 6.1-5.8 11-13 11-3.6 0-6.9-1.2-9-3.2l3-3.6c1.6 1.4 3.7 2.3 6 2.3z"
          fill="#F5792A"
        />
      </svg>
    );
  }

  // Vuforia
  if (normalized.includes('vuforia')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4l9 16L21 4h-4.5L12 13.5 7.5 4H3zm6.5 0L12 8.5 14.5 4h3L12 11 6.5 4h3z" />
      </svg>
    );
  }

  // MediaPipe
  if (normalized.includes('mediapipe')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" stroke="#00C4B4" strokeWidth="2" />
        <circle cx="12" cy="7" r="2" fill="#00C4B4" />
        <circle cx="7.5" cy="14" r="2" fill="#00C4B4" />
        <circle cx="16.5" cy="14" r="2" fill="#00C4B4" />
      </svg>
    );
  }

  // OpenCV
  if (normalized.includes('opencv')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="4.5" stroke="#EA212D" strokeWidth="2" />
        <circle cx="7" cy="16" r="4.5" stroke="#48B749" strokeWidth="2" />
        <circle cx="17" cy="16" r="4.5" stroke="#255799" strokeWidth="2" />
      </svg>
    );
  }

  // MySQL
  if (normalized.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M4.5 14.5c2.5-4 8-8 15-5.5-2 .5-4.5 1.5-6 3.5 3-.5 6 0 7.5 1.5-4.5 2-9 1-12 5-1-1.5-3-2.5-4.5-4.5z"
          fill="#00758F"
        />
        <path
          d="M12.5 18c1.5-.5 3-1.5 4-2.8-2 0-3.5 1-4 2.8z"
          fill="#F29111"
        />
      </svg>
    );
  }

  // PostgreSQL
  if (normalized.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C7 2 3.5 5.5 3.5 10c0 4 2.5 7.5 6 9v3h5v-3c3.5-1.5 6-5 6-9 0-4.5-3.5-8-8.5-8zm-2 13c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5zm4 0c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5z"
          fill="#336791"
        />
      </svg>
    );
  }

  // SQLite
  if (normalized.includes('sqlite')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="3" fill="#003B57" />
        <path d="M7 10h10M7 14h6" stroke="#00ADEF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Redis
  if (normalized.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z" fill="#DC382D" />
        <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" fill="#FFFFFF" opacity="0.3" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M22.5 11.5c-.3-.2-1.5-.7-2.7-.2-.2-.8-.7-1.4-1.4-1.8l-.6-.4-.4.6c-.6 1-.6 2.2-.1 3.2-1.2.6-3 .6-4.3 0H2c.4 3 2.6 6.5 7.5 6.5 6.5 0 11.5-4 13-7.9z"
          fill="#2496ED"
        />
        <rect x="3" y="10" width="2" height="1.8" rx=".3" fill="#2496ED" />
        <rect x="5.5" y="10" width="2" height="1.8" rx=".3" fill="#2496ED" />
        <rect x="8" y="10" width="2" height="1.8" rx=".3" fill="#2496ED" />
        <rect x="5.5" y="7.7" width="2" height="1.8" rx=".3" fill="#2496ED" />
        <rect x="8" y="7.7" width="2" height="1.8" rx=".3" fill="#2496ED" />
        <rect x="10.5" y="7.7" width="2" height="1.8" rx=".3" fill="#2496ED" />
        <rect x="10.5" y="10" width="2" height="1.8" rx=".3" fill="#2496ED" />
      </svg>
    );
  }

  // Git / GitHub
  if (normalized.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M21.6 10.9L13.1 2.4c-.5-.5-1.4-.5-1.9 0l-2 2 2.5 2.5c.6-.2 1.3 0 1.7.5.5.5.6 1.2.4 1.8l2.4 2.4c.6-.2 1.3 0 1.8.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.4-.4-2.1l-2.3-2.3v5.4c.2.2.3.5.3.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.8.5-1.1V9.7c-.3-.3-.5-.7-.5-1.1 0-.6.3-1.1.8-1.3L8.3 4.8 2.4 10.7c-.5.5-.5 1.4 0 1.9l8.5 8.5c.5.5 1.4.5 1.9 0l8.8-8.8c.5-.5.5-1.4 0-1.9z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // HTML5 / CSS3
  if (normalized.includes('html') || normalized.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4zm13.6 5h-9l.2 3h8.6l-.6 6.5-4.8 1.4-4.8-1.4-.3-3.5h2.5l.2 1.8 2.4.7 2.4-.7.3-3.3H7.4L6.8 5h11l-.2 2z" fill="#E34F26" />
      </svg>
    );
  }

  // Cisco
  if (normalized.includes('cisco')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#049FD9">
        <rect x="2" y="11" width="2" height="6" rx="1" />
        <rect x="6" y="8" width="2" height="9" rx="1" />
        <rect x="10" y="5" width="2" height="12" rx="1" />
        <rect x="14" y="8" width="2" height="9" rx="1" />
        <rect x="18" y="11" width="2" height="6" rx="1" />
      </svg>
    );
  }

  // Google / Gemini
  if (normalized.includes('google') || normalized.includes('gemini')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          fill="#EA4335"
        />
      </svg>
    );
  }

  // Figma
  if (normalized.includes('figma')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
        <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
        <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
        <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
        <circle cx="16" cy="12" r="4" fill="#1ABCFE" />
      </svg>
    );
  }

  // Xendit
  if (normalized.includes('xendit')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#0052CC">
        <path d="M4 5h5l3 5-3 5H4l3-5-3-5zm11 0h5l-3 5 3 5h-5l3-5-3-5z" />
      </svg>
    );
  }

  // BNSP / LSP
  if (normalized.includes('bnsp') || normalized.includes('lsp') || normalized.includes('data analyst')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4z" fill="#D97706" opacity="0.2" />
        <path d="M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4z" stroke="#F59E0B" strokeWidth="2" />
        <path d="M9 12l2 2 4-4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // VS Code
  if (normalized.includes('vs code') || normalized.includes('vscode')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M17.5 2.5l4 2.5c.3.2.5.5.5.9v12.2c0 .4-.2.7-.5.9l-4 2.5c-.5.3-1.1.1-1.3-.4l-5.8-5.3-4.5 3.5c-.3.2-.7.2-1 0l-2.5-1.9c-.3-.2-.4-.6-.2-.9l4.5-4.4L2.4 7.6c-.2-.3-.1-.7.2-.9l2.5-1.9c.3-.2.7-.2 1 0l4.5 3.5 5.8-5.3c.3-.3.8-.4 1.1-.4z"
          fill="#007ACC"
        />
      </svg>
    );
  }

  // TensorFlow / Deep Learning
  if (normalized.includes('tensorflow') || normalized.includes('deep learning')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8 4.5v11L12 22l-8-4.5v-11L12 2z" fill="#FF6F00" />
        <path d="M12 7l4 2.3v4.6L12 16.2l-4-2.3V9.3L12 7z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Scikit-Learn / Machine Learning
  if (normalized.includes('scikit') || normalized.includes('machine learning')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="9" r="6" fill="#F89939" opacity="0.8" />
        <circle cx="15" cy="15" r="6" fill="#3499CD" opacity="0.8" />
      </svg>
    );
  }

  // Spatie / Security / RBAC
  if (normalized.includes('spatie') || normalized.includes('permission') || normalized.includes('rbac') || normalized.includes('cyber')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }

  // Webhook / Event
  if (normalized.includes('webhook') || normalized.includes('event')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="18" r="3" />
        <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
        <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
      </svg>
    );
  }

  // Data Visualization / Chart
  if (normalized.includes('visual') || normalized.includes('chart')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    );
  }

  // REST API / Default
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
