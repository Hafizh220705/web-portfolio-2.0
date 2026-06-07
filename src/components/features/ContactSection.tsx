'use client';

import { useState } from 'react';
import {
  FaEnvelope, FaWhatsapp, FaLinkedinIn, FaInstagram, FaGithub,
  FaMapMarkerAlt, FaCheckCircle, FaTimesCircle, FaTimes,
} from 'react-icons/fa';
import type { ReactNode } from 'react';

import { useInViewOnce } from '@/hooks/useInViewOnce';
import { CONTACT_ITEMS, SOCIAL_LINKS } from '@/data/contact';
import type { ContactItem, SocialLink } from '@/types';

const CONTACT_ICON_MAP: Record<ContactItem['iconName'], ReactNode> = {
  email:    <FaEnvelope />,
  whatsapp: <FaWhatsapp />,
  location: <FaMapMarkerAlt />,
};

const SOCIAL_ICON_MAP: Record<SocialLink['iconName'], ReactNode> = {
  linkedin:  <FaLinkedinIn />,
  github:    <FaGithub />,
  instagram: <FaInstagram />,
};

type Toast = { type: 'success' | 'error'; message: string };

type FormErrors = { name?: string; email?: string; message?: string };

function validateForm(name: string, email: string, message: string): FormErrors {
  const errors: FormErrors = {};

  if (!name.trim())
    errors.name = 'Full name is required.';
  else if (name.trim().length < 2)
    errors.name = 'Name must be at least 2 characters.';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email.trim())
    errors.email = 'Email address is required.';
  else if (!emailRegex.test(email.trim()))
    errors.email = 'Please enter a valid email (e.g. name@gmail.com).';

  if (!message.trim())
    errors.message = 'Message cannot be empty.';
  else if (message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.';

  return errors;
}

