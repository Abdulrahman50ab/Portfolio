import React from 'react';
import { ArrowDown, ArrowUpRight, FileText, MapPin } from 'lucide-react';
import img from './cv2.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden border-b border-zinc-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="relative z-10 text-left">
            <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-zinc-500">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#FAFAFA] px-3 py-1.5 text-zinc-700">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                Software Engineer
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-indigo-600" />
                Lahore, Pakistan
              </span>
            </div>

            <h1 className="max-w-2xl font-heading text-5xl font-bold leading-[1.04] tracking-[-0.055em] text-zinc-950 sm:text-6xl lg:text-[4.5rem]">
              Thoughtful software,
              <span className="mt-1 block text-indigo-600">built to move people forward.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              I’m <span className="font-semibold text-zinc-900">Abdul Rahman</span> — a software engineer building polished Flutter apps, dependable React products, and practical Generative AI workflows. I care about the details that make technology feel clear, useful, and human.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/15 transition-colors hover:bg-indigo-700 active:scale-[0.98]"
              >
                Explore my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 active:scale-[0.98]"
              >
                <FileText className="h-4 w-4 text-zinc-500" />
                Download résumé
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-1.5 rounded-xl px-3 py-3 text-sm font-semibold text-zinc-600 transition-colors hover:text-indigo-600"
              >
                Let’s talk <ArrowDown className="h-3.5 w-3.5 -rotate-45" />
              </button>
            </div>

            <div className="mt-11 grid max-w-xl grid-cols-2 gap-x-5 gap-y-5 border-t border-zinc-200 pt-6 sm:grid-cols-4">
              <div>
                <p className="font-heading text-2xl font-bold tracking-tight text-zinc-950 tabular-nums">3+</p>
                <span className="mt-1 block text-xs text-zinc-500">Years building</span>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold tracking-tight text-zinc-950 tabular-nums">15+</p>
                <span className="mt-1 block text-xs text-zinc-500">Shipped works</span>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold tracking-tight text-zinc-950 tabular-nums">3.93</p>
                <span className="mt-1 block text-xs text-zinc-500">BS CS · CGPA</span>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold tracking-tight text-zinc-950">AI</p>
                <span className="mt-1 block text-xs text-zinc-500">Current focus</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[27rem] lg:mr-0">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-indigo-100 sm:-right-7 sm:-top-7 sm:h-40 sm:w-40" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full border border-zinc-200 sm:-bottom-7 sm:-left-7 sm:h-36 sm:w-36" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-zinc-100 p-2 shadow-[0_24px_70px_-36px_rgba(24,24,27,0.35)]">
              <img
                src={img}
                alt="Abdul Rahman, software engineer"
                className="aspect-[4/4.45] w-full rounded-[1.3rem] object-cover object-top"
              />
              <div className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded-b-[1.3rem] bg-zinc-950/75 px-5 py-4 text-white backdrop-blur-md">
                <div>
                  <p className="text-sm font-semibold">Building what’s next</p>
                  <p className="mt-0.5 text-xs text-white/70">Mobile · Web · Intelligent systems</p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold">AR</span>
              </div>
            </div>
            <div className="absolute -left-5 top-10 hidden rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-lg shadow-zinc-900/5 sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Currently</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">Software Engineer <span className="text-indigo-600">@ IntelliG</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
