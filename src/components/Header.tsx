import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
          threshold: 0.1,
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
    { name: 'About', id: 'about', index: '01' },
    { name: 'Selected Work', id: 'projects', index: '02' },
    { name: 'Capabilities', id: 'skills', index: '03' },
    { name: 'Contact', id: 'contact', index: '04' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAFA]/90 backdrop-blur-md border-b border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)]'
          : 'bg-[#FAFAFA]/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Identity */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2.5 text-left group cursor-pointer focus:outline-none"
            aria-label="Abdul Rahman - Return to top"
          >
            <span className="font-semibold text-sm sm:text-base text-zinc-900 tracking-tight group-hover:text-zinc-600 transition-colors">
              Abdul Rahman
            </span>
            <span className="text-zinc-300 font-mono text-xs hidden sm:inline">/</span>
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider hidden sm:inline">
              Software Engineer
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center space-x-1.5 py-1 text-xs tracking-tight transition-colors focus:outline-none ${
                  activeSection === item.id
                    ? 'text-zinc-900 font-medium'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                <span className="font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 transition-colors">
                  {item.index}
                </span>
                <span>{item.name}</span>
                {activeSection === item.id && (
                  <span className="w-1 h-1 rounded-full bg-zinc-900 ml-1" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Actions: Availability & CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <div className="flex items-center space-x-2 pl-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] text-zinc-500 tracking-tight">Available for hire</span>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center space-x-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-3.5 py-1.5 rounded-lg border border-zinc-900 transition-all active:scale-[0.98]"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-zinc-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-md"
            >
              Contact
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-200/80 bg-[#FAFAFA] py-4 space-y-1 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-left text-sm rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-zinc-100 text-zinc-900 font-medium'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <span>{item.name}</span>
                <span className="font-mono text-xs text-zinc-400">{item.index}</span>
              </button>
            ))}
            <div className="pt-3 px-3 border-t border-zinc-200/60 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-500">Status</span>
              <span className="font-mono text-xs text-emerald-600 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Available</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
