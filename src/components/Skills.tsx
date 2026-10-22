import React from 'react';
import { Terminal, Smartphone, ShieldCheck, Layers, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-5 w-5 text-sky-600" />,
      skills: [
        { name: "Flutter", level: 92, label: "Expert" },
        { name: "Dart", level: 90, label: "Expert" },
        { name: "iOS & Android Cross-Platform", level: 88, label: "Expert" },
        { name: "Custom Widgets & Animations", level: 85, label: "Expert" }
      ],
    },
    {
      title: "Generative AI",
      icon: <Cpu className="h-5 w-5 text-purple-600" />,
      skills: [
        { name: "LangGraph", level: 85, label: "Expert" },
        { name: "RAG Pipelines", level: 88, label: "Expert" },
        { name: "Gemini 1.5 Flash", level: 90, label: "Expert" },
        { name: "pgvector & Embeddings", level: 82, label: "Advanced" },
        { name: "AI Agents", level: 80, label: "Advanced" }
      ],
    },
    {
      title: "Backend & API",
      icon: <Terminal className="h-5 w-5 text-emerald-600" />,
      skills: [
        { name: "Firebase (Auth / DB / Storage)", level: 90, label: "Expert" },
        { name: "Node.js / Express.js", level: 85, label: "Expert" },
        { name: "Neon DB (PostgreSQL)", level: 80, label: "Advanced" },
        { name: "Supabase", level: 82, label: "Advanced" },
        { name: "REST APIs & Drizzle ORM", level: 85, label: "Expert" }
      ],
    },
    {
      title: "Web Development",
      icon: <Layers className="h-5 w-5 text-indigo-600" />,
      skills: [
        { name: "React", level: 88, label: "Expert" },
        { name: "Next.js", level: 80, label: "Advanced" },
        { name: "Vite & React-Vite", level: 85, label: "Expert" },
        { name: "Tailwind CSS", level: 90, label: "Expert" },
        { name: "JavaScript / TypeScript", level: 85, label: "Expert" }
      ],
    },
    {
      title: "Tools & Designing",
      icon: <ShieldCheck className="h-5 w-5 text-rose-600" />,
      skills: [
        { name: "Git & GitHub", level: 90, label: "Expert" },
        { name: "Android Studio & VS Code", level: 88, label: "Expert" },
        { name: "Figma & Adobe XD", level: 80, label: "Advanced" },
        { name: "Photoshop & Vercel", level: 78, label: "Advanced" }
      ],
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50/70 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            My <span className="text-indigo-600">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive mapping of my technical stack, generative AI capabilities, and web architectures.
          </p>
        </div>

        {/* Skill Panels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-8 border-b border-slate-100 pb-4 text-left">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6 text-left">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-semibold text-slate-800">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 uppercase tracking-wide">
                          {skill.label}
                        </span>
                        <span className="text-slate-500 text-xs font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                    {/* Clean Progress bar */}
                    <div className="w-full bg-slate-100 border border-slate-200/70 rounded-full h-2 overflow-hidden p-[1px]">
                      <div
                        className="h-full rounded-full bg-indigo-600 transition-all duration-1000 ease-out"
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
