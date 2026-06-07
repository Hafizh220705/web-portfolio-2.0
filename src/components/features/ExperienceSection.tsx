'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaArrowRight,
  FaTimes,
  FaImage,
} from 'react-icons/fa';
import type { ReactNode } from 'react';

import { useInViewOnce } from '@/hooks/useInViewOnce';
import { EXPERIENCES } from '@/data/experiences';
import type { Experience } from '@/types';

const ICON_MAP: Record<Experience['iconName'], ReactNode> = {
  briefcase:  <FaBriefcase />,
  graduation: <FaGraduationCap />,
  users:      <FaUsers />,
};

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
              width={48}
              height={48}
              className="w-full h-full object-cover p-1"
            />
          ) : (
            <span className="text-xl">{ICON_MAP[exp.iconName]}</span>
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

        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-6
          border-b-4 border-black pb-4 pr-12"
        >
          {exp.category}{' '}
          <span className={exp.color.replace('bg-', 'text-')}>Detail</span>
        </h3>

        {/* 9-block bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[130px] md:auto-rows-[160px]">

          {/* 1. Role ticket */}
          <div className="col-span-1 row-span-1 border-4 border-black bg-white flex flex-col
            items-center justify-center p-2 text-center relative overflow-hidden"
          >
            <p className="text-[10px] font-black uppercase text-neo-pink tracking-widest mb-1">Role</p>
            <p className="font-black text-xs md:text-sm uppercase text-black">{exp.category}</p>
            <div className="absolute bottom-3 flex gap-1 px-2 opacity-40">
              {[1, 2, 1, 3, 1].map((w, i) => (
                <div key={i} className={`w-${w} h-3 bg-black`} />
              ))}
            </div>
          </div>

          {/* 2. Company logo */}
          <div className={`col-span-1 row-span-1 border-4 border-black ${exp.color}
            flex flex-col items-center justify-center p-2 relative overflow-hidden group`}
          >
            {exp.companyLogo ? (
              <Image
                src={exp.companyLogo}
                alt={`${exp.company} logo`}
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 object-contain bg-white rounded-full p-2
                  border-4 border-black group-hover:scale-110 transition-transform shadow-neo-sm"
              />
            ) : (
              <>
                <span className="text-4xl text-black mb-2">{ICON_MAP[exp.iconName]}</span>
                <p className="text-black font-black uppercase text-[10px] tracking-widest text-center">
                  Verified
                </p>
              </>
            )}
          </div>

          {/* 3. Photo thumbnail */}
          <div className="col-span-1 row-span-1 border-4 border-black bg-neo-bg overflow-hidden relative">
            {exp.imageUrl ? (
              <Image
                src={exp.imageUrl}
                alt={`${exp.title} thumbnail`}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-300">
                <FaImage className="text-3xl" />
              </div>
            )}
          </div>

          {/* 4. Tall photo (spans 2 rows) */}
          <div className="col-span-1 row-span-2 border-4 border-black bg-neo-bg overflow-hidden relative group">
            {exp.imageUrl ? (
              <Image
                src={exp.imageUrl}
                alt={`${exp.title} tall`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                style={{ objectPosition: 'right' }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-neo-blue">
                <FaImage className="text-5xl text-black/20" />
              </div>
            )}
          </div>

          {/* 5. Date + color swatches */}
          <div className="col-span-1 row-span-1 border-4 border-black bg-black p-3 md:p-4 flex flex-col justify-between">
            <p className="text-white font-sora text-[10px] font-bold">{exp.date}</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {['bg-neo-pink', 'bg-white', 'bg-neo-green', 'bg-neo-blue'].map((color) => (
                <div key={color} className={`w-full h-6 md:h-8 ${color} rounded-sm hover:scale-95 transition-transform`} />
              ))}
            </div>
          </div>

          {/* 6. Responsibilities (spans 2 cols) */}
          <div className="col-span-2 row-span-1 border-4 border-black bg-white p-4 flex flex-col
            justify-center items-start text-left group hover:bg-neo-yellow transition-colors
            relative overflow-hidden overflow-y-auto"
          >
            <h5 className="font-black uppercase text-xs md:text-sm text-black mb-2 z-10
              border-b-2 border-black pb-1 self-center"
            >
              Responsibilities
            </h5>
            <ul className="font-jakarta text-[10px] md:text-xs font-bold text-slate-700
              leading-snug z-10 list-disc list-outside pl-4 space-y-1"
            >
              {exp.description.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>
          </div>

          {/* 7. Wide billboard (spans 2 cols) */}
          <div className="col-span-2 row-span-1 border-4 border-black bg-neo-bg overflow-hidden
            relative group flex flex-col justify-end p-4"
          >
            {exp.imageUrl ? (
              <>
                <Image
                  src={exp.imageUrl}
                  alt={`${exp.title} wide`}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ objectPosition: 'bottom' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 bg-neo-pink" />
            )}
            <p className="relative z-10 text-white font-black uppercase text-sm md:text-lg
              leading-tight mt-auto drop-shadow-md"
            >
              Building The Future,<br />One Step At A Time
            </p>
          </div>

          {/* 8. Career driven badge */}
          <div className="col-span-1 row-span-1 border-4 border-black bg-neo-green p-2 flex
            flex-col justify-center items-center text-center hover:bg-black group transition-colors"
          >
            <p className="font-black text-white text-[10px] md:text-xs uppercase leading-tight group-hover:text-neo-green">
              Career<br />Driven
            </p>
          </div>

          {/* 9. Decorative EXP block */}
          <div className="col-span-1 row-span-1 border-4 border-black bg-white flex items-center
            justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 border-[6px] md:border-[8px] border-neo-blue m-2
              group-hover:rotate-12 transition-transform duration-300"
            />
            <p className="font-black text-black uppercase transform -rotate-90 text-sm md:text-base
              tracking-widest z-10"
            >
              EXP
            </p>
          </div>

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