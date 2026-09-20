import React from "react";

export interface TechIconProps {
  name: string;
  className?: string;
  colored?: boolean;
}

export function TypeScriptIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="32" fill="#3178C6" />
      <path
        d="M150.5 200.5v27.6c4.5 2.3 9.8 4 15.9 5.2 6.1 1.2 12.6 1.7 19.4 1.7 6.6 0 12.9-.6 18.9-1.9 6-1.3 11.2-3.4 15.7-6.3 4.5-2.9 8-6.8 10.7-11.7 2.6-4.9 3.9-10.9 3.9-18.2 0-5.2-1-9.7-2.9-13.5-1.9-3.8-4.5-7.2-7.7-10.1-3.2-3-7-5.6-11.2-8-4.2-2.4-8.7-4.6-13.4-6.7-3.5-1.6-6.7-3.1-9.5-4.5-2.9-1.5-5.3-3-7.3-4.5-2-1.5-3.6-3.1-4.7-4.9-1.1-1.7-1.7-3.7-1.7-5.9 0-2 .5-3.8 1.5-5.5 1-1.6 2.4-3.1 4.2-4.3 1.8-1.2 3.9-2.1 6.4-2.8 2.5-.6 5.2-1 8.3-1 2.2 0 4.5.2 6.9.5 2.4.3 4.8.9 7.2 1.7 2.4.8 4.7 1.8 6.9 3 2.2 1.2 4.1 2.6 5.8 4.3v-25.6c-4-1.6-8.4-2.8-13.2-3.6-4.8-.8-10.3-1.1-16.4-1.1-6.6 0-12.8.7-18.7 2.1-5.9 1.4-11.1 3.6-15.6 6.5-4.5 3-8 6.9-10.7 11.7-2.6 4.8-3.9 10.6-3.9 17.5 0 8.7 2.6 16.1 7.7 22.2 5.1 6.1 12.7 11.3 22.7 15.4 4 1.6 7.7 3.2 11 4.8 3.4 1.6 6.3 3.2 8.8 5 2.5 1.7 4.5 3.6 5.9 5.7 1.4 2.1 2.1 4.4 2.1 7 0 1.9-.5 3.6-1.4 5.2-.9 1.6-2.3 3-4 4.1-1.7 1.2-3.9 2.1-6.4 2.7-2.5.6-5.4 1-8.6 1-5.6 0-11.2-1-16.6-3-5.4-2-10.3-5.1-14.7-9.2ZM103.5 119.6h30v-23.4h-82v23.4h30V232h22V119.6Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function JavaScriptIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="32" fill="#F7DF1E" />
      <path
        d="M67.3 214.3c5.3 8.8 13.5 14.5 24.3 14.5 14.1 0 22.9-7.1 22.9-27.9v-76.3H95.2v75.9c0 8.8-3.5 12.8-9.4 12.8-5.3 0-8.5-3.3-11.1-8.5l-7.4 9.5ZM139.5 220.8c8.8 5.6 20.3 9.4 32.1 9.4 18.2 0 30-8.8 30-22.9 0-13.8-9.7-19.4-23.8-25.3l-5.6-2.4c-9.1-3.8-13.8-7.9-13.8-14.4 0-6.8 5.3-11.8 14.7-11.8 8.8 0 16.5 3.5 21.8 7.9l6.5-11.8c-6.8-5-16.2-7.9-26.8-7.9-17.6 0-28.5 9.7-28.5 22.9 0 14.1 9.4 19.7 22.1 25l5.3 2.4c9.7 4.1 15.3 8.2 15.3 15.3 0 7.9-7.1 12.9-16.8 12.9-11.5 0-20.9-4.7-27.4-11.2l-5.3 11.9Z"
        fill="#000000"
      />
    </svg>
  );
}

