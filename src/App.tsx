import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrintableCV from './components/PrintableCV';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-950 selection:bg-zinc-900 selection:text-white font-sans">
      <div className="print:hidden">
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
      <PrintableCV />
    </div>
  );
}

export default App;
