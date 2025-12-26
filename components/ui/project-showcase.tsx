"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

/**
 * ProjectShowcase component using ContainerScroll animation
 * 
 * This creates an immersive 3D scroll animation that:
 * - Rotates and scales content as user scrolls
 * - Provides perspective depth effect
 * - Perfect for showcasing project screenshots or hero images
 * 
 * Props customization:
 * - titleComponent: Custom heading/title that moves with scroll
 * - children: Content inside the card (typically images or screenshots)
 */
export function ProjectShowcase() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">
              Experience My Work <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Through Interactive Design
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&h=720&fit=crop"
          alt="Project showcase - coding workspace"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
