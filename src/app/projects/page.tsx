'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/projects';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { ProjectCard, ProjectModal } from '@/components/features/ProjectSection';
import type { Project } from '@/types';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [displayedCategory, setDisplayedCategory] = useState('All');
  const { ref: headerRef, inView: headerInView } = useInViewOnce({ threshold: 0.1 });
  const { ref: gridRef, inView: gridInView } = useInViewOnce({ threshold: 0.05 });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat); // Instant UI update for the button
    setIsAnimating(true);
    setTimeout(() => {
      setDisplayedCategory(cat); // Delayed update for the grid filter
      setIsAnimating(false);
    }, 300);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalOpen]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setTimeout(() => setModalOpen(true), 10);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const filtered =
    displayedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === displayedCategory);

  return (
    // No duplicate Footer — layout.tsx already provides it
    <main className="min-h-screen bg-neo-blue relative overflow-hidden">

      {/* Background pattern */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.10]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid-page" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="black" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid-page)" />
        </svg>
        <div className="absolute top-10 right-16 w-32 h-32 border-4 border-black/15 rotate-12" />
        <div className="absolute top-24 right-28 w-16 h-16 bg-black/10 rotate-45" />
        <div className="absolute bottom-20 left-10 w-40 h-40 border-4 border-black/10 -rotate-6" />
        <svg className="absolute top-0 left-0 opacity-[0.06]" width="280" height="280" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={i} x1={i * 28} y1="0" x2={i * 28 - 280} y2="280" stroke="black" strokeWidth="10" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 py-12 md:py-20">

        {/* Header */}
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
        >
          <Link
            href="/#project"
            className="inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-2 text-sm font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-neo-yellow hover:-translate-y-0.5 transition-all mb-10"
          >
            <FaArrowLeft /> Back to Home
          </Link>

          <div className="flex items-start gap-6 mb-4">
            <div>
              <h1 className="inline-block border-4 border-black bg-neo-yellow px-8 py-3 text-5xl md:text-7xl font-black uppercase tracking-tighter shadow-neo -rotate-1">
                All Projects
              </h1>
              <p className="mt-5 font-black text-black/60 uppercase tracking-widest text-sm">
                {PROJECTS.length} projects · Data Science & Engineering
              </p>
            </div>
          </div>

          <div className="w-full border-t-4 border-black mt-8 mb-10" />

          {/* Category filter */}
          <div className="flex flex-wrap gap-4 mb-12 pb-6 pt-2">
            {PROJECT_CATEGORIES.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                style={{ transitionDelay: headerInView ? `${idx * 50 + 200}ms` : '0ms' }}
                className={`group flex-shrink-0 border-[3px] border-black px-6 py-2.5 text-sm font-black uppercase transition-all duration-200 ${
                  !headerInView ? 'opacity-0 translate-y-8' : 'opacity-100'
                } ${
                  activeCategory === cat
                    ? 'bg-neo-pink text-black translate-x-[4px] translate-y-[4px] shadow-none'
                    : 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-neo-yellow'
                }`}
              >
                {cat}
                {cat === 'All' && (
                  <span className={`ml-2 border-2 border-black px-2 py-0.5 text-xs ${activeCategory === cat ? 'bg-white' : 'bg-neo-yellow group-hover:bg-neo-pink transition-colors'}`}>
                    {PROJECTS.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.title || i}
              project={project}
              index={i}
              inView={gridInView && !isAnimating}
              onDetail={() => openModal(project)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center py-24 gap-4">
            <div className="border-4 border-black bg-white px-8 py-6 shadow-neo text-center">
              <p className="font-black text-2xl uppercase">No projects found</p>
              <p className="text-sm font-semibold text-slate-500 mt-1">Try selecting a different category.</p>
            </div>
            <button
              onClick={() => handleCategoryChange('All')}
              className="border-2 border-black bg-neo-yellow px-6 py-2 font-black uppercase text-sm hover:bg-neo-pink hover:-translate-y-0.5 transition-all"
            >
              Show All
            </button>
          </div>
        )}

      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </main>
  );
}