import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Abdulrahman50ab',
      icon: <Github className="h-4 w-4" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdulrahman50?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: <Linkedin className="h-4 w-4" />
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/923010401544',
      icon: <MessageSquare className="h-4 w-4" />
    },
    {
      name: 'Email',
      url: 'mailto:abdulrahman50ab@gmail.com',
      icon: <Mail className="h-4 w-4" />
    }
  ];

  return (
    <footer className="bg-white border-t border-zinc-200 text-zinc-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-zinc-100 text-left">
          
          {/* Identity */}
          <div>
            <h3 className="font-heading text-lg font-bold text-zinc-950">
              Abdul Rahman
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
              Software Engineer specializing in Flutter, React, and Generative AI.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-950 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-50 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 border border-zinc-200/60 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Abdul Rahman. Designed with simplicity &amp; restraint.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-zinc-600 hover:text-zinc-950 font-medium transition-colors"
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
