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
    <div className="w-full bg-gradient-to-b from-dark-bg via-dark-bg-alt to-dark-bg">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-dark-text-muted font-medium tracking-wide">
              Always Learning
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-dark-text">
              Exploring Right Now
            </h2>
            <p className="text-4xl md:text-[6rem] font-bold leading-none bg-gradient-to-r from-dark-accent via-blue-400 to-dark-accent-hover bg-clip-text text-transparent">
              Current Focus
            </p>
            <p className="text-base md:text-lg text-dark-text-muted max-w-2xl mx-auto pt-4">
              Continuously expanding my knowledge across multiple domains
            </p>
          </div>
        }
      >
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800 rounded-2xl p-6 md:p-10 overflow-y-auto shadow-2xl shadow-dark-accent/10 border border-white/10">
          <div className="space-y-4 md:space-y-6">
            {exploring.map((item, index) => (
              <div
                key={item.label}
                className="bg-white/5 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/10 hover:border-dark-accent/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-dark-accent/20 group"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-dark-accent to-blue-500 flex items-center justify-center shadow-lg shadow-dark-accent/30 group-hover:shadow-dark-accent/50 transition-shadow">
                    <span className="text-white font-bold text-sm md:text-base">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2 group-hover:text-dark-accent-hover transition-colors">
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
