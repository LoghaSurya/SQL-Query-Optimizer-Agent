import React from 'react';

export default function Footer({ goToOptimizer }) {
  return (
    <footer className="border-t border-brand-border bg-[#0F1420]">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-brand-muted font-bold">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-brand-text">⚡ SQL Optimizer Agent</span>
          <span>·</span>
          <span>MIT License</span>
        </div>
        
        <div className="flex gap-6">
          <a href="#features" className="hover:text-brand-text transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-brand-text transition-colors">Pipeline</a>
          <button
            onClick={goToOptimizer}
            className="hover:text-brand-text transition-colors font-bold"
          >
            Launch Console
          </button>
        </div>
        
        <p>© {new Date().getFullYear()} SQL Optimizer Agent. All rights reserved.</p>
      </div>
    </footer>
  );
}
