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
      icon: <Mail className="h-5 w-5 text-indigo-600" />,
      title: "Email",
      details: "abdulrahman50ab@gmail.com",
      link: "mailto:abdulrahman50ab@gmail.com",
      actionText: "Send email"
    },
    {
      icon: <Phone className="h-5 w-5 text-sky-600" />,
      title: "Phone & WhatsApp",
      details: "+92 301 0401544",
      link: "https://wa.me/923010401544",
      actionText: "Chat on WhatsApp"
    },
    {
      icon: <MapPin className="h-5 w-5 text-emerald-600" />,
      title: "Location",
      details: "Green Home Lahore, Pakistan",
      link: "https://maps.google.com/?q=Lahore,Pakistan",
      actionText: "View on maps"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to explore collaboration opportunities? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info cards */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
                <span>Let's talk about your project</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
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
                  className="group block bg-white border border-slate-200/90 rounded-2xl p-5 hover:border-slate-300 hover:shadow-md transition-all duration-300 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl group-hover:bg-indigo-50 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          {item.title}
                        </h4>
                        <p className="text-sm font-semibold text-slate-900 mt-0.5">
                          {item.details}
                        </p>
                      </div>
                    </div>
                    <div className="text-indigo-600 group-hover:text-indigo-700 transition-colors flex items-center text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <span className="mr-1.5">{item.actionText}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Clean Light Contact Form */}
          <div className="md:col-span-7 w-full">
            <div className="bg-white border border-slate-200/90 p-8 rounded-2xl shadow-xs">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6 text-left">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 rounded-xl text-slate-900 text-sm focus:outline-none transition-all placeholder:text-slate-400 shadow-xs"
                    placeholder="E.g. John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 rounded-xl text-slate-900 text-sm focus:outline-none transition-all placeholder:text-slate-400 shadow-xs"
                    placeholder="your.email@domain.com"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 rounded-xl text-slate-900 text-sm focus:outline-none transition-all resize-none placeholder:text-slate-400 shadow-xs"
                    placeholder="Tell me about your product requirements, budget, or timelines..."
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full font-bold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 text-sm select-none ${
                    status === 'submitting'
                      ? 'bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                      : status === 'success'
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                        : status === 'error'
                          ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-xs'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs hover:shadow active:scale-[0.99]'
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
                  <p className="text-emerald-700 text-center text-xs font-semibold animate-fade-in pt-1">
                    Thank you for reaching out! I've received your request and will get back to you shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-rose-700 text-center text-xs font-semibold animate-fade-in pt-1">
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
