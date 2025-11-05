import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8">
        <a href="#" className="text-sm font-semibold tracking-tight text-white">
          FR
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <a
          href="#contact"
          className="rounded-md bg-sky-500 px-3 py-1.5 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
