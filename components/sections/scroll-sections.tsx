"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

/**
 * ProcessSection - Demonstrates your work process with scroll animation
 * 
 * This replaces the "Coming soon" placeholder in the Process section.
 * Features:
 * - 3D scroll animation showcasing your workflow
 * - Responsive design
 * - Easy to customize content
 * 
 * To use: Import and add to your app/page.tsx
 */
export function ProcessSection() {
  return (
    <div className="w-full bg-white py-20">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              My Approach
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Research. Design. Build.
            </h2>
            <p className="text-4xl md:text-[6rem] font-bold leading-none bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              Iterate. Ship.
            </p>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto pt-4">
              Every project starts with understanding the problem deeply,
              then crafting solutions that are both beautiful and functional.
            </p>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1400&h=720&fit=crop&q=80"
          alt="Design process and workflow"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

/**
 * FeaturedProjectHero - Eye-catching intro to your projects section
 * 
 * Place this BEFORE your Featured Projects section for impact.
 * Creates a visual transition into your project showcase.
 */
export function FeaturedProjectHero() {
  return (
    <div className="w-full bg-slate-50">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-2">
              Building Solutions That Matter
            </h2>
            <p className="text-4xl md:text-[6rem] font-bold mt-2 leading-none text-slate-900">
              My Work
            </p>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=720&fit=crop&q=80"
          alt="Project dashboard showcase"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

/**
 * SkillsShowcase - Interactive display of your technical skills
 * 
 * Alternative to the traditional skills list.
 * Can be used instead of or alongside the existing skills section.
 */
export function SkillsShowcase() {
  return (
    <div className="w-full bg-white">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-4xl md:text-[5rem] font-bold leading-none text-slate-900">
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
              From pixels to databases, I build complete digital experiences
            </p>
          </>
        }
      >
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-2xl p-8 md:p-12 flex flex-col justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "React", level: "Expert" },
              { name: "TypeScript", level: "Expert" },
              { name: "Next.js", level: "Advanced" },
              { name: "Node.js", level: "Advanced" },
              { name: "Tailwind CSS", level: "Expert" },
              { name: "PostgreSQL", level: "Proficient" },
              { name: "AWS", level: "Proficient" },
              { name: "Docker", level: "Proficient" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/20 transition-colors"
              >
                <p className="text-white font-bold text-base md:text-lg mb-1">
                  {skill.name}
                </p>
                <p className="text-slate-300 text-xs md:text-sm">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

/**
 * CallToActionScroll - Engaging CTA section with animation
 * 
 * Replace the "Coming soon" CTA section with this component.
 * Encourages visitors to take action with visual appeal.
 */
export function CallToActionScroll() {
  return (
    <div className="w-full bg-slate-900">
      <ContainerScroll
        titleComponent={
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Let's Build Something
            </h2>
            <p className="text-5xl md:text-[7rem] font-bold leading-none bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Amazing
            </p>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a
                href="mailto:your.email@example.com"
                className="px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
              >
                View Resume
              </a>
            </div>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=720&fit=crop&q=80"
          alt="Team collaboration"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
