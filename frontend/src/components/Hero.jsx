import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero({ goToOptimizer }) {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-brand-bg">

      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

      {/* Deep blue radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-900/50 text-xs font-semibold text-brand-primary mb-8 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
          AI-Powered SQL Optimization · Local & Private
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold tracking-tight text-brand-text mb-5 leading-[1.12]">
          SQL Query Optimizer Agent
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-brand-muted max-w-2xl mb-10 leading-relaxed font-semibold">
          Paste a slow SQL query and let the agent inspect your schema, profile the execution plan,
          suggest index rewrites, and benchmark improvement — all running locally via Ollama.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={goToOptimizer}
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-sm shadow-btn hover:shadow-md transition-all duration-200 active:scale-95"
          >
            <Zap size={15} />
            Try Optimizer Agent
            <ArrowRight size={15} />
          </button>

          <a
            href="#features"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0F1420] border border-brand-border text-brand-text font-bold text-sm hover:bg-[#151b2a] hover:border-slate-700 transition-all duration-200"
          >
            How It Works
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 text-xs text-brand-muted font-bold">
          {['SQLite · EXPLAIN QUERY PLAN', 'Ollama (Qwen / Llama3)', '100% Local · No API Keys', 'Before & After Benchmarks'].map(t => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-brand-faint" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
