'use client';

import type { ComponentType } from 'react';
import {
  FaPython, FaJava, FaJs, FaPhp, FaDatabase, FaCode, FaRobot,
} from 'react-icons/fa';
import {
  SiTypescript, SiCplusplus, SiTensorflow, SiScikitlearn,
} from 'react-icons/si';
import { useInViewOnce } from '@/hooks/useInViewOnce';

type SkillItem = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: ComponentType<any>;
  hoverClass: string;
};

const DATA_SCIENCE_SKILLS: SkillItem[] = [
  { name: 'TensorFlow',           Icon: SiTensorflow, hoverClass: 'hover:bg-[#FF6F00] hover:text-white' },
  { name: 'Scikit-Learn',         Icon: SiScikitlearn, hoverClass: 'hover:bg-[#F7931E] hover:text-white' },
  { name: 'Sentiment Analysis',   Icon: FaRobot, hoverClass: 'hover:bg-neo-pink hover:text-white' },
  { name: 'Signal Processing',    Icon: FaCode, hoverClass: 'hover:bg-neo-blue hover:text-white' },
  { name: 'IndoBERT',             Icon: FaRobot, hoverClass: 'hover:bg-neo-green hover:text-black' },
  { name: 'MediaPipe',            Icon: FaCode, hoverClass: 'hover:bg-[#00C3A5] hover:text-white' },
];

const PROG_LANGUAGES: SkillItem[] = [
  { name: 'Python',     Icon: FaPython, hoverClass: 'hover:bg-[#3776AB] hover:text-white' },
  { name: 'Java',       Icon: FaJava, hoverClass: 'hover:bg-[#ED8B00] hover:text-white' },
  { name: 'JavaScript', Icon: FaJs, hoverClass: 'hover:bg-[#F7DF1E] hover:text-black' },
  { name: 'TypeScript', Icon: SiTypescript, hoverClass: 'hover:bg-[#3178C6] hover:text-white' },
  { name: 'PHP',        Icon: FaPhp, hoverClass: 'hover:bg-[#777BB4] hover:text-white' },
  { name: 'C++',        Icon: SiCplusplus, hoverClass: 'hover:bg-[#00599C] hover:text-white' },
  { name: 'SQL',        Icon: FaDatabase, hoverClass: 'hover:bg-[#336791] hover:text-white' },
];

const MarqueeTrack = ({ skills, direction }: { skills: SkillItem[], direction: 'left' | 'right' }) => {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  
  return (
    <div className="flex w-full overflow-hidden relative py-4">
      <div className="flex w-max">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`flex gap-4 md:gap-8 pr-4 md:pr-8 min-w-max ${animationClass}`}>
            {skills.map((skill, idx) => (
              <div 
                key={`${i}-${idx}`} 
                className={`flex flex-col items-center justify-center gap-3 px-6 py-4 border-4 border-black bg-white shadow-neo transition-all duration-300 cursor-pointer ${skill.hoverClass} min-w-[140px]`}
              >
                <skill.Icon className="text-3xl" />
                <span className="text-lg font-black uppercase tracking-tighter">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });

  return (
    <section id="skills" className="relative w-full py-20 md:py-24 flex flex-col justify-center bg-neo-blue bg-stripes-pattern border-b-4 border-black font-sora overflow-x-hidden">
      <div ref={ref} className="w-full relative z-10">

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

        {/* Marquee Tracks */}
        <div
          className={`transition-all duration-700 ease-out delay-150 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col gap-8 md:gap-12">
            <MarqueeTrack skills={DATA_SCIENCE_SKILLS} direction="left" />
            <MarqueeTrack skills={PROG_LANGUAGES} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
}