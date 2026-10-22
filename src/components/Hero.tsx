import React from 'react';
import { ArrowUpRight, FileText, MapPin } from 'lucide-react';
import img from './cv2.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Focused Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Status Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs text-zinc-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-medium">Software Engineer</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-500 flex items-center gap-1">
                <MapPin className="h-3 w-3 inline text-zinc-400" />
                Lahore, Pakistan
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
              Building fast mobile apps &amp; intelligent software.
            </h1>
            
            {/* Concise Subhead */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl font-normal">
              I'm <span className="text-zinc-900 font-medium">Abdul Rahman</span>. I specialize in cross-platform <span className="text-zinc-900 font-medium">Flutter</span> apps across iOS and Android, modern <span className="text-zinc-900 font-medium">React</span> web applications, and <span className="text-zinc-900 font-medium">Generative AI</span> pipelines. Currently engineering at IntelliG.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center space-x-2 bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-xs active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center space-x-2 bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 hover:border-zinc-300 text-sm font-medium px-4 py-2.5 rounded-xl transition-all shadow-xs active:scale-[0.98]"
              >
                <FileText className="h-4 w-4 text-zinc-500" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Clean Key Metrics */}
            <div className="pt-6 border-t border-zinc-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div>
                  <p className="font-heading text-xl sm:text-2xl font-bold text-zinc-950 tabular-nums">3+ Years</p>
                  <span className="text-xs text-zinc-500 mt-0.5 block">Experience</span>
                </div>

                <div>
                  <p className="font-heading text-xl sm:text-2xl font-bold text-zinc-950 tabular-nums">15+</p>
                  <span className="text-xs text-zinc-500 mt-0.5 block">Shipped Works</span>
                </div>

                <div>
                  <p className="font-heading text-xl sm:text-2xl font-bold text-zinc-950 tabular-nums">3.93</p>
                  <span className="text-xs text-zinc-500 mt-0.5 block">CGPA · BS CS</span>
                </div>

                <div>
                  <p className="font-heading text-xl sm:text-2xl font-bold text-zinc-950">IntelliG</p>
                  <span className="text-xs text-zinc-500 mt-0.5 block">Current Role</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Refined Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-sm p-2">
                <img
                  src={img}
                  alt="Abdul Rahman — Software Engineer"
                  className="w-full aspect-[4/5] object-cover rounded-xl filter contrast-[1.02]"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
