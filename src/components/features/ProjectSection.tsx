'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaGlobe } from 'react-icons/fa';

import { useInViewOnce } from '@/hooks/useInViewOnce';
import { HOME_PROJECTS } from '@/data/projects';
import type { Project } from '@/types';

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index:   number;
  inView:  boolean;
}) {
  return (
    <div
      key={project.title}
      style={{ transitionDelay: inView ? `${index * 120 + 150}ms` : '0ms' }}
      className={`group border-4 border-black bg-white shadow-neo flex flex-col h-full
        hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-500 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {/* Image */}
      <div className="relative h-48 w-full border-b-4 border-black overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {project.featured && (
          <div className="absolute top-3 left-3 border-2 border-black bg-neo-pink px-2 py-0.5
            text-[10px] font-black uppercase rotate-[-2deg] shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          >
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black uppercase tracking-widest border-2 border-black
            bg-neo-yellow px-2 py-0.5"
          >
            {project.category}
          </span>
          <span className="text-[10px] font-black text-black/40">{project.year}</span>
        </div>

        <h3 className="text-xl font-black uppercase mb-2 tracking-tight
          group-hover:text-neo-blue transition-colors line-clamp-2"
        >
          {project.title}
        </h3>
        <p className="font-jakarta text-sm font-semibold text-slate-700 leading-snug mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack icons */}
        <div className="flex items-center gap-4 mb-6 text-2xl">
          {project.tech.map((tech) => (
            <span
              key={tech.name}
              title={tech.name}
              className="hover:scale-125 transition-transform inline-block"
            >
              <tech.Icon size={24} className={tech.className} />
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border-2 border-black
              bg-black text-white py-2.5 text-xs font-black uppercase
              hover:bg-neo-pink hover:text-black transition-all"
          >
            <FaGithub className="text-sm" /> Source
          </a>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border-2 border-black
                bg-white text-black py-2.5 text-xs font-black uppercase
                hover:bg-neo-blue transition-all"
            >
              <FaGlobe className="text-sm" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function MoreProjectsCTA({ inView }: { inView: boolean }) {
  return (
    <div
      style={{ transitionDelay: inView ? '600ms' : '0ms' }}
      className={`mt-16 flex flex-col items-center transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <Link
        href="/projects"
        className="group relative inline-flex items-center gap-3 border-4 border-black
          bg-neo-yellow px-10 py-4 text-lg font-black uppercase shadow-neo
          hover:bg-neo-pink hover:-translate-y-1 active:translate-y-0 transition-all duration-200"
      >
        {/* Corner dots */}
        <span className="absolute top-1.5 left-1.5  w-2 h-2 bg-black rounded-full" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-black rounded-full" />
        <span className="absolute bottom-1.5 left-1.5  w-2 h-2 bg-black rounded-full" />
        <span className="absolute bottom-1.5 right-1.5 w-2 h-2 bg-black rounded-full" />
        More Projects
        <svg
          className="w-6 h-6 group-hover:translate-x-2 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ProjectSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.1 });

  return (
    <section
      id="project"
      className="relative w-full py-16 md:py-24 bg-neo-blue border-b-4 border-black overflow-hidden"
    >
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.10]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid-proj" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="black" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid-proj)" />
        </svg>
        <div className="absolute top-0    left-0 w-full h-1.5 bg-black/10" />
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black/10" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 lg:px-8">

        {/* Title */}
        <div
          className={`mb-12 flex justify-center transition-all duration-700 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          <h2 className="inline-block border-4 border-black bg-neo-yellow px-8 py-3 text-4xl
            md:text-6xl font-black uppercase tracking-tighter shadow-neo -rotate-1
            hover:rotate-0 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
            transition-all duration-300"
          >
            Project
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOME_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <MoreProjectsCTA inView={inView} />

      </div>
    </section>
  );
}