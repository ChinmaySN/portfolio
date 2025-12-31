"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Gradient Button Component
 * 
 * Designed for minimal, engineering-focused portfolios.
 * Uses CSS custom properties for performance and composability.
 * 
 * Design principles:
 * - Deep neutrals (near-black, slate, muted blue)
 * - Subtle gradients with single-hue shifts
 * - Soft glow effects, never harsh or neon
 * - Calculated motion (200-300ms, ease-out)
 * - Should never outshine content
 */

const gradientButtonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2",
    "px-6 py-3 rounded-lg",
    "text-base font-medium",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    // Respects reduced motion preferences
    "motion-reduce:transition-none",
  ],
  {
    variants: {
      variant: {
        // Primary: Dark matte base with soft inner glow on hover
        primary: [
          "gradient-button-primary",
          "text-theme-primary",
          "border border-theme",
          "shadow-theme-sm hover:shadow-theme-md",
          "hover:-translate-y-0.5",
        ],
        // Secondary: Transparent with thin border, minimal fill on hover
        secondary: [
          "gradient-button-secondary",
          "text-theme-primary",
          "bg-transparent",
          "border border-theme",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }
