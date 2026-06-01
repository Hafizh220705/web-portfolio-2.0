'use client';

import { useState } from 'react';
import { FaAward, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaImage, FaBuilding, FaCertificate } from 'react-icons/fa';
import { useInViewOnce } from '@/hooks/useInViewOnce';

type Certificate = {
  title:    string;
  issuer:   string;
  date:     string;
  category: string;
  color:    string;
  link?:    string;
  imageUrl?: string;
};

const CERTIFICATES: Certificate[] = [
  {
    title:    'Belajar Dasar AI',
    issuer:   'Dicoding ',
    date:     'April 2029',
    category: 'Technical',
    color:    'bg-neo-blue',
    imageUrl: 'images/certificates/certif1.png', // Tambahkan URL/path foto sertifikat
    link:     'https://drive.google.com/file/d/13mmZ-lXJAKiXPCIK5VLMXVc2eX8cUVwC/view?usp=sharing', // Contoh link, silakan diganti dengan link asli
  },
  {
    title:    'Belajar Machine Learning untuk Pemula',
    issuer:   'Dicoding',
    date:     'April 2029',
    category: 'Technical',
    color:    'bg-neo-green',
    imageUrl: 'images/certificates/certif2.png',
    link:     'https://drive.google.com/file/d/1lhg_nLVdgePKODCFB-pK09BSEruxAwlQ/view?usp=sharing'
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
  {
    title:    'Data Science Competition Participant',
    issuer:   'MCF ITB – Institut Teknologi Bandung',
    date:     '2025',
    category: 'Competition',
    color:    'bg-neo-pink',
  },
];

const ITEMS_PER_PAGE = 4;

export default function CertificateSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalPages = Math.ceil(CERTIFICATES.length / ITEMS_PER_PAGE) || 1;

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage || isAnimating) return;
    
    setIsAnimating(true);
    

    setTimeout(() => {
      setCurrentPage(newPage);
      setIsAnimating(false);
    }, 400); // durasi animasi out
  };

  const currentItems = CERTIFICATES.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const paddedItems = [...currentItems];
  while (paddedItems.length < ITEMS_PER_PAGE) {
    paddedItems.push(null as any);
  }

  const nextPage = () => handlePageChange(currentPage < totalPages ? currentPage + 1 : 1);
  const prevPage = () => handlePageChange(currentPage > 1 ? currentPage - 1 : totalPages);

  return (
    <section id="certificate" className="relative w-full py-20 bg-white border-b-4 border-black font-sora overflow-hidden">
      {/* Neo-brutalism Decorative Shapes */}
      <div className="absolute top-12 left-4 md:left-12 w-16 h-16 bg-neo-blue border-4 border-black rounded-full shadow-neo-sm pointer-events-none animate-bounce-slow"></div>
      <div className="absolute bottom-12 right-4 md:right-16 w-20 h-20 bg-neo-pink border-4 border-black rotate-12 shadow-neo pointer-events-none"></div>
      <div className="absolute top-1/2 left-2 md:left-6 w-10 h-10 bg-neo-yellow border-4 border-black rotate-45 shadow-neo-sm pointer-events-none"></div>
      
      {/* Additional Shapes Placed at Edges */}
      <div className="absolute top-8 right-12 md:right-32 w-12 h-12 bg-neo-green border-4 border-black shadow-neo pointer-events-none -rotate-12"></div>
      <div className="absolute bottom-8 left-12 md:left-24 w-14 h-14 bg-neo-blue border-4 border-black rounded-full shadow-neo-sm pointer-events-none rotate-45"></div>
      <div className="absolute top-[40%] right-2 md:right-8 w-8 h-8 bg-black border-2 border-black rotate-12 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[10%] w-24 h-6 bg-neo-pink border-4 border-black -rotate-12 shadow-neo-sm pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-[20%] left-[10%] w-6 h-20 bg-neo-green border-4 border-black rotate-12 shadow-neo-sm pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-[40%] right-8 md:right-12 w-10 h-10 bg-neo-yellow border-4 border-black rounded-full shadow-neo pointer-events-none animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
      
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-16 flex justify-center relative transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          {/* Ornamen Dekat Judul */}
          <div className="absolute -top-6 left-10 md:left-[35%] w-8 h-8 bg-neo-yellow border-4 border-black rotate-12 shadow-neo-sm pointer-events-none"></div>
          <div className="absolute -bottom-4 right-10 md:right-[32%] w-6 h-6 bg-neo-green border-4 border-black rounded-full shadow-neo-sm pointer-events-none animate-bounce-slow"></div>

          <h2 className="inline-block relative z-10 border-4 border-black bg-neo-pink px-8 py-3 text-4xl md:text-6xl font-black uppercase tracking-tighter shadow-neo -rotate-2 hover:rotate-0 hover:-translate-y-1 transition-all">
            Certificates
          </h2>
        </div>

        {/* Grid of 4 Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {paddedItems.map((cert, index) => {
            if (!cert) {
              return (
                <div key={`empty-${index}`} className="invisible pointer-events-none flex flex-col">
                  <div className="h-48 md:h-64 mb-6"></div>
                  <div className="p-6 h-[200px]"></div>
                </div>
              );
            }
            
            return (
              <div
                key={`${currentPage}-${index}`}
                className={`flex flex-col border-4 border-black bg-white shadow-neo hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-out ${
                  inView && !isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: isAnimating ? '0ms' : `${index * 100}ms` }}
              >
              {/* Photo Area */}
              <div className="h-48 md:h-64 border-b-4 border-black bg-neo-bg flex items-center justify-center overflow-hidden relative group">
                {cert.imageUrl ? (
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-400">
                    <FaImage className="text-5xl mb-3 opacity-30" />
                    <p className="font-jakarta text-xs font-bold uppercase tracking-widest">No Image</p>
                  </div>
                )}
                
                {/* Category Badge absolute */}
                <div className={`absolute top-4 right-4 border-2 border-black ${cert.color} px-3 py-1 shadow-neo-sm rotate-3`}>
                  <p className="text-[10px] font-black uppercase tracking-wider text-black">{cert.category}</p>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="font-jakarta text-xs font-bold text-slate-500 italic mb-2">Issued: {cert.date}</p>
                <h3 className="text-xl md:text-2xl font-black uppercase leading-tight text-black mb-3">
                  {cert.title}
                </h3>
                <p className="font-black text-xs uppercase text-slate-700 flex items-start gap-2 mb-6 flex-grow">
                  <FaBuilding className="text-lg flex-shrink-0 mt-0.5" />
                  {cert.issuer}
                </p>

                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-black bg-black text-white px-4 py-2 text-[10px] font-black uppercase shadow-neo-sm hover:bg-white hover:text-black hover:-translate-y-1 transition-all mt-auto"
                  >
                    <FaExternalLinkAlt /> View Link
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2 border-2 border-black/20 bg-slate-100 px-4 py-2 text-[10px] font-black uppercase text-slate-400 cursor-not-allowed mt-auto">
                    <FaExternalLinkAlt /> No Link
                  </span>
                )}
              </div>
            </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-6 mt-12 relative">
          {/* Ornamen Dekat Pagination */}
          <div className="absolute -top-8 left-4 md:left-[35%] w-8 h-8 bg-neo-blue border-4 border-black rotate-45 shadow-neo-sm pointer-events-none hidden md:block"></div>
          <div className="absolute -bottom-6 right-4 md:right-[35%] w-6 h-6 bg-white border-4 border-black shadow-neo-sm pointer-events-none"></div>
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
    </section>
  );
}