export function PythonIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 255" className={className} fill="none">
      <defs>
        <linearGradient id="py-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="py-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE873" />
          <stop offset="100%" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
      <path
        d="M126.9.1C62.1.1 66.1 28.2 66.1 28.2l.1 29.1h61.9v8.7H41.6S.1 61.4.1 126.8c0 65.4 36.2 63.1 36.2 63.1h21.6v-30.4s-1.2-36.2 35.6-36.2h61.4s34.5.6 34.5-33.3V34S194.7.1 126.9.1ZM92.8 19.7a11.1 11.1 0 1 1 0 22.3 11.1 11.1 0 0 1 0-22.3Z"
        fill="url(#py-blue)"
      />
      <path
        d="M128.8 254.1c64.8 0 60.8-28.1 60.8-28.1l-.1-29.1h-61.9v-8.7h86.4s41.5 4.7 41.5-60.7c0-65.4-36.2-63.1-36.2-63.1h-21.6v30.4s-1.2 36.2-35.6 36.2h-61.4s-34.5-.6-34.5 33.3v56s-5.2 33.9 62.5 33.9Zm34.1-19.6a11.1 11.1 0 1 1 0-22.3 11.1 11.1 0 0 1 0 22.3Z"
        fill="url(#py-yellow)"
      />
    </svg>
  );
}

export function ReactIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 228" className={className} fill="none">
      <circle cx="128" cy="114" r="20" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="12" fill="none">
        <ellipse cx="128" cy="114" rx="122" ry="46" />
        <ellipse cx="128" cy="114" rx="122" ry="46" transform="rotate(60 128 114)" />
        <ellipse cx="128" cy="114" rx="122" ry="46" transform="rotate(120 128 114)" />
      </g>
    </svg>
  );
}

export function NextJSIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <circle cx="128" cy="128" r="128" fill="#000000" />
      <path
        d="M212.6 193.8L105 52.2H82v151.7h18.5V79.6l98.3 130.6a128.9 128.9 0 0 0 13.9-16.4Z"
        fill="#FFFFFF"
      />
      <rect x="163.8" y="52.2" width="18.4" height="151.7" fill="#FFFFFF" />
    </svg>
  );
}

export function TailwindCSSIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 154" className={className} fill="none">
      <path
        d="M128 0Q84.3 0 64 42.7q28.8-21.4 60.8-10.7 10.5 3.5 26.4 19.7Q164.9 65.7 224 82.7q43.7 0 64-42.7-28.8 21.3-60.8 10.7-10.5-3.5-18.1-11.2C195.4 25.5 179.1 8.5 136.3 0ZM32 82.7Q-11.7 82.7-32 125.3q28.8-21.3 60.8-10.7 10.5 3.6 26.4 19.7Q68.9 148.4 128 165.3q43.7 0 64-42.6Q163.2 144 131.2 133.3q-10.5-3.5-26.4-19.7Q91.1 99.6 32 82.7Z"
        fill="#06B6D4"
      />
    </svg>
  );
}

export function ShadcnUIIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none">
      <rect width="256" height="256" rx="48" fill="#09090B" />
      <path
        d="M208 128l-80 80M192 40L40 192"
        stroke="#F4F4F5"
        strokeWidth="24"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RadixUIIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 25" className={className} fill="none">
      <path
        d="M6.5 6.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm6 0h4.5a4.5 4.5 0 0 1 0 9H12.5v-9Zm0 11h4.5a4.5 4.5 0 0 1 0 9H12.5v-9Z"
        fill="#161618"
      />
    </svg>
  );
}

export function BaseUIIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="9" stroke="#007FFF" strokeWidth="3" />
      <circle cx="12" cy="12" r="3.5" fill="#007FFF" />
    </svg>
  );
}

export function FramerMotionIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 384" className={className} fill="none">
      <path d="M0 0h256v128H128z" fill="#0055FF" />
      <path d="M0 128h128l128 128H128z" fill="#FF0055" />
      <path d="M0 256l128 128V256z" fill="#9900FF" />
    </svg>
  );
}

export function ExpoIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2L2 19.5h4.5L12 9.5l5.5 10H22L12 2z"
        fill="#4630EB"
      />
    </svg>
  );
}

export function TanStackIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <defs>
        <linearGradient id="tanstack-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4154" />
          <stop offset="50%" stopColor="#FF8F00" />
          <stop offset="100%" stopColor="#00C49F" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#tanstack-grad)" />
      <path d="M7 10h10M12 10v7" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function GSAPIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#0E100F" />
      <path
        d="M12 2.5L3 7v10l9 4.5 9-4.5V7L12 2.5zm0 2.2l6.8 3.4-6.8 3.4L5.2 8.1 12 4.7zM4.8 9.8l6.4 3.2v6.6l-6.4-3.2V9.8zm8 9.8V13l6.4-3.2v6.6l-6.4 3.2z"
        fill="#88CE02"
      />
    </svg>
  );
}

export function NodeJSIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 289" className={className} fill="none">
      <path
        d="M128 288.5c-4 0-7.7-1.1-11.1-2.9l-35.2-21c-5.3-2.9-2.7-4-1.1-4.5 7.2-2.4 8.5-2.9 15.9-7.2.8-.5 1.9-.3 2.7.3l27 16.2c1.1.5 2.4.5 3.2 0l105.7-61.2c1.1-.5 1.6-1.6 1.6-2.9V83.3c0-1.3-.5-2.4-1.6-2.9L129.6 19.2c-1.1-.5-2.4-.5-3.2 0L20.7 80.4c-1.1.5-1.6 1.9-1.6 2.9v122.2c0 1.1.5 2.4 1.6 2.9l28.9 16.7c15.6 8 25.4-1.3 25.4-10.6V93.7c0-1.6 1.3-3.2 3.2-3.2h13.5c1.6 0 3.2 1.3 3.2 3.2v120.8c0 21-11.4 33.1-31.3 33.1-6.1 0-10.9 0-24.4-6.6l-27.8-15.9C4.2 220.6 0 213.2 0 205.2V83.1C0 75.1 4.2 67.7 11.4 63.7L117.1 2.5c6.6-3.7 15.6-3.7 22.3 0l105.7 61c7.2 4 11.4 11.4 11.4 19.3v122.2c0 8-4.2 15.4-11.4 19.3L139.4 285.5c-3.4 1.9-7.4 3-11.4 3Z"
        fill="#5FA04E"
      />
    </svg>
  );
}

export function BunIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 3C7.5 3 3.5 6.5 3.5 11c0 3.5 2.5 6.5 6 7.5-.2.8-.8 1.8-1.5 2.5 1.5 0 3.5-.8 4.5-2 1 .5 2 .7 3 .5 3.5-.5 6-3.5 6-7 0-4.5-4.5-9.5-9.5-9.5z"
        fill="#FBF0DF"
        stroke="#443224"
        strokeWidth="1.5"
      />
      <circle cx="9" cy="11" r="1.2" fill="#443224" />
      <circle cx="15" cy="11" r="1.2" fill="#443224" />
      <ellipse cx="7.5" cy="13" rx="1.2" ry="0.8" fill="#FCA5A5" />
      <ellipse cx="16.5" cy="13" rx="1.2" ry="0.8" fill="#FCA5A5" />
      <path d="M10.5 13.5c.8.6 2.2.6 3 0" stroke="#443224" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function PostgreSQLIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 264" className={className} fill="none">
      <path
        d="M255 158.1c-1.5-4.6-5.5-7.9-10.7-8.7-2.5-.4-5.3-.2-8.6.5-5.8 1.2-10.1 1.6-13.2 1.7 11.8-20 21.5-42.8 27-64.2 9-34.7 4.2-50.5-1.4-57.6C233.2 10.8 211.6.7 185.6.1c-13.7-.3-25.8 2.6-33.8 5.7-6.6-3-20.7-8.4-38.1-7.4C95.4-.4 78.6 7 65.3 20.8 52.6 33.8 44.1 52.4 40.5 75.6c-1.7 11-2.1 21-1.9 29.5-.4 10.1 0 22.3 2.5 36.3 3.1 17.7 8.6 32.4 16.3 43.6 5.9 8.5 13 14.7 20.7 18.2-1.1 9.2-1.6 19.2.2 28.9 1.8 10.1 6.4 19.1 13.6 26.7 12.6 13.2 32.2 20.2 56.9 20.2 6.1 0 12.6-.4 19.5-1.4 17.7-2.3 32.5-8.9 42.7-19.2 9.4-9.5 14.7-21.6 15.8-36.1.4-5.7.1-11.4-.3-16.2 9.9-9 18.5-20.2 25.2-32.6 7.7-14.3 9.6-25.4 7.3-32.5Z"
        fill="#4169E1"
      />
    </svg>
  );
}

export function MongoDBIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 1.5C11.6 4.8 8.5 8.2 8.5 12.5c0 3.2 2.1 6 3.8 7.3 1.7-1.3 3.8-4.1 3.8-7.3C16.1 8.2 13 4.8 12 1.5Z"
        fill="#47A248"
      />
      <path
        d="M12 1.5v18.3c.4-.3.8-.7 1.1-1.1.2-.2.3-.5.4-.7.8-1.5 1.2-3.3 1.2-5.5 0-4.3-3.1-7.7-2.7-11Z"
        fill="#499D4A"
      />
      <path
        d="M12 19.8c-.3.4-.6.8-1 1.1v2.1c.3.5.7.9 1 .9s.7-.4 1-.9v-2.1c-.4-.3-.7-.7-1-1.1Z"
        fill="#3FA037"
      />
    </svg>
  );
}

export function RedisIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 220" className={className} fill="none">
      <path
        d="M246 143.2c-13.7 7.1-84.4 36.2-99.5 44.1-15.1 7.8-23.4 7.8-35.3 2.1-11.9-5.7-87.2-36.1-100.8-42.6-13.6-6.5-13.8-11-.5-16.2 13.3-5.2 88.2-34.6 104.1-40.4 15.8-5.8 21.3-6 35.5-.6 14.2 5.3 82.9 32.6 94.4 36.6 11.6 4 15.8 10 2.1 17Z"
        fill="#DC382D"
      />
    </svg>
  );
}

export function NginxIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm-1.5 16.5H8.3V7.5h2.2l5 6.8V7.5h2.2v9h-2.2l-5-6.8v6.8z"
        fill="#009639"
      />
    </svg>
  );
}

export function ClaudeIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        fill="#D97706"
      />
    </svg>
  );
}

export function GeminiIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <defs>
        <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1BA1E3" />
          <stop offset="50%" stopColor="#5B52A3" />
          <stop offset="100%" stopColor="#DE5A9A" />
        </linearGradient>
      </defs>
      <path
        d="M12 0C12 6.6 6.6 12 0 12c6.6 0 12 5.4 12 12 0-6.6 5.4-12 12-12-6.6 0-12-5.4-12-12Z"
        fill="url(#gemini-grad)"
      />
    </svg>
  );
}

export function OpenAIIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073ZM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494Z"
        fill="#10A37F"
      />
    </svg>
  );
}

export function GitIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.126 0L8.808 2.585l3.548 3.548a2.38 2.38 0 0 1 2.99 2.99l3.414 3.414a2.38 2.38 0 0 1 2.822 2.844l1.964 1.964a1.5 1.5 0 0 0 0-2.126l.001-.001-.001-4.288ZM1.454 13.07l10.479 10.478a1.5 1.5 0 0 0 2.126 0l2.133-2.133-3.548-3.548a2.38 2.38 0 0 1-2.99-2.99L6.24 11.463a2.38 2.38 0 0 1-2.822-2.844L1.454 6.655a1.5 1.5 0 0 0 0 2.126l-.001.001.001 4.288Z"
        fill="#F05032"
      />
    </svg>
  );
}

export function GitHubIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
        fill="#24292F"
      />
    </svg>
  );
}

export function DockerIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 185" className={className} fill="none">
      <path
        d="M250.7 70.5c-5.3-3.6-17.6-5-27-3.1-1.3-9.1-6.4-17.1-15.6-24.3l-5.3-3.6-3.6 5.3c-4.6 7-6.9 16.6-6.2 25.8a34 34 0 0 0 2.4 10.7c-3.5 1.9-10.3 4.5-19.4 4.3H.3l-.1.6c-1.5 8.6-1.4 35.4 16 55.9 13.3 15.7 33.1 23.6 59 23.6 56.2 0 97.8-25.9 117.3-73 7.7.1 24.2.1 32.7-16.2.2-.4 3-5.3 3.5-6.9ZM142.7 51.1h-23.4v22.3h23.4V51.1Zm0-28h-23.4v22.3h23.4V23Zm-28.7 28H90.6v22.3h23.4V51.1Zm-28.7 0H62v22.3h23.4V51.1ZM56.7 79.1H33.3v22.3h23.4V79.1Zm28.7-28H62v22.3h23.4V51.1Zm28.6 0H90.6v22.3h23.4V51.1Zm28.7 0h-23.4v22.3h23.4V51.1Zm28.7 0h-23.4v22.3h23.4V51.1Z"
        fill="#2496ED"
      />
    </svg>
  );
}

export function VercelIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 222" className={className} fill="none">
      <path d="M128 0 256 221.7H0z" fill="#000000" />
    </svg>
  );
}

export function FigmaIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M8 2h4v5H8a2.5 2.5 0 1 1 0-5z" fill="#F24E1E" />
      <path d="M12 2h4a2.5 2.5 0 1 1 0 5h-4V2z" fill="#FF7262" />
      <path d="M8 7h4v5H8a2.5 2.5 0 1 1 0-5z" fill="#A259FF" />
      <path d="M12 7h4a2.5 2.5 0 1 1 0 5h-4V7z" fill="#1ABCFE" />
      <path d="M8 12h4v2.5a2.5 2.5 0 1 1-4 0V12z" fill="#0ACF83" />
    </svg>
  );
}

export function PhotoshopIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="4" fill="#001E36" />
      <path
        d="M8.5 7h4a3 3 0 0 1 0 6H10v4H8.5V7zm1.5 4.5h2.5a1.5 1.5 0 0 0 0-3H10v3zM15 11.5c.5-.3 1.2-.5 2-.5 1.2 0 2 .5 2 1.5 0 .8-.5 1.2-1.5 1.5l-.8.2c-.8.2-1.2.5-1.2 1 0 .6.5 1 1.5 1 .6 0 1.2-.2 1.7-.5v1.3c-.6.3-1.2.4-1.8.4-1.8 0-2.8-.8-2.8-2 0-.9.6-1.5 1.7-1.8l.8-.2c.6-.2.9-.4.9-.8 0-.5-.4-.8-1.1-.8-.5 0-1 .1-1.5.4v-1.5z"
        fill="#31A8FF"
      />
    </svg>
  );
}

export function PrismaIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M18.7 19.3L13.1 3.2c-.4-1.1-1.8-1.1-2.2 0L5.3 19.3c-.4 1.1.5 2.2 1.6 2.2h10.2c1.1 0 2-1.1 1.6-2.2zM12 5.8l4.4 12.7H7.6L12 5.8z"
        fill="#2D3748"
      />
      <path d="M12 5.8l4.4 12.7H12V5.8z" fill="#5A67D8" />
    </svg>
  );
}

export function BetterAuthIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z"
        fill="#F5A623"
      />
      <path
        d="M12 4.2L5.8 7.3v4.7c0 4.3 2.7 8.4 6.2 9.4 3.5-1 6.2-5.1 6.2-9.4V7.3L12 4.2z"
        fill="#000000"
      />
      <path
        d="M10.5 12.5l-2-2-1.2 1.2 3.2 3.2 5.5-5.5-1.2-1.2-4.3 4.3z"
        fill="#F5A623"
      />
    </svg>
  );
}

export function AWSIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M18.8 14.5c-2.3 1.7-5.5 2.6-8.4 2.6-4.1 0-7.8-1.5-10.4-4.1-.2-.2 0-.5.2-.4 3 1.7 6.6 2.7 10.2 2.7 2.6 0 5.5-.6 8.1-1.9.4-.2.7.2.5.5v.1z"
        fill="#FF9900"
      />
      <path
        d="M19.9 13.5c-.3-.4-1.9-.2-2.8-.1-.3 0-.3-.2-.1-.4 1.4-.9 3.6-.6 3.9-.2.3.4-.1 2.6-1.4 3.6-.2.2-.4.1-.3-.1.3-.8.7-2.4.7-2.8z"
        fill="#FF9900"
      />
      <path
        d="M8.2 6.8c0-.6.4-1.1 1.2-1.1.7 0 1.2.4 1.4.9l1.8-.9c-.6-1.1-1.7-1.8-3.2-1.8-2.2 0-3.5 1.5-3.5 3.6v4.6h2.3V6.8zm7.6-2.9c-1.5 0-2.6.7-3.2 1.8l1.8.9c.2-.5.7-.9 1.4-.9.8 0 1.2.5 1.2 1.1v5.3h2.3V6.5c0-2.1-1.3-3.6-3.5-3.6z"
        fill="#232F3E"
      />
    </svg>
  );
}

