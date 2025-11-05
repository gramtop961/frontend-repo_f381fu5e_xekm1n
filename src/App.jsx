import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10 text-center text-sm text-slate-400 sm:px-8">
      <p>
        © {new Date().getFullYear()} Faizanur Rahman. Built with care — AI & ML • Web Development.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
