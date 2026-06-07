'use client';

import { useInViewOnce } from '@/hooks/useInViewOnce';
import { DATA_SCIENCE_SKILLS, PROGRAMMING_LANGUAGES } from '@/data/skills';
import type { SkillItem } from '@/types';

function SkillCard({ skill }: { skill: SkillItem }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 px-6 py-4 border-4 border-black
        bg-white shadow-neo transition-all duration-300 cursor-pointer min-w-[140px]
        ${skill.hoverClass}`}
    >
      <skill.Icon className="text-3xl" />
      <span className="text-lg font-black uppercase tracking-tighter">
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeTrack({
  skills,
  direction,
}: {
  skills: SkillItem[];
  direction: 'left' | 'right';
}) {
  const animationClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="flex w-full overflow-hidden relative py-4">
      <div className="flex w-max">
        {/* Duplicate 4× so the marquee loops seamlessly */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={`flex gap-4 md:gap-8 pr-4 md:pr-8 min-w-max ${animationClass}`}>
            {skills.map((skill, idx) => (
              <SkillCard key={`${i}-${idx}`} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });

  return (
    <section
      id="skills"
      className="relative w-full py-20 md:py-24 flex flex-col justify-center
        bg-neo-blue bg-stripes-pattern border-b-4 border-black font-sora overflow-x-hidden"
    >
      <div ref={ref} className="w-full relative z-10">

        {/* Title */}
        <div
          className={`mb-16 flex justify-center transition-all duration-700 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          <h2 className="inline-block border-4 border-black bg-white px-8 py-3 text-4xl md:text-6xl
            font-black uppercase tracking-tighter shadow-neo rotate-1 hover:rotate-0
            hover:-translate-y-1 transition-all"
          >
            My <span className="text-neo-pink">Skills</span>
          </h2>
        </div>

        {/* Marquee tracks */}
        <div
          className={`transition-all duration-700 ease-out delay-150
            ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col gap-8 md:gap-12">
            <MarqueeTrack skills={DATA_SCIENCE_SKILLS} direction="left"  />
            <MarqueeTrack skills={PROGRAMMING_LANGUAGES} direction="right" />
          </div>
        </div>

      </div>
    </section>
  );
}