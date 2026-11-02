const PrintableCV = () => {
  return (
    <div id="printable-cv" className="hidden print:block bg-white text-black p-8 font-sans text-sm max-w-4xl mx-auto leading-relaxed">
      
      {/* Header */}
      <div className="text-center border-b-2 border-slate-800 pb-4 mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight uppercase text-slate-900">Abdul Rahman</h1>
        <p className="text-sm font-bold text-indigo-700 tracking-wider mt-1">
          Software Engineer &bull; Mobile App Specialist &bull; AI-Powered Applications
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-3 font-medium">
          <span>Lahore, Pakistan</span>
          <span>|</span>
          <span>+92 301-0401544</span>
          <span>|</span>
          <a href="mailto:abdulrahman50ab@gmail.com" className="text-slate-800 underline">abdulrahman50ab@gmail.com</a>
          <span>|</span>
          <a href="https://www.linkedin.com/in/abdulrahman50" className="text-slate-800 underline">LinkedIn</a>
          <span>|</span>
          <a href="https://github.com/Abdulrahman50ab" className="text-slate-800 underline">GitHub</a>
        </div>
      </div>

      {/* About */}
      <div className="mb-6 text-left">
        <h2 className="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
          Professional Summary
        </h2>
        <p className="text-xs text-slate-800">
          I am a passionate Software Engineer and Computer Science student at Riphah International University (CGPA 3.93/4.00) with hands-on experience building AI-powered mobile and web applications. I specialize in cross-platform development with Flutter and have delivered 15+ production-grade projects ranging from AI keyboards and smart storage tools to university transport systems and content generation platforms. On the web side, I build React-based applications backed by Neon PostgreSQL, and I develop Generative AI pipelines using LangGraph and RAG. I thrive on solving real-world problems through clean architecture, intuitive UI, and intelligent API integrations.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-6 text-left">
        <h2 className="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
          <div>
            <p><strong className="text-slate-900">Mobile Dev:</strong> Flutter, Dart, iOS & Android Cross-Platform</p>
            <p><strong className="text-slate-900">Generative AI:</strong> LangGraph, RAG, Prompt Engineering, Gemini 1.5 Flash, pgvector, AI Agents</p>
            <p><strong className="text-slate-900">Backend / API:</strong> Firebase (Auth, Firestore, Storage), Node.js, Express.js, MongoDB, Neon DB (PostgreSQL), Supabase, REST API, Drizzle ORM</p>
          </div>
          <div>
            <p><strong className="text-slate-900">Web:</strong> React, Next.js, Vite, HTML, CSS, JavaScript, Tailwind CSS</p>
            <p><strong className="text-slate-900">Tools & Design:</strong> Material Design, Custom Widgets, Animations, Responsive Layouts, Git, GitHub, Android Studio, VS Code, Figma, Adobe XD, Photoshop, Vercel</p>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-6 text-left">
        <h2 className="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
          Work Experience
        </h2>
        <div className="space-y-4">
          {/* IntelliG */}
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-xs font-bold text-slate-900">Software Engineer — IntelliG</h3>
              <span className="text-xs font-semibold text-slate-600">Jan 2026 – Present</span>
            </div>
            <ul className="list-disc pl-4 text-xs text-slate-800 mt-1 space-y-1">
              <li>Working as a Software Engineer building AI-powered and full-stack applications, contributing across backend, frontend, and Generative AI workflows.</li>
              <li>Designing and developing Generative AI pipelines and full-stack features using modern AI/LLM tooling and cloud-native architectures.</li>
              <li>Collaborating with cross-functional teams to ship production-ready features from design through deployment.</li>
            </ul>
          </div>

          {/* IzzaTech */}
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-xs font-bold text-slate-900">Flutter & Web Developer — IzzaTech</h3>
              <span className="text-xs font-semibold text-slate-600">Nov 2024 – Apr 2025 (6 Months)</span>
            </div>
            <p className="text-[10px] text-slate-500 font-semibold italic -mt-0.5">Lahore, Pakistan</p>
            <ul className="list-disc pl-4 text-xs text-slate-800 mt-1 space-y-1">
              <li>Developed and maintained cross-platform Flutter mobile applications delivered as SaaS products to clients.</li>
              <li>Built React-based web applications with Neon PostgreSQL backend as part of SaaS service offerings.</li>
              <li>Collaborated with clients to gather requirements and translate them into production-ready mobile and web solutions.</li>
              <li>Revived and refactored stalled client projects through code optimization, bug fixing, and UI/UX redesign.</li>
              <li>Integrated REST APIs, Firebase, and third-party SDKs across multiple live client applications.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mb-6 break-before-page text-left">
        <h2 className="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
          Selected Projects
        </h2>
        <div className="space-y-3">
          
          {/* DocFlow */}
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              DocFlow AI — Intelligent Document Extraction Pipeline
            </h3>
            <p className="text-[10px] text-indigo-700 font-semibold mt-0.5">
              Gemini 1.5 Flash, LangGraph, RAG, Neon PostgreSQL, pgvector, React, Express, Drizzle ORM
            </p>
            <ul className="list-disc pl-4 text-xs text-slate-800 mt-1 space-y-0.5">
              <li>Automated document processing, extracting structured JSON from invoices, bills, and contracts with 96% accuracy.</li>
              <li>Designed a LangGraph multi-agent workflow with Dynamic Few-Shot RAG for automated classification.</li>
              <li>Implemented semantic similarity search using pgvector embeddings and human-in-the-loop validation checkpoints.</li>
            </ul>
          </div>

          {/* AI Keyboard */}
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              AI-Powered Keyboard & AI PDF App (Flutter & Web)
            </h3>
            <ul className="list-disc pl-4 text-xs text-slate-800 mt-1 space-y-0.5">
              <li>Created a mobile keyboard in Flutter featuring custom REST API calls to LLM backends for 30% faster typing suggestions.</li>
              <li>Built an AI PDF application in Flutter providing document summarization, custom highlighting, and on-device text parsing.</li>
            </ul>
          </div>

          {/* UniRide */}
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              UniRide – University Transport Application
            </h3>
            <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Flutter, Node.js, MongoDB, Google Maps API</p>
            <ul className="list-disc pl-4 text-xs text-slate-800 mt-1 space-y-0.5">
              <li>Built a transport management application used by 500+ students, featuring real-time bus locations and seat bookings.</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Education */}
      <div className="text-left">
        <h2 className="text-xs font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
          Education
        </h2>
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="text-xs font-bold text-slate-900">BS in Computer Science</h3>
            <p className="text-xs text-slate-700">Riphah International University, Lahore &bull; CGPA: 3.93 / 4.00</p>
          </div>
          <span className="text-xs font-semibold text-slate-600">2023 – 2027</span>
        </div>
      </div>

    </div>
  );
};

export default PrintableCV;
