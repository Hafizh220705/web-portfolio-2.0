'use client';

import { FaGraduationCap, FaAward, FaBookReader } from 'react-icons/fa';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const EDUCATION = [
  {
    title:    'Bachelor of Computer Science',
    school:   'Universitas Padjadjaran (UNPAD)',
    location: 'Sumedang, West Java, Indonesia',
    duration: 'Aug 2021 – Present (Expected 2025)',
    gpa:      '3.78 / 4.00',
    details: [
      'Specializing in Software Engineering & Data Science.',
      'Relevant Coursework: Algorithms & Data Structures, OOP, Database Systems, Web Programming, Data Mining, Machine Learning.',
      'Active member of laboratory activities and academic workshops.',
    ],
  },
];

export default function EducationSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });

  return (
    <section
      id="education"
      className="relative w-full py-20 bg-neo-bg border-b-4 border-black overflow-hidden font-sora"
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

        {EDUCATION.map((edu, index) => (
          <div
            key={index}
            style={{ transitionDelay: inView ? '150ms' : '0ms' }}
            className={`mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 items-start transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Main card */}
            <div className="border-4 border-black bg-white p-6 md:p-8 shadow-neo hover:-translate-y-1 hover:-rotate-1 transition-all duration-300">
              <div className="flex items-center gap-5 mb-6">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center border-4 border-black bg-white shadow-neo-sm -rotate-3 hover:rotate-0 transition-transform">
                  <FaGraduationCap className="text-3xl" />
                </div>
                <div>
                  <span className="inline-block border-2 border-black bg-white px-3 py-1 text-[10px] md:text-xs font-black uppercase mb-1.5 tracking-wider">
                    {edu.duration}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none text-black">
                    {edu.title}
                  </h3>
                </div>
              </div>

              <div className="border-t-2 border-black/10 pt-5 space-y-3">
                <p className="font-black text-sm md:text-xl uppercase text-slate-900 flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-neo-blue border-2 border-black flex-shrink-0" />
                  {edu.school}
                </p>
                <p className="font-jakarta text-xs md:text-sm font-semibold text-slate-700 italic pl-5">
                  {edu.location}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t-4 border-dashed border-black/20">
                <h4 className="flex items-center gap-2 text-sm font-black uppercase mb-4 tracking-wider">
                  <FaBookReader /> Focus & Key Coursework
                </h4>
                <ul className="space-y-3 pl-5 list-none font-jakarta text-xs md:text-sm font-semibold text-slate-800 leading-relaxed">
                  {edu.details.map((detail, i) => (
                    <li
                      key={i}
                      className="relative before:content-[''] before:absolute before:-left-5 before:top-1.5 before:w-3 before:h-3 before:border-2 before:border-black before:bg-neo-pink"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Side card */}
            <div className="md:sticky md:top-28 space-y-6">
              <div className="border-4 border-black bg-neo-green p-6 shadow-neo hover:rotate-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 border-b-2 border-black/20 pb-3">
                  <FaAward className="text-2xl" />
                  <span className="text-xs font-black uppercase tracking-widest text-black/80">Academic Result</span>
                </div>
                <p className="text-5xl font-black uppercase leading-none tracking-tighter text-black">{edu.gpa}</p>
                <p className="font-black text-xs uppercase mt-1 text-black opacity-70">(Cumulative GPA)</p>
              </div>

              <div className="border-4 border-black bg-white p-4 shadow-neo-sm h-24 flex items-center justify-center">
                <p className="text-[9px] font-bold text-center uppercase tracking-tight text-slate-500 font-jakarta">
                  Computer Science Student <br />@ FMIPA UNPAD <br />Spec. Data Science & Backend
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}