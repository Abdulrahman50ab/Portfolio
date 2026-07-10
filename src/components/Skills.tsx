import React from 'react';
import { Terminal, Smartphone, ShieldCheck, Layers, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
      skills: [
        { name: "Flutter", level: 92, label: "Expert" },
        { name: "Dart", level: 90, label: "Expert" },
        { name: "iOS & Android Cross-Platform", level: 88, label: "Expert" },
        { name: "Custom Widgets & Animations", level: 85, label: "Expert" }
      ],
      glow: "hover:shadow-[0_0_25px_rgba(34,211,238,0.1)]"
    },
    {
      title: "Generative AI",
      icon: <Sparkles className="h-5 w-5 text-purple-400" />,
      skills: [
        { name: "LangGraph", level: 85, label: "Expert" },
        { name: "RAG Pipelines", level: 88, label: "Expert" },
        { name: "Gemini 1.5 Flash", level: 90, label: "Expert" },
        { name: "pgvector & Embeddings", level: 82, label: "Advanced" },
        { name: "AI Agents", level: 80, label: "Advanced" }
      ],
      glow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]"
    },
    {
      title: "Backend & API",
      icon: <Terminal className="h-5 w-5 text-emerald-400" />,
      skills: [
        { name: "Firebase (Auth / DB / Storage)", level: 90, label: "Expert" },
        { name: "Node.js / Express.js", level: 85, label: "Expert" },
        { name: "Neon DB (PostgreSQL)", level: 80, label: "Advanced" },
        { name: "Supabase", level: 82, label: "Advanced" },
        { name: "REST APIs & Drizzle ORM", level: 85, label: "Expert" }
      ],
      glow: "hover:shadow-[0_0_25px_rgba(52,211,153,0.1)]"
    },
    {
      title: "Web Development",
      icon: <Layers className="h-5 w-5 text-indigo-400" />,
      skills: [
        { name: "React", level: 88, label: "Expert" },
        { name: "Next.js", level: 80, label: "Advanced" },
        { name: "Vite & React-Vite", level: 85, label: "Expert" },
        { name: "Tailwind CSS", level: 90, label: "Expert" },
        { name: "JavaScript / TypeScript", level: 85, label: "Expert" }
      ],
      glow: "hover:shadow-[0_0_25px_rgba(99,102,241,0.1)]"
    },
    {
      title: "Tools & Designing",
      icon: <ShieldCheck className="h-5 w-5 text-pink-400" />,
      skills: [
        { name: "Git & GitHub", level: 90, label: "Expert" },
        { name: "Android Studio & VS Code", level: 88, label: "Expert" },
        { name: "Figma & Adobe XD", level: 80, label: "Advanced" },
        { name: "Photoshop & Vercel", level: 78, label: "Advanced" }
      ],
      glow: "hover:shadow-[0_0_25px_rgba(236,72,153,0.1)]"
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
            A comprehensive mapping of my technical stack, generative AI capabilities, and web architectures.
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