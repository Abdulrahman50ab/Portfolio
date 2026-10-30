import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      // Reading progress through the whole page
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, Math.max(0, (y / scrollable) * 100)) : 0);

      if (y < 200) {
        setActiveSection('home');
      }
    };

    handleScroll();
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

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

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
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAFA]/90 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-20px_rgba(24,24,27,0.35)] backdrop-blur-md border-b border-zinc-200/70'
          : 'bg-[#FAFAFA]/70 border-b border-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[4.5rem] gap-4">

          {/* Logo / Brand */}
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 text-left group cursor-pointer focus:outline-none"
            aria-label="Abdul Rahman - Return to top"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-xs font-bold tracking-tight text-white shadow-sm transition-colors group-hover:bg-indigo-600">
              AR
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading font-bold text-sm text-zinc-950 tracking-tight group-hover:text-indigo-600 transition-colors">
                Abdul Rahman
              </span>
              <span className="mt-1 text-[10px] text-zinc-500 font-medium tracking-wide">
                SOFTWARE ENGINEER
              </span>
            </span>
          </button>

          {/* Desktop Navigation: floating glassy pill */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1 rounded-full border border-zinc-200/80 bg-white/80 p-1.5 shadow-[0_10px_30px_-24px_rgba(24,24,27,0.45)] backdrop-blur-md"
          >
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={() => scrollToSection(item.id)}
                className={`relative rounded-full px-4 py-1.5 text-sm tracking-tight transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-zinc-950 font-semibold text-white shadow-sm'
                    : 'text-zinc-500 font-normal hover:bg-zinc-100 hover:text-zinc-950'
                }`}
              >
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Right Actions: Availability & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-white text-zinc-600 border border-zinc-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Available for opportunities
            </span>

            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center space-x-1.5 bg-zinc-950 hover:bg-indigo-600 text-white text-xs font-medium px-3.5 py-2 rounded-lg transition-all active:scale-[0.98] shadow-sm"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-zinc-950 text-white text-xs font-medium px-3 py-1.5 rounded-md"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden border-t border-zinc-200/80 bg-[#FAFAFA] py-4 space-y-1 animate-fade-in">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-left text-sm rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
                }`}
              >
                <span>{item.name}</span>
              </button>
            ))}
            <div className="pt-3 px-3 border-t border-zinc-200/60 flex items-center justify-between text-xs text-zinc-600">
              <span>Status</span>
              <span className="inline-flex items-center gap-2 text-zinc-600 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Available for opportunities
              </span>
            </div>
          </nav>
        )}
      </div>

      {/* Scroll progress indicator */}
      <div
        aria-hidden="true"
        className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ width: `${progress}%` }}
      />
    </header>
  );
};

export default Header;
