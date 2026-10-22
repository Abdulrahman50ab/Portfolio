import React from 'react';
import { Smartphone, Cpu, Globe, Database } from 'lucide-react';

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

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider block mb-2">
            Capabilities
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Technical Skills &amp; Stack
          </h2>
          <p className="text-base text-zinc-600 mt-2 max-w-2xl">
            A comprehensive overview of tools and technologies I use to build scalable products.
          </p>
        </div>

        {/* 4 Clean Domain Cards */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-zinc-200/90 bg-zinc-50/50 hover:bg-zinc-50/90 hover:border-indigo-200/80 transition-colors shadow-2xs flex flex-col justify-between"
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
