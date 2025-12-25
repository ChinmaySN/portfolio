'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { ParticleButton } from '@/components/ui/particle-button';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { MagneticImage } from '@/components/ui/morphing-cursor';

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
      className="relative snap-section min-h-[90vh] lg:min-h-screen py-20 md:py-24 px-4 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200"
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
              {/* Copy focuses on reliable systems across data, trading, and web without buzzwords. */}
              <TypewriterEffectSmooth
                words={[
                  { text: 'Engineering', className: '!text-slate-900 !font-semibold' },
                  { text: 'reliable', className: '!text-slate-900 !font-semibold' },
                  { text: 'systems', className: '!text-slate-900 !font-semibold' },
                  { text: 'across', className: '!text-slate-900 !font-semibold' },
                  { text: 'data,', className: '!text-slate-900 !font-semibold' },
                  { text: 'trading,', className: '!text-slate-900 !font-semibold' },
                  { text: 'and', className: '!text-slate-900 !font-semibold' },
                  { text: 'the', className: '!text-slate-900 !font-semibold' },
                  { text: 'web.', className: '!text-slate-900 !font-semibold' },
                ]}
                className="!flex !space-x-0 !my-0 text-base sm:text-lg md:text-lg !pb-0 !text-slate-900"
                cursorClassName="bg-slate-900 !h-3 sm:!h-5 xl:!h-8"
              />
            </div>

            {/* Description paragraph */}
            <p className="text-lg text-slate-600 max-w-md">
              I work on machine learning, trading systems, and full-stack web products.
              My approach is structured, data-first, and aimed at shipping dependable, maintainable results.
            </p>

            {/* CTA buttons: ParticleButton components with click animation effects */}
            <div className="pt-4 flex gap-4">
              <ParticleButton
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' });
                  }, 1000);
                }}
                className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-slate-800 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                successDuration={800}
              >
                View Projects
              </ParticleButton>
              <ParticleButton
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 1000);
                }}
                variant="outline"
                className="px-6 py-3 border border-slate-300 text-slate-900 font-medium rounded-lg shadow-sm hover:shadow-md hover:bg-slate-50 hover:border-slate-400 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                successDuration={800}
              >
                Contact
              </ParticleButton>
            </div>
          </div>

          {/* Right column: photo with magnetic morphing cursor effect */}
          <div className="flex items-center justify-center">
            {/*
              Photo + magnetic cursor effect:
              - Base layer: myphoto.jpg visible by default
              - Hover: circular mask follows cursor revealing matrix.png
              - Smooth animation via RAF for buttery 60fps tracking
              - Desktop only, respects pointer capabilities
            */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 p-8">
              <MagneticImage
                baseImage="/certificates/illustration/myphoto.jpg"
                hoverImage="/certificates/illustration/matrix.jpeg"
                alt="Chinmay S N - Software Engineer"
                circleSize={250}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative scroll affordance: minimal, static indicator to hint more content below without motion. */}
      <ScrollIndicator />

      {/* Subtle easter egg: low-contrast diamond that gently brightens on hover; decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-auto absolute bottom-10 right-10 h-3 w-3 rotate-45 bg-slate-300/50 border border-slate-400/50 shadow-sm transition-all duration-500 ease-out hover:opacity-80 hover:-translate-y-0.5"
      />
    </section>
  );
};
