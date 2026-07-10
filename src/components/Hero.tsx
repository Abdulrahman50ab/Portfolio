import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import img from './cv2.jpg';

const roles = ["Software Engineer", "Flutter Developer", "Full Stack Web Engineer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 pt-16">
      {/* Background Glow Orbs */}
      <div className="glow-orb-indigo top-[10%] left-[-5%] animate-pulse-glow"></div>
      <div className="glow-orb-cyan bottom-[15%] right-[-5%] animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      <div className="glow-orb-pink top-[40%] left-[45%]"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio / CTA */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8 animate-fade-in-up">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-indigo-300">
              <span>Available for Freelance & Remote Work</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Abdul Rahman</span>
              </h1>
              
              {/* Typing Effect */}
              <div className="h-10 sm:h-12 flex items-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300">
                  <span className="text-slate-400 font-normal">A passionate </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
                    {currentText}
                  </span>
                </p>
              </div>

              {/* Bio */}
              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
                A professional <strong className="text-slate-200 font-semibold">Software Engineer</strong> specializing in building native-performance <strong className="text-cyan-300 font-semibold">Mobile Apps (Flutter)</strong> and scalable <strong className="text-indigo-300 font-semibold">Web Applications</strong>. I architect clean, robust, and user-centric solutions.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-indigo-500/20 flex items-center space-x-2"
              >
                <span>Hire Me</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => window.print()}
                className="bg-slate-900/80 hover:bg-slate-900 text-slate-200 border border-white/10 hover:border-white/20 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
              >
                <FileText className="h-4 w-4 text-indigo-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Shortcuts */}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Connect:</span>
              <a href="https://github.com/Abdulrahman50ab" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-indigo-500/10 border border-white/5 hover:border-indigo-500/30 text-slate-400 hover:text-indigo-400 transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/abdulrahman50?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-indigo-500/10 border border-white/5 hover:border-indigo-500/30 text-slate-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:abdulrahman50ab@gmail.com" className="p-2 rounded-lg bg-slate-900 hover:bg-indigo-500/10 border border-white/5 hover:border-indigo-500/30 text-slate-400 hover:text-indigo-400 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Circular Profile Image Showcase */}
          <div className="lg:col-span-5 w-full flex justify-center items-center relative animate-float-slow">
            <div className="relative group">
              
              {/* Pulsing neon background glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Circular Container with Gradient Border */}
              <div className="w-60 h-60 sm:w-68 sm:h-68 md:w-80 md:h-80 rounded-full p-[3.5px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-2xl relative z-10">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950/90 p-1 backdrop-blur-sm">
                  <img
                    src={img}
                    alt="Abdul Rahman"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Badge 1: Flutter Mastered */}
              <div className="absolute -top-3 -left-5 z-20 bg-slate-900/90 border border-white/10 px-4 py-2 rounded-xl flex items-center space-x-2 shadow-xl hover:border-indigo-500/40 transition-colors backdrop-blur-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
                <span className="text-xs font-bold text-slate-200">Flutter Mobile Apps</span>
              </div>

              {/* Floating Badge 2: Experience stats */}
              <div className="absolute top-[40%] -right-8 z-20 bg-slate-900/90 border border-white/10 px-4 py-2.5 rounded-xl flex flex-col shadow-xl hover:border-indigo-500/40 transition-colors text-left backdrop-blur-sm">
                <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">Experience</span>
                <span className="text-sm font-extrabold text-indigo-400 -mt-0.5">3+ Years Active</span>
              </div>

              {/* Floating Badge 3: Projects completed */}
              <div className="absolute -bottom-3 left-[10%] z-20 bg-slate-900/90 border border-white/10 px-4 py-2 rounded-xl flex items-center space-x-2 shadow-xl hover:border-indigo-500/40 transition-colors backdrop-blur-sm">
                <span className="text-xs font-bold text-slate-200">8+ Completed Projects</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={() => scrollToSection('about')} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-white transition-colors animate-bounce flex flex-col items-center cursor-pointer focus:outline-none"
      >
        <span className="text-[10px] font-semibold tracking-widest uppercase mb-1.5 text-slate-500">Scroll Down</span>
        <ChevronDown className="h-5 w-5 text-indigo-400" />
      </button>
    </section>
  );
};

export default Hero;