export function TipTapIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#22C55E" />
      <path
        d="M7 8h10M12 8v9M9.5 17h5"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SocketIOIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="11" fill="#010101" />
      <path
        d="M12.5 3L6 13h5.5l-1 8 7.5-10h-5.5l1-8z"
        fill="#FFE600"
      />
    </svg>
  );
}

export function ArcjetIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2L3 6v6c0 6 4.5 10.5 9 12 4.5-1.5 9-6 9-12V6l-9-4z"
        fill="#0284C7"
      />
      <path
        d="M13 6l-5 8h4l-1 5 5-8h-4l1-5z"
        fill="#FACC15"
      />
    </svg>
  );
}

export function StripeIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#635BFF" />
      <path
        d="M13.5 10.2c0-.7-.6-1-1.6-1-1.4 0-2.8.4-3.7 1V7.9c1-.4 2.4-.7 3.8-.7 3.2 0 4.9 1.5 4.9 4.1v5.5h-3.4v-1c-.9.7-2.1 1.2-3.4 1.2-2.2 0-3.7-1.3-3.7-3.2 0-2.3 2-3.2 4.7-3.2h2.4v-.4zm-2.4 4.5c.8 0 1.6-.3 2.4-.9v-1.6h-2.1c-1.3 0-2.1.5-2.1 1.4 0 .7.6 1.1 1.8 1.1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ExpressIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path
        d="M6 8h4v1.8H7.8v2.4h2v1.8h-2v2.2H10V18H6V8zm6.5 10l2.5-4.5L12.5 9h2.2l1.4 2.7L17.5 9h2.2l-2.5 4.5 2.5 4.5h-2.2L16 15.3l-1.4 2.7h-2.1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function RazorpayIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M13.5 2.5L7 14h5.2l-2.2 7.5L19 9.5h-5.5L15 2.5h-1.5z"
        fill="#0C8CE9"
      />
    </svg>
  );
}

export function ThreeJSIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2L2 19.5h20L12 2zm0 4.5l6.5 11.5H5.5L12 6.5z"
        fill="#000000"
      />
      <circle cx="12" cy="13" r="2.5" fill="#000000" />
    </svg>
  );
}

export function LenisIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#111111" />
      <path
        d="M7 16c2.5 0 3.5-8 6-8s3.5 8 6 8"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ZustandIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="13" r="8" fill="#443E38" />
      <circle cx="6" cy="7" r="3" fill="#443E38" />
      <circle cx="18" cy="7" r="3" fill="#443E38" />
      <circle cx="6" cy="7" r="1.5" fill="#E6A23C" />
      <circle cx="18" cy="7" r="1.5" fill="#E6A23C" />
      <ellipse cx="12" cy="14.5" rx="4.5" ry="3.5" fill="#E6A23C" />
      <circle cx="9.5" cy="11.5" r="1" fill="#FFFFFF" />
      <circle cx="14.5" cy="11.5" r="1" fill="#FFFFFF" />
      <ellipse cx="12" cy="13.5" rx="1.5" ry="1" fill="#000000" />
    </svg>
  );
}

export function ZodIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#3E67B1" />
      <path
        d="M7 8h10L9 16h8"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RechartsIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect x="3" y="12" width="4" height="8" rx="1" fill="#22B5BF" />
      <rect x="10" y="7" width="4" height="13" rx="1" fill="#8884D8" />
      <rect x="17" y="3" width="4" height="17" rx="1" fill="#82CA9D" />
    </svg>
  );
}

