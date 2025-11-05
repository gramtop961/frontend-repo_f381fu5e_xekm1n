import React from 'react';
import { Brain, Code2, Sparkles } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: Brain, title: 'AI & ML', text: 'Strong foundation in machine learning, model training, and applied AI for real-world use-cases.' },
    { icon: Code2, title: 'Web Development', text: 'Mid-level experience building full‑stack apps with modern React, APIs, and performant UIs.' },
    { icon: Sparkles, title: 'Product Thinking', text: 'Focus on usability, accessibility, and shipping clean, maintainable solutions.' },
  ];

  return (
    <section id="about" className="relative z-0 w-full bg-slate-950 px-6 py-20 text-slate-200 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          I’m a third-year Bachelor of Engineering student specializing in Artificial Intelligence & Machine Learning. I enjoy crafting products where intelligence meets great design.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.title} className="group rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70">
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-sky-400" />
                <h3 className="text-base font-medium">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-400">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
