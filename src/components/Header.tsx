import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Work', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const { scrollToSection: scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, Math.max(0, (y / scrollable) * 100)) : 0);

      if (y < 180) setActiveSection('home');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'contact'];
    const observers = sectionIds.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sectionId);
        },
        { rootMargin: '-15% 0px -65% 0px', threshold: 0.05 }
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
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen || !pendingSection) return;

    const frame = requestAnimationFrame(() => {
      const sectionId = pendingSection;
      setPendingSection(null);
      scrollTo(sectionId);
    });

    return () => cancelAnimationFrame(frame);
  }, [isMenuOpen, pendingSection, scrollTo]);

  const scrollToSection = (sectionId: string) => {
    if (isMenuOpen) {
      setPendingSection(sectionId);
      setIsMenuOpen(false);
      return;
    }
    scrollTo(sectionId);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || isMenuOpen
          ? 'border-b border-line/90 bg-canvas/95 backdrop-blur-xl'
          : 'border-b border-transparent bg-canvas/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.75rem] items-center justify-between gap-6">
          {/* Brand */}
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="group flex shrink-0 items-center gap-3 text-left focus-visible:outline-none"
            aria-label="Abdul Rahman — return to top"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-[11px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:bg-accent">
              AR
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-canvas bg-emerald-500" />
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-heading text-[13px] font-bold tracking-tight text-ink transition-colors group-hover:text-accent">
                Abdul Rahman
              </span>
              <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-muted">
                Software engineer
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  aria-current={active ? 'location' : undefined}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] tracking-tight transition-colors duration-200 lg:px-4 ${
                    active
                      ? 'font-semibold text-ink'
                      : 'font-medium text-muted hover:bg-white/70 hover:text-ink'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <span className="hidden items-center gap-2 text-[11px] font-medium text-muted lg:inline-flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-600" />
              </span>
              Open to work
            </span>

            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-accent"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5 text-white/60 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="rounded-full bg-ink px-3 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-accent"
            >
              Let&apos;s talk
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full border border-line bg-white/60 p-2.5 text-ink transition-colors hover:border-ink/30"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="animate-fade-in border-y border-line bg-canvas md:hidden"
        >
          <nav aria-label="Mobile navigation" className="mx-auto max-w-[1180px] px-4 py-4 sm:px-6">
            {navItems.map((item, index) => (
              <button
                type="button"
                key={item.id}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={() => scrollToSection(item.id)}
                className={`group flex w-full items-baseline justify-between border-b border-line/70 py-4 text-left ${
                  activeSection === item.id ? 'text-ink' : 'text-muted'
                }`}
              >
                <span className="flex items-baseline gap-4">
                  <span className="text-[10px] font-semibold tabular-nums text-accent">
                    0{index + 1}
                  </span>
                  <span className="font-heading text-2xl font-semibold tracking-tight">
                    {item.name}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            ))}

            <div className="flex items-center justify-between pt-5 text-xs text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Available for opportunities
              </span>
              <a
                href="mailto:abdulrahman50ab@gmail.com"
                className="font-medium text-ink hover:text-accent"
              >
                Email me
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Reading progress */}
      <div
        aria-hidden="true"
        className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ width: `${progress}%` }}
      />
    </header>
  );
};

export default Header;
