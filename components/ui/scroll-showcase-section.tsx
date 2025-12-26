"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

interface ScrollShowcaseSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
}

/**
 * ScrollShowcaseSection - A reusable section component with ContainerScroll animation
 * 
 * Features:
 * - 3D perspective scroll effect
 * - Responsive design (mobile & desktop optimized)
 * - Customizable title and imagery
 * - Smooth rotation and scale transforms
 * 
 * Use Cases:
 * - Project highlights
 * - Feature demonstrations
 * - Portfolio pieces
 * - Product showcases
 * 
 * The component needs substantial vertical space (60rem on mobile, 80rem on desktop)
 * to allow the full scroll animation to play out smoothly.
 */
export function ScrollShowcaseSection({
  title,
  subtitle,
  imageUrl,
  imageAlt,
}: ScrollShowcaseSectionProps) {
  return (
    <div className="w-full bg-white dark:bg-slate-950">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4">
              {title}
            </h2>
            <p className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-slate-900 dark:text-white">
              {subtitle}
            </p>
          </div>
        }
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
