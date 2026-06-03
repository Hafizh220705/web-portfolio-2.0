'use client';

import { useState, useRef } from 'react';
import { FaHandHoldingHeart, FaUsers, FaTools, FaLaptopCode, FaChevronLeft, FaChevronRight, FaTimes, FaImage } from 'react-icons/fa';
import type { ReactNode } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

type VolunteerItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
  imageUrl?: string; // Image for the bento popup
  supportingImages?: string[]; // Supporting images for the popup
  orgLogo?: string; // Logo organisasi/volunteer untuk card
  transparentLogo?: boolean; // true jika logo transparan → pakai warna background
  category: string;
  color: string;
  icon: ReactNode;
};

const VOLUNTEERS: VolunteerItem[] = [
  {
    role: 'Head of Interest and Talent Department',
    organization: 'Himatif FMIPA Unpad',
    period: 'Jan 2025 – Dec 2025',
    description:
      `Led member development initiatives and coordinated 3 departmental programs while supervising 8 staff members to strengthen organizational engagement and talent development.
    Initiated a free-access sports development program (KKM's Care) that increased participant attendance by 100% (from 10 to 20 members) through accessibility-focused program improvements.
    Developed and managed the department's Instagram platform from scratch, publishing 67 content posts to expand external visibility and promote student talent initiatives.
    Coordinated 71 committee members across a flagship tournament (INFORMATICSGRAM), achieving a 12% increase in participants (250 to 280) through large-scale publication and engagement strategies.`,
    imageUrl: '/images/organization/photo1.png',   // Tambahkan URL/path foto volunteer di sini
    orgLogo: '/images/organization/org1.png',   // Tambahkan URL/path logo organisasi di sini
    supportingImages: ['/images/organization/certif1.png', '/images/organization/photo2.png'],
    transparentLogo: true,
    category: 'Organization',
    color: 'bg-neo-blue',
    icon: <FaUsers />,
  },
  {
    role: 'Project Supervisor',
    organization: 'Informatics Sport Art And Game Tournament',
    period: 'Feb 2025 – May 2025',
    description:
      `Served as one of three Project Supervisors, overseeing the overall execution of a large-scale student tournament.
      Supervised and coordinated six divisions to ensure alignment with timelines, objectives, and operational standards.
      Provided guidance and capacity building to Project Officers (POs) to support effective leadership and decision-making.
      Contributed to the successful delivery of an event involving 300+ participants.`,
    imageUrl: '/images/volunteer/photo1.png',
    orgLogo: '/images/volunteer/vol5.png',
    supportingImages: ['/images/volunteer/certif1.png', '/images/volunteer/photo2.png'],
    category: 'Volunteer',
    color: 'bg-neo-pink',
    icon: <FaTools />,
  },
  {
    role: 'Staff of Data Research and Analysis Bureau',
    organization: 'BEM FMIPA Unpad',
    period: 'May 2025 – Feb 2026',
    description:
      `Analyzed survey datasets from 10+ organizational programs involving 50+ respondents per survey using Excel and Python to evaluate program effectiveness and participant satisfaction.
      Performed comprehensive data cleaning, preprocessing, and quantitative analysis on organizational survey data to identify key behavioral patterns and opportunities for program optimization.
      Generated analytical reports and data-driven recommendations that served as the primary basis for organizational decision-making and internal program performance evaluation.`,
    imageUrl: '/images/organization/photo3.png',
    orgLogo: '/images/organization/org2.png',
    supportingImages: ['/images/organization/certif2.png'],
    category: 'Organization',
    color: 'bg-neo-green',
    icon: <FaTools />,
  },
  {
    role: 'Staff of Cadre Department',
    organization: 'Himatif FMIPA Unpad',
    period: 'Feb 2024 – Dec 2024',
    description:
      '',
    imageUrl: '',
    orgLogo: '/images/organization/org1.png',
    transparentLogo: true,
    category: 'Organization',
    color: 'bg-neo-pink',
    icon: <FaLaptopCode />,
  },
  {
    role: 'Novo Club Batch 3',
    organization: 'Novo Club by Paragon Corp',
    period: 'Feb 2024 – Dec 2024',
    description:
      '',
    imageUrl: '',
    orgLogo: '/images/organization/org3.png',
    category: 'Organization',
    color: 'bg-neo-green',
    icon: <FaLaptopCode />,
  },
  {
    role: 'Head of Executor',
    organization: 'Character Building Season',
    period: 'May 2025 – Oct 2025',
    description:
      '',
    imageUrl: '',
    orgLogo: '/images/volunteer/vol1.png',
    category: 'Volunteer',
    color: 'bg-neo-blue',
    icon: <FaLaptopCode />,
  },
  {
    role: 'Staff of Public Relations',
    organization: 'Informatics Festival',
    period: 'Jun 2024 – Oct 2024',
    description:
      '',
    imageUrl: '',
    orgLogo: '/images/volunteer/vol2.png',
    category: 'Volunteer',
    color: 'bg-neo-pink',
    icon: <FaLaptopCode />,
  },
  {
    role: 'Staff of Logistics',
    organization: 'Prabu Unpad',
    period: 'Jul 2024 – Aug 2024',
    description:
      '',
    imageUrl: '',
    orgLogo: '/images/volunteer/vol3.png',
    category: 'Volunteer',
    color: 'bg-neo-blue',
    icon: <FaLaptopCode />,
  },
  {
    role: 'Staff of Public Relations',
    organization: 'MIPA Awards',
    period: 'Oct 2024 – Dec 2024',
    description:
      '',
    imageUrl: '',
    orgLogo: '/images/organization/org2.png',
    category: 'Volunteer',
    color: 'bg-neo-green',
    icon: <FaLaptopCode />,
  },
  {
    role: 'Staff of Event',
    organization: 'Informatics Sport Art And Game Tournament',
    period: 'Apr 2024 – Jun 2024',
    description:
      '',
    imageUrl: '',
    orgLogo: '/images/volunteer/vol5.png',
    category: 'Volunteer',
    color: 'bg-neo-pink',
    icon: <FaLaptopCode />,
  },
  {
    role: 'Staff of Facilitator',
    organization: 'Character Building Season',
    period: 'Jun 2024 – Oct 2024',
    description:
      '',
    imageUrl: '',
    orgLogo: '/images/volunteer/vol1.png',
    category: 'Volunteer',
    color: 'bg-neo-blue',
    icon: <FaLaptopCode />,
  },
  {
    role: 'Head of Logistic',
    organization: 'Informatics Fun Day',
    period: 'Sep 2024 – Nov 2024',
    description:
      '',
    imageUrl: '',
    orgLogo: '/images/organization/org1.png',
    transparentLogo: true,
    category: 'Volunteer',
    color: 'bg-neo-pink',
    icon: <FaLaptopCode />,
  },
];

