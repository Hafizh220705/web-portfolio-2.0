'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaGithub, FaGlobe, FaArrowLeft } from 'react-icons/fa';
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/projects';
import { useInViewOnce } from '@/hooks/useInViewOnce';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref: headerRef, inView: headerInView } = useInViewOnce({ threshold: 0.1 });
  const { ref: gridRef,   inView: gridInView   } = useInViewOnce({ threshold: 0.05 });

  const filtered =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

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
          className={`transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
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

          {/* Category filter — horizontal scroll on mobile to avoid overflow */}
          <div className="flex gap-3 mb-12 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 border-2 border-black px-5 py-2 text-sm font-black uppercase transition-all hover:-translate-y-0.5 ${
                  activeCategory === cat
                    ? 'bg-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]'
                    : 'bg-white text-black hover:bg-neo-pink'
                }`}
              >
                {cat}
                {cat === 'All' && (
                  <span className="ml-2 bg-neo-yellow text-black px-1.5 text-xs">{PROJECTS.length}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <div
              key={project.title}
              style={{ transitionDelay: gridInView ? `${index * 100}ms` : '0ms' }}
              className={`group relative border-4 border-black bg-white shadow-neo flex flex-col h-full
                hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-500 ease-out
                ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute -top-3 -right-3 z-10 bg-neo-pink border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase rotate-3 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  Featured
                </div>
              )}

              {/* Category + year ribbon */}
              <div className="flex items-center justify-between border-b-2 border-black px-4 py-2 bg-neo-yellow">
                <span className="text-[11px] font-black uppercase tracking-widest">{project.category}</span>
                <span className="text-[11px] font-black text-black/50">{project.year}</span>
              </div>

              {/* Image */}
              <div className="relative h-44 w-full border-b-4 border-black overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&background=random&size=500`;
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-black uppercase mb-2 tracking-tight group-hover:text-neo-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-slate-600 leading-snug mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span key={tech.name} className="border border-black px-2 py-0.5 text-[10px] font-black uppercase bg-slate-100">
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-black bg-black text-white py-2.5 text-xs font-black uppercase hover:bg-neo-pink hover:text-black transition-all"
                  >
                    <FaGithub /> Source
                  </a>
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border-2 border-black bg-white text-black py-2.5 text-xs font-black uppercase hover:bg-neo-blue transition-all"
                    >
                      <FaGlobe /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
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
              onClick={() => setActiveCategory('All')}
              className="border-2 border-black bg-neo-yellow px-6 py-2 font-black uppercase text-sm hover:bg-neo-pink hover:-translate-y-0.5 transition-all"
            >
              Show All
            </button>
          </div>
        )}

      </div>
    </main>
  );
}