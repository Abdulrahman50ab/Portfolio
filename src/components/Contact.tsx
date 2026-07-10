import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Loader2, MessageSquare, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('submitting');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error('Email failed to send:', error.text);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-indigo-400" />,
      title: "Email",
      details: "abdulrahman50ab@gmail.com",
      link: "mailto:abdulrahman50ab@gmail.com",
      actionText: "Send email"
    },
    {
      icon: <Phone className="h-5 w-5 text-cyan-400" />,
      title: "Phone & WhatsApp",
      details: "+92 301 0401544",
      link: "https://wa.me/923010401544",
      actionText: "Chat on WhatsApp"
    },
    {
      icon: <MapPin className="h-5 w-5 text-emerald-400" />,
      title: "Location",
      details: "Green Home Lahore, Pakistan",
      link: "https://maps.google.com/?q=Lahore,Pakistan",
      actionText: "View on maps"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5">
      {/* Background Orbs */}
      <div className="glow-orb-indigo bottom-[5%] left-[10%]"></div>
      <div className="glow-orb-pink top-[10%] right-[10%]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to explore collaboration opportunities? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info cards */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2">
                <MessageSquare className="h-5 text-indigo-400 w-5" />
                <span>Let's talk about your project</span>
              </h3>
              <p className="text-slate-450 text-sm sm:text-base mt-3 leading-relaxed">
                I'm currently open to freelance contracts, remote software roles, and creative partnerships. Drop a message and let's start planning.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {contactInfo.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-glass-card border border-glass rounded-2xl p-5 border-glass-hover hover:-translate-y-0.5 transition-all duration-300 hover:shadow-lg shadow-indigo-950/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-slate-900 border border-white/5 p-3 rounded-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[10px] text-slate-500">
                          {item.title}
                        </h4>
                        <p className="text-sm font-semibold text-slate-200 mt-0.5">
                          {item.details}
                        </p>
                      </div>
                    </div>
                    <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors flex items-center text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <span className="mr-1.5">{item.actionText}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="md:col-span-7 w-full">
            <div className="bg-glass-card border border-glass p-8 rounded-2xl shadow-2xl relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/5 to-indigo-500/5 rounded-2xl blur-lg opacity-50 pointer-events-none"></div>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-10 text-left">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950/60 border border-white/5 hover:border-white/10 focus:border-indigo-500/50 rounded-xl text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all placeholder:text-slate-650"
                    placeholder="E.g. Abdul Rahman"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950/60 border border-white/5 hover:border-white/10 focus:border-indigo-500/50 rounded-xl text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all placeholder:text-slate-650"
                    placeholder="your.email@domain.com"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-950/60 border border-white/5 hover:border-white/10 focus:border-indigo-500/50 rounded-xl text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none placeholder:text-slate-650"
                    placeholder="Tell me about your product requirements, budget, or timelines..."
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm select-none ${
                    status === 'submitting'
                      ? 'bg-slate-900 border border-white/5 text-slate-400 cursor-not-allowed shadow-none'
                      : status === 'success'
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                        : status === 'error'
                          ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                          : 'bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/20 hover:scale-[1.01]'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4.5 w-4.5 animate-spin text-slate-400" />
                      <span>Sending Message...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="h-4.5 w-4.5" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : status === 'error' ? (
                    <>
                      <XCircle className="h-4.5 w-4.5" />
                      <span>Failed to Send Message</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status messages */}
                {status === 'success' && (
                  <p className="text-emerald-400 text-center text-xs font-semibold animate-fade-in pt-1">
                    Thank you for writing! I've received your request and will get back to you shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-rose-400 text-center text-xs font-semibold animate-fade-in pt-1">
                    An error occurred sending the message. Please write to me directly at abdulrahman50ab@gmail.com
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