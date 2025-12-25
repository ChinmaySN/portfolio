import React from 'react';

interface ContainerProps {
  /**
   * Optional CSS class names for additional styling.
   */
  className?: string;

  /**
   * Child content to render inside the container.
   */
  children?: React.ReactNode;
}

/**
 * Container component for consistent width and padding.
 *
 * Why use a Container?
 * - Controls max-width so content doesn't stretch too wide on large screens
 * - Centers content horizontally for consistent layout
 * - Simplifies responsive padding across the app
 *
 * Future: Can be extended to support different sizes (sm, md, lg) via props.
 */
export const Container: React.FC<ContainerProps> = ({ className = '', children }) => {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>
      {children}
    </div>
  );
};
