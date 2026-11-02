import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText, MapPin } from 'lucide-react';
import EmployeeCard from './EmployeeCard';
import Counter from './motion/Counter';
import Magnetic from './motion/Magnetic';
import { EASE } from './motion/presets';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

type Stat = { numeric?: number; text?: string; suffix?: string; decimals?: number; label: string };

const stats: Stat[] = [
  { numeric: 3, suffix: '+', label: 'Years building' },
  { numeric: 15, suffix: '+', label: 'Shipped projects' },
  { numeric: 3.93, decimals: 2, label: 'BS CS · CGPA' },
  { text: 'AI', label: 'Current focus' },
];

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="home" className="relative isolate overflow-hidden bg-canvas">
      <div
        aria-hidden="true"
        className="paper-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_78%_70%_at_50%_0%,black,transparent_80%)]"
      />
      <div aria-hidden="true" className="hero-wash absolute inset-0 -z-10" />

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-14 pb-14 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-20"
          variants={heroContainer}
          initial={reduceMotion ? false : 'hidden'}
          animate={reduceMotion ? undefined : 'visible'}
        >
          {/* Intro */}
          <div className="relative z-10 lg:col-span-7">
            <motion.div
              variants={heroItem}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-[11px]"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Portfolio / 2026
              </span>
              <span className="h-3 w-px bg-line" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5 normal-case tracking-normal">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                Lahore, Pakistan
              </span>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="mt-7 max-w-[14ch] font-heading text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.06em] text-ink sm:text-[4.2rem] lg:text-[4rem] xl:text-[4.55rem]"
            >
              <span className="block">Thoughtful software,</span>
              <span className="block">
                built to{' '}
                <span className="font-display font-normal italic tracking-[-0.02em] text-accent">
                  move people
                </span>
              </span>
              <span className="block">forward.</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-7 max-w-[34rem] text-pretty text-[15px] leading-7 text-muted sm:text-base sm:leading-8"
            >
              I&apos;m <span className="font-semibold text-ink">Abdul Rahman</span> — a software engineer
              crafting polished Flutter apps, dependable React products, and practical Generative AI
              workflows. I care about the details that make technology feel clear, useful, and human.
            </motion.p>

            <motion.div variants={heroItem} className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(79,70,229,0.55)] transition-all hover:bg-indigo-700 hover:shadow-[0_18px_36px_-14px_rgba(79,70,229,0.65)] active:scale-[0.98]"
                >
                  Explore selected work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/25 hover:bg-white active:scale-[0.98]"
                >
                  <FileText className="h-4 w-4 text-muted" />
                  Download résumé
                </button>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group inline-flex items-center gap-1.5 px-2 py-3 text-sm font-semibold text-muted transition-colors hover:text-accent"
                >
                  Let&apos;s talk
                  <ArrowDown className="h-3.5 w-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </button>
              </Magnetic>
            </motion.div>
          </div>

        </motion.div>

        {/* Freely hanging employee ID card */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="pointer-events-auto">
            <EmployeeCard fullHero />
          </div>
        </div>

        {/* Stat strip */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
          className="grid grid-cols-2 border-y border-line sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-6 sm:px-7 sm:py-7 ${index > 0 ? 'border-l border-line' : ''} ${
                index === 2 ? 'border-l-0 sm:border-l' : ''
              } ${index > 1 ? 'border-t border-line sm:border-t-0' : ''}`}
            >
              <p className="font-heading text-[1.6rem] font-semibold tracking-tight text-ink tabular-nums sm:text-[1.85rem]">
                {stat.text !== undefined ? (
                  stat.text
                ) : (
                  <Counter
                    value={stat.numeric ?? 0}
                    decimals={stat.decimals ?? 0}
                    suffix={stat.suffix ?? ''}
                  />
                )}
              </p>
              <span className="mt-1.5 block text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
