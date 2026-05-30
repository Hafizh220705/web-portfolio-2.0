'use client';

import { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedinIn, FaInstagram, FaGithub, FaMapMarkerAlt, FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';
import { useInViewOnce } from '@/hooks/useInViewOnce';

// ── Constants ─────────────────────────────────────────────────────
const CONTACT_ITEMS = [
  { icon: <FaEnvelope />, color: 'bg-neo-yellow', label: 'Email', value: 'hafizhfadhl22@gmail.com' },
  { icon: <FaWhatsapp />, color: 'bg-neo-green', label: 'WhatsApp', value: '+62 822-9076-4213' },
  { icon: <FaMapMarkerAlt />, color: 'bg-neo-blue', label: 'Location', value: 'Indonesia, Bandung' },
];

const SOCIAL_LINKS = [
  {
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/hafizhfadhlm/',
    color: 'bg-neo-blue',
    label: 'LinkedIn',
    username: 'hafizhfadhlm',
  },
  {
    icon: <FaGithub />,
    href: 'https://github.com/Hafizh220705',
    color: 'bg-white',
    label: 'GitHub',
    username: 'Hafizh220705',
  },
  {
    icon: <FaInstagram />,
    href: 'http://instagram.com/hafizhfadhlm',
    color: 'bg-neo-pink',
    label: 'Instagram',
    username: 'hafizhfadhlm',
  },
];

// ── Types ─────────────────────────────────────────────────────────
interface Toast {
  type: 'success' | 'error';
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// ── Validation ────────────────────────────────────────────────────
function validateForm(name: string, email: string, message: string): FormErrors {
  const errors: FormErrors = {};
  if (!name.trim()) errors.name = 'Full name is required.';
  else if (name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email.trim()) errors.email = 'Email address is required.';
  else if (!emailRegex.test(email.trim())) errors.email = 'Please enter a valid email (e.g. name@gmail.com).';

  if (!message.trim()) errors.message = 'Message cannot be empty.';
  else if (message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';

  return errors;
}

// ── Toast Component ───────────────────────────────────────────────
function ToastAlert({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  const isSuccess = toast.type === 'success';
  return (
    <div
      className={`fixed top-6 right-6 z-[999] flex items-start gap-3 border-4 border-black px-5 py-4 shadow-neo font-sora max-w-sm
        ${isSuccess ? 'bg-neo-green' : 'bg-neo-pink'} animate-slide-in-right`}
    >
      <span className="text-xl mt-0.5 flex-shrink-0">
        {isSuccess ? <FaCheckCircle /> : <FaTimesCircle />}
      </span>
      <p className="text-sm font-bold flex-1">{toast.message}</p>
      <button onClick={onClose} className="flex-shrink-0 hover:opacity-60 transition-opacity cursor-pointer">
        <FaTimes />
      </button>
    </div>
  );
}

// ── Field with fixed-height error slot ───────────────────────────
function FieldError({ msg }: { msg?: string }) {
  return (
    <div className="h-4 mt-0.5">
      {msg && <p className="text-[11px] font-bold text-red-600">⚠ {msg}</p>}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────
export default function ContactSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (type: Toast['type'], msg: string) => {
    setToast({ type, message: msg });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = () => {
    const errs = validateForm(name, email, message);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      showToast('error', 'Please fix the errors below before sending.');
      return;
    }
    // TODO: integrate EmailJS / Resend here
    showToast('success', "Message sent! I'll get back to you soon 🎉");
    setName(''); setEmail(''); setMessage(''); setErrors({});
  };

  const inputBase = 'w-full border-2 border-black bg-white px-3 py-2 text-sm font-bold focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:font-normal placeholder:text-slate-400';
  const inputErr = 'border-red-500 bg-red-50';

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center font-sora py-12 overflow-hidden"
      style={{
        background: '#F8F8F8',
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.07) 2px, transparent 2px),
          linear-gradient(90deg, rgba(0,0,0,0.07) 2px, transparent 2px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      {/* Neo-brutalist decorative blobs */}
      <div className="pointer-events-none absolute -top-8 -left-8 h-40 w-40 border-4 border-black bg-neo-yellow opacity-60 rotate-12" />
      <div className="pointer-events-none absolute top-1/2 -right-10 h-32 w-32 border-4 border-black bg-neo-pink opacity-50 -rotate-6" />
      <div className="pointer-events-none absolute -bottom-6 left-1/3 h-24 w-24 border-4 border-black bg-neo-blue opacity-40 rotate-3" />

      {/* Toast */}
      {toast && <ToastAlert toast={toast} onClose={() => setToast(null)} />}

      <div ref={ref} className="mx-auto w-full max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-12 flex justify-center transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
        >
          <h2 className="inline-block border-4 border-black bg-neo-pink px-6 py-2 text-3xl md:text-5xl font-black uppercase tracking-tighter shadow-neo transform rotate-1 hover:rotate-0 transition-all cursor-text">
            <style>{`
              .title-get-in::selection { background: transparent; color: #fff; }
              .title-get-in *::selection { background: transparent; color: #fff; }
              .title-touch::selection { background: transparent; color: #000; }
              .title-touch *::selection { background: transparent; color: #000; }
            `}</style>
            <span className="text-black title-get-in">Get In</span>
            {' '}
            <span className="text-white title-touch">Touch</span>
          </h2>
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch transition-all duration-700 ease-out delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* ── Left: Info ── */}
          <div className="flex flex-col gap-5">
            <div className="border-4 border-black bg-white p-5 shadow-neo transform -rotate-1 hover:rotate-0 transition-transform duration-300 flex-1 flex flex-col justify-center">
              {/* Title with highlights */}
              <h3 className="text-2xl font-black uppercase mb-6 tracking-tight leading-snug">
                Ready to turn your{' '}
                <span className="inline-block border-[2px] border-black bg-neo-blue px-1 text-white -rotate-1 hover:rotate-0 transition-transform duration-200">
                  data
                </span>
                {' '}into{' '}
                <span className="inline-block border-[2px] border-black bg-neo-yellow px-1 text-black rotate-1 hover:rotate-0 transition-transform duration-200">
                  decisions
                </span>
                ?
              </h3>

              {/* Contact items + Social links — 2 kolom berdampingan */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {/* Kolom kiri: Email, WhatsApp, Location — CTA */}
                <div className="flex flex-col gap-3">
                  {CONTACT_ITEMS.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex items-center gap-3 group"
                    >
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-black ${item.color} shadow-neo-sm group-hover:shadow-neo group-hover:-translate-y-0.5 transition-all`}>
                        <span className={`text-xl ${item.color === 'bg-neo-blue' ? 'text-white' : ''}`}>{item.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-black uppercase opacity-50">{item.label}</p>
                        <p className="text-sm font-black leading-tight truncate">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Kolom kanan: LinkedIn, GitHub, Instagram */}
                <div className="flex flex-col gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center gap-3 group"
                    >
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-black ${social.color} shadow-neo-sm group-hover:shadow-neo group-hover:-translate-y-0.5 transition-all`}>
                        <span className={`text-xl ${social.color === 'bg-neo-blue' ? 'text-white' : 'text-black'}`}>
                          {social.icon}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-black uppercase opacity-50">{social.label}</p>
                        <p className="text-sm font-black leading-tight truncate">@{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="border-4 border-black bg-neo-yellow p-5 shadow-neo transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="space-y-3">

              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-black uppercase mb-1">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((p) => ({ ...p, name: undefined })); }}
                  className={`${inputBase} ${errors.name ? inputErr : ''}`}
                  placeholder="Enter your full name"
                />
                <FieldError msg={errors.name} />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-black uppercase mb-1">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
                  className={`${inputBase} ${errors.email ? inputErr : ''}`}
                  placeholder="name@example.com"
                />
                <FieldError msg={errors.email} />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-black uppercase mb-1">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors((p) => ({ ...p, message: undefined })); }}
                  className={`${inputBase} resize-none ${errors.message ? inputErr : ''}`}
                  placeholder="What's on your mind?"
                />
                <FieldError msg={errors.message} />
              </div>

              {/* Submit */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full cursor-pointer border-4 border-black bg-black text-white py-3 text-sm font-black uppercase shadow-neo-sm hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-neo transition-all"
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