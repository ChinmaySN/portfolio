import React from 'react';
import { Container } from '@/components/layout/Container';

/**
 * Hero component: establishes identity and tone.
 *
 * Structure:
 * - Two-column layout (desktop): text left, illustration right
 * - Single column (mobile): text stacked above illustration
 * - h1 heading for SEO and accessibility
 * - Optional description below name
 *
 * Why this structure?
 * - Clear visual hierarchy: name → description → CTA (when added)
 * - Scalable: easy to add buttons, links, or animated elements later
 * - Accessible: h1 landmark, semantic HTML, readable without CSS
 *
 * Future animation support:
 * - Each column (text, illustration) can be individually animated
 * - The illustration div is ready for parallax, fade-in, or scale effects
 * - Stagger effect possible: text in first, illustration second
 * - Currently static; animation will be added via Framer Motion or CSS later
 */
export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: text content */}
          <div className="space-y-6">
            <div>
              <h1
                id="hero-heading"
                className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight"
              >
                Chinmay S N
              </h1>
              <p className="text-xl text-slate-600 mt-4">
                Building intelligent systems and scalable web solutions.
              </p>
            </div>

            {/* Description paragraph */}
            <p className="text-lg text-slate-600 max-w-md">
              I specialize in machine learning, algorithmic trading, and full-stack web development.
              Passionate about solving complex problems with clean code and data-driven decisions.
            </p>

            {/* CTA placeholder - will be enhanced with buttons later */}
            <div className="pt-4 flex gap-4">
              <a
                href="#featured-projects"
                className="inline-block px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-3 border border-slate-300 text-slate-900 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right column: illustration placeholder */}
          <div className="flex items-center justify-center">
            {/* 
              Illustration placeholder: ready for:
              - Static image: replace with <img> or <Image />
              - SVG illustration: insert inline SVG
              - Animated components: add Framer Motion or CSS animations
              - Parallax effect: parent can use scroll listeners
              
              Current: simple gradient box for visual distinction
            */}
            <div className="w-full aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center">
              <div className="text-center text-slate-500">
                <p className="text-6xl mb-2">🎨</p>
                <p className="text-sm">Illustration / Avatar</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
