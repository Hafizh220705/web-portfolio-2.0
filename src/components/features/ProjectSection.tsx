'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaGlobe, FaGoogleDrive, FaTimes, FaImage, FaLightbulb, FaBullseye, FaStar, FaExternalLinkAlt, FaAlignLeft } from 'react-icons/fa';

import { useInViewOnce } from '@/hooks/useInViewOnce';
import { HOME_PROJECTS } from '@/data/projects';
import type { Project } from '@/types';

// ─── Modal Component ─────────────────────────────────────────────────────────────

export function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4
        bg-black/60 backdrop-blur-sm transition-opacity duration-300
        ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      {/* Panel — scrollable */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-4 border-black
          shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform
          ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close detail"
          className="cursor-pointer sticky top-4 left-full float-right z-20 mr-4 w-10 h-10
            flex items-center justify-center border-4 border-black bg-neo-pink text-black
            hover:bg-black hover:text-white transition-colors shadow-neo-sm"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* ── Photos row — same pattern as VolunteerModal ─── */}
        <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[300px] p-4 md:p-6 pb-0">
          {/* Main image */}
          <div className="relative border-4 border-black bg-slate-100 w-full md:w-2/3 h-[250px] md:h-full overflow-hidden group">
            <Image
              src={project.image || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Category badge */}
            <span className="absolute top-3 left-3 border-2 border-black bg-neo-yellow px-3 py-0.5
              text-[10px] font-black uppercase shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              {project.category}
            </span>
            {project.featured && (
              <span className="absolute top-3 right-3 border-2 border-black bg-neo-pink px-3 py-0.5
                text-[10px] font-black uppercase shadow-[2px_2px_0px_rgba(0,0,0,1)] rotate-2">
                Featured
              </span>
            )}
          </div>

          {/* Detail image */}
          <div className="relative border-4 border-black bg-neo-blue w-full md:w-1/3 h-[150px] md:h-full overflow-hidden group">
            {project.detailImage ? (
              <Image
                src={project.detailImage}
                alt={`${project.title} detail`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <FaImage className="text-4xl text-black/20" />
                <p className="text-black/30 font-black uppercase text-[10px] tracking-widest">Detail Photo</p>
              </div>
            )}
          </div>
        </div>

        {/* ── Body ──────────────────────────────────────────── */}
        <div className="p-6 md:p-8 space-y-6">

          {/* Title + year */}
          <div className="flex items-start justify-between gap-4 border-b-4 border-black pb-4">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight">
              {project.title}
            </h3>
            <span className="shrink-0 text-xs font-black text-black/40 mt-1">{project.year}</span>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap items-center gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech.name}
                title={tech.name}
                className="flex items-center gap-1.5 border-2 border-black px-2 py-1 text-[10px] font-black uppercase bg-slate-100"
              >
                <tech.Icon size={12} className={tech.className} />
                {tech.name}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div className="border-4 border-black bg-slate-100 p-5 shadow-neo-sm">
            <div className="flex items-center gap-2 mb-3">
              <FaAlignLeft className="text-lg text-black" />
              <h4 className="font-black uppercase text-sm tracking-widest">Overview</h4>
            </div>
            <p className="font-jakarta text-sm font-semibold text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem */}
          {project.problem && (
            <div className="border-4 border-black bg-neo-pink/20 p-5 shadow-neo-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaBullseye className="text-lg text-black" />
                <h4 className="font-black uppercase text-sm tracking-widest">Problem</h4>
              </div>
              <p className="font-jakarta text-sm font-semibold text-slate-800 leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {/* Solution */}
          {project.solution && project.solution.some(Boolean) && (
            <div className="border-4 border-black bg-neo-yellow p-5 shadow-neo-sm">
              <div className="flex items-center gap-2 mb-4">
                <FaLightbulb className="text-lg text-black" />
                <h4 className="font-black uppercase text-sm tracking-widest">Solution</h4>
              </div>
              <ul className="space-y-2">
                {project.solution.filter(Boolean).map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-black"></span>
                    <span className="font-jakarta text-sm font-semibold text-slate-800 leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results */}
          {project.results && project.results.some(Boolean) && (
            <div className="border-4 border-black bg-white p-5 shadow-neo-sm">
              <div className="flex items-center gap-2 mb-4">
                <FaStar className="text-lg text-black" />
                <h4 className="font-black uppercase text-sm tracking-widest">Results</h4>
              </div>
              <ul className="space-y-2">
                {project.results.filter(Boolean).map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center
                      border-2 border-black bg-neo-green text-[10px] font-black">
                      {i + 1}
                    </span>
                    <span className="font-jakarta text-sm font-semibold text-slate-800 leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-3 flex-wrap pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] flex items-center justify-center gap-2 border-2 border-black
                  bg-black text-white py-3 text-xs font-black uppercase
                  hover:bg-neo-pink hover:text-black transition-all"
              >
                <FaGithub /> Source Code
              </a>
            )}

            {project.drive && (
              <a
                href={project.drive}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] flex items-center justify-center gap-2 border-2 border-black
                  bg-neo-yellow text-black py-3 text-xs font-black uppercase
                  hover:bg-neo-pink transition-all"
              >
                <FaGoogleDrive /> Drive
              </a>
            )}

            {!project.website && project.drive2 && (
              <a
                href={project.drive2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] flex items-center justify-center gap-2 border-2 border-black
                  bg-neo-yellow text-black py-3 text-xs font-black uppercase
                  hover:bg-neo-pink transition-all"
              >
                <FaGoogleDrive /> Drive 2
              </a>
            )}

            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] flex items-center justify-center gap-2 border-2 border-black
                  bg-neo-pink text-black py-3 text-xs font-black uppercase
                  hover:bg-neo-yellow transition-all"
              >
                <FaGlobe /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Project Card ──────────────────────────────────────────────────────────────

export function ProjectCard({
  project,
  index,
  inView,
  onDetail,
}: {
  project: Project;
  index: number;
  inView: boolean;
  onDetail: () => void;
}) {
  return (
    <div
      style={{ transitionDelay: inView ? `${index * 120 + 150}ms` : '0ms' }}
      className={`group border-4 border-black bg-white shadow-neo flex flex-col h-full
        hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-500 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {/* Image */}
      <div className="relative h-48 w-full border-b-4 border-black overflow-hidden bg-slate-100">
        <Image
          src={project.image || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
          alt={project.title || "Project"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {project.featured && (
          <div className="absolute top-3 left-3 border-2 border-black bg-neo-pink px-2 py-0.5
            text-[10px] font-black uppercase rotate-[-2deg] shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black uppercase tracking-widest border-2 border-black
            bg-neo-yellow px-2 py-0.5">
            {project.category}
          </span>
          <span className="text-[10px] font-black text-black/40">{project.year}</span>
        </div>

        <h3 className="text-xl font-black uppercase mb-2 tracking-tight
          group-hover:text-neo-blue transition-colors line-clamp-2">
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
        <div className="mt-auto flex gap-2 flex-wrap">
          {/* Detail button */}
          <button
            onClick={onDetail}
            className="flex-1 min-w-[80px] flex items-center justify-center gap-2 border-2 border-black
              bg-neo-blue text-black py-2.5 text-xs font-black uppercase
              hover:bg-neo-yellow transition-all cursor-pointer"
          >
            <FaExternalLinkAlt className="text-xs" /> Detail
          </button>

          {/* Source Code */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-black
                bg-black text-white px-3 py-2.5 text-xs font-black uppercase
                hover:bg-neo-pink hover:text-black transition-all"
              title="Source Code"
            >
              <FaGithub className="text-sm" />
            </a>
          )}

          {/* Drive (if available) */}
          {project.drive && (
            <a
              href={project.drive}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-black
                bg-neo-yellow text-black px-3 py-2.5 text-xs font-black uppercase
                hover:bg-neo-pink transition-all"
              title="Open Drive"
            >
              <FaGoogleDrive className="text-sm" />
            </a>
          )}

          {/* Drive 2 (if no website) */}
          {!project.website && project.drive2 && (
            <a
              href={project.drive2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-black
                bg-neo-yellow text-black px-3 py-2.5 text-xs font-black uppercase
                hover:bg-neo-pink transition-all"
              title="Open Drive 2"
            >
              <FaGoogleDrive className="text-sm" />
            </a>
          )}

          {/* Website/Demo (if available) */}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-black
                bg-neo-pink text-black px-3 py-2.5 text-xs font-black uppercase
                hover:bg-neo-yellow transition-all"
              title="Live Demo"
            >
              <FaGlobe className="text-sm" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


// ─── More Projects CTA ─────────────────────────────────────────────────────────

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

// ─── Main Section ──────────────────────────────────────────────────────────────

export default function ProjectSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen]             = useState(false);

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

  return (
    <>
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
              transition-all duration-300">
              Project
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOME_PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.title || i}
                project={project}
                index={i}
                inView={inView}
                onDetail={() => openModal(project)}
              />
            ))}
          </div>

          <MoreProjectsCTA inView={inView} />

        </div>
      </section>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
}