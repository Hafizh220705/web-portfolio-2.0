'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { HOME_PROJECTS } from '@/data/projects';
import { useInViewOnce } from '@/hooks/useInViewOnce';

export default function ProjectSection() {
  const { ref: sectionRef, inView } = useInViewOnce({ threshold: 0.1 });
  const projects = HOME_PROJECTS;

  return (
    <section
      id="project"
      className="relative w-full py-16 md:py-24 bg-neo-blue border-b-4 border-black overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Subtle dot grid texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.10]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid-proj" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="black" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid-proj)" />
        </svg>

        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-black/10" />

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black/10" />
      </div>

      {/* ── Main Content ── */}
      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-4 lg:px-8">

        {/* Judul Section */}
        <div
          className={`mb-12 flex justify-center transition-all duration-700 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          <h2 className="inline-block border-4 border-black bg-neo-yellow px-8 py-3 text-4xl md:text-6xl font-black uppercase tracking-tighter shadow-neo transform -rotate-1 transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            Project
          </h2>
        </div>

        {/* Grid Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{ transitionDelay: inView ? `${index * 120 + 150}ms` : '0ms' }}
              className={`group border-4 border-black bg-white shadow-neo transition-all flex flex-col h-full
                hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                ${inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }
                duration-600 ease-out`}
            >
              {/* Gambar Project */}
              <div className="relative h-48 w-full border-b-4 border-black overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${project.title}&background=random&size=500`;
                  }}
                />
              </div>

              {/* Konten Card */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-black uppercase mb-2 tracking-tight group-hover:text-neo-blue transition-colors">
                  {project.title}
                </h3>
                <p className="font-jakarta text-sm font-semibold text-slate-700 leading-snug mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex items-center gap-4 mb-6 text-2xl">
                  {project.tech.map((tech) => (
                    <span key={tech.name} className="hover:scale-125 transition-transform inline-block">
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
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-black bg-black text-white py-2.5 text-xs font-black uppercase hover:bg-neo-pink hover:text-black transition-all"
                  >
                    <FaGithub className="text-sm" /> Source
                  </a>

                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border-2 border-black bg-white text-black py-2.5 text-xs font-black uppercase hover:bg-neo-blue transition-all"
                    >
                      <FaGlobe className="text-sm" /> Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — More Projects */}
        <div
          style={{ transitionDelay: inView ? '600ms' : '0ms' }}
          className={`mt-16 flex flex-col items-center gap-4 transition-all duration-700 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-black uppercase text-sm tracking-widest text-black/60">
            — Masih banyak lagi —
          </p>
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-3 border-4 border-black bg-neo-yellow px-10 py-4 text-lg font-black uppercase shadow-neo hover:bg-neo-pink hover:-translate-y-1 active:translate-y-0 transition-all duration-200"
          >
            {/* Decorative corner dots */}
            <span className="absolute top-1.5 left-1.5 w-2 h-2 bg-black rounded-full" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-black rounded-full" />
            <span className="absolute bottom-1.5 left-1.5 w-2 h-2 bg-black rounded-full" />
            <span className="absolute bottom-1.5 right-1.5 w-2 h-2 bg-black rounded-full" />
            More Projects
            <svg
              className="w-6 h-6 group-hover:translate-x-2 transition-transform"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}