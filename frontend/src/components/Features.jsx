import React from 'react';
import { ShieldCheck, Cpu, Zap, BarChart3, Database, KeyRound } from 'lucide-react';

const features = [
  {
    icon: <Cpu size={20} className="text-brand-primary" />,
    title: 'Local LLM Integration',
    description: 'Direct connection with your local Ollama instance (Qwen2.5-Coder / Llama3). No API keys, no latency, 100% private.',
  },
  {
    icon: <ShieldCheck size={20} className="text-emerald-500" />,
    title: 'Fully Secure & Private',
    description: 'All parsing, indexing, and timing run inside your local SQLite engine. Schemas and queries never leave your machine.',
  },
  {
    icon: <Zap size={20} className="text-amber-500" />,
    title: 'Before & After Profiling',
    description: 'Executes query variants multiple times with precision microsecond clocks to reveal real structural improvements.',
  },
  {
    icon: <BarChart3 size={20} className="text-brand-primary" />,
    title: 'EXPLAIN Plan Analytics',
    description: "Parses SQLite's internal query plans, tracking Table Scans, Index Lookups, Correlated Subqueries, and Nested Joins.",
  },
  {
    icon: <Database size={20} className="text-brand-secondary" />,
    title: '1-Click Index Generator',
    description: 'The AI agent generates and applies indexing scripts directly, then immediately re-benchmarks the improvement.',
  },
  {
    icon: <KeyRound size={20} className="text-rose-500" />,
    title: 'Interactive Demo DB',
    description: 'Built-in schema generator with 75,000+ relational rows across Customers, Products, and Orders tables.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-brand-bg border-t border-brand-border">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Engineered for Performance
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto text-sm leading-relaxed font-semibold">
            A specialized suite designed to analyze, refactor, and index SQLite databases entirely on your local machine.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="card card-hover p-6 flex flex-col gap-4 bg-[#0F1420] border-brand-border"
            >
              <div className="w-9 h-9 rounded-xl bg-[#090D16] border border-brand-border flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-text mb-1">{f.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-semibold">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
