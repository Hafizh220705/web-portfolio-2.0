'use client';

import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 14 } },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const headerHeight = 80; // matches h-20 in Header
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/hafizhfadhlm',   color: 'hover:bg-neo-blue',              label: 'LinkedIn'  },
    { icon: <FaGithub />,     url: 'https://github.com/Hafizh220705',        color: 'hover:bg-black hover:text-white', label: 'GitHub'    },
    { icon: <FaInstagram />,  url: 'https://instagram.com/hafizhfadhlm',     color: 'hover:bg-neo-pink',              label: 'Instagram' },
    { icon: <FaWhatsapp />,   url: 'https://wa.me/6282290764213',            color: 'hover:bg-neo-green',             label: 'WhatsApp'  },
  ];

  const navLinks = [
    { name: 'About',      href: '#about'      },
    { name: 'Projects',   href: '#project'    },
    { name: 'Experience', href: '#experience' },
    { name: 'Education',  href: '#education'  },
    { name: 'Skills',     href: '#skills'     },
    { name: 'Certificate',href: '#certificate'},
    { name: 'Volunteer',  href: '#volunteer'  },
    { name: 'Contact',    href: '#contact'    },
  ];

  return (
    <motion.footer
      className="relative w-full border-t-4 border-black bg-white font-sora overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-stretch">

          {/* Brand / Signature Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col justify-center gap-6">
            <div className="w-fit border-4 border-black bg-neo-pink px-4 py-2 shadow-neo-sm transform -rotate-1">
              <span className="text-2xl font-black uppercase tracking-tighter text-black">
                Hafizh Fadhl Muhammad
              </span>
            </div>
            <p className="max-w-md font-jakarta text-sm font-bold text-slate-700 leading-relaxed">
              Computer Science student at Universitas Padjadjaran focused on transforming
              data into valuable business insights through Data Science.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex h-10 w-10 items-center justify-center border-2 border-black bg-white shadow-neo-sm transition-all hover:-translate-y-1 cursor-pointer ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-black uppercase tracking-tight border-b-2 border-black inline-block">
              Navigation
            </h4>
            <ul className="space-y-1 -ml-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={scrollToSection(link.href.replace('#', ''))}
                    className="cursor-pointer inline-block font-jakarta text-sm font-bold text-slate-700 px-2.5 py-1 border-2 border-transparent hover:border-black hover:bg-neo-pink hover:text-black hover:-translate-y-0.5 hover:shadow-neo-sm transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Status Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-black uppercase tracking-tight border-b-2 border-black inline-block">
              Current Status
            </h4>
            <div className="border-2 border-black bg-neo-green p-4 shadow-neo-sm">
              <p className="text-[10px] font-black uppercase mb-1">Current Base:</p>
              <p className="text-xs font-bold font-jakarta">Indonesia, Jakarta</p>
              <div className="mt-4 pt-3 border-t-2 border-black/10">
                <p className="text-[10px] font-black uppercase mb-1">Availability:</p>
                <p className="text-xs font-bold font-jakarta">Open for Internships 2026</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t-2 border-black/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[10px] md:text-xs font-black uppercase text-slate-500 tracking-widest text-center md:text-left">
            © 2026 Hafizh Fadhl Muhammad • Computer Science.
          </p>

          <button
            onClick={scrollToTop}
            suppressHydrationWarning
            className="cursor-pointer group flex items-center gap-2 border-2 border-black bg-neo-yellow px-4 py-2 text-xs font-black uppercase shadow-neo-sm hover:bg-neo-pink hover:-translate-y-1 transition-all"
          >
            Back to Top <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="h-2 w-full bg-black" />
    </motion.footer>
  );
}