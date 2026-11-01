import React from 'react';
import { Smartphone, Cpu, Globe, Database } from 'lucide-react';
import Reveal from './motion/Reveal';
import TiltCard from './motion/TiltCard';

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  summary: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Mobile Engineering (Flutter Core)',
    icon: <Smartphone className="h-4 w-4" />,
    summary: 'Cross-platform iOS and Android apps engineered with clean state machines, frame budget tuning, and offline-first persistence.',
    skills: [
      'Flutter SDK',
      'Dart',
      'iOS & Android',
      'Bloc & Riverpod',
      'Platform Channels',
      'Isolates Concurrency',
      'Impeller Tuning',
      'Offline Storage'
    ]
  },
  {
    title: 'Generative AI & Workflows',
    icon: <Cpu className="h-4 w-4" />,
    summary: 'Automated document extraction pipelines, multi-agent orchestrations, and semantic retrieval systems.',
    skills: [
      'LangGraph',
      'RAG Pipelines',
      'Gemini 1.5 Flash',
      'pgvector',
      'Document Intelligence',
      'Embeddings',
      'Structured JSON Outputs'
    ]
  },
  {
    title: 'Web & Modern Frontend',
    icon: <Globe className="h-4 w-4" />,
    summary: 'High-performance web applications built with TypeScript, modular component architectures, and responsive layouts.',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Vite',
      'Tailwind CSS',
      'REST APIs',
      'Responsive Design'
    ]
  },
  {
    title: 'Backend, Cloud & Database',
    icon: <Database className="h-4 w-4" />,
    summary: 'Cloud persistence, serverless relational databases, authentication systems, and scalable API layers.',
    skills: [
      'Node.js',
      'Express.js',
      'Neon PostgreSQL',
      'Firebase Auth & DB',
      'Supabase',
      'Drizzle ORM',
      'Git & GitHub'
    ]
  }
];

const marqueeSkills = skillGroups.flatMap((group) => group.skills);

const Skills = () => {
  return (
    <section id="skills" className="border-b border-zinc-200/80 bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="text-left mb-12">
          <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
            03 / What I work with
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            A toolkit for ideas that scale.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
            A considered mix of mobile, AI, web, and backend technologies — chosen to solve the problem, not add noise.
          </p>
        </Reveal>

        {/* 4 Clean Domain Cards */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {skillGroups.map((group, idx) => (
            <Reveal key={idx} className="h-full" delay={idx * 0.07}>
            <TiltCard
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-zinc-200/90 bg-[#FAFAFA] p-6 shadow-[0_8px_30px_-28px_rgba(24,24,27,0.4)] transition-colors hover:border-indigo-200/80 hover:bg-white sm:p-7"
            >
              <div>
                {/* Header */}
                <div className="flex items-center space-x-2.5 mb-2.5">
                  <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-200/70 text-indigo-600 shadow-2xs">
                    {group.icon}
                  </div>
                  <h3 className="font-heading text-base font-semibold text-zinc-950">
                    {group.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                  {group.summary}
                </p>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200/60">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-medium text-zinc-700 bg-white border border-zinc-200/90 px-2.5 py-1 rounded-md shadow-2xs hover:border-indigo-200 hover:text-indigo-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Scrolling tech strip */}
        <div
          aria-hidden="true"
          className="group mt-12 overflow-hidden rounded-xl border border-zinc-200/80 bg-white py-3.5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[0, 1].map((half) => (
              <div key={half} className="flex gap-2.5 pr-2.5">
                {marqueeSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap rounded-lg border border-zinc-200/70 bg-[#FAFAFA] px-3 py-1 text-xs font-medium text-zinc-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
