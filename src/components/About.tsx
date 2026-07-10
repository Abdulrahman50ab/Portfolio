import React from 'react';
import { Code, Database, Smartphone, Globe, Zap, Briefcase, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Smartphone className="h-6 w-6 text-cyan-400" />,
      title: "Mobile App Development",
      description: "Specialized in Flutter & Dart. Responsive cross-platform apps for iOS and Android.",
      glow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
    },
    {
      icon: <Code className="h-6 w-6 text-indigo-400" />,
      title: "Frontend Development",
      description: "Responsive web design using React, TypeScript, and modern styling solutions.",
      glow: "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
    },
    {
      icon: <Database className="h-6 w-6 text-emerald-400" />,
      title: "Backend Development",
      description: "Rest APIs, database structuring, Node.js, Express, MongoDB, and secure sessions.",
      glow: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]"
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      title: "Full Stack Integration",
      description: "Connecting mobile, web frontend, and cloud backend databases seamlessly.",
      glow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
    }
  ];

  const stats = [
    { value: "3+", label: "Years Experience", sub: "Overall Dev" },
    { value: "2+", label: "Years Flutter Focus", sub: "Mobile Apps" },
    { value: "8+", label: "Projects Completed", sub: "Web & Mobile" },
    { value: "100%", label: "Client Satisfaction", sub: "High Quality" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950 border-b border-white/5">
      {/* Background orbs */}
      <div className="glow-orb-indigo bottom-[10%] left-[5%]"></div>
      <div className="glow-orb-pink top-[20%] right-[5%]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Description & Stats */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2">
                <Zap className="h-5 w-5 text-indigo-400" />
                <span>Designing high-quality mobile & web products</span>
              </h3>
              <p className="text-slate-350 leading-relaxed text-base sm:text-lg">
                I'm a dedicated <strong className="text-indigo-300 font-semibold">Software Engineer</strong> with over 3 years of overall coding experience. For the past <strong className="text-cyan-300 font-semibold">2+ years</strong>, I have specialized in building native-performance <strong className="text-cyan-300 font-semibold">Mobile Apps using Flutter</strong> while designing robust, highly responsive architectures for <strong className="text-indigo-300 font-semibold">Web Applications</strong>.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                My career path expanded from web frontend coding to mastering backend servers, database pipelines, and cross-platform native SDKs. 
                This diverse technical background helps me deliver complete, unified digital solutions from inception to production deployment.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((skill, i) => {
                const colors = [
                  'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
                  'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
                  'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
                  'bg-purple-500/10 text-purple-300 border-purple-500/20',
                ];
                return (
                  <span key={skill} className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${colors[i % colors.length]}`}>
                    {skill}
                  </span>
                );
              })}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-white/5 p-4 rounded-xl text-center backdrop-blur-sm">
                  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 block">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-slate-200 block mt-1 leading-tight">{stat.label}</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">{stat.sub}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Highlights Cards Grid */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5 w-full">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className={`group bg-glass-card border border-glass hover:border-white/10 p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 hover:shadow-xl ${item.glow}`}
              >
                <div className="flex flex-col items-start space-y-4">
                  <div className="bg-slate-900 border border-white/5 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="space-y-1.5 text-left">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Timeline: Experience & Education */}
        <div className="mt-24 border-t border-white/5 pt-20">
          <div className="grid md:grid-cols-2 gap-12 text-left">
            
            {/* Experience Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-3">
                <Briefcase className="h-5 w-5 text-indigo-400" />
                <span>Work Experience</span>
              </h3>
              
              <div className="relative border-l border-indigo-500/20 pl-6 ml-2 space-y-8">
                
                {/* Job 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                  <div>
                    <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20">
                      Jan 2026 – Present
                    </span>
                    <h4 className="text-lg font-bold text-white mt-2.5">Software Engineer</h4>
                    <p className="text-sm font-semibold text-slate-350 mt-0.5">IntelliG</p>
                    <ul className="text-xs text-slate-450 list-disc pl-4 mt-3 space-y-1.5 leading-relaxed">
                      <li>Building AI-powered and full-stack applications, contributing across backend, frontend, and Generative AI workflows.</li>
                      <li>Designing and developing Generative AI pipelines and full-stack features using modern AI/LLM tooling.</li>
                      <li>Collaborating with cross-functional teams to ship production-ready features from design through deployment.</li>
                    </ul>
                  </div>
                </div>

                {/* Job 2 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950"></div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-900 border border-white/5 px-2.5 py-1.5 rounded">
                      Nov 2024 – Apr 2025 (6 Months)
                    </span>
                    <h4 className="text-lg font-bold text-white mt-2.5">Flutter & Web Developer</h4>
                    <p className="text-sm font-semibold text-slate-350 mt-0.5">IzzaTech — Lahore, Pakistan</p>
                    <ul className="text-xs text-slate-450 list-disc pl-4 mt-3 space-y-1.5 leading-relaxed">
                      <li>Developed and maintained cross-platform Flutter mobile applications delivered as SaaS products to clients.</li>
                      <li>Built React-based web applications with Neon PostgreSQL backend as part of SaaS service offerings.</li>
                      <li>Collaborated with clients to gather requirements and translate them into production-ready solutions.</li>
                      <li>Revived and refactored stalled client projects through code optimization, bug fixing, and UI/UX redesign.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Education Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-3">
                <Award className="h-5 w-5 text-cyan-400" />
                <span>Education</span>
              </h3>

              <div className="relative border-l border-cyan-500/20 pl-6 ml-2 space-y-8">
                
                {/* Education 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                  <div>
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
                      2023 – 2027
                    </span>
                    <h4 className="text-lg font-bold text-white mt-2.5">BS in Computer Science</h4>
                    <p className="text-sm font-semibold text-slate-350 mt-0.5">Riphah International University, Lahore</p>
                    <div className="mt-3 flex items-center space-x-2">
                      <span className="text-xs font-bold text-slate-300">CGPA:</span>
                      <span className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                        3.93 / 4.00
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Coursework: Mobile Application Development, Data Structures, Algorithms, OOP.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;