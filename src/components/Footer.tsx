import React from 'react';
import { Github, Linkedin, Mail, Code, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Abdulrahman50ab',
      icon: <Github className="h-5 w-5" />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdulrahman50?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: 'Email',
      href: '#contact',
      icon: <Mail className="h-5 w-5" />
    }
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Brand Section */}
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-2.5">
              <div className="bg-indigo-600 text-white p-1.5 rounded-lg shadow-xs">
                <Code className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Abdul Rahman</span>
            </div>
            <p className="text-slate-600 max-w-md text-sm leading-relaxed">
              Software Engineer specializing in Flutter mobile development and full-stack web architectures to deliver high-performance applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleScroll(item.toLowerCase())}
                    className="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-left">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-4">Connect With Me</h3>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      handleScroll(link.href.substring(1));
                    }
                  }}
                  {...(link.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 p-2.5 rounded-xl text-slate-600 hover:text-indigo-600 transition-all shadow-xs"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Abdul Rahman. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-medium">Crafted with precision & modern light design.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all z-40 focus:outline-none active:scale-[0.98]"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
