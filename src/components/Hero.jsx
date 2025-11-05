import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast, does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-slate-950/80" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-32 sm:px-8 md:gap-8 md:pt-40">
        <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/50 px-3 py-1 text-xs text-slate-300 backdrop-blur">
          Portfolio • Tech • AI & ML
        </span>
        <h1 className="text-left text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Faizanur Rahman</span>
        </h1>
        <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
          Third-year Engineering student specializing in AI & ML with mid-level experience in modern web development. I build thoughtful, performant products that blend intelligent systems with polished UI.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur transition hover:border-slate-600 hover:bg-slate-800/80"
          >
            Let’s Connect
          </a>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <a
            aria-label="GitHub"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-700/60 bg-slate-900/60 p-2 text-slate-200 transition hover:border-slate-600 hover:bg-slate-800/80"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-700/60 bg-slate-900/60 p-2 text-slate-200 transition hover:border-slate-600 hover:bg-slate-800/80"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            aria-label="Email"
            href="#contact"
            className="rounded-md border border-slate-700/60 bg-slate-900/60 p-2 text-slate-200 transition hover:border-slate-600 hover:bg-slate-800/80"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