const ITEMS_PER_PAGE = 3;

export default function VolunteerSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedItem, setSelectedItem] = useState<VolunteerItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const [lockedHeight, setLockedHeight] = useState<number | undefined>(undefined);

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

    // Lock current grid height to prevent layout collapse during transition
    if (gridRef.current) {
      setLockedHeight(gridRef.current.offsetHeight);
    }
    setIsAnimating(true);

    // Step 1: swap content while grid is still invisible
    setTimeout(() => {
      setCurrentPage(newPage);
    }, 350);

    // Step 2: fade in new content
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);

    // Step 3: release height lock AFTER fade-in completes (~300ms transition)
    setTimeout(() => {
      setLockedHeight(undefined);
    }, 750);
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
          className={`mb-16 flex justify-center transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
        >
          <h2 className="inline-block border-4 border-black bg-white px-8 py-3 text-4xl md:text-6xl font-black uppercase tracking-tighter shadow-neo rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all">
            <span className="text-neo-blue">Volunteer</span> & Org
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={gridRef}
          style={{ minHeight: lockedHeight }}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
          {currentItems.map((item, index) => (
            <div
              key={`${currentPage}-${index}`}
              className={`flex flex-col group relative border-4 border-black bg-white p-6 shadow-neo hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-out min-h-[380px] ${inView && !isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
              style={{ transitionDelay: isAnimating ? '0ms' : `${index * 120}ms` }}
            >
              {/* Org Logo / Icon */}
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center border-4 border-black ${item.orgLogo && !item.transparentLogo ? 'bg-white' : item.color} shadow-neo-sm -rotate-3 group-hover:rotate-0 transition-transform flex-shrink-0 overflow-hidden`}
              >
                {item.orgLogo ? (
                  <img
                    src={item.orgLogo}
                    alt={`${item.organization} logo`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-2xl text-black">{item.icon}</span>
                )}
              </div>

              <div className="space-y-3 flex-grow">
                <span className="inline-block border-2 border-black bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wider">
                  {item.period}
                </span>
                <h3 className="text-xl font-black uppercase leading-tight text-black line-clamp-2">{item.role}</h3>
                <p className="font-black text-xs uppercase text-neo-pink tracking-tight line-clamp-1">{item.organization}</p>
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

            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-2 border-b-4 border-black pb-4 pr-12">
              {selectedItem.role}
            </h3>
            <p className="font-black text-sm md:text-lg uppercase text-neo-pink tracking-tight mb-6">
              {selectedItem.organization} • {selectedItem.period}
            </p>

            <div className="flex flex-col gap-4 w-full h-full">
              
              {/* Top Row: Photos */}
              <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[300px]">
                
                {/* Main Photo */}
                <div className="border-4 border-black bg-neo-bg p-0 flex items-center justify-center relative w-full md:w-2/3 h-[250px] md:h-full overflow-hidden group">
                  {selectedItem.imageUrl ? (
                    <img src={selectedItem.imageUrl} alt="Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-neo-blue">
                      <FaImage className="text-6xl text-black/20 mb-2" />
                      <p className="text-black/40 font-black uppercase text-sm tracking-widest">Main Photo</p>
                    </div>
                  )}
                </div>

                {/* Supporting Photos */}
                <div className="flex flex-row md:flex-col gap-4 w-full md:w-1/3 h-[150px] md:h-full">
                  {/* Photo 1 */}
                  <div className="border-4 border-black bg-neo-bg p-0 flex items-center justify-center w-1/2 md:w-full h-full md:h-[calc(50%-0.5rem)] overflow-hidden group">
                    {selectedItem.supportingImages?.[0] ? (
                      <img src={selectedItem.supportingImages[0]} alt="Supporting 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-neo-green">
                        <FaImage className="text-4xl text-black/20 mb-2" />
                        <p className="text-black/40 font-black uppercase text-xs tracking-widest">Photo 1</p>
                      </div>
                    )}
                  </div>

                  {/* Photo 2 */}
                  <div className="border-4 border-black bg-neo-bg p-0 flex items-center justify-center w-1/2 md:w-full h-full md:h-[calc(50%-0.5rem)] overflow-hidden group">
                    {selectedItem.supportingImages?.[1] ? (
                      <img src={selectedItem.supportingImages[1]} alt="Supporting 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-white">
                        <FaImage className="text-4xl text-black/20 mb-2" />
                        <p className="text-black/40 font-black uppercase text-xs tracking-widest">Photo 2</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Bottom Row: Job Description (Full Width) */}
              <div className="border-4 border-black bg-white p-6 md:p-8 w-full flex flex-col max-h-[400px] overflow-y-auto">
                <div className="sticky top-0 bg-white z-10 pb-2 mb-4 border-b-4 border-black">
                  <h4 className="font-black uppercase text-xl md:text-2xl text-black inline-block self-start">
                    Job Description
                  </h4>
                </div>
                <div className="font-jakarta text-sm md:text-base font-bold text-slate-800">
                  {selectedItem.description ? (
                    <ul className="list-disc list-outside ml-5 space-y-3">
                      {selectedItem.description.split('\n').filter(Boolean).map((point, idx) => (
                        <li key={idx} className="leading-snug">{point.replace(/^-\s*/, '')}</li>
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
      )}
    </section>
  );
}