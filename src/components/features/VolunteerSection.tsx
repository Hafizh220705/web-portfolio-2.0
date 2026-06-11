'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FaHandHoldingHeart,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaImage,
} from 'react-icons/fa';

import { useInViewOnce } from '@/hooks/useInViewOnce';
import { usePagination } from '@/hooks/usePagination';
import { VOLUNTEERS, VOLUNTEER_ITEMS_PER_PAGE } from '@/data/volunteers';
import type { Volunteer } from '@/types';

function VolunteerCard({
  item,
  index,
  inView,
  isAnimating,
  onOpenModal,
}: {
  item: Volunteer;
  index: number;
  inView: boolean;
  isAnimating: boolean;
  onOpenModal: (item: Volunteer) => void;
}) {
  return (
    <div
      className={`flex flex-col group relative border-4 border-black bg-white p-6 shadow-neo
        hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-500 ease-out min-h-[380px]
        ${inView && !isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      style={{ transitionDelay: isAnimating ? '0ms' : `${index * 120}ms` }}
    >
      {/* Org Logo */}
      {item.orgLogo && (
        <div
          className={`mb-6 flex h-14 w-14 items-center justify-center border-4 border-black
            ${!item.transparentLogo ? 'bg-white' : item.color}
            shadow-neo-sm -rotate-3 group-hover:rotate-0 transition-transform flex-shrink-0 overflow-hidden`}
        >
          <Image
            src={item.orgLogo}
            alt={`${item.organization} logo`}
            width={56}
            height={56}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <div className="space-y-3 flex-grow">
        <span className="inline-block border-2 border-black bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wider">
          {item.period}
        </span>
        <h3 className="text-xl font-black uppercase leading-tight text-black line-clamp-2">
          {item.role}
        </h3>
        <p className="font-black text-xs uppercase text-neo-pink tracking-tight line-clamp-1">
          {item.organization}
        </p>
      </div>

      <button
        onClick={() => onOpenModal(item)}
        className="mt-8 w-full cursor-pointer py-3 border-4 border-black bg-neo-yellow text-black
          font-black uppercase text-sm shadow-neo-sm hover:bg-black hover:text-white
          hover:-translate-y-1 transition-all"
      >
        Detail
      </button>

      {/* Category badge */}
      <div
        className={`absolute top-4 right-4 border-2 border-black ${item.color} px-3 py-1
          shadow-neo-sm rotate-3 group-hover:rotate-0 transition-transform z-10`}
      >
        <p className="text-[10px] font-black uppercase tracking-wider text-black">
          {item.category}
        </p>
      </div>

      {/* Decorative icon */}
      <div className="absolute top-4 right-4 text-black/5 group-hover:text-black/10 transition-colors pointer-events-none">
        <FaHandHoldingHeart className="text-4xl" />
      </div>
    </div>
  );
}

function VolunteerModal({
  item,
  isOpen,
  onClose,
}: {
  item: Volunteer;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4
        bg-black/60 backdrop-blur-sm transition-opacity duration-300
        ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-4
          border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8
          transition-all duration-300 transform
          ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
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

        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-2 border-b-4 border-black pb-4 pr-12">
          {item.role}
        </h3>
        <p className="font-black text-sm md:text-lg uppercase text-neo-pink tracking-tight mb-6">
          {item.organization} • {item.period}
        </p>

        <div className="flex flex-col gap-4 w-full">

          {/* Photo row */}
          <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[300px]">

            {/* Main photo */}
            <div className="relative border-4 border-black bg-neo-bg w-full md:w-2/3 h-[250px] md:h-full overflow-hidden group">
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={`${item.role} main photo`}
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
                  className="relative border-4 border-black bg-neo-bg w-1/2 md:w-full h-full md:h-[calc(50%-0.5rem)] overflow-hidden group"
                >
                  {item.supportingImages?.[i] ? (
                    <Image
                      src={item.supportingImages[i]}
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

          {/* Description */}
          <div className="border-4 border-black bg-white p-6 md:p-8 w-full flex flex-col max-h-[400px] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 pb-2 mb-4 border-b-4 border-black">
              <h4 className="font-black uppercase text-xl md:text-2xl text-black">
                Job Description
              </h4>
            </div>
            <div className="font-jakarta text-sm md:text-base font-bold text-slate-800">
              {item.description ? (
                <ul className="list-disc list-outside ml-5 space-y-3">
                  {item.description
                    .split('\n')
                    .filter(Boolean)
                    .map((point, idx) => (
                      <li key={idx} className="leading-snug">
                        {point.replace(/^-\s*/, '')}
                      </li>
                    ))}
                </ul>
              ) : (
                <p className="text-slate-500 italic">No description available.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function PaginationControls({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  onGoTo,
}: {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (page: number) => void;
}) {
  return (
    <div className="flex justify-center items-center gap-6 mt-8">
      <button
        onClick={onPrev}
        className="cursor-pointer flex items-center justify-center h-12 w-12 border-4 border-black
          bg-neo-pink shadow-neo-sm hover:-translate-y-1 hover:shadow-neo transition-all"
      >
        <FaChevronLeft className="text-xl" />
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onGoTo(idx + 1)}
            aria-label={`Go to page ${idx + 1}`}
            className={`cursor-pointer h-4 w-4 border-2 border-black transition-all
              ${idx + 1 === currentPage ? 'bg-black scale-110' : 'bg-white hover:bg-slate-200'}`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="cursor-pointer flex items-center justify-center h-12 w-12 border-4 border-black
          bg-neo-blue shadow-neo-sm hover:-translate-y-1 hover:shadow-neo transition-all"
      >
        <FaChevronRight className="text-xl" />
      </button>
    </div>
  );
}

export default function VolunteerSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });
  const [selectedItem, setSelectedItem] = useState<Volunteer | null>(null);
  const [modalOpen, setModalOpen]       = useState(false);

  const {
    currentPage,
    totalPages,
    isAnimating,
    lockedHeight,
    gridRef,
    goToPage,
    nextPage,
    prevPage,
    currentItems,
  } = usePagination({ totalItems: VOLUNTEERS.length, itemsPerPage: VOLUNTEER_ITEMS_PER_PAGE });

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalOpen]);

  const openModal = (item: Volunteer) => {
    setSelectedItem(item);
    setTimeout(() => setModalOpen(true), 10);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <section
      id="volunteer"
      className="relative w-full py-20 bg-neo-green border-b-4 border-black font-sora"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-16 flex justify-center transition-all duration-700 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          <h2 className="inline-block border-4 border-black bg-white px-8 py-3 text-4xl md:text-6xl
            font-black uppercase tracking-tighter shadow-neo rotate-1 hover:rotate-0
            hover:-translate-y-1 transition-all"
          >
            <span className="text-neo-blue">Volunteer</span> & Org
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={gridRef}
          style={{ minHeight: lockedHeight }}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-opacity duration-300
            ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
          {currentItems(VOLUNTEERS).map((item, index) => (
            <VolunteerCard
              key={`${currentPage}-${index}`}
              item={item}
              index={index}
              inView={inView}
              isAnimating={isAnimating}
              onOpenModal={openModal}
            />
          ))}
        </div>

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={prevPage}
          onNext={nextPage}
          onGoTo={goToPage}
        />

      </div>

      {/* Modal */}
      {selectedItem && (
        <VolunteerModal
          item={selectedItem}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
}