"use client";

import React from 'react';

export function WorkTogetherCTA() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-3xl mx-auto text-center space-y-8">
      {/* Main Statement */}
      <div className="space-y-4">
        <p className="text-lg text-slate-300 leading-relaxed">
          I'm currently open to <span className="text-white font-semibold">full-time roles</span> and <span className="text-white font-semibold">freelance projects</span> in machine learning, trading systems, and full-stack development.
        </p>
        <p className="text-slate-400">
          Interested in roles where I can build scalable systems, apply ML to real-world problems, and work with data-driven teams that value engineering excellence.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          onClick={scrollToContact}
          className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Get in Touch
        </button>
        <a
          href="/resume-chinmay-sn.pdf"
          download="Chinmay_SN_Resume.pdf"
          className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          View Resume
        </a>
      </div>

      {/* Optional: Availability Badge */}
      <div className="pt-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Available for opportunities
        </span>
      </div>
    </div>
  );
}
