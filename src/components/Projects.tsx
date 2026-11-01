import React, { useState, useMemo } from 'react';
import { Github, Smartphone, Globe, Bot, Terminal, ArrowUpRight, Search } from 'lucide-react';
import Reveal from './motion/Reveal';
import TiltCard from './motion/TiltCard';

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
  githubLink: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'docflow-ai',
    title: 'DocFlow AI — Document Intelligence Pipeline',
    description: 'Enterprise document extraction pipeline that transforms unstructured invoices into verified data using Gemini 1.5 Flash and LangGraph multi-agent workflows.',
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
    description: 'End-to-end university mobility platform serving 500+ students daily with real-time bus tracking via Google Maps and offline persistent caching.',
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
    description: 'A polished mobile weather experience that pairs current conditions with clear, scannable seven-day forecasts for sunny and rainy days.',
    technologies: ['Flutter', 'Dart', 'Weather API', 'Mobile UI'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    image: '/projects/weather_app.png',
    githubLink: 'https://github.com/Abdulrahman50ab/Weather-App-Mobile',
  },
  {
    id: 'ai-keyboard',
    title: 'AI Predictive Keyboard Engine',
    description: 'Custom mobile input method editor with real-time next-token prediction, boosting typing speed by 30% with a strict 60 FPS typing loop.',
    metric: '30% Faster Typing',
    technologies: ['Flutter', 'Dart', 'Platform Channels', 'Isolates'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
    featured: true,
  },
  {
    id: 'ai-pdf',
    title: 'AI Document Synthesizer & PDF Assistant',
    description: 'Mobile document reader offering on-device PDF tokenization and targeted semantic Q&A with chapter synthesis via remote LLM embeddings.',
    metric: 'Sub-second Parsing',
    technologies: ['Flutter', 'PDF Engine', 'Semantic Search', 'REST API'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
  },
  {
    id: 'wantquiz-web',
    title: 'WantQuiz AI — Knowledge Assessment Platform',
    description: 'AI quiz platform generating customized evaluations from raw syllabus text, built with React, Neon Serverless PostgreSQL, and real-time leaderboards.',
    metric: 'Serverless Scale',
    technologies: ['React', 'Neon PostgreSQL', 'Drizzle ORM', 'Tailwind CSS'],
    category: 'Web',
    icon: <Globe className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
  },
  {
    id: 'ai-cleaner',
    title: 'SmartJunk Device Storage Optimizer',
    description: 'Android & iOS storage utility that scans cache hierarchies and duplicated media payloads with custom heuristic algorithms and visual charts.',
    metric: 'Heuristic Traversal',
    technologies: ['Flutter', 'Native Storage APIs', 'FL Charts'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
  },
  {
    id: 'ai-ppt',
    title: 'Automated Slide Deck & PPT Generator',
    description: 'Generates structured multi-slide presentations from raw prompts, featuring editable slide layouts and binary PPTX file export.',
    technologies: ['Flutter', 'Dart', 'Prompt Engineering', 'PPTX Exporter'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
  },
  {
    id: 'ai-post-web',
    title: 'Social Synthesizer & Content Studio',
    description: 'Multi-platform social content creator generating platform-optimized micro-copy for LinkedIn and X with typed PostgreSQL storage.',
    technologies: ['React', 'Neon PostgreSQL', 'Drizzle ORM', 'Tailwind CSS'],
    category: 'Web',
    icon: <Globe className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
  },
  {
    id: 'bank-dsa',
    title: 'Bank Management Engine & Ledger',
    description: 'Core banking simulation in C++ utilizing low-level data structures, binary ledger file systems, and atomic transaction logs.',
    metric: 'Atomic Ledger',
    technologies: ['C++', 'Data Structures', 'File I/O'],
    category: 'Systems',
    icon: <Terminal className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab/Bank-Management-System-with-C-',
  },
  {
    id: 'car-rental',
    title: 'Fleet Booking & Car Rental System',
    description: 'Object-oriented vehicle inventory and leasing management system in C++ with dynamic pricing rules and customer audit records.',
    technologies: ['C++', 'OOP Architecture', 'Billing Logic'],
    category: 'Systems',
    icon: <Terminal className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab/Car-rental-System',
  }
];

const categories = ['All', 'Mobile', 'Generative AI', 'Web', 'Systems'] as const;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="border-b border-zinc-200/80 bg-[#FAFAFA] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="text-left mb-10">
          <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
            02 / Selected work
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            A few things I’ve built.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
            A selection of mobile products, intelligent workflows, web platforms, and systems work.
          </p>
        </Reveal>

        {/* Filter Tabs & Search Bar */}
        <Reveal delay={0.05} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-200/70">
          
          {/* Category Filter Pills */}
          <div aria-label="Filter projects by category" className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-zinc-600 hover:text-indigo-600 border border-zinc-200 hover:border-indigo-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Clean Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
            <input
              type="search"
              aria-label="Search projects or technologies"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400"
            />
          </div>

        </Reveal>

        {/* Projects Grid */}
        <div className="grid items-stretch gap-6 text-left md:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} className="h-full" delay={Math.min(idx * 0.05, 0.25)}>
            <TiltCard
              as="article"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-2xs transition-[border-color,box-shadow] hover:border-indigo-200/90 hover:shadow-[0_18px_45px_-34px_rgba(24,24,27,0.4)]"
            >
              {project.image && (
                <div className="relative overflow-hidden border-b border-zinc-100 bg-zinc-100">
                  <img
                    src={project.image}
                    alt={`${project.title} mobile app preview`}
                    loading="lazy"
                    className="aspect-[16/8.5] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                  {project.featured && (
                    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-700 backdrop-blur-sm">
                      Featured work
                    </span>
                  )}
                </div>
              )}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                {/* Card Header: Category & Metric */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-2 text-xs font-medium text-zinc-700">
                    <span className="p-1 rounded bg-indigo-50 text-indigo-600 border border-indigo-100">
                      {project.icon}
                    </span>
                    <span>{project.category}</span>
                  </div>

                  {project.metric && (
                    <span className="text-[11px] font-medium text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2 py-0.5 rounded-md">
                      {project.metric}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="font-heading text-lg font-semibold text-zinc-950 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description (Clean, 2 sentences) */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags (Limited to 3-4 key items) */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-zinc-100">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-zinc-600 bg-zinc-50 border border-zinc-200/80 px-2 py-0.5 rounded hover:border-indigo-200 hover:text-indigo-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-medium text-zinc-800 hover:text-indigo-600 transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>View Repository</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-indigo-500" />
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                </div>
              </div>

              </div>
            </TiltCard>
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div role="status" className="py-12 text-center text-sm text-zinc-500">
            No projects found matching your query.
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
