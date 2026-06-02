'use client';

import { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaUsers, FaArrowRight, FaTimes, FaImage } from 'react-icons/fa';
import type { ReactNode } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

type Experience = {
  title: string;
  company: string;
  date: string;
  category: string;
  description: string[];
  color: string;
  icon: ReactNode;
  imageUrl?: string;
  companyLogo?: string;
};

const EXPERIENCES: Experience[] = [
  {
    title: 'Backend Developer Intern',
    company: 'Elevated Indonesia',
    date: 'Jul 2025',
    category: 'Internship',
    description: [
      'Fokus pada pengembangan sisi server dan manajemen database.',
      'Melakukan integrasi API untuk meningkatkan skalabilitas platform perusahaan.',
      'Berkolaborasi dalam tim untuk memastikan kelancaran alur data.'
    ],
    color: 'bg-neo-green',
    icon: <FaBriefcase />,
    imageUrl: '', // Tambahkan URL/path foto di sini
    companyLogo: '', // Tambahkan URL/path logo perusahaan di sini
  },
  {
    title: 'Information Technology Developer',
    company: 'UNPAD Luhung',
    date: 'Professional Experience',
    category: 'Full-time',
    description: [
      'Mengembangkan solusi IT internal berbasis teknologi web.',
      'Mengelola infrastruktur digital untuk mendukung operasional organisasi.',
      'Memastikan keandalan sistem dalam berbagai kegiatan himpunan.'
    ],
    color: 'bg-neo-blue',
    icon: <FaBriefcase />,
    imageUrl: '',
    companyLogo: '',
  },
  {
    title: 'Laboratory Teaching Assistant',
    company: 'Universitas Padjadjaran',
    date: '2025 – 2026',
    category: 'Academic',
    description: [
      'Menjadi asisten praktikum mata kuliah Object-Oriented Programming.',
      'Membantu mahasiswa dalam memahami konsep pemrograman terstruktur.',
      'Mengevaluasi dan memberikan penilaian pada tugas serta ujian.'
    ],
    color: 'bg-neo-yellow',
    icon: <FaGraduationCap />,
    imageUrl: '',
    companyLogo: '',
  },
  {
    title: 'Head of Department & Logistics',
    company: 'Student Committee',
    date: 'Organizational Experience',
    category: 'Organization',
    description: [
      'Bertanggung jawab atas manajemen logistik kegiatan kemahasiswaan.',
      'Memimpin departemen dalam merencanakan program kerja tahunan.',
      'Berkoordinasi dengan pihak internal dan eksternal kampus.'
    ],
    color: 'bg-neo-pink',
    icon: <FaUsers />,
    imageUrl: '',
    companyLogo: '',
  },
];

