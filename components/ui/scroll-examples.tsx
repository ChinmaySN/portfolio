"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ScrollShowcaseSection } from "@/components/ui/scroll-showcase-section";
import Image from "next/image";

/**
 * EXAMPLES: How to use ContainerScroll in your portfolio
 * 
 * This file demonstrates multiple ways to integrate the scroll animation.
 * Copy any of these examples into your app/page.tsx
 */

// ============================================
// EXAMPLE 1: Hero Section with Scroll Animation
// ============================================
export function HeroWithScroll() {
  return (
    <section className="w-full bg-slate-50">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Hi, I'm [Your Name]
            </h1>
            <p className="text-xl md:text-3xl text-slate-600">
              Full-Stack Developer & Designer
            </p>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=720&fit=crop"
          alt="Developer workspace"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}

// ============================================
// EXAMPLE 2: Project Showcase Section
// ============================================
export function ProjectShowcaseExample() {
  return (
    <section className="w-full bg-white">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-900">
              Featured Project
            </h2>
            <p className="text-4xl md:text-[6rem] font-bold mt-2 leading-none bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              E-Commerce Platform
            </p>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=720&fit=crop"
          alt="E-commerce dashboard analytics"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}

// ============================================
// EXAMPLE 3: Skills Section with Animation
// ============================================
export function SkillsShowcaseExample() {
  return (
    <section className="w-full bg-slate-50">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-4xl md:text-[5rem] font-bold leading-none text-slate-900">
              Modern Stack
            </p>
          </>
        }
      >
        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "PostgreSQL",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center"
              >
                <p className="text-white font-semibold text-lg md:text-xl">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}

// ============================================
// EXAMPLE 4: Multiple Showcase Sections
// ============================================
export function MultipleProjectShowcase() {
  const projects = [
    {
      title: "Project One",
      subtitle: "Mobile App",
      imageUrl:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=720&fit=crop",
      imageAlt: "Mobile app interface",
    },
    {
      title: "Project Two",
      subtitle: "Web Platform",
      imageUrl:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&h=720&fit=crop",
      imageAlt: "Web platform dashboard",
    },
    {
      title: "Project Three",
      subtitle: "Design System",
      imageUrl:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1400&h=720&fit=crop",
      imageAlt: "Design system components",
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <ScrollShowcaseSection
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          imageUrl={project.imageUrl}
          imageAlt={project.imageAlt}
        />
      ))}
    </>
  );
}

// ============================================
// EXAMPLE 5: About Section with Personal Touch
// ============================================
export function AboutWithScroll() {
  return (
    <section className="w-full bg-white">
      <ContainerScroll
        titleComponent={
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-4">
              About Me
            </h2>
            <p className="text-4xl md:text-[5rem] font-bold leading-none text-slate-900">
              Crafting Digital Experiences
            </p>
            <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
              Passionate about building intuitive and performant web applications
            </p>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=720&fit=crop"
          alt="Team collaboration"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
