import React, { useState } from 'react';
import { ExternalLink, Github, Code, Globe, Cpu, Coffee, Dumbbell, Smartphone, Search, HelpCircle } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const projects = [
    // Mobile Projects
    {
      title: "UniRide",
      description: "A professional university transport application built with Flutter. Features include real-time tracking, time estimates, and a sleek map interface for students and staff.",
      image: "/projects/uniride.png",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Uniride",
      gradient: "from-cyan-900/60 to-slate-900/90"
    },
    {
      title: "Weather App Mobile",
      description: "A visually stunning mobile weather application built with Flutter. It provides real-time weather updates, humidity details, and a 5-day forecast with dynamic backgrounds.",
      image: "/projects/weather_app.png",
      technologies: ["Flutter", "Dart", "MetaWeather API", "Glassmorphism"],
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Weather-App-Mobile",
      gradient: "from-blue-900/60 to-slate-900/90"
    },
    // Full Stack Project
    {
      title: "Gym-Fitness Management System",
      description: "MERN stack app to manage gym members, packages, trainers, and attendance with comprehensive dashboard and reporting.",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      category: "Full Stack",
      icon: <Dumbbell className="h-5 w-5 text-emerald-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Gym-Management-System",
      gradient: "from-emerald-900/60 to-slate-900/90"
    },
    // Development (Frontend)
    {
      title: "Riphah International University Frontend",
      description: "A frontend layout clone for a university website with modern design and responsive layout.",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Frontend",
      icon: <Globe className="h-5 w-5 text-indigo-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Riphah-International-University-Frontend",
      gradient: "from-indigo-900/60 to-slate-900/90"
    },
    {
      title: "To-Do Lists",
      description: "A simple and stylish React-based to-do list application with local storage and drag-and-drop functionality.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "CSS", "Local Storage", "JavaScript"],
      category: "Frontend",
      icon: <Code className="h-5 w-5 text-indigo-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/To-do-list/tree/main",
      gradient: "from-purple-900/60 to-slate-900/90"
    },
    {
      title: "Portfolio",
      description: "A personal portfolio website built with React and responsive design showcasing projects and skills.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
      category: "Frontend",
      icon: <Globe className="h-5 w-5 text-indigo-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Portfolio",
      gradient: "from-violet-900/60 to-slate-900/90"
    },
    // C++ Projects
    {
      title: "Bank Management System with DSA",
      description: "Console-based banking system using data structures and file handling for efficient customer and account management.",
      image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["C++", "Data Structures", "File Handling", "OOP"],
      category: "C++",
      icon: <Cpu className="h-5 w-5 text-pink-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Bank-Management-System-with-C-",
      gradient: "from-pink-900/60 to-slate-900/90"
    },
    {
      title: "Car Rental System",
      description: "Vehicle booking and customer management project in C++ with comprehensive rental tracking and billing system.",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["C++", "File Management", "OOP", "Console Application"],
      category: "C++",
      icon: <Cpu className="h-5 w-5 text-pink-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Car-rental-System",
      gradient: "from-rose-900/60 to-slate-900/90"
    },
    // Java Project
    {
      title: "Bank Management System",
      description: "GUI-based Java application for managing bank records and transactions with user-friendly interface and secure operations.",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Java", "Swing", "JDBC", "MySQL"],
      category: "Java",
      icon: <Coffee className="h-5 w-5 text-amber-400" />,
      liveLink: "#",
      githubLink: "https://github.com/Abdulrahman50ab/Bank-Management-System-with-JAVA",
      gradient: "from-amber-900/60 to-slate-900/90"
    }
  ];

  const categories = ['All', 'Mobile', 'Full Stack', 'Frontend', 'C++', 'Java'];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Frontend': 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
      'C++': 'bg-pink-500/10 text-pink-300 border-pink-500/20',
      'Java': 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      'Full Stack': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
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
