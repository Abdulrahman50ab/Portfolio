import React, { useState, useMemo } from 'react';
import { Github, Smartphone, Globe, Cpu, Bot, Search, Terminal, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
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
    index: '01',
    title: 'DocFlow AI — Document Understanding & Extraction Pipeline',
    subtitle: 'Production Generative AI Pipeline',
    description: 'An enterprise-grade document extraction pipeline that transforms unstructured invoices, utility statements, and contracts into verified relational data. Leverages Gemini 1.5 Flash, LangGraph stateful multi-agent workflows, and semantic similarity search via pgvector.',
    metric: '96% Parsing Precision',
    technologies: ['Gemini 1.5 Flash', 'LangGraph', 'RAG', 'pgvector', 'Drizzle ORM', 'Neon DB', 'React', 'Express.js'],
    category: 'Generative AI',
    icon: <Bot className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
    featured: true,
  },
  {
    id: 'uniride',
    index: '02',
    title: 'UniRide — Campus Transit & Live Fleet Tracking',
    subtitle: 'Cross-Platform Mobile Application',
    description: 'End-to-end university mobility platform serving 500+ students daily. Features sub-second bus telemetry via Google Maps API, seat booking state sync, and offline-first persistent caching for unreliable cellular environments.',
    metric: '500+ Daily Active Riders',
    image: '/projects/uniride.png',
    technologies: ['Flutter', 'Dart', 'Node.js', 'MongoDB', 'Google Maps API', 'Provider'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab/Uniride',
    featured: true,
  },
  {
    id: 'ai-keyboard',
    index: '03',
    title: 'Low-Latency AI Predictive Keyboard',
    subtitle: 'Native Mobile Input Engine',
    description: 'Custom mobile input method editor (IME) with real-time next-token prediction, boosting user typing velocity by 30%. Engineered using native platform channels to maintain a strict 60 FPS typing loop.',
    metric: '30% Typing Speed Gain',
    technologies: ['Flutter', 'Dart', 'Platform Channels', 'REST API', 'Isolates'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
  },
  {
    id: 'ai-pdf',
    index: '04',
    title: 'AI Document Synthesizer & PDF Assistant',
    subtitle: 'Document Intelligence App',
    description: 'Production mobile document reader offering real-time on-device PDF tokenization and targeted semantic Q&A. Streams chunked document embeddings to remote LLMs for chapter synthesis and instant clause query.',
    metric: 'Sub-second Chunk Parsing',
    technologies: ['Flutter', 'PDF Kit', 'REST APIs', 'Semantic Search', 'State Management'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
  },
  {
    id: 'wantquiz-web',
    index: '05',
    title: 'WantQuiz AI — Knowledge Assessment Platform',
    subtitle: 'Full-Stack Web SaaS',
    description: 'AI-driven quiz generation platform enabling automated assessment creation from raw text or syllabus topics. Built with React and Neon Serverless PostgreSQL with optimistic UI state updates and live leaderboards.',
    metric: 'Serverless PostgreSQL Scale',
    technologies: ['React', 'Neon PostgreSQL', 'Drizzle ORM', 'REST API', 'Tailwind CSS'],
    category: 'Web',
    icon: <Globe className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
  },
  {
    id: 'ai-cleaner',
    index: '06',
    title: 'SmartJunk Device Storage Optimizer',
    subtitle: 'Native Utility Application',
    description: 'Android & iOS storage analyzer that scans cache hierarchies and duplicated payloads with custom heuristic algorithms. Leverages platform-specific storage APIs with animated telemetry charts.',
    metric: 'Deep File-System Traversal',
    technologies: ['Flutter', 'Native Storage APIs', 'FL Charts', 'MethodChannels'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
  },
  {
    id: 'ai-ppt',
    index: '07',
    title: 'Automated Slide Deck & PPT Generator',
    subtitle: 'Generative Productivity Mobile App',
    description: 'Converts unstructured long-form prompts into structured multi-slide presentations. Generates editable layouts with custom color systems and binary PPTX export capabilities.',
    technologies: ['Flutter', 'Dart', 'LLM Prompt Engineering', 'PPTX Binary Exporter'],
    category: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
  },
  {
    id: 'ai-post-web',
    index: '08',
    title: 'Social Synthesizer & Content Studio',
    subtitle: 'Content Operations Web App',
    description: 'Multi-platform social publishing engine generating platform-optimized micro-copy for LinkedIn, X, and Instagram. Backed by typed schema storage on Neon DB with tone adaptation controls.',
    technologies: ['React', 'Neon PostgreSQL', 'Drizzle ORM', 'Vite', 'Tailwind CSS'],
    category: 'Web',
    icon: <Globe className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab',
  },
  {
    id: 'bank-dsa',
    index: '09',
    title: 'Bank Management Engine & Transaction Journal',
    subtitle: 'High-Integrity Core Systems',
    description: 'Console-based core banking simulation authored in C++ utilizing explicit data structures, binary ledger file systems, and ACID-inspired atomic transaction logs.',
    metric: 'ACID-Compliant File Ledger',
    technologies: ['C++', 'Data Structures', 'File I/O', 'Memory Architecture'],
    category: 'Systems',
    icon: <Terminal className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab/Bank-Management-System-with-C-',
  },
  {
    id: 'car-rental',
    index: '10',
    title: 'Fleet Booking & Car Rental Management System',
    subtitle: 'Object-Oriented Desktop Software',
    description: 'Fleet inventory tracking and multi-tier leasing system in C++ with object-oriented domain boundaries, dynamic tariff calculations, and customer audit histories.',
    technologies: ['C++', 'OOP Architecture', 'Custom Billing Logic', 'File Handling'],
    category: 'Systems',
    icon: <Cpu className="h-4 w-4" />,
    githubLink: 'https://github.com/Abdulrahman50ab/Car-rental-System',
  }
];

const categories = ['All', 'Mobile', 'Generative AI', 'Web', 'Systems'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-zinc-200/80 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-zinc-200/60 font-mono text-xs text-zinc-500">
          <div className="flex items-center space-x-2">
            <span className="text-zinc-900 font-semibold">[ 03 ]</span>
            <span>//</span>
            <span className="uppercase tracking-wider">Selected Works &amp; Case Studies</span>
          </div>
          <span className="text-zinc-400">Total Catalog: {projects.length} Works</span>
        </div>

        {/* Headline & Filter Bar */}
        <div className="space-y-6 mb-12 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
                Shipped applications &amp; engineering artifacts.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-2xl">
                A catalog of production-focused mobile architectures, LLM pipelines, and web platforms built with rigorous domain separation and clean execution.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Filter by keyword (e.g. Flutter, RAG)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 bg-white border border-zinc-200 hover:border-zinc-300 focus:border-zinc-900 focus:outline-none rounded-lg text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors shadow-2xs"
              />
            </div>
          </div>

          {/* Minimalist Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-200/70">
            {categories.map((category) => {
              const count = category === 'All' 
                ? projects.length 
                : projects.filter(p => p.category === category).length;
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-zinc-900 text-white shadow-2xs'
                      : 'bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`font-mono text-[10px] ${isActive ? 'text-zinc-300' : 'text-zinc-400'}`}>
                    [{count}]
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white border border-zinc-200/90 hover:border-zinc-400 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between text-left shadow-2xs"
            >
              <div>
                {/* Top Card Metadata */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100 font-mono text-xs">
                  <span className="text-zinc-400 font-medium">#{project.index}</span>
                  <div className="flex items-center space-x-1.5 text-zinc-600 bg-zinc-50 border border-zinc-200/70 px-2 py-0.5 rounded text-[11px]">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Optional Image or Visual Header */}
                {project.image ? (
                  <div className="mt-4 mb-4 rounded-lg overflow-hidden border border-zinc-200/80 aspect-video bg-zinc-100 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="mt-4 mb-3" />
                )}

                {/* Title & Metric */}
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-zinc-950 group-hover:text-zinc-800 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  {project.metric && (
                    <span className="font-mono text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 inline-block mt-1">
                      {project.metric}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-3">
                  {project.description}
                </p>
              </div>

              {/* Bottom Card: Stack Tags & Repository Link */}
              <div className="mt-6 pt-4 border-t border-zinc-100 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-zinc-600 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>View Repository</span>
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center bg-white border border-zinc-200 rounded-xl max-w-md mx-auto my-8">
            <span className="font-mono text-xs text-zinc-400 block mb-2">[ 0 MATCHES FOUND ]</span>
            <p className="text-sm font-semibold text-zinc-900">No projects match your filter criteria.</p>
            <p className="text-xs text-zinc-500 mt-1">Try resetting the search terms or choosing a different category.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
              className="mt-4 text-xs font-mono text-zinc-900 underline hover:text-zinc-600"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
