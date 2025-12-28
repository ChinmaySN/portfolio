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
      className={`h-full flex flex-col justify-center px-4 ${bgColor} ${className}`}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 md:gap-10 lg:gap-12 py-16 md:py-20 lg:py-24">
        {/*
          Visual affordances (no animation):
          - Full height sections with centered content for clean snapping
          - Soft accent bar anchors the heading without harsh borders
          - Consistent vertical padding prevents cramped or floating content
        */}
        <span
          aria-hidden="true"
          className="block h-1 w-12 rounded-full bg-slate-900/15 dark:bg-white/30"
        />
        <HeadingTag
          id={`${id}-heading`}
          className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-[inherit]"
        >
          {heading}
        </HeadingTag>
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          {children}
        </div>
      </div>
    </section>
  );
};
