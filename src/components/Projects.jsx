import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Study Assistant',
    description:
      'A smart helper that summarizes notes, generates quizzes, and recommends resources using NLP.',
    tags: ['React', 'FastAPI', 'NLP'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Real-time Chat App',
    description:
      'Modern chat application with rooms, presence, and emoji reactions with a clean, responsive UI.',
    tags: ['React', 'WebSocket', 'Tailwind'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'ML Model Dashboard',
    description:
      'Interactive dashboard to track experiments, metrics, and model versions for quick iteration.',
    tags: ['Vite', 'D3', 'FastAPI'],
    github: 'https://github.com/',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-slate-950 px-6 py-20 text-slate-200 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          A few things I’ve built recently. I can replace these with your real links anytime.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
