import React from 'react';

interface ScrollSnapProps {
  /**
   * Child sections to render inside the scroll container.
   */
  children: React.ReactNode;

  /**
   * Optional CSS class names for additional styling.
   */
  className?: string;
}

/**
 * ScrollSnap - Full viewport scroll container with native CSS snap behavior
 * 
 * Features:
 * - Full viewport height with vertical scrolling
 * - Native CSS scroll snapping (y mandatory for deliberate, locked feel)
 * - Smooth scroll behavior with momentum
 * - Exact 100vh sections prevent partial snaps and jitter
 * - Preserves accessibility (no JS wheel interception)
 * - Works with Framer Motion animations
 * 
 * Scroll feel improvements:
 * - mandatory snap type ensures sections lock cleanly
 * - scroll-padding-top: 0 keeps sections flush to viewport top
 * - Flexbox layout prevents content overflow causing half-settled states
 * - iOS momentum scrolling for smooth mobile experience
 * 
 * Usage:
 * Wrap your entire page content inside this component.
 * Each child section should use <SnapSection> for proper snapping.
 */
export function ScrollSnap({ children, className = '' }: ScrollSnapProps) {
  return (
    <main id="main-content" className={`snap-container ${className}`}>
      {children}
    </main>
  );
}
