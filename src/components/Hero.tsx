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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white pt-20 pb-16 md:pt-28 md:pb-20">
      {/* Background Soft Glow Orbs */}
      <div className="glow-orb-indigo top-[10%] left-[-5%]"></div>
      <div className="glow-orb-cyan bottom-[15%] right-[-5%]"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio / CTA */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8 animate-fade-in-up">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Freelance & Remote Work</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-900">Abdul Rahman</span>
              </h1>
              
              {/* Typing Effect */}
              <div className="h-10 sm:h-12 flex items-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800">
                  <span className="text-slate-500 font-normal">A passionate </span>
                  <span className="text-indigo-600 font-bold border-r-2 border-indigo-600 pr-1 animate-pulse">
                    {currentText}
                  </span>
                </p>
              </div>

              {/* Bio */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                A dedicated <strong className="text-slate-900 font-semibold">Software Engineer</strong> specializing in building native-performance <strong className="text-indigo-600 font-semibold">Mobile Apps (Flutter)</strong> and scalable <strong className="text-slate-900 font-semibold">Web Applications</strong>. I architect clean, robust, and user-centric digital experiences.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-xs hover:shadow-md flex items-center space-x-2 active:scale-[0.98]"
              >
                <span>Hire Me</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => window.print()}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-xs active:scale-[0.98]"
              >
                <FileText className="h-4 w-4 text-indigo-600" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Shortcuts */}
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/80">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Connect:</span>
              <a 
                href="https://github.com/Abdulrahman50ab" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-600 hover:text-indigo-600 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdulrahman50?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-600 hover:text-indigo-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="mailto:abdulrahman50ab@gmail.com" 
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-600 hover:text-indigo-600 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Circular Profile Image Showcase */}
          <div className="lg:col-span-5 w-full flex justify-center items-center relative animate-float-slow">
            <div className="relative group">
              
              {/* Circular Container with Clean Light Border */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-white border border-slate-200 shadow-xl relative z-10">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 p-0.5">
                  <img
                    src={img}
                    alt="Abdul Rahman"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Badge 1: Flutter */}
              <div className="absolute -top-3 -left-5 z-20 bg-white/95 border border-slate-200 px-4 py-2 rounded-xl flex items-center space-x-2 shadow-md backdrop-blur-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-600"></div>
                <span className="text-xs font-bold text-slate-800">Flutter Mobile Apps</span>
              </div>

              {/* Floating Badge 2: Experience stats */}
              <div className="absolute top-[40%] -right-8 z-20 bg-white/95 border border-slate-200 px-4 py-2.5 rounded-xl flex flex-col shadow-md text-left backdrop-blur-xs">
                <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">Experience</span>
                <span className="text-sm font-extrabold text-indigo-600 -mt-0.5">3+ Years Active</span>
              </div>

              {/* Floating Badge 3: Projects completed */}
              <div className="absolute -bottom-3 left-[10%] z-20 bg-white/95 border border-slate-200 px-4 py-2 rounded-xl flex items-center space-x-2 shadow-md backdrop-blur-xs">
                <span className="text-xs font-bold text-slate-800">8+ Completed Projects</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={() => scrollToSection('about')} 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-700 transition-colors animate-bounce flex flex-col items-center cursor-pointer focus:outline-none"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-semibold tracking-widest uppercase mb-1.5 text-slate-400">Scroll Down</span>
        <ChevronDown className="h-5 w-5 text-indigo-600" />
      </button>
    </section>
  );
};

export default Hero;