function ToastAlert({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  const isSuccess = toast.type === 'success';
  return (
    <div
      className={`fixed top-6 right-6 z-[999] flex items-start gap-3 border-4 border-black
        px-5 py-4 shadow-neo font-sora max-w-sm animate-slide-in-right
        ${isSuccess ? 'bg-neo-green' : 'bg-neo-pink'}`}
    >
      <span className="text-xl mt-0.5 flex-shrink-0">
        {isSuccess ? <FaCheckCircle /> : <FaTimesCircle />}
      </span>
      <p className="text-sm font-bold flex-1">{toast.message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 hover:opacity-60 transition-opacity cursor-pointer"
      >
        <FaTimes />
      </button>
    </div>
  );
}

function FieldError({ msg }: { msg?: string }) {
  return (
    <div className="h-4 mt-0.5">
      {msg && <p className="text-[11px] font-bold text-red-600">⚠ {msg}</p>}
    </div>
  );
}

function ContactInfoCard() {
  const textColor = (color: string) =>
    color === 'bg-neo-blue' ? 'text-white' : 'text-black';

  return (
    <div className="border-4 border-black bg-white p-5 shadow-neo -rotate-1
      hover:rotate-0 transition-transform duration-300 flex-1 flex flex-col justify-center"
    >
      <h3 className="text-3xl font-black uppercase mb-6 tracking-tight leading-snug text-justify">
        Ready to turn your{' '}
        <span className="inline-block border-[2px] border-black bg-neo-blue px-1 text-white
          -rotate-1 hover:rotate-0 transition-transform duration-200"
        >
          data
        </span>
        {' '}into{' '}
        <span className="inline-block border-[2px] border-black bg-neo-yellow px-1 text-black
          rotate-1 hover:rotate-0 transition-transform duration-200"
        >
          decisions
        </span>
        ?
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {/* Contact items */}
        <div className="flex flex-col gap-3">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`flex items-center gap-3 border-2 border-black ${item.color} px-3 py-2.5
                shadow-neo-sm hover:-translate-y-0.5 hover:shadow-neo transition-all cursor-pointer`}
            >
              <span className={`text-xl flex-shrink-0 ${textColor(item.color)}`}>
                {CONTACT_ICON_MAP[item.iconName]}
              </span>
              <div className="flex-1 min-w-0">
                <p className={`text-[9px] font-black uppercase opacity-60 ${textColor(item.color)}`}>
                  {item.label}
                </p>
                <p className={`text-xs font-black truncate ${textColor(item.color)}`}>
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`flex items-center gap-3 border-2 border-black ${social.color} px-3 py-2.5
                shadow-neo-sm hover:-translate-y-0.5 hover:shadow-neo transition-all cursor-pointer`}
            >
              <span className={`text-xl flex-shrink-0 ${textColor(social.color)}`}>
                {SOCIAL_ICON_MAP[social.iconName]}
              </span>
              <div className="flex-1 min-w-0">
                <p className={`text-[9px] font-black uppercase opacity-60 ${textColor(social.color)}`}>
                  {social.label}
                </p>
                <p className={`text-xs font-black truncate ${textColor(social.color)}`}>
                  @{social.username}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [message, setMessage] = useState('');
  const [errors,  setErrors]  = useState<FormErrors>({});
  const [toast,   setToast]   = useState<Toast | null>(null);

  const clearError = (field: keyof FormErrors) =>
    setErrors((prev) => ({ ...prev, [field]: undefined }));

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

  const inputBase =
    'w-full border-2 border-black bg-white px-3 py-2 text-sm font-bold focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:font-normal placeholder:text-slate-400';
  const inputErr = 'border-red-500 bg-red-50';

  return (
    <>
      {toast && <ToastAlert toast={toast} onClose={() => setToast(null)} />}

      <div className="border-4 border-black bg-neo-yellow p-5 shadow-neo rotate-1
        hover:rotate-0 transition-transform duration-300"
      >
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
              onChange={(e) => { setName(e.target.value); clearError('name'); }}
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
              onChange={(e) => { setEmail(e.target.value); clearError('email'); }}
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
              onChange={(e) => { setMessage(e.target.value); clearError('message'); }}
              className={`${inputBase} resize-none ${errors.message ? inputErr : ''}`}
              placeholder="What's on your mind?"
            />
            <FieldError msg={errors.message} />
          </div>

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full cursor-pointer border-4 border-black bg-black text-white py-3
              text-sm font-black uppercase shadow-neo-sm hover:bg-white hover:text-black
              hover:-translate-y-1 hover:shadow-neo transition-all"
          >
            Send Message →
          </button>

        </div>
      </div>
    </>
  );
}

export default function ContactSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });

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
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -top-8  -left-8  h-40 w-40 border-4 border-black bg-neo-yellow rotate-12"  />
      <div className="pointer-events-none absolute top-1/2 -right-10 h-32 w-32 border-4 border-black bg-neo-pink   -rotate-6" />
      <div className="pointer-events-none absolute -bottom-6 left-1/3 h-24 w-24 border-4 border-black bg-neo-blue   rotate-3"  />
      <div className="pointer-events-none absolute top-20   right-1/4 h-20 w-20 border-4 border-black bg-neo-green  rotate-45" />
      <div className="pointer-events-none absolute bottom-20 left-10  h-28 w-28 border-4 border-black bg-white      -rotate-12"/>
      <div className="pointer-events-none absolute top-1/3  left-1/4  h-16 w-16 border-4 border-black bg-neo-pink   rotate-12" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/3 h-36 w-36 border-4 border-black bg-neo-yellow rotate-45 rounded-full" />
      <div className="pointer-events-none absolute top-10   right-1/3 h-12 w-12 border-4 border-black bg-neo-blue   -rotate-45"/>

      <div ref={ref} className="mx-auto w-full max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-12 flex justify-center transition-all duration-700 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          <h2 className="inline-block border-4 border-black bg-neo-pink px-6 py-2 text-3xl
            md:text-5xl font-black uppercase tracking-tighter shadow-neo rotate-1
            hover:rotate-0 transition-all cursor-text"
          >
            <span className="text-black">Get In</span>{' '}
            <span className="text-white">Touch</span>
          </h2>
        </div>

        {/* 2-column grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch
            transition-all duration-700 ease-out delay-150
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-col gap-5">
            <ContactInfoCard />
          </div>
          <ContactForm />
        </div>

      </div>
    </section>
  );
}