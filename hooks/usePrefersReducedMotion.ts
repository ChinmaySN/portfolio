/**
 * Hook to detect user's motion preference.
 *
 * Returns `true` if the user prefers reduced motion (respects `prefers-reduced-motion` media query).
 * This is critical for accessibility — some users experience motion sickness or discomfort.
 *
 * Usage:
 * - Guard all animations behind this check
 * - If true, skip animation or use instant transitions
 * - Respect this preference even if animations are configured
 *
 * Example:
 * ```tsx
 * const prefersReducedMotion = usePrefersReducedMotion();
 * const duration = prefersReducedMotion ? 0 : 0.5;
 * <motion.div animate={{ opacity: 1 }} transition={{ duration }} />
 * ```
 *
 * Safe for App Router:
 * - Uses `useEffect` to avoid hydration mismatch
 * - Returns `false` initially (server), updates after mount (client)
 * - No dependency on window or document during render
 */

import { useEffect, useState } from 'react';

export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if the user's system preference is for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes (in case user changes their preference while on the site)
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};
