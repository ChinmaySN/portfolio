'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { GradientButton } from '@/components/ui/gradient-button';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { MagneticImage } from '@/components/ui/morphing-cursor';
import SkyToggle from '@/components/ui/sky-toggle';

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
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || (!savedTheme && true); // Default to dark
    setIsDarkMode(prefersDark);
    
    // Apply theme immediately on mount
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle theme toggle and save to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleThemeChange = (checked: boolean) => {
    setIsDarkMode(checked);
  };

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
      className="relative h-full py-20 md:py-24 px-4 bg-theme-primary flex items-center overflow-hidden"
    >
      {/* Theme Toggle - Responsive positioning */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[60]">
        <div className="opacity-70 hover:opacity-100 transition-opacity scale-90 sm:scale-100">
          <SkyToggle 
            checked={isDarkMode}
            onChange={handleThemeChange}
          />
        </div>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column: text content (static, no animation) */}
          <div className="space-y-6 max-w-full lg:max-w-2xl">
            <div className="space-y-2">
              <h1
                id="hero-heading"
                className="text-5xl md:text-6xl font-bold text-theme-primary leading-tight"
              >
                Chinmay S N
              </h1>
              {/* Copy focuses on reliable systems across data, trading, and web without buzzwords. */}
              <div className="overflow-x-auto">
                <TypewriterEffectSmooth
                  words={[
                    { text: 'I', className: '!text-theme-primary !font-semibold' },
                    { text: 'build', className: '!text-theme-primary !font-semibold' },
                    { text: 'the', className: '!text-theme-primary !font-semibold' },
                    { text: 'frontend', className: '!text-theme-primary !font-semibold' },
                    { text: 'you', className: '!text-theme-primary !font-semibold' },
                    { text: 'see', className: '!text-theme-primary !font-semibold' },
                    { text: 'and', className: '!text-theme-primary !font-semibold' },
                    { text: 'the', className: '!text-theme-primary !font-semibold' },
                    { text: 'backend', className: '!text-theme-primary !font-semibold' },
                    { text: 'you', className: '!text-theme-primary !font-semibold' },
                    { text: "don't.", className: '!text-theme-primary !font-semibold' },
                  ]}
                  className="!flex !space-x-0 !my-0 text-base sm:text-lg md:text-xl !pb-0 !text-theme-primary"
                  cursorClassName="bg-theme-accent !h-3 sm:!h-5 xl:!h-7"
                />
              </div>
            </div>

            {/* Description paragraph */}
            <p className="text-lg text-theme-secondary max-w-xl leading-relaxed">
              Full-stack developer building reliable web products from scratch.
              I work across UI, backend APIs, automation, and data-driven systems.
              My background spans web development, machine learning, and trading systems — all focused on clean, maintainable engineering.
            </p>

            {/* CTA buttons: Minimal gradient buttons with engineering-focused aesthetic */}
            <div className="pt-4 flex gap-4">
              <GradientButton
                variant="primary"
                onClick={() => {
                  document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Navigate to featured projects section"
              >
                View Projects
              </GradientButton>
              <GradientButton
                variant="secondary"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Navigate to contact section"
              >
                Contact
              </GradientButton>
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
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-theme-tertiary p-8">
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
    </section>
  );
};
