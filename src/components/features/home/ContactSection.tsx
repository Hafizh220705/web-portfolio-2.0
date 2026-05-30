'use client';

import { FaEnvelope, FaWhatsapp, FaLinkedinIn, FaInstagram, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const SOCIAL_LINKS = [
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/hafizhfadhlm', color: 'bg-neo-blue',  label: 'LinkedIn'  },
  { icon: <FaGithub />,     href: 'https://github.com/Hafizh220705',       color: 'bg-white',     label: 'GitHub'    },
  { icon: <FaInstagram />,  href: 'https://instagram.com/hafizhfadhlm',    color: 'bg-neo-pink',  label: 'Instagram' },
];

const CONTACT_ITEMS = [
  { icon: <FaEnvelope />,      color: 'bg-neo-yellow', label: 'Email Me',  value: 'hafizh.fadhl@unpad.ac.id' },
  { icon: <FaWhatsapp />,      color: 'bg-neo-green',  label: 'WhatsApp',  value: '+62 822-9076-4213' },
  { icon: <FaMapMarkerAlt />,  color: 'bg-neo-blue',   label: 'Location',  value: 'Bandung / Sumedang, Indonesia' },
];

export default function ContactSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });

  return (
    <section id="contact" className="relative w-full py-20 bg-neo-bg bg-dot-pattern font-sora">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-16 flex justify-center transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="inline-block border-4 border-black bg-neo-pink px-8 py-3 text-4xl md:text-6xl font-black uppercase tracking-tighter shadow-neo transform rotate-1 hover:rotate-0 transition-all">
            Get In <span className="text-white">Touch</span>
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-700 ease-out delay-150 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left: Contact info */}
          <div className="space-y-8">
            <div className="border-4 border-black bg-white p-8 shadow-neo transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">Let&apos;s Collaborate!</h3>
              <p className="font-jakarta text-sm md:text-base font-semibold text-slate-700 leading-relaxed mb-8">
                Currently in my 6th semester studying Computer Science at UNPAD, with a focus on Data Science
                and Backend Development. I&apos;m open to internship opportunities, collaborative projects,
                or simply a good tech discussion.
              </p>

              <div className="space-y-4">
                {CONTACT_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-black ${item.color} shadow-neo-sm group-hover:shadow-neo transition-all`}
                    >
                      <span className={`text-xl ${item.color === 'bg-neo-blue' ? 'text-white' : ''}`}>{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase opacity-50">{item.label}</p>
                      <p className="text-sm font-black">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex h-14 w-14 items-center justify-center border-4 border-black ${social.color} shadow-neo hover:-translate-y-1 hover:rotate-6 transition-all`}
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact form — no <form> tag, uses div */}
          <div className="border-4 border-black bg-neo-yellow p-8 shadow-neo transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-black uppercase mb-2">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="w-full border-4 border-black bg-white p-3 text-sm font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-black uppercase mb-2">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="w-full border-4 border-black bg-white p-3 text-sm font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-black uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className="w-full border-4 border-black bg-white p-3 text-sm font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  /* TODO: integrate with email service (e.g. Resend / EmailJS) */
                  alert('Pesan terkirim! (Hubungkan ke email service)');
                }}
                className="w-full border-4 border-black bg-black text-white py-4 text-sm font-black uppercase shadow-neo-sm hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-neo transition-all"
              >
                Send Message →
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}