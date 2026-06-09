import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OptimizerAgentPage from './pages/OptimizerAgentPage';

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isOptimizer = location.pathname === '/optimizer-agent';

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-primary/10">

      {/* ── Top Navigation (hidden on optimizer console) ── */}
      {!isOptimizer && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F1420] border-b border-brand-border backdrop-blur-md/95">
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 group"
            >
              <div className="w-7 h-7 rounded-lg bg-brand-primary flex items-center justify-center text-white text-sm font-bold shadow-btn">
                ⚡
              </div>
              <span className="font-semibold text-brand-text text-sm tracking-tight">
                SQL Optimizer Agent
              </span>
            </button>

            {/* Nav links */}
            <nav className="hidden sm:flex items-center gap-6">
              <button
                onClick={() => navigate('/optimizer-agent')}
                className="text-sm font-bold text-white bg-brand-primary hover:bg-brand-primaryHover px-4 py-2 rounded-lg shadow-btn transition-all duration-200"
              >
                Open Agent Console →
              </button>
            </nav>
          </div>
        </header>
      )}

      {/* ── Page Content ── */}
      <main className={isOptimizer ? "" : "pt-14"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/optimizer-agent" element={<OptimizerAgentPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
