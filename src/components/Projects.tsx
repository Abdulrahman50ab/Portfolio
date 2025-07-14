import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Globe, Cpu, Coffee, Dumbbell } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    // Development (Frontend)
    {
      title: "Riphah International University Frontend",
      description: "A frontend layout clone for a university website with modern design and responsive layout.",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "To-Do Lists",
      description: "A simple and stylish React-based to-do list application with local storage and drag-and-drop functionality.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "CSS", "Local Storage", "JavaScript"],
      category: "Frontend",
      icon: <Code className="h-6 w-6" />,
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio",
      description: "A personal portfolio website built with React and responsive design showcasing projects and skills.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
      category: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      liveLink: "#",
      githubLink: "#"
    },
    // C++ Projects
    {
      title: "Bank Management System with DSA",
      description: "Console-based banking system using data structures and file handling for efficient customer and account management.",
      image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["C++", "Data Structures", "File Handling", "OOP"],
      category: "C++",
      icon: <Cpu className="h-6 w-6" />,
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Car Rental System",
      description: "Vehicle booking and customer management project in C++ with comprehensive rental tracking and billing system.",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["C++", "File Management", "OOP", "Console Application"],
      category: "C++",
      icon: <Cpu className="h-6 w-6" />,
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Easy Khata System",
      description: "A digital ledger system for small businesses made with C++ featuring transaction tracking and financial reporting.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["C++", "File I/O", "Business Logic", "Data Management"],
      category: "C++",
      icon: <Cpu className="h-6 w-6" />,
      liveLink: "#",
      githubLink: "#"
    },
    // Java Project
    {
      title: "Bank Management System",
      description: "GUI-based Java application for managing bank records and transactions with user-friendly interface and secure operations.",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Java", "Swing", "JDBC", "MySQL"],
      category: "Java",
      icon: <Coffee className="h-6 w-6" />,
      liveLink: "#",
      githubLink: "#"
    },
    // Full Stack Project
    {
      title: "Gym-Fitness Management System",
      description: "MERN stack app to manage gym members, packages, trainers, and attendance with comprehensive dashboard and reporting.",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      category: "Full Stack",
      icon: <Dumbbell className="h-6 w-6" />,
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const categories = ['All', 'Frontend', 'C++', 'Java', 'Full Stack'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Frontend': 'bg-blue-100 text-blue-800',
      'C++': 'bg-purple-100 text-purple-800',
      'Java': 'bg-orange-100 text-orange-800',
      'Full Stack': 'bg-green-100 text-green-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my development journey across different technologies and platforms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors font-medium text-sm"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Code className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-500 mb-2">No projects found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;