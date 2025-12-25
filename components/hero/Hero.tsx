'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/**
 * Hero component: establishes identity and tone with scroll-based parallax.
 *
 * Structure:
 * - Two-column layout (desktop): text left, illustration right
 * - Single column (mobile): text stacked above illustration
 * - h1 heading for SEO and accessibility
 * - Layered illustration with parallax motion
 *
 * Motion strategy:
 * - Illustration divided into 3 layers (background, midground, foreground)
 * - Each layer moves at different speed based on scroll progress
 * - Parallax depth: foreground moves most, background moves least
 * - Motion is subtle (max ±40px vertical offset) to avoid discomfort
 * - Respects prefers-reduced-motion: no animation if enabled
 *
 * Why this approach?
 * - Parallax draws attention to illustration without overwhelming text
 * - Layer separation creates depth and visual interest
 * - Scroll-based motion feels natural and responsive to user action
 * - Accessibility-first: motion is optional, not required for content
 *
 * Animation tuning:
 * - Max offset: ±40px (subtle, not distracting)
 * - Layer rates: 0.3, 0.5, 0.7 (staggered depth)
 * - No spring/bounce: linear, smooth motion tied to scroll
 * - Respects motion preferences: instant if reduced-motion enabled
 */
export const Hero: React.FC = () => {
  const scrollProgress = useScrollProgress();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Max offset in pixels (controls parallax intensity)
  // Subtle value prevents motion sickness and maintains focus on content
  const maxOffset = 40;

  // Layer offsets: each moves at different rate for parallax depth effect
  // Rates are between 0 (no movement) and 1 (follows scroll exactly)
  const backgroundOffset = scrollProgress * maxOffset * 0.3;
  const midgroundOffset = scrollProgress * maxOffset * 0.5;
  const foregroundOffset = scrollProgress * maxOffset * 0.7;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: text content (static, no animation) */}
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

            {/* CTA buttons */}
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

          {/* Right column: parallax illustration */}
          <div className="flex items-center justify-center overflow-hidden">
            {/* 
              Layered illustration with parallax effect.
              Each layer moves independently based on scroll progress.
              Disabled if user has prefers-reduced-motion enabled.
            */}
            <div className="relative w-full aspect-square">
              {/* Background layer: slowest movement (depth cue) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl"
                style={{
                  y: prefersReducedMotion ? 0 : backgroundOffset,
                }}
              />

              {/* Midground layer: medium movement */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-400 rounded-2xl opacity-60"
                style={{
                  y: prefersReducedMotion ? 0 : midgroundOffset,
                }}
              />

              {/* Foreground layer: fastest movement (brings detail closer) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-slate-400 to-slate-500 rounded-2xl opacity-40"
                style={{
                  y: prefersReducedMotion ? 0 : foregroundOffset,
                }}
              />

              {/* Center content: illustration placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-slate-50">
                  <p className="text-6xl mb-2">🎨</p>
                  <p className="text-sm font-medium">Illustration / Avatar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
