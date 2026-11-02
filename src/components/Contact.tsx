import React, { useRef, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  MapPin,
  MessageSquare,
  Send,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import Reveal from './motion/Reveal';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'
  >('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('abdulrahman50ab@gmail.com');
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('unconfigured');
      return;
    }

    setStatus('submitting');
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        resetForm();
      })
      .catch((error: unknown) => {
        console.error('Email transmission error:', error);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="border-b border-line bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Get in touch"
            title={
              <>
                Have something{' '}
                <span className="font-display font-normal italic text-accent">good</span> in mind?
              </>
            }
            description="I’m always glad to hear about thoughtful products, interesting challenges, and meaningful collaborations."
          />
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Contact details */}
          <Reveal className="space-y-4 lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-7">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-accent/25 blur-[60px]"
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Write me an email
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium text-white/60 transition-colors hover:border-indigo-300/30 hover:bg-indigo-400/10 hover:text-white"
                    title="Copy email"
                    aria-label={copiedEmail ? 'Email address copied' : 'Copy email address'}
                  >
                    {copiedEmail ? (
                      <Check className="h-3 w-3 text-emerald-300" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <a
                  href="mailto:abdulrahman50ab@gmail.com"
                  className="relative mt-5 block break-all font-heading text-[1.2rem] font-semibold tracking-tight text-white transition-colors hover:text-indigo-300 sm:text-[1.35rem]"
                >
                  abdulrahman50ab@gmail.com
                </a>

                <div className="relative mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <span className="inline-flex items-center gap-2 text-[11px] text-white/50">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    Available for opportunities
                  </span>
                  <a
                    href="mailto:abdulrahman50ab@gmail.com"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] transition-colors hover:border-indigo-300/40 hover:bg-indigo-400/10"
                    aria-label="Send an email"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-line bg-white/60">
              <a
                href="https://wa.me/923010401544"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-white sm:px-6"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-canvas text-muted transition-colors group-hover:border-indigo-200 group-hover:text-accent">
                    <MessageSquare className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                      WhatsApp / Phone
                    </span>
                    <span className="mt-0.5 block font-heading text-sm font-semibold text-ink">
                      +92 301 0401544
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-stone-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>

              <div className="mx-5 h-px bg-line sm:mx-6" />

              <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-canvas text-muted">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                      Based in
                    </span>
                    <span className="mt-0.5 block font-heading text-sm font-semibold text-ink">
                      Lahore, Pakistan
                    </span>
                  </span>
                </span>
                <span className="text-[10px] font-medium text-muted">Remote &amp; hybrid</span>
              </div>

              <div className="mx-5 h-px bg-line sm:mx-6" />

              <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                  Elsewhere
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/Abdulrahman50ab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white text-muted transition-colors hover:border-indigo-200 hover:text-accent"
                    aria-label="GitHub"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abdulrahman50"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white text-muted transition-colors hover:border-indigo-200 hover:text-accent"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <p className="px-1 text-[11px] leading-5 text-muted">
              I usually reply within a day or two. Prefer a quick chat? WhatsApp is the fastest way
              to reach me.
            </p>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_30px_70px_-60px_rgba(14,14,16,0.55)] sm:p-8">
              {status === 'success' ? (
                <div role="status" className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-ink">
                    Thanks for reaching out.
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">
                    Your message has been sent successfully. I’ll be in touch as soon as I can.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-semibold text-accent transition-colors hover:text-indigo-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between gap-4 pb-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                      Send a message
                    </p>
                    <span className="text-[10px] font-medium text-muted">* Required fields</span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-[11px] font-semibold text-ink"
                      >
                        Your name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-stone-400 transition-colors focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-[11px] font-semibold text-ink"
                      >
                        Email address <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-stone-400 transition-colors focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-[11px] font-semibold text-ink"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project, opportunity, or just hello"
                      className="w-full rounded-xl border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-stone-400 transition-colors focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-[11px] font-semibold text-ink"
                    >
                      Your message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a little about what you have in mind…"
                      className="w-full resize-y rounded-xl border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-stone-400 transition-colors focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="text-sm text-red-600">
                      Your message could not be sent. Please try again or email me directly at
                      abdulrahman50ab@gmail.com.
                    </p>
                  )}
                  {status === 'unconfigured' && (
                    <p role="alert" className="text-sm leading-6 text-amber-700">
                      The contact form isn’t configured yet. Your message was not sent — please use
                      the email link to reach me directly.
                    </p>
                  )}

                  <div className="flex flex-col-reverse items-stretch gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-[10px] text-muted">No spam. Just a conversation.</span>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(79,70,229,0.55)] transition-all hover:bg-indigo-700 disabled:cursor-wait disabled:opacity-60"
                    >
                      <span>{status === 'submitting' ? 'Sending…' : 'Send message'}</span>
                      {status === 'submitting' ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      ) : (
                        <Send className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
