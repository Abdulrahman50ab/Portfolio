import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, FileText, MapPin } from 'lucide-react';
import img from './cv2.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-zinc-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Monospaced Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-zinc-200/60 font-mono text-xs text-zinc-500">
          <div className="flex items-center space-x-2">
            <span className="text-zinc-900 font-semibold">[ 01 ]</span>
            <span>//</span>
            <span className="uppercase tracking-wider">Software Engineer &amp; Mobile Specialist</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5">
              <MapPin className="h-3.5 w-3.5 text-zinc-400" />
              <span>Lahore, Pakistan</span>
            </span>
            <span className="text-zinc-300">|</span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 text-[11px] font-medium">
              Open to Opportunities
            </span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Editorial Typography & Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 leading-[1.08]">
                Architecting resilient mobile ecosystems &amp; thoughtful software.
              </h1>
              
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl font-normal pt-1">
                I am <span className="text-zinc-900 font-medium">Abdul Rahman</span>, a Software Engineer specializing in high-performance <span className="text-zinc-900 font-medium">Flutter cross-platform architectures</span>, full-stack web applications in <span className="text-zinc-900 font-medium">React &amp; Node.js</span>, and modern <span className="text-zinc-900 font-medium">Generative AI pipelines</span>. Focused on mechanical sympathy, deterministic state flows, and human-first simplicity.
              </p>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-6 py-3 rounded-xl transition-all shadow-xs active:scale-[0.98]"
              >
                <span>Initiate conversation</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center space-x-2 bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 hover:border-zinc-300 text-sm font-medium px-5 py-3 rounded-xl transition-all shadow-xs active:scale-[0.98]"
              >
                <FileText className="h-4 w-4 text-zinc-500" />
                <span>Curriculum Vitae</span>
              </button>
            </div>

            {/* Architectural Data Strip */}
            <div className="pt-6 border-t border-zinc-200/70">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider block">Core Domain</span>
                  <p className="text-sm font-semibold text-zinc-900">Flutter Mobile</p>
                  <span className="text-xs text-zinc-500 block">iOS &amp; Android</span>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider block">Experience</span>
                  <p className="text-sm font-semibold text-zinc-900 tabular-nums">3+ Years Active</p>
                  <span className="text-xs text-zinc-500 block">15+ Shipped Works</span>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider block">Academics</span>
                  <p className="text-sm font-semibold text-zinc-900 tabular-nums">3.93 / 4.00 CGPA</p>
                  <span className="text-xs text-zinc-500 block">BS Computer Science</span>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider block">Current Role</span>
                  <p className="text-sm font-semibold text-zinc-900">Software Engineer</p>
                  <span className="text-xs text-zinc-500 block">@ IntelliG</span>
                </div>
              </div>
            </div>

            {/* Direct Connect Anchors */}
            <div className="flex items-center space-x-6 pt-2 font-mono text-xs text-zinc-600">
              <span className="text-zinc-400 uppercase tracking-wider text-[11px]">Channels:</span>
              <a
                href="https://github.com/Abdulrahman50ab"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 transition-colors flex items-center space-x-1"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdulrahman50?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 transition-colors flex items-center space-x-1"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:abdulrahman50ab@gmail.com"
                className="hover:text-zinc-950 transition-colors flex items-center space-x-1"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Presentation */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <div className="relative bg-white border border-zinc-200/90 rounded-2xl p-2.5 shadow-sm">
                
                {/* Photo Frame */}
                <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-100 relative">
                  <img
                    src={img}
                    alt="Abdul Rahman — Software Engineer"
                    className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Subtle Corner Status Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 bg-zinc-900/80 backdrop-blur-md text-white p-3 rounded-lg border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-white">Abdul Rahman</p>
                      <p className="font-mono text-[10px] text-zinc-300">Software Engineer &bull; IntelliG</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                </div>

                {/* Subtitle Caption */}
                <div className="pt-3 px-1 flex items-center justify-between font-mono text-[11px] text-zinc-500">
                  <span>Lahore, PK (UTC+5)</span>
                  <span>Est. 2023</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
