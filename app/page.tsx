import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { ScrollSnap } from '@/components/layout/ScrollSnap';
import { SnapSection } from '@/components/layout/SnapSection';
import { Hero } from '@/components/hero/Hero';
import { ExploringSection } from '@/components/sections/exploring-section';
import { FeaturedProjectsFolders } from '@/components/sections/featured-projects-folders';
import { SocialIcons } from '@/components/ui/social-icons';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';
import { skillCategories } from "@/data/skills-timeline";
import { education } from '@/data/education';
import { certificates } from '@/data/certificates';

export default function Page() {
  return (
    <ScrollSnap className="w-full h-screen overflow-y-auto">
      {/*
        Scroll Snap container
        - Uses native CSS scroll snapping for a guided, premium feel
        - No JS listeners or wheel interception to preserve accessibility
        - Vertical snapping with smooth behavior; one section per viewport
      */}
      {/* 1. Hero */}
      <SnapSection>
        <Hero />
      </SnapSection>

      {/* 2. Featured Projects - 3D Folder Animation */}
      <SnapSection id="featured-projects">
        <FeaturedProjectsFolders />
      </SnapSection>

      {/* 3. Skills - Orbital Timeline */}
      <SnapSection id="skills">
        <RadialOrbitalTimeline categories={skillCategories} />
      </SnapSection>

      {/* 4. Exploring Right Now - Scroll Animation */}
      <div 
        id="exploring" 
        className="min-h-screen snap-start"
        style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
      >
        <ExploringSection />
      </div>

      {/* 5. Education */}
      <SnapSection>
        <Section id="education" heading="Education" bgColor="bg-theme-primary">
          <Container>
            {education.length > 0 ? (
              <ul className="space-y-6">
                {education.map(edu => (
                  <li
                    key={`${edu.institution}-${edu.year}`}
                    className="border-l-4 border-theme-accent pl-6"
                  >
                    <p className="text-sm text-theme-secondary font-medium">{edu.year}</p>
                    <h3 className="text-lg font-semibold text-theme-primary">{edu.degree}</h3>
                    <p className="text-theme-secondary">{edu.institution}</p>
                    {edu.field && <p className="text-theme-dim text-sm mt-1">Field: {edu.field}</p>}
                  </li>
                ))}
              </ul>
            ) : null}
          </Container>
        </Section>
      </SnapSection>

      {/* 6b. Certificates */}
      <SnapSection>
        <Section id="certificates" heading="Certificates" bgColor="bg-theme-secondary">
          <Container>
            {certificates.length > 0 ? (
              <ul className="space-y-4">
                {certificates.map(cert => (
                  <li
                    key={`${cert.issuer}-${cert.year}`}
                    className="bg-theme-tertiary p-4 rounded-lg border border-theme"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-theme-primary">{cert.title}</p>
                        <p className="text-theme-secondary text-sm">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-accent hover:bg-theme-accent text-sm font-medium underline ml-4 flex-shrink-0 transition-colors"
                      >
                        View
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}
          </Container>
        </Section>
      </SnapSection>

      {/* 7. Contact / Links */}
      <SnapSection>
        <Section id="contact" heading="Contact & Links" bgColor="bg-theme-primary">
          <Container>
            <div className="max-w-3xl mx-auto">
              {/* Simple intro */}
              <div className="text-center mb-12">
                <p className="text-lg text-theme-secondary mb-6">
                  Open to full-time roles and freelance projects in ML, trading systems, and full-stack development.
                </p>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-theme-secondary border border-theme text-theme-secondary text-sm rounded-full">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for opportunities
                </span>
              </div>

              {/* Email */}
              <div className="flex justify-center mb-8">
                <a 
                  href="mailto:csneelagiri2020@gmail.com" 
                  className="text-theme-primary hover:text-theme-accent transition-colors text-lg font-medium"
                >
                  csneelagiri2020@gmail.com
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center">
                <SocialIcons />
              </div>
            </div>
          </Container>
        </Section>
      </SnapSection>

      {/* 8. Resume Download */}
      <SnapSection>
        <Section id="resume" heading="Resume" bgColor="bg-theme-primary">
          <Container>
            <div className="flex flex-col items-center gap-6 py-8">
              <p className="text-theme-secondary text-center max-w-md">
                Download my resume to learn more about my experience, skills, and projects.
              </p>
              <a
                href="/resume-chinmay-sn.pdf"
                download="Chinmay_SN_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-theme-accent text-white font-medium rounded-lg shadow-theme-md hover:shadow-theme-lg hover:bg-theme-accent transition-all focus:ring-2 focus:ring-theme-accent focus:ring-offset-2"
                aria-label="Download Chinmay S N's resume as PDF"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </Container>
        </Section>
      </SnapSection>
    </ScrollSnap>
  );
}
