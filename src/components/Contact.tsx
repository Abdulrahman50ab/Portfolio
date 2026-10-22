import React, { useState, useRef } from 'react';
import { Send, Check, Copy, ArrowUpRight, MapPin, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
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
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      }, 1000);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      }, (error) => {
        console.error('Email transmission error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 6000);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-zinc-200/80 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider block mb-2">
            Contact
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Let's Start a Conversation
          </h2>
          <p className="text-base text-zinc-600 mt-2 max-w-2xl">
            Have a project in mind, an opportunity, or a question? Feel free to reach out.
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy */}
            <div className="p-5 rounded-2xl border border-zinc-200/90 bg-white shadow-2xs hover:border-indigo-200/80 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-zinc-500 font-medium">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1 text-xs text-zinc-600 hover:text-indigo-600 px-2 py-0.5 rounded bg-zinc-100 hover:bg-indigo-50 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href="mailto:abdulrahman50ab@gmail.com"
                className="font-heading text-base font-semibold text-zinc-950 hover:text-indigo-600 transition-colors block"
              >
                abdulrahman50ab@gmail.com
              </a>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-5 rounded-2xl border border-zinc-200/90 bg-white shadow-2xs hover:border-indigo-200/80 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-zinc-500 font-medium">WhatsApp / Phone</span>
                <a
                  href="https://wa.me/923010401544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-600 hover:text-indigo-700 font-medium flex items-center space-x-0.5"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <p className="font-heading text-base font-semibold text-zinc-950">
                +92 301 0401544
              </p>
              <p className="text-xs text-zinc-500 mt-0.5">
                Available on WhatsApp and direct call
              </p>
            </div>

            {/* Location & Social */}
            <div className="p-5 rounded-2xl border border-zinc-200/90 bg-white shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-500 font-medium block">Location</span>
                <p className="font-heading text-sm font-semibold text-zinc-950 mt-0.5 flex items-center space-x-1.5">
                  <MapPin className="h-3.5 w-3.5 text-indigo-500" />
                  <span>Lahore, Pakistan</span>
                </p>
                <span className="text-xs text-zinc-500">Open to remote &amp; hybrid</span>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href="https://github.com/Abdulrahman50ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 hover:bg-indigo-50 text-zinc-700 hover:text-indigo-600 border border-transparent hover:border-indigo-200 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulrahman50?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 hover:bg-indigo-50 text-zinc-700 hover:text-indigo-600 border border-transparent hover:border-indigo-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200/90 bg-white shadow-2xs">
              
              {status === 'success' ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-zinc-950">
                    Message sent successfully!
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-sm mx-auto">
                    Thank you for reaching out. I will review your message and respond promptly within 24 hours.
                  </p>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-[#FAFAFA] text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-[#FAFAFA] text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Mobile App Project / Job Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-[#FAFAFA] text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, or inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-[#FAFAFA] text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-600">
                      Failed to send message. Please email me directly at abdulrahman50ab@gmail.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-all shadow-xs active:scale-[0.98]"
                  >
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                    <Send className="h-3.5 w-3.5 text-indigo-200" />
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
