'use client';

import { FaAward, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { useInViewOnce } from '@/hooks/useInViewOnce';

type Certificate = {
  title:    string;
  issuer:   string;
  date:     string;
  category: string;
  color:    string;
  link?:    string;    // optional — bisa diisi URL sertifikat
};

const CERTIFICATES: Certificate[] = [
  {
    title:    'Data Science Competition Participant',
    issuer:   'ARA 7.0 – Institut Teknologi Sepuluh Nopember',
    date:     'Feb 2026',
    category: 'Competition',
    color:    'bg-neo-blue',
    // link: 'https://...',
  },
  {
    title:    'Laboratory Teaching Assistant',
    issuer:   'Website Programming – Universitas Padjadjaran',
    date:     '2025 – 2026',
    category: 'Academic',
    color:    'bg-neo-green',
  },
  {
    title:    'Laboratory Teaching Assistant',
    issuer:   'Object-Oriented Programming – Universitas Padjadjaran',
    date:     '2025 – 2026',
    category: 'Academic',
    color:    'bg-neo-yellow',
  },
  {
    title:    'Data Science Competition Participant',
    issuer:   'MCF ITB – Institut Teknologi Bandung',
    date:     '2025',
    category: 'Competition',
    color:    'bg-neo-pink',
  },
];

export default function CertificateSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });

  return (
    <section id="certificate" className="relative w-full py-20 bg-neo-bg border-b-4 border-black font-sora">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-16 flex justify-center transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="inline-block border-4 border-black bg-neo-pink px-8 py-3 text-4xl md:text-6xl font-black uppercase tracking-tighter shadow-neo -rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all">
            Certificates
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES.map((cert, index) => (
            <div
              key={index}
              style={{ transitionDelay: inView ? `${index * 100 + 150}ms` : '0ms' }}
              className={`group relative border-4 border-black bg-white p-6 shadow-neo hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-black ${cert.color} shadow-neo-sm -rotate-3 group-hover:rotate-0 transition-transform`}
                  >
                    <FaAward className="text-xl" />
                  </div>
                  <div>
                    <span className="inline-block border-2 border-black bg-white px-2 py-0.5 text-[10px] font-black uppercase mb-2 tracking-wider">
                      {cert.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-black uppercase leading-tight text-black mb-1">
                      {cert.title}
                    </h3>
                    <p className="font-black text-[11px] uppercase text-slate-600 mb-2">{cert.issuer}</p>
                    <p className="font-jakarta text-xs font-bold text-slate-500 italic">Issued: {cert.date}</p>
                  </div>
                </div>

                {/* View button — only shows if link is provided */}
                <div className="flex md:flex-col items-center justify-end flex-shrink-0">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-black bg-white px-4 py-2 text-[10px] font-black uppercase shadow-neo-sm hover:bg-neo-yellow transition-colors"
                    >
                      <FaExternalLinkAlt /> View Cert
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 border-2 border-black/20 bg-white px-4 py-2 text-[10px] font-black uppercase text-black/30 cursor-not-allowed">
                      <FaExternalLinkAlt /> No Link
                    </span>
                  )}
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute top-2 right-2 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <FaCertificate className="text-6xl rotate-12" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer note — consistent in English */}
        <div
          className={`mt-16 border-4 border-black bg-white p-6 md:p-8 shadow-neo max-w-3xl mx-auto text-center rotate-1 transition-all duration-700 ease-out delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-jakarta text-sm md:text-base font-bold text-slate-800 italic">
            &ldquo;These certificates represent dedication in national-level competitions and academic contributions as a laboratory teaching assistant.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}