import React from 'react';
import { Smartphone, Cpu, Globe, Database, CheckCircle2 } from 'lucide-react';

interface SkillDomain {
  domain: string;
  index: string;
  icon: React.ReactNode;
  summary: string;
  technologies: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

const Skills = () => {
  const domains: SkillDomain[] = [
    {
      domain: "Mobile Engineering (Flutter Core)",
      index: "01",
      icon: <Smartphone className="h-4 w-4" />,
      summary: "Specialized in the Flutter runtime, Dart asynchronous isolate mechanics, and native cross-platform pipelines.",
      technologies: [
        { name: "Flutter SDK", level: "Primary Specialty", highlight: true },
        { name: "Dart (Null-Safe / Isolates)", level: "Primary Specialty", highlight: true },
        { name: "iOS & Android Cross-Platform", level: "Production Deployed", highlight: true },
        { name: "State Architecture (Bloc / Riverpod)", level: "Production Deployed" },
        { name: "Platform Channels & Pigeon", level: "Native Integration" },
        { name: "Custom Painters & Shaders", level: "Advanced Graphics" },
        { name: "Impeller & Frame Budget Tuning", level: "Performance Profiling" },
        { name: "Offline-First Caching", level: "Data Architecture" },
      ]
    },
    {
      domain: "Generative AI & Agentic Workflows",
      index: "02",
      icon: <Cpu className="h-4 w-4" />,
      summary: "Architecting document extraction pipelines and deterministic stateful multi-agent systems.",
      technologies: [
        { name: "LangGraph", level: "Multi-Agent Graphs", highlight: true },
        { name: "RAG Pipelines", level: "Production Deployed", highlight: true },
        { name: "Gemini 1.5 Flash / Pro", level: "Production Deployed", highlight: true },
        { name: "pgvector & Embeddings", level: "Vector Storage" },
        { name: "Document Parsing Pipelines", level: "Information Extraction" },
        { name: "Structured JSON Inference", level: "Schema Validation" },
      ]
    },
    {
      domain: "Web & Modern Frontend",
      index: "03",
      icon: <Globe className="h-4 w-4" />,
      summary: "High-performance web applications built with TypeScript, component modularity, and crisp ergonomics.",
      technologies: [
        { name: "React", level: "Production Deployed", highlight: true },
        { name: "TypeScript", level: "Strict Type Systems", highlight: true },
        { name: "Next.js & Vite", level: "Modern Toolchains" },
        { name: "Tailwind CSS", level: "Design Systems" },
        { name: "Responsive Layouts (8pt Grid)", level: "Spatial Engineering" },
        { name: "DOM & Network Profiling", level: "Core Web Vitals" },
      ]
    },
    {
      domain: "Backend, Cloud & Infrastructure",
      index: "04",
      icon: <Database className="h-4 w-4" />,
      summary: "Cloud persistence, serverless relational databases, authentication layers, and developer tooling.",
      technologies: [
        { name: "Firebase (Auth / DB / Storage)", level: "Production Deployed", highlight: true },
        { name: "Neon DB (Serverless Postgres)", level: "Production Deployed" },
        { name: "Node.js & Express.js", level: "API Services" },
        { name: "Drizzle ORM & Supabase", level: "Type-Safe Relational" },
        { name: "Git & Version Control", level: "Collaborative GitFlow" },
        { name: "Figma & Design Tokens", level: "Vector Craftsmanship" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-zinc-200/60 font-mono text-xs text-zinc-500">
          <div className="flex items-center space-x-2">
            <span className="text-zinc-900 font-semibold">[ 04 ]</span>
            <span>//</span>
            <span className="uppercase tracking-wider">Capabilities &amp; Stack</span>
          </div>
          <span className="text-zinc-400">Production Proficiencies</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
            Disciplines, technical proficiencies &amp; tooling.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            A comprehensive mapping of technologies verified through client deliveries, proprietary SaaS builds, and ongoing production operations.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {domains.map((dom) => (
            <div
              key={dom.index}
              className="p-7 rounded-xl border border-zinc-200/90 bg-[#FAFAFA] hover:border-zinc-400 transition-colors flex flex-col justify-between shadow-2xs"
            >
              <div>
                {/* Domain Header */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200/70 mb-4 font-mono text-xs">
                  <div className="flex items-center space-x-2 text-zinc-900 font-semibold">
                    <div className="p-1.5 rounded-md bg-white border border-zinc-200">
                      {dom.icon}
                    </div>
                    <span>{dom.domain}</span>
                  </div>
                  <span className="text-zinc-400">#{dom.index}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 mb-6">
                  {dom.summary}
                </p>

                {/* Technologies List */}
                <div className="divide-y divide-zinc-200/70 border-y border-zinc-200/70">
                  {dom.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="py-2.5 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-zinc-400" />
                        <span className={`font-medium ${tech.highlight ? 'text-zinc-950' : 'text-zinc-700'}`}>
                          {tech.name}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-zinc-500 bg-white px-2 py-0.5 rounded border border-zinc-200/80">
                        {tech.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 font-mono text-[10px] text-zinc-400 text-right">
                VERIFIED IN PRODUCTION
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
