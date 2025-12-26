"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { exploring } from "@/data/exploring";

/**
 * ExploringSection - Showcase what you're currently learning with scroll animation
 * 
 * Features:
 * - 3D scroll animation
 * - Displays all exploring items from your data
 * - Dark gradient background with cards
 * - Mobile responsive
 */
export function ExploringSection() {
  return (
    <div className="w-full bg-slate-50">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Always Learning
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Exploring Right Now
            </h2>
            <p className="text-4xl md:text-[6rem] font-bold leading-none bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              Current Focus
            </p>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto pt-4">
              Continuously expanding my knowledge across multiple domains
            </p>
          </div>
        }
      >
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-2xl p-6 md:p-10 overflow-y-auto">
          <div className="space-y-4 md:space-y-6">
            {exploring.map((item, index) => (
              <div
                key={item.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-base">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2">
                      {item.label}
                    </h3>
                    {item.description && (
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
