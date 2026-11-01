import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import Reveal from './motion/Reveal';

const About = () => {
  const workHistory = [
    {
      period: 'Jan 2026 – Present',
      role: 'Software Engineer',
      company: 'IntelliG',
      location: 'Hybrid',
      description: 'Developing Generative AI document extraction pipelines, LangGraph stateful multi-agent workflows, and shipping full-stack features across mobile and web interfaces.',
      tags: ['Generative AI', 'LangGraph', 'Flutter', 'React']
    },
    {
      period: 'Nov 2024 – Apr 2025',
      role: 'Flutter & Web Developer',
      company: 'IzzaTech',
      location: 'Lahore, Pakistan',
      description: 'Delivered cross-platform Flutter SaaS applications and responsive React dashboards backed by Neon PostgreSQL. Optimized application state flows and performance.',
      tags: ['Flutter', 'Dart', 'React', 'PostgreSQL']
    }
  ];

  return (
    <section id="about" className="border-b border-zinc-200/80 bg-[#FAFAFA] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="text-left mb-12">
          <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
            01 / A little about me
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Curiosity, craft &amp; a clear purpose.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
            Building useful technology means understanding the people, systems, and small details behind it.
          </p>
        </Reveal>

        {/* 2-Column Scannable Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          
          {/* Left Column: Personal Narrative & Education */}
          <div className="lg:col-span-6 space-y-6 lg:pr-5">
            <Reveal className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
              <p>
                My journey began with core web systems and deepened into native mobile mechanics. For over three years, I have concentrated on the <strong className="text-zinc-900 font-medium">Flutter engine and Dart ecosystem</strong>, building native-feel apps across iOS and Android with strict frame budget discipline.
              </p>
              <p>
                At <strong className="text-zinc-900 font-medium">IntelliG</strong>, I architect scalable generative workflows and document processing pipelines using modern LLM frameworks. I prioritize predictable state machines, clean architecture, and restraint over unnecessary complexity.
              </p>
            </Reveal>

            {/* Academic Credentials Card */}
            <Reveal delay={0.1}>
              <div className="p-5 rounded-2xl border border-zinc-200/90 bg-zinc-50/70 hover:border-indigo-200/80 transition-colors">
              <div className="flex items-center space-x-2 text-zinc-900 font-semibold text-sm mb-2">
                <GraduationCap className="h-4 w-4 text-indigo-600" />
                <span>Education &amp; Distinction</span>
              </div>
              <h3 className="font-heading text-base font-semibold text-zinc-950">
                BS in Computer Science
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-0.5">
                Riphah International University · Lahore, Pakistan
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                <span className="text-zinc-500">2023 – 2027</span>
                <span className="text-zinc-300">·</span>
                <span className="inline-flex items-center space-x-1 font-medium text-indigo-800 bg-indigo-50 border border-indigo-200/80 px-2 py-0.5 rounded-md">
                  <Award className="h-3 w-3 inline text-indigo-600" />
                  <span>CGPA 3.93 / 4.00</span>
                </span>
              </div>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Work Experience Timeline */}
          <div className="lg:col-span-6">
            <Reveal>
            <div className="flex items-center space-x-2 text-zinc-900 font-semibold text-sm mb-6">
              <Briefcase className="h-4 w-4 text-indigo-600" />
              <span>Professional Trajectory</span>
            </div>
            </Reveal>

            <div className="space-y-6">
              {workHistory.map((job, idx) => (
                <Reveal key={idx} delay={idx * 0.08}>
                <div
                  className="relative rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-[0_8px_30px_-26px_rgba(24,24,27,0.35)] transition-colors hover:border-indigo-200 sm:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-heading text-base font-semibold text-zinc-950">
                        {job.role}
                      </h4>
                      <p className="text-xs font-medium text-zinc-700">
                        {job.company} <span className="text-zinc-400">· {job.location}</span>
                      </p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded border ${
                      idx === 0
                        ? 'text-indigo-700 bg-indigo-50 border-indigo-200/80'
                        : 'text-zinc-600 bg-zinc-100 border-zinc-200'
                    }`}>
                      {job.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-3">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded hover:border-indigo-200 hover:text-indigo-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                </Reveal>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
