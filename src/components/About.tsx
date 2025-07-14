import React from 'react';
import { Code, Database, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: "Frontend Development",
      description: "React, JavaScript, TypeScript, HTML5, CSS3"
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "Backend Development",
      description: "Node.js, Express, MongoDB, PostgreSQL"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      title: "Mobile-First Design",
      description: "Responsive design and progressive web apps"
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Web Technologies",
      description: "Modern frameworks and development tools"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate full-stack web developer with over 3 years of experience in creating 
              digital experiences that are both beautiful and functional. I specialize in modern 
              web technologies and have a strong foundation in both frontend and backend development.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey began with a curiosity for how things work on the web, and it has evolved 
              into a career where I get to build amazing products that solve real-world problems. 
              I'm constantly learning new technologies and best practices to deliver exceptional 
              results for my clients and projects.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;