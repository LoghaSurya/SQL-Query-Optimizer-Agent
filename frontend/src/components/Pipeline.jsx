import React from 'react';
import { Database, Search, Cpu, BarChart2, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <Database size={20} className="text-brand-primary" />,
    num: '01',
    title: 'Context Gathering',
    description: 'Reads your target database schema, column datatypes, table row counts, and current indexing definitions.',
  },
  {
    icon: <Search size={20} className="text-brand-secondary" />,
    num: '02',
    title: 'Execution Profiling',
    description: 'Generates the baseline SQLite EXPLAIN QUERY PLAN to detect raw table scans and expensive correlated subloops.',
  },
  {
    icon: <Cpu size={20} className="text-brand-primary" />,
    num: '03',
    title: 'LLM Agent Rewrite',
    description: 'Feeds data into local Ollama models (Qwen / Llama) to suggest structural SQL rewrites and composite index fields.',
  },
  {
    icon: <BarChart2 size={20} className="text-brand-secondary" />,
    num: '04',
    title: 'Precision Benchmarking',
    description: 'Fires both query variants multiple times to calculate microsecond timings and prove estimated speedup.',
  },
  {
    icon: <CheckCircle2 size={20} className="text-emerald-500" />,
    num: '05',
    title: 'Index & Reports',
    description: 'Compiles index creation scripts and exports a download-ready Markdown report.',
  },
];

export default function Pipeline() {
  return (
    <section id="how-it-works" className="py-20 bg-brand-bg border-t border-brand-border">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-4">
            Optimizer Agent Loop
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto text-sm leading-relaxed font-semibold">
            How our local agent analyzes, rewrites, and profiles queries inside a secure sandbox environment.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* Background Connector Line (only for desktop md+) */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-[#1E293B] z-0" />

          {steps.map((s, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Step number badge / icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#0F1420] border border-brand-border flex items-center justify-center mb-6 group-hover:border-slate-600 transition-all duration-300 shadow-md">
                {s.icon}
              </div>

              {/* Step counter */}
              <div className="inline-block text-[10px] font-black tracking-widest text-brand-primary uppercase bg-indigo-950/40 border border-indigo-900/40 px-2 py-0.5 rounded-full mb-3">
                Step {s.num}
              </div>

              {/* Step title */}
              <h3 className="text-sm font-bold text-brand-text mb-2 tracking-tight">
                {s.title}
              </h3>

              {/* Step description */}
              <p className="text-xs text-brand-muted leading-relaxed font-semibold px-2">
                {s.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
