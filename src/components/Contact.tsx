import React, { useState, useRef } from 'react';
import { Send, Check, Copy, ArrowUpRight, MapPin, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
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
    <section id="contact" className="border-b border-zinc-200/80 bg-[#FAFAFA] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-left">
          <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
            04 / Get in touch
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Have something good in mind?
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
            I’m always glad to hear about thoughtful products, interesting challenges, and meaningful collaborations.
          </p>
        </div>

        <div className="grid items-start gap-8 text-left lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 lg:col-span-5">
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-[0_8px_30px_-28px_rgba(24,24,27,0.4)] transition-colors hover:border-indigo-200/80">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500">Write me an email</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                  title="Copy email"
                  aria-label={copiedEmail ? 'Email address copied' : 'Copy email address'}
                >
                  {copiedEmail ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a href="mailto:abdulrahman50ab@gmail.com" className="break-all font-heading text-base font-semibold text-zinc-950 transition-colors hover:text-indigo-600">
                abdulrahman50ab@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-[0_8px_30px_-28px_rgba(24,24,27,0.4)] transition-colors hover:border-indigo-200/80">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500">WhatsApp / Phone</span>
                <a href="https://wa.me/923010401544" target="_blank" rel="noopener noreferrer" className="flex items-center gap-0.5 text-xs font-medium text-indigo-600 transition-colors hover:text-indigo-700">
                  Chat <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <p className="font-heading text-base font-semibold text-zinc-950">+92 301 0401544</p>
              <p className="mt-0.5 text-xs text-zinc-500">Available on WhatsApp and direct call</p>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-[0_8px_30px_-28px_rgba(24,24,27,0.4)]">
              <div>
                <span className="block text-xs font-medium text-zinc-500">Based in</span>
                <p className="mt-1 flex items-center gap-1.5 font-heading text-sm font-semibold text-zinc-950">
                  <MapPin className="h-3.5 w-3.5 text-indigo-600" />
                  Lahore, Pakistan
                </p>
                <span className="text-xs text-zinc-500">Open to remote &amp; hybrid</span>
              </div>
              <div className="flex items-center gap-2">
                <a href="https://github.com/Abdulrahman50ab" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-transparent bg-zinc-100 p-2 text-zinc-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/abdulrahman50?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-transparent bg-zinc-100 p-2 text-zinc-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-[0_12px_40px_-32px_rgba(24,24,27,0.45)] sm:p-8">
              {status === 'success' ? (
                <div role="status" className="space-y-3 py-10 text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 text-indigo-700">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-zinc-950">Thanks for reaching out.</h3>
                  <p className="mx-auto max-w-sm text-sm leading-6 text-zinc-600">Your message has been sent successfully. I’ll be in touch as soon as I can.</p>
                  <button type="button" onClick={() => setStatus('idle')} className="pt-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">Send another message</button>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-zinc-700">Your name</label>
                      <input id="contact-name" type="text" name="name" autoComplete="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full rounded-xl border border-zinc-200 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-zinc-700">Email address</label>
                      <input id="contact-email" type="email" name="email" autoComplete="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full rounded-xl border border-zinc-200 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-medium text-zinc-700">Subject</label>
                    <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project, opportunity, or just hello" className="w-full rounded-xl border border-zinc-200 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-zinc-700">Your message</label>
                    <textarea id="contact-message" name="message" rows={5} required value={formData.message} onChange={handleChange} placeholder="Tell me a little about what you have in mind..." className="w-full resize-y rounded-xl border border-zinc-200 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="text-sm text-red-600">Your message could not be sent. Please try again or email me directly at abdulrahman50ab@gmail.com.</p>
                  )}
                  {status === 'unconfigured' && (
                    <p role="alert" className="text-sm leading-6 text-amber-700">The contact form isn’t configured yet. Your message was not sent — please use the email link to reach me directly.</p>
                  )}

                  <button type="submit" disabled={status === 'submitting'} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/15 transition-colors hover:bg-indigo-700 disabled:cursor-wait disabled:opacity-60 sm:w-auto">
                    <span>{status === 'submitting' ? 'Sending…' : 'Send message'}</span>
                    {status === 'submitting' ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> : <Send className="h-3.5 w-3.5" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
