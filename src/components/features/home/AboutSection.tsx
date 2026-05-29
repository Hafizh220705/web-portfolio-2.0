'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { HiCodeBracket } from 'react-icons/hi2';
import { motion, Variants } from 'framer-motion';

const HIGHLIGHTS: { phrase: string; className: string }[] = [
  { phrase: 'Computer Science',    className: 'hover:bg-neo-blue hover:text-white' },
  { phrase: 'Universitas Padjadjaran', className: 'hover:bg-neo-pink hover:text-black' },
  { phrase: 'Data Science',        className: 'hover:bg-neo-pink hover:text-black' },
  { phrase: 'Data Analytics',      className: 'hover:bg-neo-pink hover:text-black' },
  { phrase: 'actionable insights', className: 'hover:bg-neo-yellow hover:text-black' },
  { phrase: 'business decisions',  className: 'hover:bg-neo-yellow hover:text-black' },
];

const PARAGRAPH =
  'Computer Science student at Universitas Padjadjaran specializing in Data Science and Data Analytics — transforming complex data into actionable insights and smarter business decisions.';

function HighlightedText({ text }: { text: string }) {
  // Build regex dari semua frasa sekaligus, paling panjang duluan
  const sorted  = [...HIGHLIGHTS].sort((a, b) => b.phrase.length - a.phrase.length);
  const pattern = sorted.map((h) => h.phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const regex   = new RegExp(`(${pattern})`, 'gi');
  const parts   = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const match = sorted.find((h) => h.phrase.toLowerCase() === part.toLowerCase());
        return match ? (
          <span key={i} className={`px-1 py-0.5 transition-all duration-200 cursor-default ${match.className}`}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

// ── Animation Variants ──────────────────────────────────────────
const containerVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
};

const popUpVariants: Variants = {
  hidden:  { opacity: 0, y: 36, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 110, damping: 13 } },
};

const badgeVariants: Variants = {
  hidden:  { opacity: 0, y: -18, scale: 0.55 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'tween', duration: 0.22, ease: 'easeOut' } },
};

const slideRightVariants: Variants = {
  hidden:  { opacity: 0, x: 90, rotate: 8 },
  visible: { opacity: 1, x: 0, rotate: 0, transition: { type: 'spring', stiffness: 95, damping: 15, delay: 0.25 } },
};

