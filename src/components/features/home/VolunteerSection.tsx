'use client';

import { useState } from 'react';
import { FaHandHoldingHeart, FaUsers, FaTools, FaLaptopCode, FaChevronLeft, FaChevronRight, FaTimes, FaImage, FaCalendarAlt } from 'react-icons/fa';
import type { ReactNode } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

type VolunteerItem = {
  role:         string;
  organization: string;
  period:       string;
  description:  string;
  imageUrl?:    string; // Image for the bento popup
  category:     string;
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
    imageUrl: '', // Tambahkan URL/path foto volunteer di sini
    category: 'Organization',
    color: 'bg-neo-blue',
    icon:  <FaUsers />,
  },
  {
    role:         'Head of Logistics',
    organization: 'Various Event Committees',
    period:       '2023 – 2025',
    description:
      'Bertanggung jawab atas manajemen aset, pengadaan perlengkapan, dan teknis pelaksanaan berbagai acara besar di kampus.',
    imageUrl: '',
    category: 'Volunteer',
    color: 'bg-neo-pink',
    icon:  <FaTools />,
  },
  {
    role:         'Laboratory Teaching Assistant',
    organization: 'Universitas Padjadjaran',
    period:       '2025 – 2026',
    description:
      'Memberikan bimbingan teknis dan bantuan akademik kepada mahasiswa dalam mata kuliah pemrograman.',
    imageUrl: '',
    category: 'Organization',
    color: 'bg-neo-green',
    icon:  <FaLaptopCode />,
  },
  {
    role:         'Laboratory Teaching Assistant',
    organization: 'Universitas Padjadjaran',
    period:       '2025 – 2026',
    description:
      'Memberikan bimbingan teknis dan bantuan akademik kepada mahasiswa dalam mata kuliah pemrograman.',
    imageUrl: '',
    category: 'Organization',
    color: 'bg-neo-green',
    icon:  <FaLaptopCode />,
  },
];

const ITEMS_PER_PAGE = 3;

