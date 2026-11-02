import React from 'react';
import { ArrowUpRight, Cpu, Database, Globe, Smartphone } from 'lucide-react';
import Reveal from './motion/Reveal';
import SectionHeading from './SectionHeading';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  summary: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Mobile Engineering',
    icon: <Smartphone className="h-5 w-5" />,
    summary:
      'Cross-platform iOS and Android apps engineered with clean state machines, frame budget tuning, and offline-first persistence.',
    skills: [
      'Flutter SDK',
      'Dart',
      'iOS & Android',
      'Bloc & Riverpod',
      'Platform Channels',
      'Isolates',
      'Impeller Tuning',
      'Offline Storage',
    ],
  },
  {
    title: 'Generative AI & Workflows',
    icon: <Cpu className="h-5 w-5" />,
    summary:
      'Automated document extraction pipelines, multi-agent orchestrations, and semantic retrieval systems.',
    skills: [
      'LangGraph',
      'RAG Pipelines',
      'Gemini 1.5 Flash',
      'pgvector',
      'Document Intelligence',
      'Embeddings',
      'Structured Outputs',
    ],
  },
  {
    title: 'Web & Modern Frontend',
    icon: <Globe className="h-5 w-5" />,
    summary:
      'High-performance web applications built with TypeScript, modular component architectures, and responsive layouts.',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Vite',
      'Tailwind CSS',
      'REST APIs',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend, Cloud & Data',
    icon: <Database className="h-5 w-5" />,
    summary:
      'Cloud persistence, serverless relational databases, authentication systems, and scalable API layers.',
    skills: [
      'Node.js',
      'Express.js',
      'Neon PostgreSQL',
      'Firebase',
      'Supabase',
      'Drizzle ORM',
      'Git & GitHub',
    ],
  },
];

const Skills = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden border-b border-white/10 bg-ink py-20 text-white md:py-28"
    >
      <div aria-hidden="true" className="dark-grid absolute inset-0 -z-10 opacity-40" />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/3 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[110px]"
      />

      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="dark"
            index="03"
            eyebrow="What I work with"
            title={
              <>
                A toolkit for ideas that{' '}
                <span className="font-display font-normal italic text-indigo-300">scale.</span>
              </>
            }
            description="A considered mix of mobile, AI, web, and backend technologies — chosen to solve the problem, not add noise."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} className="h-full" delay={index * 0.06}>
              <article className="group relative flex h-full flex-col bg-ink p-6 transition-colors duration-300 hover:bg-white/[0.035] sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-indigo-300 transition-colors duration-300 group-hover:border-indigo-300/30 group-hover:bg-indigo-400/10 group-hover:text-indigo-200">
                    {group.icon}
                  </span>
                  <span className="font-heading text-[11px] font-semibold tabular-nums text-white/30">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-heading text-xl font-semibold tracking-tight text-white">
                  {group.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/50">{group.summary}</p>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/10 pt-5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-white/55 transition-colors group-hover:border-white/15 group-hover:text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col justify-between gap-5 border-y border-white/10 py-6 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Currently exploring
            </span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-white/60">
              <span>Agentic workflows</span>
              <span className="text-white/20">/</span>
              <span>On-device inference</span>
              <span className="text-white/20">/</span>
              <span>Design systems</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="group inline-flex w-fit items-center gap-2 text-xs font-semibold text-white/70 transition-colors hover:text-white"
          >
            Have a problem to solve?
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-indigo-300/40 group-hover:bg-indigo-400/10">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