export default function AboutSection() {
  const scrollToSection = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="about"
      className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden bg-neo-bg bg-dot-pattern border-b-4 border-black flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative lines */}
      <div className="absolute top-12 left-0 h-1 w-full -rotate-2 bg-black opacity-5 pointer-events-none" />
      <div className="absolute bottom-20 left-0 h-1 w-full rotate-2 bg-black opacity-5 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 lg:px-8 py-12 lg:py-0">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ── Left ── */}
          <div className="flex flex-col items-start lg:pr-4">

            <motion.span
              variants={badgeVariants}
              className="inline-block border-2 border-black bg-neo-pink px-3 py-1 text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-neo-sm -rotate-2 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:shadow-neo"
            >
              About Me
            </motion.span>

            <motion.div variants={popUpVariants} className="mt-3 md:mt-4">
              <h1 className="text-3xl md:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] font-black uppercase leading-[1.1] tracking-tighter text-black">
                Turning <br />
                <span className="inline-block border-[3px] border-black bg-neo-blue px-2 text-white shadow-neo-sm -rotate-1 hover:rotate-0 transition-transform duration-300 align-middle">
                  Data
                </span>{' '}
                Into <br />
                Actionable{' '}
                <span className="inline-block border-[3px] border-black bg-neo-pink px-2 text-black shadow-neo-sm rotate-1 hover:rotate-0 transition-transform duration-300 align-middle mt-1">
                  Insights
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={popUpVariants}
              className="mt-4 md:mt-5 border-2 border-l-[6px] border-black border-l-neo-yellow bg-white p-3 md:p-5 shadow-neo-sm"
            >
              <p className="font-jakarta text-xs md:text-base lg:text-lg font-semibold leading-relaxed text-slate-800">
                <HighlightedText text={PARAGRAPH} />
              </p>
            </motion.div>

            <motion.div variants={popUpVariants} className="mt-4 md:mt-5 flex flex-wrap gap-3">
              <Link
                href="#project"
                onClick={scrollToSection('project')}
                className="flex items-center gap-2 border-2 border-black bg-neo-green px-4 py-2 md:px-5 md:py-2.5 text-[10px] md:text-xs lg:text-sm font-black uppercase shadow-neo-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-neo"
              >
                <HiCodeBracket className="text-lg" />
                VIEW PROJECTS
              </Link>

              <a
                href="https://wa.me/6282290764213"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-black bg-white px-4 py-2 md:px-5 md:py-2.5 text-[10px] md:text-xs lg:text-sm font-black uppercase shadow-neo-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-neo"
              >
                <FaWhatsapp className="text-base text-green-600" />
                WHATSAPP
              </a>

              <a
                href="/resume/Hafizh Fadhl Muhammad_Data Science_CV.pdf"
                download
                className="flex items-center gap-2 border-2 border-black bg-neo-blue px-4 py-2 md:px-5 md:py-2.5 text-[10px] md:text-xs lg:text-sm font-black uppercase text-white shadow-neo-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-neo"
              >
                <HiDownload className="text-lg" />
                DOWNLOAD CV
              </a>
            </motion.div>
          </div>

          {/* ── Right ── */}
          <motion.div
            variants={slideRightVariants}
            className="relative flex h-[300px] md:h-[380px] lg:h-[480px] items-center justify-center"
          >
            {/* Decorative shapes */}
            <div className="absolute right-0 top-4 h-24 w-24 md:h-32 md:w-32 border-4 border-black bg-neo-pink opacity-80 animate-spin-slow" />
            <div className="absolute bottom-10 left-0 h-32 w-32 md:h-44 md:w-44 rounded-full border-4 border-black bg-neo-yellow opacity-80 animate-bounce-soft" />

            {/* Photo */}
            <div className="group relative z-10 aspect-[3/4] w-44 md:w-64 lg:w-72 xl:w-80">
              <div className="absolute inset-0 translate-x-2 translate-y-2 border-2 border-black bg-black transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
              <div className="absolute inset-0 overflow-hidden border-4 border-black bg-white rotate-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-0">
                <Image
                  src="/images/profile/hafizh.jpg"
                  alt="Hafizh Fadhl Muhammad"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Name tag */}
              <div className="absolute -bottom-3 -right-3 z-30 rotate-2 border-2 border-black bg-neo-green px-2 py-1 md:px-3 md:py-1.5 shadow-neo-sm transition-transform duration-300 group-hover:rotate-0">
                <p className="text-[9px] md:text-xs font-black uppercase whitespace-nowrap">Hafizh Fadhl Muhammad</p>
              </div>

              {/* Social icons */}
              <a href="https://instagram.com/hafizhfadhlm" target="_blank" rel="noreferrer" aria-label="Instagram"
                className="absolute -left-3 -top-3 md:-left-4 md:-top-4 z-20 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-lg border-2 border-black bg-white shadow-neo-sm hover:bg-neo-pink animate-float">
                <FaInstagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="https://github.com/Hafizh220705" target="_blank" rel="noreferrer" aria-label="GitHub"
                style={{ animationDelay: '1s' }}
                className="absolute -right-3 -top-3 md:-right-4 md:-top-4 z-20 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full border-2 border-black bg-neo-yellow shadow-neo-sm hover:scale-110 animate-float">
                <FaGithub className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="https://linkedin.com/in/hafizhfadhlm" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                style={{ animationDelay: '2s' }}
                className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 z-20 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center border-2 border-black bg-neo-blue shadow-neo-sm hover:scale-110 animate-float">
                <FaLinkedinIn className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — menuju #project bukan #contact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2"
      >
        <a
          href="#project"
          onClick={scrollToSection('project')}
          aria-label="Scroll to Projects"
          className="flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full border-[3px] border-black bg-neo-yellow shadow-neo-sm animate-bounce hover:bg-neo-pink cursor-pointer transition-colors"
        >
          <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </motion.section>
  );
}