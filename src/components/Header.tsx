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
        ? 'bg-white/90 backdrop-blur-md border-slate-200/80 shadow-xs py-3' 
        : 'bg-white/60 backdrop-blur-xs border-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
          >
            <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-xs group-hover:bg-indigo-700 transition-colors">
              <Code className="h-5 w-5" />
            </div>
            <div className="text-left">
              <span className="text-xl font-bold tracking-tight text-slate-900 block group-hover:text-indigo-600 transition-colors">
                Abdul Rahman
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase block -mt-0.5">
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
                className={`relative py-2 text-sm font-medium transition-colors focus:outline-none ${
                  activeSection === item.id 
                    ? 'text-indigo-600 font-semibold' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Picture Frame / CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-xs hover:shadow transition-all"
            >
              Let's Talk
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200 shadow-xs p-[1px] bg-white">
              <img 
                src={img} 
                alt="Abdul Rahman" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
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
          <div className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl p-4 animate-fade-in z-50">
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all ${
                    activeSection === item.id 
                      ? 'text-indigo-600 bg-indigo-50/80 border-l-4 border-indigo-600 font-semibold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
