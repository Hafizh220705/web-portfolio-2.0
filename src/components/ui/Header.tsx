'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Project',     href: '/#project' },
  { name: 'Experience',  href: '/#experience' },
  { name: 'Education',   href: '/#education' },
  { name: 'Skills',      href: '/#skills' }, 
  { name: 'Certificate', href: '/#certificate' },
  { name: 'Volunteer',   href: '/#volunteer' },
  { name: 'Contact',     href: '/#contact' },
];

const headerVariants: Variants = {
  hidden:  { y: '-100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.45, ease: 'easeOut', staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { type: 'tween', duration: 0.25, ease: 'easeOut' } },
};

const mobileMenuVariants: Variants = {
  hidden:  { opacity: 0, height: 0, overflow: 'hidden' },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.28, ease: 'easeInOut' } },
  exit:    { opacity: 0, height: 0, overflow: 'hidden', transition: { duration: 0.22, ease: 'easeInOut' } },
};

export default function Header() {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Subtle scroll shadow cue
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`sticky top-0 z-50 w-full border-b-4 border-black bg-neo-bg font-sora transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_4px_0_0_rgba(0,0,0,0.08)]' : ''
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">

        {/* Logo */}
        <motion.div variants={itemVariants} className="flex-shrink-0">
          <Link
            href="/"
            className="inline-block border-4 border-black bg-neo-yellow px-3 py-1.5 text-lg md:text-xl font-black uppercase tracking-tighter shadow-neo-sm hover:-translate-y-1 hover:shadow-neo transition-all"
          >
            Hafizh Fadhl M
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-1 xl:gap-2 px-4" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <Link
                href={link.href}
                className="px-2.5 py-1.5 font-bold text-xs xl:text-sm uppercase border-2 border-black/0 bg-transparent shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:border-black hover:bg-neo-pink hover:-translate-y-1 hover:shadow-neo-sm focus:outline-none transition-all duration-300 whitespace-nowrap"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right actions */}
        <motion.div variants={itemVariants} className="flex shrink-0 items-center gap-2">
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-[5px] border-2 border-black bg-white shadow-neo-hover hover:rotate-6 hover:scale-110 active:scale-95 transition-transform duration-200"
          >
            <span className={`block h-[3px] w-6 bg-black transition-transform duration-300 ${isOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
            <span className={`block h-[3px] w-6 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[3px] w-6 bg-black transition-transform duration-300 ${isOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
          </button>
        </motion.div>
      </div>

      {/* Mobile menu — AnimatePresence handles exit animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-label="Mobile navigation"
            className="lg:hidden absolute top-20 left-0 w-full border-b-4 border-black bg-white shadow-neo z-40"
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={close}
                  className={`py-3.5 px-6 font-bold text-sm uppercase hover:bg-neo-pink hover:pl-9 transition-all ${
                    i < NAV_LINKS.length - 1 ? 'border-b-2 border-black/10' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}