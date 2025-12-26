"use client";

import React from "react";
import { AnimatedFolder } from "@/components/ui/3d-folder";
import { projects } from "@/data/projects";

/**
 * FeaturedProjectsFolders - Interactive 3D folder showcasing projects
 * 
 * Features:
 * - 3D animated folders that open on hover
 * - Project cards fly out when folder is hovered
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
  
  // Fallback to curated Unsplash images based on project type
  const imageMap: Record<string, string> = {
    'breast-cancer-webapp': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&q=80',
    'insurance-site': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&q=80',
    'algo-trading-proof': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&q=80',
    'aarambh-gann': 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop&q=80',
  };

  return imageMap[project.id] || `https://images.unsplash.com/photo-${1460925895917 + index * 100}?w=400&h=300&fit=crop&q=80`;
};

export function FeaturedProjectsFolders() {
  // Transform projects data to match AnimatedFolder format
  const folderProjects = projects.slice(0, 3).map((project, index) => ({
    id: project.id,
    image: getProjectImage(project, index),
    title: project.title,
  }));

  return (
    <div className="w-full bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hover over the folder to explore projects. Click on a card to view details.
          </p>
        </div>

        {/* 3D Folder */}
        <div className="flex items-center justify-center">
          <AnimatedFolder
            title="Recent Work"
            projects={folderProjects}
            className="w-full max-w-md"
          />
        </div>

        {/* Project Details Below (Optional) */}
        <div className="mt-20 space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 md:p-8 space-y-4 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:bg-slate-50"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-slate-900 leading-tight">
                  {project.title}
                </h3>
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid gap-4 text-slate-700">
                <div>
                  <p className="text-sm font-semibold text-slate-800">Problem</p>
                  <p className="text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Approach</p>
                  <p className="text-sm leading-relaxed">{project.approach}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Outcome</p>
                  <p className="text-sm leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              {(project.link || project.proofImages?.length) && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-slate-800">Proof</p>
                  <div className="flex flex-col gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-slate-900 underline decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                      >
                        View Project
                      </a>
                    )}

                    {project.proofImages?.length ? (
                      <div className="flex flex-wrap gap-3">
                        {project.proofImages.map((src, idx) => (
                          <div
                            key={src}
                            className="w-28 h-20 rounded-lg overflow-hidden border border-slate-200 bg-slate-50"
                          >
                            <img
                              src={src}
                              alt={`${project.title} proof ${idx + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
