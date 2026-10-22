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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <div className="print:hidden">
        <Header />
        <main>
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
