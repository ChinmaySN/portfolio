import React from 'react';

interface SnapSectionProps {
  /**
   * Child content to render inside the snap section.
   */
  children: React.ReactNode;

  /**
   * Optional ID for the section (useful for navigation).
   */
  id?: string;

  /**
   * Optional CSS class names for additional styling.
   */
  className?: string;

  /**
   * Disable snap behavior for this section (useful for scroll animations).
   * Default: false
   */
  disableSnap?: boolean;
}

/**
 * SnapSection - Individual section that snaps to viewport
 * 
 * Features:
 * - Exact viewport height (100vh) for clean, consistent snapping
 * - Snaps flush to top of viewport with no offset
 * - Flexbox wrapper ensures content fills section properly
 * - Prevents micro-scroll jitter and partial snaps
 * - Configurable snap behavior
 * - Works with existing Framer Motion components
 * 
 * Layout discipline:
 * - height: 100vh (not min-height) prevents overflow causing half-snaps
 * - Inner flex wrapper maintains vertical centering and content flow
 * - Position relative establishes context for absolute children
 * 
 * Usage:
 * Wrap each major section of your page with this component.
 * Set disableSnap={true} for sections with scroll-based animations.
 */
export function SnapSection({ 
  children, 
  id, 
  className = '',
  disableSnap = false 
}: SnapSectionProps) {
  const snapClass = disableSnap ? '' : 'snap-section';
  const style = disableSnap ? { scrollSnapAlign: 'none' as const } : undefined;
  
  return (
    <div 
      id={id} 
      className={`${snapClass} ${className}`}
      style={style}
    >
      <div className="w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
