import { ArrowUpRight, Award, GraduationCap } from 'lucide-react';
import Reveal from './motion/Reveal';
import SectionHeading from './SectionHeading';

const workHistory = [
  {
    period: 'Jan 2026 — Present',
    role: 'Software Engineer',
    company: 'IntelliG',
    location: 'Hybrid',
    description:
      'Developing Generative AI document extraction pipelines, LangGraph stateful multi-agent workflows, and shipping full-stack features across mobile and web interfaces.',
    tags: ['Generative AI', 'LangGraph', 'Flutter', 'React'],
  },
  {
    period: 'Nov 2024 — Apr 2025',
    role: 'Flutter & Web Developer',
    company: 'IzzaTech',
    location: 'Lahore, Pakistan',
    description:
      'Delivered cross-platform Flutter SaaS applications and responsive React dashboards backed by Neon PostgreSQL. Optimized application state flows and performance.',
    tags: ['Flutter', 'Dart', 'React', 'PostgreSQL'],
  },
];

const About = () => {
  return (
    <section id="about" className="border-b border-line bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="A little about me"
            title={
              <>
                Curiosity, craft &amp; a{' '}
                <span className="font-display font-normal italic text-accent">clear purpose.</span>
              </>
            }
            description="Building useful technology means understanding the people, systems, and small details behind it."
          />
        </Reveal>

        {/* Narrative + credentials */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="max-w-2xl font-heading text-[1.35rem] font-medium leading-[1.55] tracking-[-0.02em] text-ink sm:text-[1.55rem]">
              I build at the intersection of craft and clarity — from native-feel Flutter apps to
              intelligent document workflows that quietly do the hard work.
            </p>

            <div className="mt-7 grid gap-6 text-[15px] leading-7 text-muted sm:grid-cols-2">
              <p>
                My journey began with core web systems and deepened into native mobile mechanics. For
                over three years, I&apos;ve concentrated on the{' '}
                <strong className="font-semibold text-ink">Flutter engine and Dart ecosystem</strong>,
                building native-feel apps across iOS and Android with strict frame budget discipline.
              </p>
              <p>
                At <strong className="font-semibold text-ink">IntelliG</strong>, I architect scalable
                generative workflows and document processing pipelines using modern LLM frameworks. I
                prioritize predictable state machines, clean architecture, and restraint over
                unnecessary complexity.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5 text-xs font-medium text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Mobile · Web · AI
              </span>
              <span className="h-3 w-px bg-line" aria-hidden="true" />
              <span>Lahore, Pakistan</span>
              <span className="h-3 w-px bg-line" aria-hidden="true" />
              <span>Open to remote &amp; hybrid</span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_-50px_rgba(14,14,16,0.45)] sm:p-7">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-accent-soft"
              />

              <div className="relative flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100 bg-accent-soft text-accent">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-line bg-canvas px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  2023 — 2027
                </span>
              </div>

              <p className="relative mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                Education
              </p>
              <h3 className="relative mt-2 font-heading text-xl font-semibold tracking-tight text-ink">
                BS in Computer Science
              </h3>
              <p className="relative mt-1 text-sm leading-6 text-muted">
                Riphah International University
                <span className="text-stone-300"> · </span>
                Lahore, Pakistan
              </p>

              <div className="relative mt-7 flex items-end justify-between gap-4 border-t border-line pt-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                    CGPA
                  </p>
                  <p className="mt-1 font-heading text-3xl font-semibold tracking-tight text-ink tabular-nums">
                    3.93
                    <span className="ml-1 text-sm font-medium text-muted">/ 4.00</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/70 bg-accent-soft px-3 py-1.5 text-[11px] font-semibold text-indigo-700">
                  <Award className="h-3.5 w-3.5" />
                  Distinction
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-line bg-white/60 p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Focus
                </p>
                <p className="mt-1.5 font-heading text-sm font-semibold text-ink">
                  Mobile · Web · AI
                </p>
              </div>
              <div className="rounded-2xl border border-line bg-white/60 p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Approach
                </p>
                <p className="mt-1.5 font-heading text-sm font-semibold text-ink">
                  Clarity over cleverness
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Experience */}
        <div className="mt-16 md:mt-20">
          <Reveal className="flex items-center gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              Professional trajectory
            </span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span className="text-[10px] font-semibold tabular-nums text-muted">02 roles</span>
          </Reveal>

          <div>
            {workHistory.map((job, index) => (
              <Reveal key={job.company} delay={index * 0.08}>
                <article className="group grid gap-5 border-t border-line py-7 md:grid-cols-12 md:gap-6 md:py-8">
                  <div className="md:col-span-3">
                    <p className="font-heading text-sm font-semibold tracking-tight text-ink">
                      {job.period}
                    </p>
                    <p className="mt-1.5 text-xs text-muted">{job.location}</p>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-heading text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                      {job.role}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted">
                      {job.company}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </p>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-sm leading-6 text-muted">{job.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line bg-white/60 px-2.5 py-1 text-[10px] font-medium text-muted transition-colors group-hover:border-indigo-200 group-hover:text-indigo-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
