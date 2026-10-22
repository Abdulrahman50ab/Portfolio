import React from 'react';
import { Smartphone, Cpu, Database, Award } from 'lucide-react';

const About = () => {
  const principles = [
    {
      title: "Predictable Mobile Architecture",
      icon: <Smartphone className="h-4 w-4 text-zinc-900" />,
      description: "Building Flutter applications with strict state isolation (Bloc/Riverpod), clean repository boundaries, and custom Dart isolate concurrency.",
    },
    {
      title: "Generative AI & Agent Workflows",
      icon: <Cpu className="h-4 w-4 text-zinc-900" />,
      description: "Developing automated document intelligence pipelines, LangGraph stateful multi-agent workflows, and semantic similarity search via pgvector.",
    },
    {
      title: "Full-Stack Data Persistence",
      icon: <Database className="h-4 w-4 text-zinc-900" />,
      description: "Designing end-to-end architectures utilizing React, Node.js, PostgreSQL (Neon DB), Firebase services, and type-safe schemas via Drizzle ORM.",
    },
  ];

  const workHistory = [
    {
      period: "Jan 2026 – Present",
      role: "Software Engineer",
      company: "IntelliG",
      location: "Hybrid",
      description: "Spearheading Generative AI pipeline development, building full-stack applications with LangGraph and LLM tooling, and shipping production features across mobile and web interfaces.",
      tags: ["Generative AI", "LangGraph", "Full-Stack", "Flutter", "React"]
    },
    {
      period: "Nov 2024 – Apr 2025",
      role: "Flutter & Web Developer",
      company: "IzzaTech",
      location: "Lahore, Pakistan",
      description: "Delivered cross-platform Flutter SaaS applications and React web platforms backed by Neon PostgreSQL. Revived legacy client codebases through state refactoring and responsive UI redesigns.",
      tags: ["Flutter", "Dart", "React", "PostgreSQL", "REST APIs"]
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-zinc-200/60 font-mono text-xs text-zinc-500">
          <div className="flex items-center space-x-2">
            <span className="text-zinc-900 font-semibold">[ 02 ]</span>
            <span>//</span>
            <span className="uppercase tracking-wider">Background &amp; Philosophy</span>
          </div>
          <span className="text-zinc-400">Trajectory // 2023 — Present</span>
        </div>

        {/* Narrative & Principles Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Engineering systems with architectural discipline and human-centered craft.
            </h2>
            
            <p className="text-base text-zinc-600 leading-relaxed">
              My engineering trajectory began with core web systems and deepened into native mobile mechanics. For over two years, I have concentrated on the <strong className="text-zinc-900 font-medium">Flutter engine and Dart ecosystem</strong>, building native-feel experiences across iOS and Android while eliminating stutter through frame-budget optimizations.
            </p>

            <p className="text-sm text-zinc-600 leading-relaxed">
              At <strong className="text-zinc-900 font-medium">IntelliG</strong>, I architect scalable generative workflows and intelligent document processing pipelines using modern LLM frameworks. I prioritize mathematical correctness, deterministic state machines, and restraint in visual design over superficial trends.
            </p>

            {/* Academic Credentials Card */}
            <div className="mt-8 p-5 rounded-xl border border-zinc-200 bg-zinc-50/60 text-left">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-zinc-900" />
                  <span className="font-mono text-xs font-semibold text-zinc-900 uppercase tracking-wider">
                    Academic Distinction
                  </span>
                </div>
                <span className="font-mono text-xs text-zinc-500">2023 – 2027</span>
              </div>
              <h4 className="text-base font-semibold text-zinc-900 mt-2">
                BS in Computer Science
              </h4>
              <p className="text-xs text-zinc-600 mt-0.5">
                Riphah International University — Lahore, Pakistan
              </p>
              <div className="mt-3 flex items-center space-x-3 text-xs">
                <span className="font-mono text-zinc-500">Cumulative GPA:</span>
                <span className="font-mono font-semibold text-zinc-950 bg-white px-2 py-0.5 rounded border border-zinc-200">
                  3.93 / 4.00
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Engineering Tenets */}
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block text-left mb-2">
              Core Architectural Tenets
            </span>
            
            {principles.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-zinc-200/90 bg-white text-left hover:border-zinc-400 transition-colors"
              >
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-200/60">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed pl-11">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Experience Timeline Section */}
        <div className="mt-20 pt-16 border-t border-zinc-200/80">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold text-zinc-950 tracking-tight text-left">
              Professional Trajectory
            </h3>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
              Chronological History
            </span>
          </div>

          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {workHistory.map((job, idx) => (
              <div
                key={idx}
                className="py-6 sm:py-8 grid sm:grid-cols-12 gap-4 sm:gap-8 items-start text-left group"
              >
                <div className="sm:col-span-3">
                  <span className="font-mono text-xs text-zinc-500 block">
                    {job.period}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400 block mt-0.5">
                    {job.location}
                  </span>
                </div>

                <div className="sm:col-span-4">
                  <h4 className="text-base font-semibold text-zinc-950">
                    {job.role}
                  </h4>
                  <p className="text-sm text-zinc-600 font-medium mt-0.5">
                    {job.company}
                  </p>
                </div>

                <div className="sm:col-span-5 space-y-3">
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
