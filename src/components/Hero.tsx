import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Hello, I'm <span className="text-blue-400">Abdul Rahman</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              A full-stack web developer passionate about building beautiful and functional websites.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Hire Me
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;