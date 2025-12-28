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
    "text-base font-medium text-white",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg",
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
          "bg-gradient-to-br from-slate-800 to-slate-900",
          "border border-slate-700/50",
          "shadow-sm hover:shadow-lg",
          "hover:-translate-y-0.5",
        ],
        // Secondary: Transparent with thin border, minimal fill on hover
        secondary: [
          "gradient-button-secondary",
          "bg-transparent",
          "border border-slate-700",
          "hover:bg-slate-900/30",
          "hover:border-slate-600",
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
