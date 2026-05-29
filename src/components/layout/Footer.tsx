'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/hafizhfadhlm", color: "hover:bg-neo-blue" },
    { icon: <FaGithub />, url: "https://github.com/Hafizh220705", color: "hover:bg-black hover:text-white" },
    { icon: <FaInstagram />, url: "https://instagram.com/hafizhfadhlm", color: "hover:bg-neo-pink" },
    { icon: <FaWhatsapp />, url: "https://wa.me/6282290764213", color: "hover:bg-neo-green" },
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Project', href: '#project' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <footer className="relative w-full border-t-4 border-black bg-white font-sora overflow-hidden">
      {/* Decorative Top Bar */}
      <div className="h-4 w-full bg-neo-yellow border-b-4 border-black"></div>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          
          {/* Brand/Signature Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-block border-4 border-black bg-neo-pink px-4 py-2 shadow-neo-sm transform -rotate-1">
              <span className="text-2xl font-black uppercase tracking-tighter text-black">
                Hafizh Fadhl
              </span>
            </div>
            <p className="max-w-md font-jakarta text-sm font-bold text-slate-700 leading-relaxed">
              Mahasiswa Teknik Informatika Universitas Padjadjaran yang berfokus pada transformasi data menjadi wawasan bisnis yang berharga melalui Data Science dan Backend Development.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-10 w-10 items-center justify-center border-2 border-black bg-white shadow-neo-sm transition-all hover:-translate-y-1 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-black uppercase tracking-tight border-b-2 border-black inline-block">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="font-jakarta text-sm font-bold text-slate-600 hover:text-black hover:underline decoration-2 underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Status Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-black uppercase tracking-tight border-b-2 border-black inline-block">
              Current Status
            </h4>
            <div className="border-2 border-black bg-neo-green p-4 shadow-neo-sm">
              <p className="text-[10px] font-black uppercase mb-1">Current Base:</p>
              <p className="text-xs font-bold font-jakarta">Bandung / Sumedang, ID</p>
              <div className="mt-4 pt-3 border-t-2 border-black/10">
                <p className="text-[10px] font-black uppercase mb-1">Availability:</p>
                <p className="text-xs font-bold font-jakarta">Open for Internships 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t-2 border-black/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] md:text-xs font-black uppercase text-slate-500 tracking-widest text-center md:text-left">
            © 2026 Hafizh Fadhl Muhammad • Informatics UNPAD. <br className="md:hidden" />
            Designed with Neo-Brutalism Aesthetics.
          </p>
          
          <button 
            onClick={scrollToTop}
            suppressHydrationWarning // <-- ATRIBUT PENYELAMAT DITAMBAHKAN DI SINI
            className="group flex items-center gap-2 border-2 border-black bg-neo-yellow px-4 py-2 text-xs font-black uppercase shadow-neo-sm hover:bg-neo-pink hover:-translate-y-1 transition-all"
          >
            Back to top <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="h-2 w-full bg-black"></div>
    </footer>
  );
}