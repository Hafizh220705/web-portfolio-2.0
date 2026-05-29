'use client';

import Image from 'next/image';
import { FaGithub, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const GITHUB_USERNAME = 'Hafizh220705';

const FEATURED_REPOS = ['SafePath', 'EEG-Classification', 'Robotic-Angklung', 'IndoBERT-Sentiment'];

export default function GithubSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });

  return (
    <section id="github" className="relative w-full py-20 bg-neo-yellow border-b-4 border-black font-sora overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Title */}
        <div
          className={`mb-16 flex flex-col items-center text-center transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="inline-block border-4 border-black bg-white px-8 py-3 text-4xl md:text-6xl font-black uppercase tracking-tighter shadow-neo -rotate-1 hover:rotate-0 transition-all">
            Open <span className="text-neo-blue">Source</span>
          </h2>
          <p className="mt-6 max-w-2xl font-jakarta text-sm md:text-base font-bold text-black uppercase tracking-tight">
            Coding activity and repository contributions on GitHub — part of my Computer Science journey at UNPAD.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700 ease-out delay-150 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Stats images */}
          <div className="space-y-6">
            <div className="border-4 border-black bg-white p-2 shadow-neo hover:-translate-y-1 transition-all">
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=react&border_radius=0&hide_border=true&bg_color=ffffff&title_color=000000&text_color=000000&icon_color=38BDF8`}
                alt="GitHub Stats"
                width={1200}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>
            <div className="border-4 border-black bg-white p-2 shadow-neo hover:-translate-y-1 transition-all">
              <Image
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=react&border_radius=0&hide_border=true&bg_color=ffffff&title_color=000000&text_color=000000`}
                alt="Top Languages"
                width={1200}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Profile CTA */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            <div className="border-4 border-black bg-neo-blue p-8 shadow-neo rotate-1 hover:rotate-0 transition-all w-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white border-2 border-black p-3 shadow-neo-sm">
                  <FaGithub className="text-4xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase leading-none text-white">@{GITHUB_USERNAME}</h3>
                  <p className="font-jakarta text-xs font-bold uppercase mt-1 text-white/80">Backend & Data Science Enthusiast</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white border-2 border-black p-4 text-center">
                  <p className="text-2xl font-black">50+</p>
                  <p className="text-[10px] font-black uppercase">Repositories</p>
                </div>
                <div className="bg-white border-2 border-black p-4 text-center">
                  <p className="text-2xl font-black">500+</p>
                  <p className="text-[10px] font-black uppercase">Contributions</p>
                </div>
              </div>

              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full border-4 border-black bg-black text-white py-4 text-sm font-black uppercase shadow-neo-sm hover:bg-white hover:text-black hover:-translate-y-1 transition-all"
              >
                Visit Full Profile{' '}
                <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Featured repos */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {FEATURED_REPOS.map((repo) => (
                <a
                  key={repo}
                  href={`https://github.com/${GITHUB_USERNAME}/${repo.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black bg-white px-4 py-2 text-[10px] font-black uppercase shadow-neo-sm hover:bg-neo-pink hover:-translate-y-0.5 transition-all"
                >
                  {repo}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contribution graph — mobile safe with overflow scroll */}
        <div
          className={`mt-16 border-4 border-black bg-white p-4 md:p-8 shadow-neo overflow-hidden transition-all duration-700 ease-out delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h4 className="text-sm font-black uppercase mb-4 flex items-center gap-2">
            <FaCodeBranch /> Contribution Graph
          </h4>
          {/* overflow-x-auto keeps mobile from breaking layout */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[600px]">
              <Image
                src={`https://ghchart.rshah.org/38BDF8/${GITHUB_USERNAME}`}
                alt="GitHub Contribution Chart"
                width={1200}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}