'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaBriefcase,
  FaArrowRight,
  FaTimes,
  FaImage,
} from 'react-icons/fa';

import { useInViewOnce } from '@/hooks/useInViewOnce';
import { EXPERIENCES } from '@/data/experiences';
import type { Experience } from '@/types';

function ExperienceCard({
  exp,
  index,
  inView,
  onOpenModal,
}: {
  exp: Experience;
  index: number;
  inView: boolean;
  onOpenModal: (exp: Experience) => void;
}) {
  return (
    <div
      style={{ transitionDelay: inView ? `${index * 120}ms` : '0ms' }}
      className={`relative transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

        {/* Dot icon / company logo */}
        <div className="relative flex md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2
          md:-translate-y-1/2 mb-4 md:mb-0 z-20 w-12 h-12 flex-shrink-0 items-center
          justify-center border-[3px] border-black bg-white shadow-neo-sm hover:scale-110
          transition-all overflow-hidden rounded-full"
        >
          {exp.companyLogo ? (
            <Image
              src={exp.companyLogo}
              alt={`${exp.company} logo`}
              fill
              sizes="(max-width: 768px) 48px, 48px"
              className={`w-full h-full object-cover rounded-full ${exp.logoScale || ''}`}
            />
          ) : (
            <span className="text-xl"><FaBriefcase /></span>
          )}
        </div>

        {/* Card */}
        <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
          <div
            className={`border-4 border-black ${exp.color} p-5 md:p-6 shadow-neo
              transition-all hover:-translate-y-1 hover:rotate-1
              hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group`}
          >
            {/* Category badge */}
            <div className="absolute top-4 right-4 border-2 border-black bg-white px-3 py-1
              shadow-neo-sm rotate-3 group-hover:rotate-0 transition-transform z-10"
            >
              <p className="text-[10px] font-black uppercase tracking-wider text-black">
                {exp.category}
              </p>
            </div>

            <span className="inline-block border-2 border-black bg-white px-3 py-1 text-[10px] font-black uppercase mb-3">
              {exp.date}
            </span>
            <h3 className="text-xl md:text-2xl font-black uppercase leading-tight mb-1 pr-16">
              {exp.title}
            </h3>
            <p className="font-black text-xs uppercase mb-6 opacity-70">
              @ {exp.company}
            </p>

            <button
              onClick={() => onOpenModal(exp)}
              className="cursor-pointer inline-flex items-center gap-2 border-2 border-black
                bg-black text-white px-4 py-2 text-xs font-black uppercase shadow-neo-sm
                hover:bg-white hover:text-black hover:-translate-y-1 transition-all w-fit"
            >
              Detail <FaArrowRight />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

function ExperienceModal({
  exp,
  isOpen,
  onClose,
}: {
  exp: Experience;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-5xl bg-white border-4 border-black p-6 md:p-8
          shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-y-auto max-h-[90vh]
          transition-all duration-300 transform
          ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 md:top-6 md:right-6 h-10 w-10
            flex items-center justify-center border-4 border-black bg-neo-pink text-black
            hover:bg-black hover:text-white transition-colors z-10 shadow-neo-sm"
        >
          <FaTimes className="text-xl" />
        </button>

        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-6 border-b-4 border-black pb-4 pr-12">
          {exp.title}
        </h3>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center border-[3px] border-black bg-white shadow-neo-sm overflow-hidden rounded-full">
            {exp.companyLogo ? (
              <Image
                src={exp.companyLogo}
                alt={`${exp.company} logo`}
                fill
                sizes="(max-width: 768px) 64px, 80px"
                className={`w-full h-full object-cover rounded-full ${exp.logoScale || ''}`}
              />
            ) : (
              <FaBriefcase className="text-2xl text-black/50" />
            )}
          </div>
          <div>
            <p className="font-black text-lg md:text-2xl uppercase text-black tracking-tight leading-tight mb-1">
              {exp.company}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-block border-2 border-black px-2 py-0.5 text-[10px] md:text-xs font-black uppercase text-black ${exp.color}`}>
                {exp.category}
              </span>
              <span className="font-jakarta text-xs md:text-sm font-bold text-slate-500">
                • {exp.date}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2 mb-6 flex flex-col md:flex-row gap-4 w-full h-auto md:h-[300px]">
          {/* Main photo */}
          <div className={`relative border-4 border-black bg-neo-bg w-full ${exp.supportingImages?.length ? 'md:w-2/3' : ''} h-[250px] md:h-full overflow-hidden group shadow-neo-sm`}>
            {exp.imageUrl ? (
              <Image
                src={exp.imageUrl}
                alt={`${exp.title} main photo`}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-neo-blue">
                <FaImage className="text-6xl text-black/20 mb-2" />
                <p className="text-black/40 font-black uppercase text-sm tracking-widest">Main Photo</p>
              </div>
            )}
          </div>

          {/* Supporting photos */}
          <div className="flex flex-row md:flex-col gap-4 w-full md:w-1/3 h-[150px] md:h-full">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="relative border-4 border-black bg-neo-bg w-1/2 md:w-full h-full md:h-[calc(50%-0.5rem)] overflow-hidden group shadow-neo-sm"
              >
                {exp.supportingImages?.[i] ? (
                  <Image
                    src={exp.supportingImages[i]}
                    alt={`Supporting photo ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full flex flex-col items-center justify-center ${i === 0 ? 'bg-neo-green' : 'bg-white'}`}>
                    <FaImage className="text-4xl text-black/20 mb-2" />
                    <p className="text-black/40 font-black uppercase text-xs tracking-widest">
                      Photo {i + 1}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div className="border-4 border-black bg-white p-6 md:p-8 shadow-neo-sm">
          <h4 className="font-black uppercase text-xl md:text-2xl text-black mb-4 border-b-4 border-black pb-2 inline-block">
            Responsibilities
          </h4>
          <ul className="font-jakarta text-sm md:text-base font-bold text-slate-700 list-disc list-outside ml-5 space-y-3">
            {exp.description.map((pt, i) => (
              <li key={i} className="leading-relaxed">{pt}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });
  const [selectedItem, setSelectedItem] = useState<Experience | null>(null);
  const [modalOpen, setModalOpen]       = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalOpen]);

  const openModal = (exp: Experience) => {
    setSelectedItem(exp);
    setTimeout(() => setModalOpen(true), 10);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <section
      id="experience"
      className="relative w-full py-20 bg-neo-bg bg-grid-pattern border-b-4 border-black font-sora"
    >
      {/* Background Decorations (Neo-Brutalism) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Pink Sparkle */}
        <svg
          className="absolute top-20 left-4 lg:left-16 w-16 h-16 text-neo-pink animate-[spin_10s_linear_infinite] hidden md:block drop-shadow-[6px_6px_0_rgba(0,0,0,1)] pointer-events-auto"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="black"
          strokeWidth="1.5"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>

        {/* Yellow Square */}
        <div className="absolute top-64 right-8 lg:right-20 w-16 h-16 lg:w-20 lg:h-20 bg-neo-yellow border-4 border-black shadow-neo rotate-12 hidden md:block hover:rotate-45 transition-transform duration-500 pointer-events-auto" />

        {/* Green Cross */}
        <svg
          className="absolute top-[45%] left-6 lg:left-12 w-16 h-16 lg:w-20 lg:h-20 text-neo-green -rotate-12 hidden md:block drop-shadow-[6px_6px_0_rgba(0,0,0,1)] pointer-events-auto hover:rotate-12 transition-transform duration-500"
          viewBox="0 0 100 100"
          fill="currentColor"
          stroke="black"
          strokeWidth="6"
        >
          <path d="M35 5 L65 5 L65 35 L95 35 L95 65 L65 65 L65 95 L35 95 L35 65 L5 65 L5 35 L35 35 Z" strokeLinejoin="miter" />
        </svg>

        {/* Blue Circle */}
        <div className="absolute bottom-32 right-10 lg:right-28 w-20 h-20 lg:w-24 lg:h-24 bg-neo-blue border-4 border-black rounded-full shadow-neo hidden md:block pointer-events-auto hover:-translate-y-2 transition-transform duration-300" />
        
        {/* Abstract shapes (Dots/Squares) */}
        <div className="absolute top-[80%] left-[15%] w-5 h-5 bg-black rotate-45 hidden lg:block" />
        <div className="absolute top-[20%] right-[30%] w-4 h-4 bg-black rounded-full hidden lg:block" />
        <div className="absolute bottom-[10%] right-[40%] w-4 h-4 border-4 border-black rounded-full hidden md:block" />

        {/* Pink Triangle */}
        <svg
          className="absolute top-[30%] right-[10%] lg:right-[15%] w-12 h-12 lg:w-16 lg:h-16 text-neo-pink hidden md:block drop-shadow-[4px_4px_0_rgba(0,0,0,1)] pointer-events-auto hover:rotate-[120deg] transition-transform duration-700"
          viewBox="0 0 100 100"
          fill="currentColor"
          stroke="black"
          strokeWidth="6"
        >
          <polygon points="50,10 90,90 10,90" strokeLinejoin="round" />
        </svg>

        {/* Yellow Pill */}
        <div className="absolute top-[60%] right-[2%] lg:right-[8%] w-10 h-24 lg:w-12 lg:h-32 bg-neo-yellow border-4 border-black rounded-full shadow-neo rotate-45 hidden lg:block pointer-events-auto hover:-rotate-12 transition-transform duration-500" />

        {/* Blue Semi-Circle */}
        <div className="absolute top-[10%] left-[30%] w-20 h-10 bg-neo-blue border-4 border-black rounded-t-full shadow-[4px_4px_0_rgba(0,0,0,1)] -rotate-12 hidden lg:block pointer-events-auto hover:scale-110 transition-transform duration-300" />

        {/* Empty Dashed Circle */}
        <div className="absolute top-[75%] left-[8%] w-20 h-20 border-[6px] border-black rounded-full border-dashed animate-[spin_15s_linear_infinite] hidden lg:block pointer-events-auto opacity-70" />
      </div>

      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-16 flex justify-center transition-all duration-700 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          <h2 className="inline-block border-4 border-black bg-neo-green px-8 py-3 text-4xl
            md:text-6xl font-black uppercase tracking-tighter shadow-neo rotate-1
            hover:rotate-0 hover:-translate-y-1 transition-all"
          >
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Centre line — hidden on mobile, visible md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-black opacity-20" />

          <div className="space-y-10 md:space-y-14">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${exp.date}`}
                exp={exp}
                index={index}
                inView={inView}
                onOpenModal={openModal}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Modal */}
      {selectedItem && (
        <ExperienceModal
          exp={selectedItem}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
}