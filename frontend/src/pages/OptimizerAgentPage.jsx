import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import OptimizerAgent from '../components/OptimizerAgent';

export default function OptimizerAgentPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between">
      <div>
        {/* Breadcrumb Header aligned with main form */}
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-0">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 text-xs text-brand-muted hover:text-brand-text transition-colors group font-bold tracking-wider"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        <OptimizerAgent />
      </div>

      <footer className="border-t border-brand-border bg-[#0F1420] py-4 mt-8">
        <p className="text-center text-xs text-brand-faint font-semibold">
          © {new Date().getFullYear()} SQL Optimizer Agent — MIT License
        </p>
      </footer>
    </div>
  );
}
