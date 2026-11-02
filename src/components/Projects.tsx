import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Bot,
  Check,
  FileText,
  Github,
  Globe,
  Search,
  SearchX,
  Smartphone,
  Terminal,
} from 'lucide-react';
import Reveal from './motion/Reveal';
import SectionHeading from './SectionHeading';

interface Project {
  id: string;
  title: string;
  description: string;
  metric?: string;
  image?: string;
  technologies: string[];
  category: 'Mobile' | 'Generative AI' | 'Web' | 'Systems';
  icon: React.ReactNode;
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'docflow-ai',
    title: 'DocFlow AI — Document Intelligence Pipeline',
    description:
      'Enterprise document extraction pipeline that transforms unstructured invoices into verified data using Gemini 1.5 Flash and LangGraph multi-agent workflows.',
    metric: '96% Precision',
    technologies: ['Gemini 1.5 Flash', 'LangGraph', 'pgvector', 'React'],
    category: 'Generative AI',
    icon: <Bot className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab/Docflow',
    featured: true,
  },
  {
    id: 'uniride',
    title: 'UniRide — Campus Transit & Live Telemetry',
    description:
      'End-to-end university mobility platform serving 500+ students daily with real-time bus tracking via Google Maps and offline persistent caching.',
    metric: '500+ Daily Riders',
    image: '/projects/uniride.png',
    technologies: ['Flutter', 'Dart', 'Node.js', 'Google Maps API'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab/Uniride',
    featured: true,
  },
  {
    id: 'weather-app',
    title: 'Weather App — Forecast at a Glance',
    description:
      'A polished mobile weather experience that pairs current conditions with clear, scannable seven-day forecasts for sunny and rainy days.',
    technologies: ['Flutter', 'Dart', 'Weather API', 'Mobile UI'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    image: '/projects/weather_app.png',
    githubLink: 'https://github.com/Abdulrahman50ab/Weather-App-Mobile',
  },
  {
    id: 'ai-keyboard',
    title: 'AI Predictive Keyboard Engine',
    description:
      'Custom mobile input method editor with real-time next-token prediction, boosting typing speed by 30% with a strict 60 FPS typing loop.',
    metric: '30% Faster Typing',
    technologies: ['Flutter', 'Dart', 'Platform Channels', 'Isolates'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    featured: true,
  },
  {
    id: 'ai-pdf',
    title: 'AI Document Synthesizer & PDF Assistant',
    description:
      'Mobile document reader offering on-device PDF tokenization and targeted semantic Q&A with chapter synthesis via remote LLM embeddings.',
    metric: 'Sub-second Parsing',
    technologies: ['Flutter', 'PDF Engine', 'Semantic Search', 'REST API'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
  },
  {
    id: 'wantquiz-web',
    title: 'WantQuiz AI — Knowledge Assessment Platform',
    description:
      'AI quiz platform generating customized evaluations from raw syllabus text, built with React, Neon Serverless PostgreSQL, and real-time leaderboards.',
    metric: 'Serverless Scale',
    technologies: ['React', 'Neon PostgreSQL', 'Drizzle ORM', 'Tailwind CSS'],
    category: 'Web',
    icon: <Globe className="h-4 w-4" />,
  },
  {
    id: 'ai-cleaner',
    title: 'SmartJunk Device Storage Optimizer',
    description:
      'Android & iOS storage utility that scans cache hierarchies and duplicated media payloads with custom heuristic algorithms and visual charts.',
    metric: 'Heuristic Traversal',
    technologies: ['Flutter', 'Native Storage APIs', 'FL Charts'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
  },
  {
    id: 'ai-ppt',
    title: 'Automated Slide Deck & PPT Generator',
    description:
      'Generates structured multi-slide presentations from raw prompts, featuring editable slide layouts and binary PPTX file export.',
    technologies: ['Flutter', 'Dart', 'Prompt Engineering', 'PPTX Exporter'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
  },
  {
    id: 'ai-post-web',
    title: 'Social Synthesizer & Content Studio',
    description:
      'Multi-platform social content creator generating platform-optimized micro-copy for LinkedIn and X with typed PostgreSQL storage.',
    technologies: ['React', 'Neon PostgreSQL', 'Drizzle ORM', 'Tailwind CSS'],
    category: 'Web',
    icon: <Globe className="h-4 w-4" />,
  },
  {
    id: 'bank-dsa',
    title: 'Bank Management Engine & Ledger',
    description:
      'Core banking simulation in C++ utilizing low-level data structures, binary ledger file systems, and atomic transaction logs.',
    metric: 'Atomic Ledger',
    technologies: ['C++', 'Data Structures', 'File I/O'],
    category: 'Systems',
    icon: <Terminal className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab/Bank-Management-System-with-C-',
  },
  {
    id: 'car-rental',
    title: 'Fleet Booking & Car Rental System',
    description:
      'Object-oriented vehicle inventory and leasing management system in C++ with dynamic pricing rules and customer audit records.',
    technologies: ['C++', 'OOP Architecture', 'Billing Logic'],
    category: 'Systems',
    icon: <Terminal className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab/Car-rental-System',
  },
];

const categories = ['All', 'Mobile', 'Generative AI', 'Web', 'Systems'] as const;

const PipelineVisual = () => (
  <div className="flex h-full items-center justify-center p-6 sm:p-9 lg:p-10">
    <div className="w-full max-w-[22rem]">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-sm">
        <div className="flex items-center justify-between text-[8px] font-semibold uppercase tracking-[0.16em]">
          <span className="text-white/45">Document intake</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-300/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Processing
          </span>
        </div>

        <div className="mt-3.5 rounded-xl border border-white/10 bg-ink/70 p-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/70">
              <FileText className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-medium text-white/75">invoice_2026.pdf</p>
              <p className="mt-0.5 text-[8px] text-white/35">2.4 MB · 12 pages</p>
            </div>
          </div>

          <div className="mt-4 space-y-1.5" aria-hidden="true">
            <div className="h-1.5 w-full rounded-full bg-white/10">
              <div className="h-full w-[86%] rounded-full bg-indigo-400" />
            </div>
            <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-1.5 text-center">
            {['Extract', 'Verify', 'Ship'].map((step, index) => (
              <div
                key={step}
                className={`rounded-lg border px-1 py-2 ${
                  index === 2
                    ? 'border-indigo-400/40 bg-indigo-400/10'
                    : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                <p className="text-[7px] font-semibold uppercase tracking-[0.12em] text-white/35">
                  {step}
                </p>
                <p className="mt-1 text-[10px] font-semibold text-white/80">
                  {index === 2 ? '96%' : <Check className="mx-auto h-3 w-3 text-emerald-300" />}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[8px] text-white/45">
          <span>LangGraph · 4 agents</span>
          <span className="inline-flex items-center gap-1 text-emerald-300">
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            verified
          </span>
        </div>
      </div>

      <div className="mt-3 flex justify-between px-1 text-[7px] font-semibold uppercase tracking-[0.14em] text-white/25">
        <span>Intake</span>
        <span>Classify</span>
        <span>Extract</span>
        <span>Validate</span>
      </div>
    </div>
  </div>
);

const FeaturedProject = ({ project }: { project: Project }) => (
  <article className="group relative mt-10 overflow-hidden rounded-[2rem] bg-ink text-white shadow-[0_40px_90px_-60px_rgba(14,14,16,0.8)]">
    <div aria-hidden="true" className="dark-grid absolute inset-0 opacity-50" />
    <div
      aria-hidden="true"
      className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-[90px]"
    />

    <div className="relative grid lg:grid-cols-[1.08fr_0.92fr]">
      <div className="p-7 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Featured work
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
            {project.category}
          </span>
        </div>

        <h3 className="mt-6 max-w-lg font-heading text-[1.7rem] font-semibold leading-[1.12] tracking-[-0.035em] sm:text-[2.15rem]">
          {project.title}
        </h3>

        <p className="mt-4 max-w-lg text-sm leading-7 text-white/55">{project.description}</p>

        <div className="mt-7 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
          <div className="bg-ink/80 px-4 py-3.5">
            <p className="font-heading text-lg font-semibold text-white">96%</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-white/35">
              Extraction precision
            </p>
          </div>
          <div className="bg-ink/80 px-4 py-3.5">
            <p className="font-heading text-lg font-semibold text-white">4 agents</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-white/35">
              LangGraph pipeline
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-white/55"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-300"
          >
            View repository
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] transition-all group-hover/link:border-indigo-300/40 group-hover/link:bg-indigo-400/10">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </span>
          </a>
        )}
      </div>

      <div className="relative border-t border-white/10 lg:border-l lg:border-t-0">
        <PipelineVisual />
      </div>
    </div>
  </article>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-[0_22px_50px_-40px_rgba(14,14,16,0.5)] sm:p-6">
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-indigo-100 bg-accent-soft text-accent">
          {project.icon}
        </span>
        {project.category}
      </div>
      <span className="font-heading text-[11px] font-semibold tabular-nums text-stone-300">
        {String(index).padStart(2, '0')}
      </span>
    </div>

    {project.image && (
      <div className="relative mt-4 overflow-hidden rounded-xl border border-line bg-stone-100">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          width={640}
          height={360}
          loading="lazy"
          decoding="async"
          className="aspect-[16/8] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent"
        />
      </div>
    )}

    <h3 className="mt-4 font-heading text-[1.05rem] font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-accent">
      {project.title}
    </h3>

    <p className="mt-2 text-[13px] leading-6 text-muted">{project.description}</p>

    {project.metric && (
      <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-indigo-200/70 bg-accent-soft px-2.5 py-1 text-[10px] font-semibold text-indigo-700">
        <span className="h-1 w-1 rounded-full bg-accent" />
        {project.metric}
      </span>
    )}

    <div className="mt-auto pt-5">
      <div className="flex flex-wrap gap-1.5 border-t border-line pt-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-canvas px-2 py-0.5 text-[10px] font-medium text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.githubLink || project.liveLink) && (
        <div className="mt-4 flex items-center justify-between gap-3">
          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink transition-colors hover:text-accent"
            >
              <Github className="h-3.5 w-3.5" />
              Repository
            </a>
          ) : (
            <span />
          )}

          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent hover:text-indigo-700"
            >
              Live demo
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : (
            <ArrowUpRight className="h-4 w-4 text-stone-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          )}
        </div>
      )}
    </div>
  </article>
);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        query.length === 0 ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const hasFilters = selectedCategory !== 'All' || searchQuery.trim().length > 0;
  const spotlight = !hasFilters ? projects[0] : null;
  const gridProjects = spotlight
    ? filteredProjects.filter((project) => project.id !== spotlight.id)
    : filteredProjects;

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <section id="projects" className="border-b border-line bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Selected work"
            title={
              <>
                A few things I&apos;ve{' '}
                <span className="font-display font-normal italic text-accent">built.</span>
              </>
            }
            description="A selection of mobile products, intelligent workflows, web platforms, and systems work."
          />
        </Reveal>

        {/* Controls */}
        <Reveal
          delay={0.05}
          className="mt-10 flex flex-col justify-between gap-4 border-b border-line pb-5 sm:flex-row sm:items-center"
        >
          <div
            role="group"
            aria-label="Filter projects by category"
            className="no-scrollbar -mx-1 flex items-center gap-1.5 overflow-x-auto px-1"
          >
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-[11px] font-semibold transition-colors ${
                    active
                      ? 'bg-ink text-white'
                      : 'border border-transparent text-muted hover:border-line hover:bg-white/60 hover:text-ink'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
            <input
              type="search"
              aria-label="Search projects or technologies"
              placeholder="Search projects or tech…"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-full border border-line bg-white/70 py-2 pl-9 pr-3 text-xs text-ink placeholder:text-stone-400 focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>
        </Reveal>

        <div className="flex items-center justify-between pt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
          <span>
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
          <span className="hidden sm:inline">2024 — 2026</span>
        </div>

        {spotlight && (
          <Reveal>
            <FeaturedProject project={spotlight} />
          </Reveal>
        )}

        <div className="mt-6 grid items-stretch gap-5 md:grid-cols-2">
          {gridProjects.map((project, index) => (
            <Reveal
              key={project.id}
              className="h-full"
              delay={Math.min(index * 0.04, 0.2)}
            >
              <ProjectCard project={project} index={index + 1} />
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div
            role="status"
            className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-white/40 px-6 py-16 text-center"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-muted">
              <SearchX className="h-5 w-5" />
            </span>
            <p className="mt-4 font-heading text-base font-semibold text-ink">
              No projects found
            </p>
            <p className="mt-1 max-w-xs text-sm text-muted">
              Nothing matches “{searchQuery}” in this category. Try a different term or reset the
              filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
