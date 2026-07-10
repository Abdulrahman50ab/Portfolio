import React from 'react';
import { Terminal, Smartphone, ShieldCheck, Cpu, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      skills: [
        { name: "Flutter", level: 90, label: "Expert" },
        { name: "Dart", level: 85, label: "Expert" },
        { name: "Cross-Platform SDKs", level: 88, label: "Expert" },
        { name: "Android Studio / Tools", level: 80, label: "Advanced" }
      ],
      glow: "hover:shadow-[0_0_25px_rgba(34,211,238,0.1)]"
    },
    {
      title: "Frontend Web",
      icon: <Layers className="h-5 w-5 text-indigo-400" />,
      skills: [
        { name: "React / Vite", level: 85, label: "Expert" },
        { name: "JavaScript (ES6+)", level: 88, label: "Expert" },
        { name: "TypeScript", level: 80, label: "Advanced" },
        { name: "Tailwind CSS", level: 85, label: "Expert" },
        { name: "HTML5 / CSS3", level: 95, label: "Expert" }
      ],
      glow: "hover:shadow-[0_0_25px_rgba(99,102,241,0.1)]"
    },
    {
      title: "Backend & Systems",
      icon: <Terminal className="h-5 w-5 text-emerald-400" />,
      skills: [
        { name: "Node.js / Express", level: 80, label: "Advanced" },
        { name: "MongoDB", level: 78, label: "Advanced" },
        { name: "PostgreSQL", level: 75, label: "Intermediate" },
        { name: "RESTful Web APIs", level: 85, label: "Advanced" }
      ],
      glow: "hover:shadow-[0_0_25px_rgba(52,211,153,0.1)]"
    },
    {
      title: "C++ & Java (Core)",
      icon: <Cpu className="h-5 w-5 text-pink-400" />,
      skills: [
        { name: "C++ (OOP & DSA)", level: 80, label: "Advanced" },
        { name: "Java (Core & Swing)", level: 75, label: "Intermediate" },
        { name: "Data Structures", level: 82, label: "Advanced" },
        { name: "Algorithms", level: 78, label: "Advanced" }
      ],
      glow: "hover:shadow-[0_0_25px_rgba(236,72,153,0.1)]"
    },
    {
      title: "Tools & DevOps",
      icon: <ShieldCheck className="h-5 w-5 text-purple-400" />,
      skills: [
        { name: "Git & Version Control", level: 88, label: "Expert" },
        { name: "Firebase (Auth / DB)", level: 85, label: "Expert" },
        { name: "Figma (UI design)", level: 75, label: "Intermediate" },
        { name: "Docker", level: 65, label: "Intermediate" }
      ],
      glow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5">
      {/* Background Glow */}
      <div className="glow-orb-indigo top-[10%] left-[-5%]"></div>
      <div className="glow-orb-cyan bottom-[15%] right-[-5%]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive mapping of my technical stack, framework competencies, and development toolchains.
          </p>
        </div>

        {/* Skill Panels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`bg-glass-card border border-glass rounded-2xl p-7 transition-all duration-300 ${category.glow}`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-8 border-b border-white/5 pb-4 text-left">
                <div className="bg-slate-950 p-2.5 rounded-xl border border-white/5 shadow-md">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6 text-left">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 uppercase tracking-wide">
                          {skill.label}
                        </span>
                        <span className="text-slate-400 text-xs font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                    {/* Glowing Progress bar */}
                    <div className="w-full bg-slate-900 border border-white/5 rounded-full h-2 overflow-hidden p-[1px]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(99,102,241,0.6)]"
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