'use client';

import { FaBriefcase, FaGraduationCap, FaUsers } from 'react-icons/fa';
import type { ReactNode } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
  color: string;
  icon: ReactNode;
};

// Data dipindah ke konstanta terpisah agar mudah di-update
const EXPERIENCES: Experience[] = [
  {
    title: 'Backend Developer Intern',
    company: 'Elevated Indonesia',
    date: 'Jul 2025',         
    description:
      'Fokus pada pengembangan sisi server dan integrasi API untuk meningkatkan skalabilitas platform perusahaan.',
    color: 'bg-neo-green',
    icon: <FaBriefcase />,
  },
  {
    title: 'Information Technology Developer',
    company: 'UNPAD Luhung',
    date: 'Professional Experience',
    description:
      'Mengembangkan solusi IT internal dan mengelola infrastruktur digital untuk mendukung operasional organisasi.',
    color: 'bg-neo-blue',
    icon: <FaBriefcase />,
  },
  {
    title: 'Laboratory Teaching Assistant',
    company: 'Universitas Padjadjaran',
    date: '2025 – 2026',
    description:
      'Menjadi asisten praktikum untuk mata kuliah Object-Oriented Programming (OOP) dan Website Programming.',
    color: 'bg-neo-yellow',
    icon: <FaGraduationCap />,
  },
  {
    title: 'Head of Department & Logistics',
    company: 'Student Committee',
    date: 'Organizational Experience',
    description:
      'Bertanggung jawab atas manajemen logistik dan kepemimpinan departemen dalam berbagai kegiatan kemahasiswaan.',
    color: 'bg-neo-pink',
    icon: <FaUsers />,
  },
];

export default function ExperienceSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });

  return (
    <section
      id="experience"
      className="relative w-full py-20 bg-neo-bg bg-grid-pattern border-b-4 border-black font-sora"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-16 flex justify-center transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="inline-block border-4 border-black bg-neo-green px-8 py-3 text-4xl md:text-6xl font-black uppercase tracking-tighter shadow-neo transform rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Centre line — hidden on mobile, visible md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-black opacity-20" />

          <div className="space-y-10 md:space-y-14">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                style={{ transitionDelay: inView ? `${index * 120}ms` : '0ms' }}
                className={`relative transition-all duration-700 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Mobile layout: simple card stack */}
                <div className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                  {/* Dot icon — centred on desktop, left-aligned on mobile */}
                  <div className="relative flex md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0 z-20 w-10 h-10 flex-shrink-0 items-center justify-center border-[3px] border-black bg-white shadow-neo-sm hover:scale-110 transition-all">
                    <span className="text-lg">{exp.icon}</span>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[45%] ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div
                      className={`border-4 border-black ${exp.color} p-5 md:p-6 shadow-neo transition-all hover:-translate-y-1 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
                    >
                      <span className="inline-block border-2 border-black bg-white px-3 py-1 text-[10px] font-black uppercase mb-3">
                        {exp.date}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black uppercase leading-tight mb-1">
                        {exp.title}
                      </h3>
                      <p className="font-black text-xs uppercase mb-4 opacity-70">@ {exp.company}</p>
                      <p className="font-jakarta text-sm font-semibold leading-relaxed text-black/90">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}