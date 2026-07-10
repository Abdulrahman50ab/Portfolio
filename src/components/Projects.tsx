import React, { useState } from 'react';
import { ExternalLink, Github, Globe, Cpu, Coffee, Smartphone, Search, HelpCircle, Sparkles } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const projects = [
    // Generative AI
    {
      title: "DocFlow AI — Document Understanding & Extraction Pipeline",
      description: "A production-grade Generative AI application that automates document processing, extracting structured data from invoices, utility bills, and contracts with 96% accuracy. Built with Gemini 1.5 Flash, LangGraph multi-agent workflows, and semantic similarity search.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Gemini 1.5 Flash", "LangGraph", "RAG", "pgvector", "Drizzle ORM", "Neon DB", "React", "Express.js"],
      category: "Generative AI",
      icon: <Sparkles className="h-5 w-5 text-purple-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-purple-900/60 to-slate-900/90"
    },
    // Mobile Applications (Flutter)
    {
      title: "AI-Powered Keyboard App",
      description: "Intelligent mobile keyboard with real-time text prediction improving typing speed by 30%. Custom REST API integration with backend AI models for context-aware suggestions and custom rendering.",
      image: "/projects/keyboard.png",
      technologies: ["Flutter", "Dart", "REST API", "State Management"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-cyan-900/60 to-slate-900/90"
    },
    {
      title: "AI PDF App",
      description: "Full-featured PDF reader with AI-powered document summarization and Q&A capabilities. Integrated on-device text extraction with remote AI model calls for smart document analysis.",
      image: "/projects/pdf_app.png",
      technologies: ["Flutter", "REST API", "AI Model Integration", "PDF Kit"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-blue-900/60 to-slate-900/90"
    },
    {
      title: "AI Background Remover",
      description: "One-tap background removal application leveraging AI segmentation APIs for precise results. Features batch processing support with gallery picker and real-time preview.",
      image: "/projects/bg_remover.png",
      technologies: ["Flutter", "Dart", "AI Segmentation API", "Photo Editor"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-teal-900/60 to-slate-900/90"
    },
    {
      title: "AI SmartJunk Cleaner",
      description: "Intelligent storage optimizer using AI-driven file classification and smart cleanup suggestions. Uses native platform channels for deep device storage access and file analysis.",
      image: "/projects/cleaner.png",
      technologies: ["Flutter", "Native Channels", "Storage API", "FL Charts"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-indigo-900/60 to-slate-900/90"
    },
    {
      title: "AI PPT Generator",
      description: "Generates presentation slides automatically from user-provided text or topic prompts via AI. Features dynamic slide layouts with editable content and theme selections.",
      image: "/projects/ppt.png",
      technologies: ["Flutter", "REST API", "AI API", "PPTX Exporter"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-orange-900/60 to-slate-900/90"
    },
    {
      title: "WantQuiz AI App",
      description: "AI-powered mobile quiz application generating dynamic questions from any topic or pasted content. Features MCQ, true/false, open-ended modes with persistent progress analytics.",
      image: "/projects/quiz.png",
      technologies: ["Flutter", "Dart", "REST API", "Local DB"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-emerald-900/60 to-slate-900/90"
    },
    {
      title: "AI Post Generator App",
      description: "On-demand social media post generation for LinkedIn, Instagram, and Twitter via AI APIs. Features tone selector (casual, professional, witty) with one-tap copy and share functionality.",
      image: "/projects/post.png",
      technologies: ["Flutter", "Dart", "AI APIs", "Share API"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-purple-900/60 to-slate-900/90"
    },
    {
      title: "UniRide — University Transport App",
      description: "End-to-end campus transport management application serving 500+ students. Features real-time bus tracking (Google Maps API), seat booking, and offline-first caching for high reliability.",
      image: "/projects/uniride.png",
      technologies: ["Flutter", "Dart", "Node.js", "MongoDB", "Google Maps API"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Uniride",
      gradient: "from-sky-900/60 to-slate-900/90"
    },
    {
      title: "Fitness Tracker Mobile",
      description: "Comprehensive workout logging application featuring Firebase Authentication, animated timers, custom FL Chart analytics, and personalized exercise routines.",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Flutter", "Firebase Auth", "Firestore", "FL Charts"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-red-900/60 to-slate-900/90"
    },
    // Web Projects
    {
      title: "WantQuiz Web Platform",
      description: "AI-driven quiz web platform built in React allowing users to generate quizzes from any topic or document. Uses Neon serverless PostgreSQL for quiz history and leaderboards.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Neon PostgreSQL", "REST API", "AI Generator"],
      category: "Web",
      icon: <Globe className="h-5 w-5 text-indigo-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-indigo-900/60 to-slate-900/90"
    },
    {
      title: "AI Post Generator Web",
      description: "React-based web platform for AI-generated social media posts with tone, platform customization, and draft management. Backed by Neon PostgreSQL database.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Neon PostgreSQL", "Drizzle ORM", "Vite"],
      category: "Web",
      icon: <Globe className="h-5 w-5 text-indigo-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-blue-900/60 to-slate-900/90"
    },
    {
      title: "AI Creator Platform Dashboard",
      description: "Multi-purpose AI content creation dashboard built with React for text, captions, bios, and marketing copy. Uses Neon serverless PostgreSQL for content management.",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Neon PostgreSQL", "REST APIs", "Tailwind CSS"],
      category: "Web",
      icon: <Globe className="h-5 w-5 text-indigo-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-violet-900/60 to-slate-900/90"
    },
    // Others
    {
      title: "Bank Management System with DSA",
      description: "Console-based banking system written in C++ using advanced data structures and file handling for efficient customer records and transaction logs.",
      image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["C++", "Data Structures", "OOP", "File Handling"],
      category: "Others",
      icon: <Cpu className="h-5 w-5 text-pink-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Bank-Management-System-with-C-",
      gradient: "from-rose-900/60 to-slate-900/90"
    },
    {
      title: "Car Rental System",
      description: "Vehicle booking and customer management project in C++ with OOP, comprehensive rental tracking, and custom billing modules.",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["C++", "OOP", "File Management", "Console UI"],
      category: "Others",
      icon: <Cpu className="h-5 w-5 text-pink-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Car-rental-System",
      gradient: "from-zinc-900/60 to-slate-900/90"
    },
    {
      title: "Bank Management System (GUI)",
      description: "GUI-based Java application for managing bank records and transactions with user-friendly interface and secure database operations.",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Java", "Swing", "JDBC", "MySQL"],
      category: "Others",
      icon: <Coffee className="h-5 w-5 text-amber-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Bank-Management-System-with-JAVA",
      gradient: "from-amber-900/60 to-slate-900/90"
    }
  ];

  const categories = ['All', 'Generative AI', 'Mobile', 'Web', 'Others'];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Generative AI': 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      'Web': 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
      'Others': 'bg-pink-500/10 text-pink-300 border-pink-500/20',
      'Mobile': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
    };
    return colors[category as keyof typeof colors] || 'bg-slate-800 text-slate-300 border-white/5';
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  // Filter & Search Logic
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5">
      {/* Background Orbs */}
      <div className="glow-orb-indigo top-[20%] right-[-10%]"></div>
      <div className="glow-orb-cyan bottom-[20%] left-[-10%]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive list of application systems built across mobile, web frontends, and backend environments.
          </p>
        </div>

        {/* Controls: Search & Category Filter */}
        <div className="space-y-6 max-w-4xl mx-auto mb-16">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects by name, descriptions or technologies (e.g. Flutter, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/60 border border-white/5 hover:border-white/10 focus:border-indigo-500/50 rounded-2xl text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all placeholder:text-slate-500 backdrop-blur-sm"
            />
          </div>

          {/* Filter Caps */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 border-indigo-400/20 text-white shadow-lg shadow-indigo-500/20 scale-[1.03]'
                    : 'bg-slate-900/60 text-slate-400 border-white/5 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const hasError = imageErrors[index];
            return (
              <div
                key={index}
                className="group bg-glass-card border border-glass hover:border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-950/40 transition-all duration-300 flex flex-col h-full"
              >
                {/* Project Image Panel */}
                <div className="relative h-48 overflow-hidden bg-slate-900 flex items-center justify-center border-b border-white/5">
                  {hasError ? (
                    // High Fidelity CSS Fallback Pattern
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient || "from-slate-900 to-slate-950"} flex flex-col items-center justify-center p-6 text-center select-none`}>
                      <div className="bg-slate-950/50 p-3 rounded-xl border border-white/5 mb-2.5">
                        {project.icon}
                      </div>
                      <span className="text-xs font-bold text-slate-350 tracking-wider uppercase">{project.category} Concept</span>
                    </div>
                  ) : (
                    // Actual Image
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={() => handleImageError(index)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold border backdrop-blur-md ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-900 border border-white/5 text-slate-400 px-2.5 py-1 rounded-md text-[10px] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-white/5 mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs font-bold text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1.5 text-slate-400 group-hover:text-white" />
                      Code Repository
                    </a>
                    {project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        className="flex items-center text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-slate-900/30 border border-glass rounded-2xl max-w-2xl mx-auto animate-fade-in">
            <div className="bg-slate-950 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/5">
              <HelpCircle className="h-7 w-7 text-slate-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-300 mb-1">No matching projects found</h3>
            <p className="text-slate-500 text-xs sm:text-sm px-4">
              We couldn't find any projects matching "{searchQuery}" under the "{activeFilter}" category. Try refining your keywords.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
