import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import Reveal from './motion/Reveal';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Selected work', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const socialLinks = [
  {
    name: 'GitHub',
    handle: '@Abdulrahman50ab',
    url: 'https://github.com/Abdulrahman50ab',
    icon: <Github className="h-4 w-4" />,
  },
  {
    name: 'LinkedIn',
    handle: 'in/abdulrahman50',
    url: 'https://www.linkedin.com/in/abdulrahman50',
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    name: 'WhatsApp',
    handle: '+92 301 0401544',
    url: 'https://wa.me/923010401544',
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    name: 'Email',
    handle: 'abdulrahman50ab@gmail.com',
    url: 'mailto:abdulrahman50ab@gmail.com',
    icon: <Mail className="h-4 w-4" />,
  },
];

const Footer = () => {
  const { scrollToSection, scrollToTop } = useSmoothScroll();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/15 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 border-b border-white/10 py-14 md:grid-cols-12 md:items-end md:py-16">
            <div className="md:col-span-9">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available for new work
              </span>
              <h2 className="mt-5 max-w-2xl font-heading text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[2.75rem]">
                Let&apos;s build something{' '}
                <span className="font-display font-normal italic text-indigo-300">worth using.</span>
              </h2>
              <a
                href="mailto:abdulrahman50ab@gmail.com"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                abdulrahman50ab@gmail.com
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-indigo-300/40 group-hover:bg-indigo-400/10">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>

            <div className="md:col-span-3 md:flex md:justify-end">
              <button
                onClick={scrollToTop}
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2.5 text-[11px] font-semibold text-white/60 transition-colors hover:border-white/30 hover:text-white"
              >
                Back to top
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] transition-colors group-hover:bg-white/10">
                  <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[11px] font-bold tracking-tight text-ink">
                AR
              </span>
              <div>
                <p className="font-heading text-sm font-semibold tracking-tight">Abdul Rahman</p>
                <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/35">
                  Software engineer
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-xs leading-6 text-white/40">
              Building polished mobile apps, dependable web products, and practical AI workflows from
              Lahore, Pakistan.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Sitemap
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group inline-flex items-center gap-1.5 text-xs text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2.5">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="group flex items-center justify-between gap-3 text-xs text-white/55 transition-colors hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="text-white/30 transition-colors group-hover:text-indigo-300">
                        {social.icon}
                      </span>
                      {social.name}
                    </span>
                    <span className="text-[10px] text-white/25 transition-colors group-hover:text-white/50">
                      {social.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[9px] font-medium uppercase tracking-[0.16em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Abdul Rahman. All rights reserved.</p>
          <p>Designed &amp; built with care in Lahore</p>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none relative select-none overflow-hidden">
        <p className="whitespace-nowrap px-2 pb-4 pt-2 text-center font-heading text-[clamp(2.6rem,10.5vw,8.5rem)] font-bold leading-none tracking-[-0.07em] text-white/[0.045] sm:pb-6">
          ABDUL RAHMAN
        </p>
      </div>
    </footer>
  );
};

export default Footer;
