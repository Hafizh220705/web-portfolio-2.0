'use client';

import type { ComponentType } from 'react';
import {
  FaPython, FaJava, FaJs, FaPhp, FaDatabase, FaCode, FaRobot, FaMicrochip,
} from 'react-icons/fa';
import {
  SiTypescript, SiCplusplus, SiNextdotjs, SiLaravel, SiSupabase,
  SiPrisma, SiTensorflow, SiScikitlearn, SiArduino,
} from 'react-icons/si';
import { useInViewOnce } from '@/hooks/useInViewOnce';

// Store icon as ComponentType, not rendered JSX — avoids serialization issues
type SkillItem = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: ComponentType<any>;
};

type SkillGroup = {
  category: string;
  color: string;
  skills: SkillItem[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming Languages',
    color: 'bg-neo-blue',
    skills: [
      { name: 'Python',     Icon: FaPython },
      { name: 'Java',       Icon: FaJava },
      { name: 'JavaScript', Icon: FaJs },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'PHP',        Icon: FaPhp },
      { name: 'C++',        Icon: SiCplusplus },
      { name: 'SQL',        Icon: FaDatabase },
    ],
  },
  {
    category: 'Data Science & ML',
    color: 'bg-neo-pink',
    skills: [
      { name: 'TensorFlow',           Icon: SiTensorflow },
      { name: 'Scikit-Learn',         Icon: SiScikitlearn },
      { name: 'Sentiment Analysis',   Icon: FaRobot },
      { name: 'Signal Processing',    Icon: FaCode },
      { name: 'IndoBERT',             Icon: FaRobot },
      { name: 'MediaPipe',            Icon: FaCode },
    ],
  },
  {
    category: 'Web & Backend Dev',
    color: 'bg-neo-green',
    skills: [
      { name: 'Next.js',        Icon: SiNextdotjs },
      { name: 'Laravel',        Icon: SiLaravel },
      { name: 'Supabase',       Icon: SiSupabase },
      { name: 'Prisma ORM',     Icon: SiPrisma },
      { name: 'API Dev',        Icon: FaDatabase },
      { name: 'DB Design',      Icon: FaDatabase },
    ],
  },
  {
    category: 'Tools & Others',
    color: 'bg-neo-yellow',
    skills: [
      { name: 'Arduino',         Icon: SiArduino },
      { name: 'Robotics',        Icon: FaMicrochip },
      { name: 'Embedded Sys',    Icon: FaMicrochip },
      { name: 'Git',             Icon: FaCode },
      { name: 'Linux',           Icon: FaCode },
    ],
  },
];

export default function SkillsSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });

  return (
    <section id="skills" className="relative w-full py-20 bg-neo-bg bg-grid-pattern border-b-4 border-black font-sora">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-16 flex justify-center transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="inline-block border-4 border-black bg-white px-8 py-3 text-4xl md:text-6xl font-black uppercase tracking-tighter shadow-neo rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all">
            My <span className="text-neo-pink">Skills</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SKILL_GROUPS.map((group, index) => (
            <div
              key={index}
              style={{ transitionDelay: inView ? `${index * 100 + 150}ms` : '0ms' }}
              className={`border-4 border-black bg-white p-6 md:p-8 shadow-neo hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div
                className={`inline-block border-2 border-black ${group.color} px-4 py-1 text-sm font-black uppercase mb-6 shadow-neo-sm -rotate-1`}
              >
                {group.category}
              </div>

              <div className="flex flex-wrap gap-4 md:gap-6">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 group cursor-default">
                    <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center border-2 md:border-4 border-black bg-white shadow-neo-sm group-hover:-translate-y-1 group-hover:shadow-neo group-hover:bg-neo-bg group-hover:rotate-3 transition-all duration-200">
                      <skill.Icon className="text-2xl md:text-3xl text-black" />
                    </div>
                    <span className="text-[10px] md:text-xs font-black uppercase text-center tracking-tighter">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}