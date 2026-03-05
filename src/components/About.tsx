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
      title: "Mobile App Development",
      description: "Flutter, Dart, Firebase, Cross-platform Apps"
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
              I'm a passionate full-stack developer with over 3 years of overall experience,
              specializing in building high-quality digital solutions. For the past
              <strong> 2+ years</strong>, I have focused on <strong>Mobile App Development using Flutter</strong>,
              creating cross-platform applications that deliver seamless user experiences.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              My journey evolved from web development to mastering mobile technologies, allowing me
              to build scalable products across multiple platforms. I'm dedicated to continuous
              learning and implementing best practices to solve real-world problems through innovation.
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