export default function ExperienceSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });
  const [selectedItem, setSelectedItem] = useState<Experience | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (item: Experience) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
    setTimeout(() => setModalOpen(true), 10); // Delay so mount animation plays
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedItem(null), 300); // Wait for transition
  };

  return (
    <section
      id="experience"
      className="relative w-full py-20 bg-neo-bg bg-grid-pattern border-b-4 border-black font-sora"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-16 flex justify-center transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
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
                className={`relative transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                {/* Mobile layout: simple card stack */}
                <div className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                  {/* Dot icon / Logo — centred on desktop, left-aligned on mobile */}
                  <div className="relative flex md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0 z-20 w-12 h-12 flex-shrink-0 items-center justify-center border-[3px] border-black bg-white shadow-neo-sm hover:scale-110 transition-all overflow-hidden rounded-full">
                    {exp.companyLogo ? (
                      <img src={exp.companyLogo} alt={`${exp.company} logo`} className="w-full h-full object-cover p-1" />
                    ) : (
                      <span className="text-xl">{exp.icon}</span>
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                      }`}
                  >
                    <div
                      className={`border-4 border-black ${exp.color} p-5 md:p-6 shadow-neo transition-all hover:-translate-y-1 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group`}
                    >
                      {/* Category Badge absolute at Top Right */}
                      <div className="absolute top-4 right-4 border-2 border-black bg-white px-3 py-1 shadow-neo-sm rotate-3 group-hover:rotate-0 transition-transform z-10">
                        <p className="text-[10px] font-black uppercase tracking-wider text-black">{exp.category}</p>
                      </div>

                      <span className="inline-block border-2 border-black bg-white px-3 py-1 text-[10px] font-black uppercase mb-3">
                        {exp.date}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black uppercase leading-tight mb-1 pr-16">
                        {exp.title}
                      </h3>
                      <p className="font-black text-xs uppercase mb-6 opacity-70">@ {exp.company}</p>

                      {/* Detail Button */}
                      <button
                        onClick={() => openModal(exp)}
                        className="cursor-pointer inline-flex items-center gap-2 border-2 border-black bg-black text-white px-4 py-2 text-xs font-black uppercase shadow-neo-sm hover:bg-white hover:text-black hover:-translate-y-1 transition-all w-fit"
                      >
                        Detail <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className={`absolute inset-0 bg-neo-bg/90 backdrop-blur-sm transition-opacity duration-300 ${modalOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={closeModal}
          ></div>

          <div
            className={`relative w-full max-w-5xl bg-white border-4 border-black p-6 md:p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-y-auto max-h-[90vh] transition-all duration-300 transform ${modalOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'}`}
          >
            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-4 right-4 md:top-6 md:right-6 h-10 w-10 flex items-center justify-center border-4 border-black bg-neo-pink text-black hover:bg-black hover:text-white transition-colors z-10 shadow-neo-sm"
            >
              <FaTimes className="text-xl" />
            </button>

            {selectedItem && (
              <>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-6 border-b-4 border-black pb-4 pr-12">
                  {selectedItem.category} <span className={selectedItem.color.replace('bg-', 'text-')}>Detail</span>
                </h3>

                {/* 9-Block Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[130px] md:auto-rows-[160px]">

                  {/* 1. Top Left: Category Ticket (1x1) */}
                  <div className="col-span-1 row-span-1 border-4 border-black bg-white flex flex-col items-center justify-center p-2 text-center relative overflow-hidden group">
                    <p className="text-[10px] font-black uppercase text-neo-pink tracking-widest mb-1">Role</p>
                    <p className="font-black text-xs md:text-sm uppercase text-black">{selectedItem.category}</p>
                    <div className="absolute bottom-3 flex gap-1 px-2 opacity-40">
                      <div className="w-1 h-3 bg-black"></div><div className="w-2 h-3 bg-black"></div><div className="w-1 h-3 bg-black"></div><div className="w-3 h-3 bg-black"></div><div className="w-1 h-3 bg-black"></div>
                    </div>
                  </div>

                  {/* 2. Top Mid-1: Icon / Company Logo (1x1) */}
                  <div className={`col-span-1 row-span-1 border-4 border-black ${selectedItem.color} flex flex-col items-center justify-center p-2 relative overflow-hidden group`}>
                    {selectedItem.companyLogo ? (
                      <img src={selectedItem.companyLogo} alt={`${selectedItem.company} logo`} className="w-16 h-16 md:w-20 md:h-20 object-contain bg-white rounded-full p-2 border-4 border-black group-hover:scale-110 transition-transform shadow-neo-sm" />
                    ) : (
                      <>
                        <span className="text-4xl text-black mb-2">{selectedItem.icon}</span>
                        <p className="text-black font-black uppercase text-[10px] tracking-widest text-center">Verified</p>
                      </>
                    )}
                  </div>

                  {/* 3. Top Mid-2: Photo Thumbnail (1x1) */}
                  <div className="col-span-1 row-span-1 border-4 border-black bg-neo-bg overflow-hidden relative">
                    {selectedItem.imageUrl ? (
                      <img src={selectedItem.imageUrl} alt="thumbnail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300"><FaImage className="text-3xl" /></div>
                    )}
                  </div>

                  {/* 4. Top Right: Tall Photo (1x2) */}
                  <div className="col-span-1 row-span-2 border-4 border-black bg-neo-bg overflow-hidden relative group">
                    {selectedItem.imageUrl ? (
                      <img src={selectedItem.imageUrl} alt="tall" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" style={{ objectPosition: 'right' }} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-neo-blue"><FaImage className="text-5xl text-black/20" /></div>
                    )}
                  </div>

                  {/* 5. Mid Left: Decor UI mimic (1x1) */}
                  <div className="col-span-1 row-span-1 border-4 border-black bg-black p-3 md:p-4 flex flex-col justify-between">
                    <p className="text-white font-sora text-[10px] font-bold">{selectedItem.date}</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="w-full h-6 md:h-8 bg-neo-pink rounded-sm hover:scale-95 transition-transform"></div>
                      <div className="w-full h-6 md:h-8 bg-white rounded-sm hover:scale-95 transition-transform"></div>
                      <div className="w-full h-6 md:h-8 bg-neo-green rounded-sm hover:scale-95 transition-transform"></div>
                      <div className="w-full h-6 md:h-8 bg-neo-blue rounded-sm hover:scale-95 transition-transform"></div>
                    </div>
                  </div>

                  {/* 6. Center: Description List (2x1) */}
                  <div className="col-span-2 row-span-1 border-4 border-black bg-white p-4 flex flex-col justify-center items-start text-left group hover:bg-neo-yellow transition-colors relative overflow-hidden overflow-y-auto">
                    <h5 className="font-black uppercase text-xs md:text-sm text-black mb-2 z-10 border-b-2 border-black pb-1 self-center">Responsibilities</h5>
                    <ul className="font-jakarta text-[10px] md:text-xs font-bold text-slate-700 leading-snug z-10 list-disc list-outside pl-4 space-y-1">
                      {selectedItem.description.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                  </div>

                  {/* 7. Bottom Left: Wide Billboard (2x1) */}
                  <div className="col-span-2 row-span-1 border-4 border-black bg-neo-bg overflow-hidden relative group flex flex-col justify-end p-4">
                    {selectedItem.imageUrl ? (
                      <>
                        <img src={selectedItem.imageUrl} alt="wide" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{ objectPosition: 'bottom' }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-neo-pink"></div>
                    )}
                    <p className="relative z-10 text-white font-black uppercase text-sm md:text-lg leading-tight mt-auto drop-shadow-md">Building The Future,<br />One Step At A Time</p>
                  </div>

                  {/* 8. Bottom Mid: Green Quote (1x1) */}
                  <div className="col-span-1 row-span-1 border-4 border-black bg-neo-green p-2 flex flex-col justify-center items-center text-center hover:bg-black group transition-colors">
                    <p className="font-black text-white text-[10px] md:text-xs uppercase leading-tight group-hover:text-neo-green">Career<br />Driven</p>
                  </div>

                  {/* 9. Bottom Right: Decor Logo (1x1) */}
                  <div className="col-span-1 row-span-1 border-4 border-black bg-white flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 border-[6px] md:border-[8px] border-neo-blue m-2 group-hover:rotate-12 transition-transform duration-300"></div>
                    <p className="font-black text-black uppercase transform -rotate-90 text-sm md:text-base tracking-widest z-10">EXP</p>
                  </div>

                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}