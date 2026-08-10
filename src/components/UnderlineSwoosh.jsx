import React from 'react';

export default function UnderlineSwoosh({ className = '' }) {
  return (
    <svg
      className={`absolute -bottom-2.5 sm:-bottom-3.5 left-0 w-full h-3 sm:h-4 text-[#dc288b] pointer-events-none overflow-visible ${className}`}
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Hand-crafted organic curved swoosh path matching logo flourish */}
      <path
        d="M 2 15 C 50 3, 150 3, 198 12 C 145 7, 55 7, 2 15 Z"
        fill="currentColor"
      />
    </svg>
  );
}
