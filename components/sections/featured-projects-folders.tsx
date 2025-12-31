"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatedFolder } from "@/components/ui/3d-folder";
import { projects } from "@/data/projects";

/**
 * FeaturedProjectsFolders - Interactive 3D folder showcasing projects
 * 
 * Features:
 * - Projects reveal on scroll when section comes into view
 * - Smooth animation with folder at the bottom
 * - Lightbox view for detailed project viewing
 * - Groups projects by category
 * 
 * Note: Uses first 3 projects per folder for optimal visual presentation
 */

// Helper to get project image (using Unsplash as fallback)
const getProjectImage = (project: typeof projects[0], index: number): string => {
  // Use proof images if available
  if (project.proofImages && project.proofImages.length > 0 && project.proofImages[0]) {
    return project.proofImages[0];
  }
  
  // Fallback to placeholder
  return `https://images.unsplash.com/photo-${1460925895917 + index * 100}?w=400&h=300&fit=crop&q=80`;
};

export function FeaturedProjectsFolders() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Transform projects data to match AnimatedFolder format
  const folderProjects = projects.slice(0, 3).map((project, index) => ({
    id: project.id,
    image: getProjectImage(project, index),
    title: project.title,
    link: project.link,
    outcome: project.outcome,
    approach: project.approach,
    problem: project.problem,
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Reveal when entering viewport, hide when leaving
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      aria-labelledby="featured-projects-heading" 
      className="w-full bg-theme-primary pt-16 pb-8 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="featured-projects-heading" className="text-4xl md:text-5xl font-bold text-theme-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-theme-secondary max-w-2xl mx-auto">
            Scroll to reveal projects. Hover to see details. Click to view full showcase.
          </p>
        </div>

        {/* 3D Folder */}
        <div className="flex items-center justify-center mt-24" role="region" aria-label="Interactive project showcase">
          <AnimatedFolder
            title="Recent Work"
            projects={folderProjects}
            className="w-full max-w-5xl"
            isRevealed={isVisible}
          />
        </div>
      </div>
    </section>
  );
}
