import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 95, color: "bg-orange-500" },
        { name: "CSS3", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" },
        { name: "React", level: 85, color: "bg-cyan-500" },
        { name: "TypeScript", level: 80, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 85, color: "bg-teal-500" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 82, color: "bg-green-500" },
        { name: "Express.js", level: 80, color: "bg-gray-600" },
        { name: "MongoDB", level: 78, color: "bg-green-600" },
        { name: "PostgreSQL", level: 75, color: "bg-blue-700" },
        { name: "RESTful APIs", level: 85, color: "bg-purple-500" },
        { name: "GraphQL", level: 70, color: "bg-pink-500" }
      ]
    },
    {
      title: "Tools & Other",
      skills: [
        { name: "Git", level: 88, color: "bg-red-500" },
        { name: "Docker", level: 70, color: "bg-blue-800" },
        { name: "AWS", level: 65, color: "bg-yellow-600" },
        { name: "Figma", level: 75, color: "bg-purple-600" },
        { name: "Jest", level: 72, color: "bg-red-600" },
        { name: "Webpack", level: 68, color: "bg-blue-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;