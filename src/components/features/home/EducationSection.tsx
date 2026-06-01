'use client';

import { FaGraduationCap } from 'react-icons/fa';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const EDUCATION = [
  {
    title:    'Bachelor of Computer Science',
    school:   'Padjadjaran University (UNPAD)',
    location: 'Sumedang, West Java, Indonesia',
    duration: 'Aug 2023 – Present (Expected 2027)',
    scoreLabel: 'Cumulative GPA',
    score:      '3.78 / 4.00',
    logoUrl:    'https://www.unpad.ac.id/wp-content/uploads/2018/04/logo-unpad1.png',
    details: [
      'Specializing in Software Engineering & Data Science.',
      'Relevant Coursework: Algorithms & Data Structures, OOP, Database Systems, Web Programming, Data Mining, Machine Learning.',
      'Active member of laboratory activities and academic workshops.',
    ],
  },
  {
    title:    'Data Science & AI Machine Learning',
    school:   'Dibimbing.id',
    location: 'Online',
    duration: 'March 2026 - Present',
    scoreLabel: 'Status',
    score:      'Bootcamp',
    logoUrl:    'https://files.klob.id/public/mcois01/kugkz47g/Logo_Thumbnail_Blue_Colour_-_Alim_Anggono.png',
    details: [
      'Comprehensive training covering Data Science lifecycle and advanced Machine Learning models.',
      'Practical implementation using Python, Pandas, Scikit-Learn, and TensorFlow.',
      'Developed end-to-end AI/ML solutions for real-world datasets.',
    ],
  },
];

export default function EducationSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });

  return (
    <section
      id="education"
      className="relative w-full py-20 bg-neo-pink border-b-4 border-black overflow-hidden font-sora"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-16 flex justify-center transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="inline-block border-4 border-black bg-neo-yellow px-8 py-3 text-4xl md:text-6xl font-black uppercase tracking-tighter shadow-neo -rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all">
            Education
          </h2>
        </div>

        {/* 2-Column Grid for Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              style={{ transitionDelay: inView ? `${index * 100 + 150}ms` : '0ms' }}
              className={`flex flex-col border-4 border-black bg-white p-5 md:p-6 shadow-neo hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Header: Icon & Score */}
              <div className="flex justify-between items-start mb-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-4 border-black bg-white shadow-neo-sm -rotate-3 hover:rotate-0 transition-transform overflow-hidden">
                  {edu.logoUrl ? (
                    <img src={edu.logoUrl} alt={`${edu.school} Logo`} className="w-full h-full object-contain p-1" />
                  ) : (
                    <FaGraduationCap className="text-2xl" />
                  )}
                </div>
                
                {/* Compact Score Badge */}
                <div className="border-2 border-black bg-neo-green px-3 py-1 shadow-neo-sm rotate-2 hover:rotate-0 transition-transform">
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/80">{edu.scoreLabel}</p>
                  <p className="text-lg md:text-xl font-black uppercase leading-none tracking-tighter text-black mt-0.5">{edu.score}</p>
                </div>
              </div>

              {/* Title & School */}
              <div className="mb-4">
                <span className="inline-block border-2 border-black bg-white px-2 py-0.5 text-[9px] md:text-[10px] font-black uppercase mb-3 tracking-wider shadow-neo-sm">
                  {edu.duration}
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-none text-black mb-3">
                  {edu.title}
                </h3>
                <p className="font-black text-sm uppercase text-slate-900 flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 bg-neo-blue border-2 border-black flex-shrink-0" />
                  {edu.school}
                </p>
                <p className="font-jakarta text-[10px] md:text-xs font-semibold text-slate-700 italic pl-4.5 mt-1">
                  {edu.location}
                </p>
              </div>

              {/* Details */}
              <div className="mt-auto pt-5 border-t-2 border-dashed border-black/20">
                <ul className="space-y-2.5 pl-4 list-none font-jakarta text-[10px] md:text-xs font-semibold text-slate-800 leading-relaxed">
                  {edu.details.map((detail, i) => (
                    <li
                      key={i}
                      className="relative before:content-[''] before:absolute before:-left-4 before:top-1.5 before:w-2 before:h-2 before:border-2 before:border-black before:bg-neo-pink"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}