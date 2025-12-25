import React from 'react';

interface SectionProps {
  /**
   * Unique ID for the section (used for aria-labelledby linking).
   */
  id: string;

  /**
   * Heading text to display (uses h2 by default for semantic hierarchy).
   */
  heading: string;

  /**
   * Heading level (h1, h2, h3, etc.). Defaults to 'h2'.
   */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /**
   * Optional CSS class names for additional styling.
   */
  className?: string;

  /**
   * Optional background color class (e.g., 'bg-slate-50', 'bg-blue-50').
   */
  bgColor?: string;

  /**
   * Child content to render inside the section.
   */
  children?: React.ReactNode;
}

/**
 * Section component for semantic, accessible page sections.
 *
 * Why semantic HTML?
 * - `<section>` is a landmark element that helps screen readers navigate
 * - Each section has an aria-labelledby that links to its heading
 * - Proper heading hierarchy (h1→h2→h3) improves SEO and accessibility
 *
 * Why this structure?
 * - Reusable: consistent structure across all sections
 * - Flexible: headingLevel prop allows varying semantic hierarchy
 * - Accessible: aria-labelledby ensures heading is announced with section
 * - Future-ready: easy to add animations or data attributes later
 */
export const Section: React.FC<SectionProps> = ({
  id,
  heading,
  headingLevel = 'h2',
  className = '',
  bgColor = 'bg-white',
  children,
}) => {
  const HeadingTag = headingLevel;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`py-16 px-4 border-b border-slate-200 ${bgColor} ${className}`}
    >
      <HeadingTag id={`${id}-heading`} className="text-3xl font-bold text-slate-900 mb-4">
        {heading}
      </HeadingTag>
      {children}
    </section>
  );
};
