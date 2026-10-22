import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setLocalTime(formatter.format(now));
      } catch {
        setLocalTime('03:40 PM PKT');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directoryLinks = [
    { label: 'Introduction', id: 'home', index: '01' },
    { label: 'Background & Philosophy', id: 'about', index: '02' },
    { label: 'Selected Works', id: 'projects', index: '03' },
    { label: 'Capabilities & Stack', id: 'skills', index: '04' },
    { label: 'Initiate Contact', id: 'contact', index: '05' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      handle: '@Abdulrahman50ab',
      url: 'https://github.com/Abdulrahman50ab',
      icon: <Github className="h-4 w-4" />
    },
    {
      name: 'LinkedIn',
      handle: 'Abdul Rahman',
      url: 'https://www.linkedin.com/in/abdulrahman50?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: <Linkedin className="h-4 w-4" />
    },
    {
      name: 'WhatsApp',
      handle: '+92 301 0401544',
      url: 'https://wa.me/923010401544',
      icon: <MessageSquare className="h-4 w-4" />
    },
    {
      name: 'Direct Email',
      handle: 'abdulrahman50ab@gmail.com',
      url: 'mailto:abdulrahman50ab@gmail.com',
      icon: <Mail className="h-4 w-4" />
    }
  ];

  return (
    <footer className="bg-white border-t border-zinc-200 text-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Architectural Brand Signature */}
        <div className="pb-12 border-b border-zinc-200/80 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block mb-2">
                COLOPHON &amp; SIGNATURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
                Abdul Rahman
              </h2>
              <p className="text-sm text-zinc-600 mt-2 max-w-xl">
                Software Engineer specializing in Flutter cross-platform architecture, full-stack systems, and Generative AI pipelines.
              </p>
            </div>

            {/* Live Time Badge */}
            <div className="p-4 rounded-xl border border-zinc-200 bg-[#FAFAFA] text-left min-w-[220px]">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block">
                Local Time // Lahore (PKT)
              </span>
              <div className="font-mono text-base font-semibold text-zinc-950 tabular-nums mt-1 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{localTime || 'Loading PKT...'}</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-500 block mt-0.5">
                UTC+05:00 &bull; Pakistan Standard
              </span>
            </div>
          </div>
        </div>

        {/* Middle Navigation & Social Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-10 text-left border-b border-zinc-200/80">
          
          {/* Col 1: Directory */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block">
              Directory
            </span>
            <ul className="space-y-2.5">
              {directoryLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="group inline-flex items-center space-x-2 text-xs sm:text-sm text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
                  >
                    <span className="font-mono text-[10px] text-zinc-400 group-hover:text-zinc-700">
                      [{item.index}]
                    </span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Channels */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block">
              Direct Channels
            </span>
            <div className="grid sm:grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-zinc-200 bg-[#FAFAFA] hover:border-zinc-400 transition-colors group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold text-zinc-900">{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                  </div>
                  <span className="text-[11px] text-zinc-500 block truncate mt-0.5">{link.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Technical Colophon */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block">
              System Specifications
            </span>
            <div className="space-y-2 font-mono text-xs text-zinc-600">
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Framework</span>
                <span className="text-zinc-900">React + Vite</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Typography</span>
                <span className="text-zinc-900">Jakarta &amp; JetBrains</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Design System</span>
                <span className="text-zinc-900">Editorial Minimal</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Grade</span>
                <span className="text-zinc-900">Production</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} ABDUL RAHMAN. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer py-1 px-2.5 rounded hover:bg-zinc-100"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
