import React, { useState } from 'react';
import { ExternalLink, Github, Globe, Cpu, Coffee, Smartphone, Search, HelpCircle, Bot } from 'lucide-react';

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
      icon: <Bot className="h-5 w-5 text-purple-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-purple-50 to-indigo-50"
    },
    // Mobile Applications (Flutter)
    {
      title: "AI-Powered Keyboard App",
      description: "Intelligent mobile keyboard with real-time text prediction improving typing speed by 30%. Custom REST API integration with backend AI models for context-aware suggestions and custom rendering.",
      image: "/projects/keyboard.png",
      technologies: ["Flutter", "Dart", "REST API", "State Management"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-sky-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-sky-50 to-indigo-50"
    },
    {
      title: "AI PDF App",
      description: "Full-featured PDF reader with AI-powered document summarization and Q&A capabilities. Integrated on-device text extraction with remote AI model calls for smart document analysis.",
      image: "/projects/pdf_app.png",
      technologies: ["Flutter", "REST API", "AI Model Integration", "PDF Kit"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-sky-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "AI Background Remover",
      description: "One-tap background removal application leveraging AI segmentation APIs for precise results. Features batch processing support with gallery picker and real-time preview.",
      image: "/projects/bg_remover.png",
      technologies: ["Flutter", "Dart", "AI Segmentation API", "Photo Editor"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-sky-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-teal-50 to-emerald-50"
    },
    {
      title: "AI SmartJunk Cleaner",
      description: "Intelligent storage optimizer using AI-driven file classification and smart cleanup suggestions. Uses native platform channels for deep device storage access and file analysis.",
      image: "/projects/cleaner.png",
      technologies: ["Flutter", "Native Channels", "Storage API", "FL Charts"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-sky-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-indigo-50 to-slate-50"
    },
    {
      title: "AI PPT Generator",
      description: "Generates presentation slides automatically from user-provided text or topic prompts via AI. Features dynamic slide layouts with editable content and theme selections.",
      image: "/projects/ppt.png",
      technologies: ["Flutter", "REST API", "AI API", "PPTX Exporter"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-sky-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-amber-50 to-orange-50"
    },
    {
      title: "WantQuiz AI App",
      description: "AI-powered mobile quiz application generating dynamic questions from any topic or pasted content. Features MCQ, true/false, open-ended modes with persistent progress analytics.",
      image: "/projects/quiz.png",
      technologies: ["Flutter", "Dart", "REST API", "Local DB"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-sky-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-emerald-50 to-teal-50"
    },
    {
      title: "AI Post Generator App",
      description: "On-demand social media post generation for LinkedIn, Instagram, and Twitter via AI APIs. Features tone selector (casual, professional, witty) with one-tap copy and share functionality.",
      image: "/projects/post.png",
      technologies: ["Flutter", "Dart", "AI APIs", "Share API"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-sky-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-purple-50 to-violet-50"
    },
    {
      title: "UniRide — University Transport App",
      description: "End-to-end campus transport management application serving 500+ students. Features real-time bus tracking (Google Maps API), seat booking, and offline-first caching for high reliability.",
      image: "/projects/uniride.png",
      technologies: ["Flutter", "Dart", "Node.js", "MongoDB", "Google Maps API"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-sky-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Uniride",
      gradient: "from-sky-50 to-blue-50"
    },
    {
      title: "Fitness Tracker Mobile",
      description: "Comprehensive workout logging application featuring Firebase Authentication, animated timers, custom FL Chart analytics, and personalized exercise routines.",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Flutter", "Firebase Auth", "Firestore", "FL Charts"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-sky-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-rose-50 to-pink-50"
    },
    // Web Projects
    {
      title: "WantQuiz Web Platform",
      description: "AI-driven quiz web platform built in React allowing users to generate quizzes from any topic or document. Uses Neon serverless PostgreSQL for quiz history and leaderboards.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Neon PostgreSQL", "REST API", "AI Generator"],
      category: "Web",
      icon: <Globe className="h-5 w-5 text-indigo-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-indigo-50 to-blue-50"
    },
    {
      title: "AI Post Generator Web",
      description: "React-based web platform for AI-generated social media posts with tone, platform customization, and draft management. Backed by Neon PostgreSQL database.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Neon PostgreSQL", "Drizzle ORM", "Vite"],
      category: "Web",
      icon: <Globe className="h-5 w-5 text-indigo-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-blue-50 to-slate-50"
    },
    {
      title: "AI Creator Platform Dashboard",
      description: "Multi-purpose AI content creation dashboard built with React for text, captions, bios, and marketing copy. Uses Neon serverless PostgreSQL for content management.",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Neon PostgreSQL", "REST APIs", "Tailwind CSS"],
      category: "Web",
      icon: <Globe className="h-5 w-5 text-indigo-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab",
      gradient: "from-violet-50 to-indigo-50"
    },
    // Others
    {
      title: "Bank Management System with DSA",
      description: "Console-based banking system written in C++ using advanced data structures and file handling for efficient customer records and transaction logs.",
      image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["C++", "Data Structures", "OOP", "File Handling"],
      category: "Others",
      icon: <Cpu className="h-5 w-5 text-rose-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Bank-Management-System-with-C-",
      gradient: "from-rose-50 to-slate-50"
    },
    {
      title: "Car Rental System",
      description: "Vehicle booking and customer management project in C++ with OOP, comprehensive rental tracking, and custom billing modules.",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["C++", "OOP", "File Management", "Console UI"],
      category: "Others",
      icon: <Cpu className="h-5 w-5 text-rose-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Car-rental-System",
      gradient: "from-slate-100 to-slate-50"
    },
    {
      title: "Bank Management System (GUI)",
      description: "GUI-based Java application for managing bank records and transactions with user-friendly interface and secure database operations.",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Java", "Swing", "JDBC", "MySQL"],
      category: "Others",
      icon: <Coffee className="h-5 w-5 text-amber-600" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Bank-Management-System-with-JAVA",
      gradient: "from-amber-50 to-slate-50"
    }
  ];

  const categories = ['All', 'Generative AI', 'Mobile', 'Web', 'Others'];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Generative AI': 'bg-purple-50 text-purple-700 border-purple-200',
      'Web': 'bg-indigo-50 text-indigo-700 border-indigo-200',
      'Others': 'bg-amber-50 text-amber-800 border-amber-200',
      'Mobile': 'bg-sky-50 text-sky-700 border-sky-200'
    };
    return colors[category as keyof typeof colors] || 'bg-slate-100 text-slate-700 border-slate-200';
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
    <section id="projects" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Featured <span className="text-indigo-600">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
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
              placeholder="Search projects by name, description, or technology (e.g. Flutter, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 rounded-2xl text-slate-900 text-sm focus:outline-none transition-all placeholder:text-slate-400 shadow-xs"
            />
          </div>

          {/* Filter Caps */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
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
                className="group bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col h-full shadow-xs"
              >
                {/* Project Image Panel */}
                <div className="relative h-48 overflow-hidden bg-slate-100 flex items-center justify-center border-b border-slate-200/80">
                  {hasError ? (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient || "from-slate-100 to-slate-200"} flex flex-col items-center justify-center p-6 text-center select-none`}>
                      <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs mb-2.5">
                        {project.icon}
                      </div>
                      <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">{project.category} Project</span>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={() => handleImageError(index)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold border shadow-xs ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-100 border border-slate-200/60 text-slate-700 px-2.5 py-1 rounded-md text-[10px] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-slate-100 mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1.5 text-slate-500 group-hover:text-indigo-600" />
                      Code Repository
                    </a>
                    {project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        className="flex items-center text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
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
          <div className="text-center py-16 bg-slate-50 border border-slate-200 rounded-2xl max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-xs">
              <HelpCircle className="h-7 w-7 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">No matching projects found</h3>
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
