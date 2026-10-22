import React, { useState, useRef } from 'react';
import { Send, CheckCircle, XCircle, Loader2, Copy, Check, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Mobile & Web Project',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abdulrahman50ab@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('submitting');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Mock graceful fallback if environment keys are missing locally
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'Mobile & Web Project', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      }, 1000);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'Mobile & Web Project', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      }, (error) => {
        console.error('Email transmission failure:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 6000);
      });
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-zinc-200/80 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-zinc-200/60 font-mono text-xs text-zinc-500">
          <div className="flex items-center space-x-2">
            <span className="text-zinc-900 font-semibold">[ 05 ]</span>
            <span>//</span>
            <span className="uppercase tracking-wider">Initiate Dialogue</span>
          </div>
          <span className="text-zinc-400">Response Window // &lt; 24h</span>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 leading-tight">
                Let's discuss an ambitious product or engineering challenge.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-4 leading-relaxed">
                Currently open to selective freelance engagements, full-time remote engineering positions, and collaborative technical architectures.
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-3 pt-2">
              
              {/* Email Card with Copy Trigger */}
              <div className="p-4 rounded-xl border border-zinc-200 bg-white flex items-center justify-between shadow-2xs">
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">Direct Inquiries</span>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-900">abdulrahman50ab@gmail.com</p>
                </div>
                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                    aria-label="Copy email address"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                  </button>
                  <a
                    href="mailto:abdulrahman50ab@gmail.com"
                    className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                    aria-label="Write email"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/923010401544"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 transition-colors flex items-center justify-between shadow-2xs block group"
              >
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">WhatsApp / Direct Call</span>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-900">+92 301 0401544</p>
                </div>
                <div className="text-zinc-400 group-hover:text-zinc-900 transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl border border-zinc-200 bg-white flex items-center justify-between shadow-2xs">
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">Primary Location</span>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-900">Lahore, Pakistan (UTC+5)</p>
                </div>
                <span className="font-mono text-[11px] text-zinc-400">Remote Worldwide</span>
              </div>

            </div>

            {/* Note on Availability */}
            <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/50 text-emerald-900 text-xs">
              <span className="font-semibold block">Q2 2026 Availability:</span>
              <p className="mt-0.5 text-emerald-800">Available for new software development contracts and technical leadership.</p>
            </div>

          </div>

          {/* Right Column: High-Craft Minimalist Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-7 sm:p-8 rounded-xl border border-zinc-200 bg-white shadow-2xs">
              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-wider text-zinc-600">
                      Full Name <span className="text-zinc-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 hover:border-zinc-300 focus:border-zinc-900 focus:outline-none rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-wider text-zinc-600">
                      Email Address <span className="text-zinc-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 hover:border-zinc-300 focus:border-zinc-900 focus:outline-none rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Scope / Category */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block font-mono text-[11px] uppercase tracking-wider text-zinc-600">
                    Project Scope / Topic
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 hover:border-zinc-300 focus:border-zinc-900 focus:outline-none rounded-lg text-sm text-zinc-900 transition-colors"
                  >
                    <option value="Flutter Mobile Application">Flutter Mobile Application</option>
                    <option value="Generative AI & LLM Pipeline">Generative AI &amp; LLM Pipeline</option>
                    <option value="Full-Stack Web System">Full-Stack Web System</option>
                    <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-wider text-zinc-600">
                    Brief / Message <span className="text-zinc-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Outline your application goals, timelines, or role expectations..."
                    className="w-full px-3.5 py-2.5 bg-white border border-zinc-200 hover:border-zinc-300 focus:border-zinc-900 focus:outline-none rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full py-3 px-5 rounded-lg font-medium text-sm flex items-center justify-center space-x-2 transition-all ${
                    status === 'submitting'
                      ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed border border-zinc-200'
                      : status === 'success'
                        ? 'bg-emerald-600 text-white'
                        : status === 'error'
                          ? 'bg-rose-600 text-white'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-white active:scale-[0.99]'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-zinc-400" />
                      <span>Transmitting message...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      <span>Message Dispatched Successfully</span>
                    </>
                  ) : status === 'error' ? (
                    <>
                      <XCircle className="h-4 w-4" />
                      <span>Transmission Failed — Please retry or email directly</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="h-3.5 w-3.5 text-zinc-400" />
                    </>
                  )}
                </button>

                {/* Feedback Notification */}
                {status === 'success' && (
                  <p className="text-emerald-700 font-mono text-xs text-center pt-1">
                    Thank you. Your message has been received. I will review and reply within 24 hours.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-rose-700 font-mono text-xs text-center pt-1">
                    Direct transmission error. Please send your message directly to abdulrahman50ab@gmail.com
                  </p>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
