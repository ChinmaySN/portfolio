/**
 * Hook to track scroll progress as a value from 0 to 1.
 *
 * Calculates: (current scroll position) / (max scrollable distance)
 * Returns 0 at top of page, 1 when scrolled to bottom.
 *
 * Usage:
 * - Drive animations based on user scroll position
 * - Create parallax effects, progress bars, fade-in on scroll
 * - Pair with `usePrefersReducedMotion` to respect motion preferences
 *
 * Example:
 * ```tsx
 * const scrollProgress = useScrollProgress();
 * <motion.div
 *   style={{ opacity: scrollProgress }}
 * />
 * ```
 *
 * Safe for App Router:
 * - Uses `useEffect` to attach scroll listener only after mount
 * - Returns 0 initially (server-side), updates on client scroll
 * - Listener is cleaned up on unmount
 * - Throttled via requestAnimationFrame for performance
 */

import { useEffect, useState } from 'react';

export const useScrollProgress = (): number => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate total scrollable distance
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight === 0) {
        // Page is shorter than viewport, no scrolling possible
        setScrollProgress(0);
        return;
      }

      // Calculate progress: current scroll / max scroll
      const currentScroll = window.scrollY;
      const progress = Math.min(currentScroll / scrollHeight, 1);

      setScrollProgress(progress);
    };

    // Use requestAnimationFrame for smooth, performant updates
    let animationFrameId: number;

    const throttledScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);

    // Initial call to set correct value
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return scrollProgress;
};
