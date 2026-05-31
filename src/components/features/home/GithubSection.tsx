'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const GITHUB_USERNAME = 'Hafizh220705';

// ── Types ──────────────────────────────────────────────────────────
interface GitHubStats {
  repos: number | null;
  contributions: number | null;
}

// ── Hook: fetch real-time GitHub stats ────────────────────────────
function useGitHubStats(username: string): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({ repos: null, contributions: null });

  useEffect(() => {
    // Fetch public repo count
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.public_repos === 'number') {
          setStats((prev) => ({ ...prev, repos: data.public_repos }));
        }
      })
      .catch(() => {});

    // Fetch contribution count from the contribution calendar (last year)
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.total?.lastYear === 'number') {
          setStats((prev) => ({ ...prev, contributions: data.total.lastYear }));
        }
      })
      .catch(() => {});
  }, [username]);

  return stats;
}

// ── Stat Box ──────────────────────────────────────────────────────
function StatBox({ value, label }: { value: number | null; label: string }) {
  return (
    <div className="bg-white border-2 border-black p-4 text-center">
      <p className="text-2xl font-black">
        {value === null ? (
          <span className="inline-block w-12 h-6 bg-gray-200 animate-pulse rounded" />
        ) : (
          `${value}+`
        )}
      </p>
      <p className="text-[10px] font-black uppercase">{label}</p>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────
export default function GithubSection() {
  const { ref, inView } = useInViewOnce({ threshold: 0.08 });
  const stats = useGitHubStats(GITHUB_USERNAME);

  const statsImgSrc = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=react&border_radius=0&hide_border=true&bg_color=ffffff&title_color=000000&text_color=000000&icon_color=38BDF8`;
  const langsImgSrc = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=react&border_radius=0&hide_border=true&bg_color=ffffff&title_color=000000&text_color=000000`;
  const chartImgSrc = `https://ghchart.rshah.org/38BDF8/${GITHUB_USERNAME}`;

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
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700 ease-out delay-150 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Stats images — unoptimized agar Next.js tidak cache */}
          <div className="space-y-6">
            <div className="border-4 border-black bg-white p-2 shadow-neo hover:-translate-y-1 transition-all">
              <Image
                src={statsImgSrc}
                alt="GitHub Stats"
                width={1200}
                height={600}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <div className="border-4 border-black bg-white p-2 shadow-neo hover:-translate-y-1 transition-all">
              <Image
                src={langsImgSrc}
                alt="Top Languages"
                width={1200}
                height={600}
                className="w-full h-auto"
                unoptimized
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
                  <p className="font-jakarta text-xs font-bold uppercase mt-1 text-white/80">Backend &amp; Data Science Enthusiast</p>
                </div>
              </div>

              {/* Real-time stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <StatBox value={stats.repos} label="Repositories" />
                <StatBox value={stats.contributions} label="Contributions (yr)" />
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

          </div>
        </div>

        {/* Contribution graph */}
        <div
          className={`mt-16 border-4 border-black bg-white p-4 md:p-8 shadow-neo overflow-hidden transition-all duration-700 ease-out delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h4 className="text-sm font-black uppercase mb-4 flex items-center gap-2">
            <FaCodeBranch /> Contribution Graph
          </h4>
          <div className="w-full overflow-x-auto">
            <div className="min-w-[600px]">
              <Image
                src={chartImgSrc}
                alt="GitHub Contribution Chart"
                width={1200}
                height={300}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}