import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import img from './cv2.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'contact'];
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { 
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0.1 
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-slate-950/75 backdrop-blur-md border-white/5 shadow-2xl py-3' 
        : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="bg-gradient-to-tr from-indigo-600 to-cyan-500 p-2 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <Code className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-xl font-bold tracking-tight text-white block group-hover:text-indigo-400 transition-colors">
                Abdul Rahman
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase block -mt-1">
                Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 text-sm font-medium transition-all duration-300 focus:outline-none ${
                  activeSection === item.id 
                    ? 'text-indigo-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                )}
              </button>
            ))}
          </nav>

          {/* Picture Frame / CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-lg border border-indigo-400/20 hover:shadow-lg hover:shadow-indigo-500/10 transition-all"
            >
              Let's Talk
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500/30 p-[2px] bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-md">
              <img 
                src={img} 
                alt="Abdul Rahman" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-slate-900/60 border border-white/5 text-slate-300 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-slate-950/95 backdrop-blur-lg border border-white/5 rounded-2xl shadow-2xl p-4 animate-fade-in z-50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all ${
                    activeSection === item.id 
                      ? 'text-indigo-400 bg-indigo-500/10 border-l-4 border-indigo-500' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;