export function UpstashIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#00E9A3" />
      <path
        d="M6 8l6-4 6 4v8l-6 4-6-4V8z"
        fill="#000000"
      />
    </svg>
  );
}

export function GoogleIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
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

export function DndKitIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="8" cy="7" r="2" fill="#E11D48" />
      <circle cx="16" cy="7" r="2" fill="#E11D48" />
      <circle cx="8" cy="12" r="2" fill="#E11D48" />
      <circle cx="16" cy="12" r="2" fill="#E11D48" />
      <circle cx="8" cy="17" r="2" fill="#E11D48" />
      <circle cx="16" cy="17" r="2" fill="#E11D48" />
    </svg>
  );
}

export function NodemailerIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#22B5BF" />
      <path
        d="M4 7l8 6 8-6M4 7h16v10H4V7z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ViteIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M21.5 3.5L12.7 21a.8.8 0 0 1-1.4 0L2.5 3.5a.8.8 0 0 1 .9-1.1l8.6 1.8 8.6-1.8a.8.8 0 0 1 .9 1.1z"
        fill="#BD34FE"
      />
      <path
        d="M13.2 4l-4.5 9h3.6l-1.8 6 5.8-8.5h-3.6l2.7-6.5h-2.2z"
        fill="#FFD62E"
      />
    </svg>
  );
}

export function SCSSIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#CC6699" />
      <path
        d="M6 14.5c.8 1 2.2 1.5 3.5 1.5 2 0 3.2-1 3.2-2.3 0-2.6-5.5-1.5-5.5-4.5C7.2 7.7 8.5 7 10.2 7c1.3 0 2.4.4 3.2 1.2l-1 1.3c-.6-.6-1.4-.9-2.2-.9-1.1 0-1.8.5-1.8 1.2 0 2.3 5.5 1.3 5.5 4.5 0 1.8-1.5 2.7-3.4 2.7-1.6 0-3-.6-4-1.8l1.1-1.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function LucideIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#F56565" />
      <path
        d="M7 17L17 7M7 7h10v10"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReactHookFormIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z"
        fill="#EC5990"
      />
      <path
        d="M12 5.5l5 2.5v4.2c0 3.8-2.4 7.4-5 8.3-2.6-.9-5-4.5-5-8.3V8l5-2.5z"
        fill="#FFFFFF"
      />
      <path
        d="M12 8l3 1.5v2.5c0 2.3-1.4 4.4-3 5-1.6-.6-3-2.7-3-5V9.5L12 8z"
        fill="#EC5990"
      />
    </svg>
  );
}

export function DefaultCodeIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