export default function VolunteerSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedItem, setSelectedItem] = useState<VolunteerItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const totalPages = Math.ceil(VOLUNTEERS.length / ITEMS_PER_PAGE) || 1;

  const openModal = (item: VolunteerItem) => {
    setSelectedItem(item);
    setTimeout(() => setModalOpen(true), 10);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage || isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsAnimating(false);
    }, 400); 
  };

  const currentItems = VOLUNTEERS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const nextPage = () => handlePageChange(currentPage < totalPages ? currentPage + 1 : 1);
  const prevPage = () => handlePageChange(currentPage > 1 ? currentPage - 1 : totalPages);

  return (
    <section id="volunteer" className="relative w-full py-20 bg-neo-green border-b-4 border-black font-sora">
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
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 min-h-[300px] transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {currentItems.map((item, index) => (
            <div
              key={`${currentPage}-${index}`}
              className={`flex flex-col group relative border-4 border-black bg-white p-6 shadow-neo hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-out ${
                inView && !isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: isAnimating ? '0ms' : `${index * 120}ms` }}
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center border-4 border-black ${item.color} shadow-neo-sm -rotate-3 group-hover:rotate-0 transition-transform flex-shrink-0`}
              >
                <span className="text-2xl text-black">{item.icon}</span>
              </div>

              <div className="space-y-3 flex-grow">
                <span className="inline-block border-2 border-black bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wider">
                  {item.period}
                </span>
                <h3 className="text-xl font-black uppercase leading-tight text-black">{item.role}</h3>
                <p className="font-black text-xs uppercase text-neo-pink tracking-tight">{item.organization}</p>
                <div className="pt-4 border-t-2 border-black/10">
                  <p className="font-jakarta text-sm font-semibold leading-relaxed text-slate-700 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Detail Button */}
              <button 
                onClick={() => openModal(item)}
                className="mt-8 w-full cursor-pointer py-3 border-4 border-black bg-neo-yellow text-black font-black uppercase text-sm shadow-neo-sm hover:bg-black hover:text-white hover:-translate-y-1 transition-all"
              >
                Detail
              </button>

              {/* Category Badge */}
              <div className={`absolute top-4 right-4 border-2 border-black ${item.color} px-3 py-1 shadow-neo-sm rotate-3 group-hover:rotate-0 transition-transform z-10`}>
                <p className="text-[10px] font-black uppercase tracking-wider text-black">{item.category}</p>
              </div>

              {/* Decorative background icon */}
              <div className="absolute top-4 right-4 text-black/5 group-hover:text-black/10 transition-colors pointer-events-none">
                <FaHandHoldingHeart className="text-4xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button 
            onClick={prevPage}
            className="cursor-pointer flex items-center justify-center h-12 w-12 border-4 border-black bg-neo-pink shadow-neo-sm hover:-translate-y-1 hover:shadow-neo transition-all"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className={`cursor-pointer h-4 w-4 border-2 border-black transition-all ${idx + 1 === currentPage ? 'bg-black scale-110' : 'bg-white hover:bg-slate-200'}`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextPage}
            className="cursor-pointer flex items-center justify-center h-12 w-12 border-4 border-black bg-neo-blue shadow-neo-sm hover:-translate-y-1 hover:shadow-neo transition-all"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

      </div>

      {/* Modal Popup (Bento Grid) */}
      {selectedItem && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${modalOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 transition-all duration-300 transform ${modalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="cursor-pointer absolute top-4 right-4 md:top-6 md:right-6 h-10 w-10 flex items-center justify-center border-4 border-black bg-neo-pink text-black hover:bg-black hover:text-white transition-colors z-10 shadow-neo-sm"
            >
              <FaTimes className="text-xl" />
            </button>

            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-6 border-b-4 border-black pb-4 pr-12">
              {selectedItem.category} <span className={selectedItem.color.replace('bg-', 'text-')}>Detail</span>
            </h3>

            {/* Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[130px] md:auto-rows-[160px]">
              
              {/* 1. Top Left: Category Ticket (1x1) */}
              <div className="col-span-1 row-span-1 border-4 border-black bg-white flex flex-col items-center justify-center p-2 text-center relative overflow-hidden group">
                 <p className="text-[10px] font-black uppercase text-neo-pink tracking-widest mb-1">Status</p>
                 <p className="font-black text-xs md:text-sm uppercase text-black">{selectedItem.category}</p>
                 {/* Barcode aesthetic */}
                 <div className="absolute bottom-3 flex gap-1 px-2 opacity-40">
                    <div className="w-1 h-3 bg-black"></div><div className="w-2 h-3 bg-black"></div><div className="w-1 h-3 bg-black"></div><div className="w-3 h-3 bg-black"></div><div className="w-1 h-3 bg-black"></div>
                 </div>
              </div>

              {/* 2. Top Mid-1: Icon (1x1) */}
              <div className={`col-span-1 row-span-1 border-4 border-black ${selectedItem.color} flex flex-col items-center justify-center p-4`}>
                 <span className="text-4xl text-black mb-2">{selectedItem.icon}</span>
                 <p className="text-black font-black uppercase text-[10px] tracking-widest text-center">Active</p>
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
                 <p className="text-white font-sora text-[10px] font-bold">11:52</p>
                 <div className="grid grid-cols-2 gap-2 mt-2">
                   <div className="w-full h-6 md:h-8 bg-neo-pink rounded-sm hover:scale-95 transition-transform"></div>
                   <div className="w-full h-6 md:h-8 bg-white rounded-sm hover:scale-95 transition-transform"></div>
                   <div className="w-full h-6 md:h-8 bg-neo-green rounded-sm hover:scale-95 transition-transform"></div>
                   <div className="w-full h-6 md:h-8 bg-neo-blue rounded-sm hover:scale-95 transition-transform"></div>
                 </div>
              </div>

              {/* 6. Center: Description (2x1) */}
              <div className="col-span-2 row-span-1 border-4 border-black bg-white p-4 flex flex-col justify-center items-center text-center group hover:bg-neo-yellow transition-colors relative overflow-hidden">
                 <h5 className="font-black uppercase text-xs md:text-sm text-black mb-1 md:mb-2 z-10 border-b-2 border-black pb-1">Overview</h5>
                 <p className="font-jakarta text-[10px] md:text-xs font-bold text-slate-700 leading-snug z-10">
                  {selectedItem.description}
                 </p>
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
                <p className="relative z-10 text-white font-black uppercase text-sm md:text-lg leading-tight mt-auto drop-shadow-md">Connecting Ideas,<br/>Empowering Innovation</p>
              </div>

              {/* 8. Bottom Mid: Green Quote (1x1) */}
              <div className="col-span-1 row-span-1 border-4 border-black bg-neo-green p-2 flex flex-col justify-center items-center text-center hover:bg-black group transition-colors">
                 <p className="font-black text-white text-[10px] md:text-xs uppercase leading-tight group-hover:text-neo-green">Impact<br/>Driven</p>
              </div>

              {/* 9. Bottom Right: Decor Logo (1x1) */}
              <div className="col-span-1 row-span-1 border-4 border-black bg-white flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 border-[6px] md:border-[8px] border-neo-blue m-2 group-hover:rotate-12 transition-transform duration-300"></div>
                 <p className="font-black text-black uppercase transform -rotate-90 text-sm md:text-base tracking-widest z-10">ACT</p>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </section>
  );
}