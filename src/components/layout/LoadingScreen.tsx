'use client';

import { useState, useEffect } from 'react';
import { useLoadingScreen } from '@/hooks/useLoadingScreen';

/* ─── Step label config ─── */
const STEPS = [
  { label: 'Assets',  threshold: 25,  activeClass: 'bg-neo-pink  border-neo-pink  text-black' },
  { label: 'Styles',  threshold: 55,  activeClass: 'bg-neo-blue  border-neo-blue  text-black' },
  { label: 'Scripts', threshold: 80,  activeClass: 'bg-neo-green border-neo-green text-black' },
  { label: 'Ready',   threshold: 100, activeClass: 'bg-black     border-black     text-neo-yellow' },
] as const;

/* ─── Small decorative plus/cross mark ─── */
function PlusMark({ size = 28, className = '' }: { size?: number; className?: string }) {
  const c = size / 2;
  return (
    <svg className={className} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
      <line x1={c} y1="0" x2={c} y2={size} stroke="black" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="0" y1={c} x2={size} y2={c} stroke="black" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export default function LoadingScreen() {
  const { progress, done, visible } = useLoadingScreen();

  // Controls slide-in from top (entrance)
  const [slideIn, setSlideIn]     = useState(false);
  // Controls staggered content fade-in
  const [contentIn, setContentIn] = useState(false);

  /* ── Entrance: slide in from top, then stagger content ── */
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSlideIn(true);
        // Let the 600ms slide finish before animating content in
        setTimeout(() => setContentIn(true), 650);
      });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ── Exit: add `page-loaded` halfway through slide-up so page fades in ── */
  useEffect(() => {
    if (done) {
      setTimeout(() => {
        document.documentElement.classList.remove('loading');
        document.documentElement.classList.add('page-loaded');
      }, 380);
    }
  }, [done]);

  if (!visible) return null;

  // On screen when slid in AND not yet done
  const onScreen = slideIn && !done;

  return (
    <div
      aria-label="Loading portfolio"
      aria-live="polite"
      className={`
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        bg-neo-yellow overflow-hidden
        transition-transform duration-700
        ${onScreen ? 'translate-y-0' : '-translate-y-full'}
      `}
      style={{ transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)' }}
    >

      {/* ═══════════════════════════════════════
          BACKGROUND LAYER
      ═══════════════════════════════════════ */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">

        {/* Dot grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(0,0,0,0.12) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Diagonal stripes — top-right corner */}
        <svg
          className="absolute -top-8 -right-8 opacity-[0.13]"
          width="300" height="300" viewBox="0 0 300 300" fill="none"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1={i * 28} y1="0" x2={i * 28 + 300} y2="300" stroke="black" strokeWidth="8" />
          ))}
        </svg>

        {/* Diagonal stripes — bottom-left corner */}
        <svg
          className="absolute -bottom-8 -left-8 opacity-[0.13]"
          width="300" height="300" viewBox="0 0 300 300" fill="none"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1={i * 28} y1="0" x2={i * 28 + 300} y2="300" stroke="black" strokeWidth="8" />
          ))}
        </svg>

        {/* ── Colored geometric shapes ── */}

        {/* Neo-pink filled circle — top-left */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-neo-pink border-4 border-black" style={{ opacity: 0.85 }} />

        {/* Neo-blue square rotated — top-right */}
        <div className="absolute top-16 right-16 w-16 h-16 bg-neo-blue border-4 border-black rotate-[15deg]" style={{ opacity: 0.85 }} />

        {/* Neo-green diamond — bottom-right */}
        <div className="absolute bottom-12 right-14 w-20 h-20 bg-neo-green border-4 border-black rotate-45" style={{ opacity: 0.85 }} />

        {/* Small neo-pink square — bottom-left */}
        <div className="absolute bottom-16 left-14 w-12 h-12 bg-neo-pink border-4 border-black rotate-[-12deg]" style={{ opacity: 0.75 }} />

        {/* Small neo-blue circle — mid-left */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 w-8 h-8 rounded-full bg-neo-blue border-[3px] border-black" style={{ opacity: 0.6 }} />

        {/* Small neo-green square — mid-right */}
        <div className="absolute top-[40%] right-10 w-9 h-9 bg-neo-green border-[3px] border-black rotate-[20deg]" style={{ opacity: 0.6 }} />

        {/* ── Plus/cross marks ── */}
        <PlusMark size={34} className="absolute top-[36%] left-8 opacity-[0.18]" />
        <PlusMark size={22} className="absolute top-[22%] right-[30%] opacity-[0.15]" />
        <PlusMark size={28} className="absolute bottom-[28%] right-8 opacity-[0.18]" />
        <PlusMark size={18} className="absolute top-[62%] left-[22%] opacity-[0.13]" />

        {/* ── Large faded initials ── */}
        <span
          className="absolute right-2 bottom-0 font-sora font-black leading-none select-none"
          style={{ fontSize: '10rem', color: 'rgba(0,0,0,0.06)' }}
        >
          HFM
        </span>
      </div>

      {/* ═══════════════════════════════════════
          CORNER BRACKETS
      ═══════════════════════════════════════ */}
      <span aria-hidden="true" className="absolute top-5 left-5 w-10 h-10 border-t-4 border-l-4 border-black" />
      <span aria-hidden="true" className="absolute top-5 right-5 w-10 h-10 border-t-4 border-r-4 border-black" />
      <span aria-hidden="true" className="absolute bottom-5 left-5 w-10 h-10 border-b-4 border-l-4 border-black" />
      <span aria-hidden="true" className="absolute bottom-5 right-5 w-10 h-10 border-b-4 border-r-4 border-black" />

      {/* ═══════════════════════════════════════
          MAIN CONTENT (staggered entrance)
      ═══════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center gap-7 px-6 w-full max-w-lg">

        {/* Name badge */}
        <div
          className={`transition-all duration-700 ease-out ${contentIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
          style={{ transitionDelay: '0ms' }}
        >
          <div className="border-4 border-black bg-black px-6 py-2 shadow-neo">
            <span className="font-sora text-sm font-black uppercase tracking-[0.22em] text-neo-yellow">
              Hafizh Fadhl Muhammad
            </span>
          </div>
        </div>

        {/* Big percentage counter */}
        <div
          className={`relative select-none transition-all duration-700 ease-out ${contentIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '80ms' }}
        >
          {/* Neo-blue offset shadow */}
          <span
            aria-hidden="true"
            className="absolute top-[7px] left-[7px] font-sora font-black leading-none text-neo-blue select-none"
            style={{ fontSize: 'clamp(5rem, 14vw, 9rem)' }}
          >
            {progress}%
          </span>
          {/* Foreground number */}
          <span
            className="relative font-sora font-black leading-none text-black"
            style={{ fontSize: 'clamp(5rem, 14vw, 9rem)' }}
          >
            {progress}%
          </span>
        </div>

        {/* "Loading…" sub-label */}
        <p
          className={`font-sora text-[11px] font-black uppercase tracking-[0.35em] text-black/50 -mt-2 transition-all duration-700 ease-out ${contentIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '150ms' }}
        >
          Loading Portfolio…
        </p>

        {/* Progress bar */}
        <div
          className={`w-full transition-all duration-700 ease-out ${contentIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '220ms' }}
        >
          <div className="border-4 border-black bg-white shadow-neo overflow-hidden">
            <div
              className="h-7 relative overflow-hidden transition-[width] duration-100 ease-linear"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #F472B6 0%, #38BDF8 100%)',
              }}
            >
              {/* Diagonal stripe overlay on fill */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255,255,255,0.18) 6px, rgba(255,255,255,0.18) 12px)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Step labels */}
        <div
          className={`flex gap-2.5 flex-wrap justify-center transition-all duration-700 ease-out ${contentIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '300ms' }}
        >
          {STEPS.map(({ label, threshold, activeClass }) => (
            <span
              key={label}
              className={`border-2 px-3 py-1 text-[10px] font-black uppercase tracking-widest transition-all duration-300
                ${progress >= threshold ? activeClass : 'border-black/30 bg-transparent text-black/35'}`}
            >
              {label}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
