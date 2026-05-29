'use client';

import { FaHandHoldingHeart, FaUsers, FaTools, FaLaptopCode } from 'react-icons/fa';
import type { ReactNode } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

type VolunteerItem = {
  role:         string;
  organization: string;
  period:       string;
  description:  string;
  color:        string;
  icon:         ReactNode;
};

const VOLUNTEERS: VolunteerItem[] = [
  {
    role:         'Head of Department',
    organization: 'Student Committee',
    period:       '2024 – 2025',
    description:
      'Memimpin departemen dalam organisasi mahasiswa, mengoordinasikan program kerja, dan memastikan visi organisasi tercapai.',
    color: 'bg-neo-blue',
    icon:  <FaUsers />,
  },
  {
    role:         'Head of Logistics',
    organization: 'Various Event Committees',
    period:       '2023 – 2025',
    description:
      'Bertanggung jawab atas manajemen aset, pengadaan perlengkapan, dan teknis pelaksanaan berbagai acara besar di kampus.',
    color: 'bg-neo-pink',
    icon:  <FaTools />,
  },
  {
    role:         'Laboratory Teaching Assistant',
    organization: 'Universitas Padjadjaran',
    period:       '2025 – 2026',
    description:
      'Memberikan bimbingan teknis dan bantuan akademik kepada mahasiswa dalam mata kuliah pemrograman.',
    color: 'bg-neo-green',
    icon:  <FaLaptopCode />,
  },
];

export default function VolunteerSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });

  return (
    <section id="volunteer" className="relative w-full py-20 bg-neo-bg bg-dot-pattern border-b-4 border-black font-sora">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-16 flex justify-center transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="inline-block border-4 border-black bg-white px-8 py-3 text-4xl md:text-6xl font-black uppercase tracking-tighter shadow-neo rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all">
            <span className="text-neo-blue">Volunteer</span> & Org
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VOLUNTEERS.map((item, index) => (
            <div
              key={index}
              style={{ transitionDelay: inView ? `${index * 120 + 150}ms` : '0ms' }}
              className={`group relative border-4 border-black bg-white p-6 shadow-neo hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center border-4 border-black ${item.color} shadow-neo-sm -rotate-3 group-hover:rotate-0 transition-transform`}
              >
                <span className="text-2xl text-black">{item.icon}</span>
              </div>

              <div className="space-y-3">
                <span className="inline-block border-2 border-black bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wider">
                  {item.period}
                </span>
                <h3 className="text-xl font-black uppercase leading-tight text-black">{item.role}</h3>
                <p className="font-black text-xs uppercase text-neo-pink tracking-tight">{item.organization}</p>
                <div className="pt-4 border-t-2 border-black/10">
                  <p className="font-jakarta text-sm font-semibold leading-relaxed text-slate-700">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="absolute top-4 right-4 text-black/5 group-hover:text-black/10 transition-colors pointer-events-none">
                <FaHandHoldingHeart className="text-4xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          className={`mt-16 flex justify-center transition-all duration-700 ease-out delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="border-2 border-black bg-neo-yellow px-6 py-4 shadow-neo-sm -rotate-1 max-w-2xl hover:rotate-0 transition-transform">
            <p className="text-center font-jakarta text-xs md:text-sm font-bold text-black uppercase tracking-tighter">
              Committed to giving back to the community through leadership and technical assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}