// Tech Stack Icon Resolver
export function getTechIconComponent(name: string): React.ComponentType<{ className?: string }> {
  if (!name) return DefaultCodeIcon;
  const n = name.trim().toLowerCase();

  // TypeScript
  if (n === "typescript" || n === "ts") return TypeScriptIcon;

  // JavaScript
  if (n === "javascript" || n === "js") return JavaScriptIcon;

  // Python
  if (n === "python" || n === "py") return PythonIcon;

  // React
  if (n.startsWith("react") && !n.includes("hook form") && !n.includes("email") && !n.includes("table") && !n.includes("transition")) {
    return ReactIcon;
  }

  // Next.js
  if (n.startsWith("next") || n.includes("next.js") || n.includes("nextjs")) return NextJSIcon;

  // Tailwind CSS
  if (n.includes("tailwind")) return TailwindCSSIcon;

  // shadcn/ui
  if (n.includes("shadcn")) return ShadcnUIIcon;

  // Radix UI
  if (n.includes("radix")) return RadixUIIcon;

  // Base UI
  if (n.includes("base ui")) return BaseUIIcon;

  // Framer Motion / Motion
  if (n.includes("framer") || n === "motion") return FramerMotionIcon;

  // Expo
  if (n === "expo") return ExpoIcon;

  // TanStack
  if (n.includes("tanstack")) return TanStackIcon;

  // GSAP / ScrollTrigger
  if (n.includes("gsap") || n.includes("scrolltrigger")) return GSAPIcon;

  // Node.js
  if (n.startsWith("node") || n.includes("node.js")) return NodeJSIcon;

  // Bun
  if (n === "bun") return BunIcon;

  // PostgreSQL
  if (n.includes("postgres") || n.includes("psql")) return PostgreSQLIcon;

  // MongoDB
  if (n.includes("mongo")) return MongoDBIcon;

  // Redis / Upstash
  if (n.includes("upstash")) return UpstashIcon;
  if (n.includes("redis")) return RedisIcon;

  // Nginx
  if (n.includes("nginx")) return NginxIcon;

  // Claude / Anthropic
  if (n.includes("claude") || n.includes("anthropic")) return ClaudeIcon;

  // Gemini / Google Gemini
  if (n.includes("gemini")) return GeminiIcon;

  // OpenAI / ChatGPT
  if (n.includes("chatgpt") || n.includes("openai")) return OpenAIIcon;

  // Google / Google APIs
  if (n.includes("google")) return GoogleIcon;

  // Git
  if (n === "git") return GitIcon;

  // GitHub
  if (n.includes("github")) return GitHubIcon;

  // Docker
  if (n.includes("docker")) return DockerIcon;

  // Vercel
  if (n.includes("vercel")) return VercelIcon;

  // Figma
  if (n.includes("figma")) return FigmaIcon;

  // Photoshop
  if (n.includes("photoshop")) return PhotoshopIcon;

  // Prisma
  if (n.includes("prisma")) return PrismaIcon;

  // Better Auth
  if (n.includes("better auth") || n.includes("better-auth")) return BetterAuthIcon;

  // AWS / S3
  if (n.includes("aws") || n.includes("s3")) return AWSIcon;

  // TipTap
  if (n.includes("tiptap")) return TipTapIcon;

  // Socket.io
  if (n.includes("socket")) return SocketIOIcon;

  // Arcjet
  if (n.includes("arcjet")) return ArcjetIcon;

  // Stripe
  if (n.includes("stripe")) return StripeIcon;

  // Express
  if (n.includes("express")) return ExpressIcon;

  // Razorpay
  if (n.includes("razorpay")) return RazorpayIcon;

  // Three.js / Drei / Rapier / GLSL
  if (n.includes("three") || n.includes("drei") || n.includes("rapier") || n.includes("glsl")) return ThreeJSIcon;

  // Lenis
  if (n.includes("lenis")) return LenisIcon;

  // Zustand
  if (n.includes("zustand")) return ZustandIcon;

  // Zod
  if (n.includes("zod")) return ZodIcon;

  // Recharts
  if (n.includes("recharts") || n.includes("chart")) return RechartsIcon;

  // dnd kit / dnd-kit
  if (n.includes("dnd")) return DndKitIcon;

  // Nodemailer
  if (n.includes("nodemailer") || n.includes("email")) return NodemailerIcon;

  // Vite
  if (n.includes("vite")) return ViteIcon;

  // SCSS / Sass
  if (n.includes("scss") || n.includes("sass")) return SCSSIcon;

  // Lucide
  if (n.includes("lucide")) return LucideIcon;

  // React Hook Form
  if (n.includes("hook form")) return ReactHookFormIcon;

  return DefaultCodeIcon;
}

export function TechIcon({ name, className = "size-3.5 shrink-0" }: TechIconProps) {
  const IconComp = getTechIconComponent(name);
  return <IconComp className={className} />;
}

export function TechBadge({
  name,
  className = "",
  iconClassName = "size-3.5 shrink-0",
  size = "md",
}: {
  name: string;
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1.5 text-xs sm:text-[13px]",
    lg: "px-3.5 py-1.5 text-sm",
  }[size];

  return (
    <div
      className={`group/tech-badge inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 hover:bg-muted hover:border-foreground/30 font-mono text-foreground transition-all duration-200 select-none ${sizeClasses} ${className}`}
    >
      <span className="shrink-0 transition-all duration-200 grayscale opacity-70 group-hover/tech-badge:grayscale-0 group-hover/tech-badge:opacity-100">
        <TechIcon name={name} className={iconClassName} />
      </span>
      <span>{name}</span>
    </div>
  );
}
