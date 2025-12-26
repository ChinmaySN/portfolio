import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Hero } from '@/components/hero/Hero';
import { ExploringSection } from '@/components/sections/exploring-section';
import { FeaturedProjectsFolders } from '@/components/sections/featured-projects-folders';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { exploring } from '@/data/exploring';
import { education } from '@/data/education';
import { certificates } from '@/data/certificates';

export default function Page() {
  return (
    <main className="w-full snap-container h-screen overflow-y-auto">
      {/*
        Scroll Snap container
        - Uses native CSS scroll snapping for a guided, premium feel
        - No JS listeners or wheel interception to preserve accessibility
        - Vertical snapping with smooth behavior; one section per viewport
      */}
      {/* 1. Hero */}
      <Hero />

      {/* 2. Featured Projects - 3D Folder Animation */}
      <div id="featured-projects" className="snap-section">
        <FeaturedProjectsFolders />
      </div>

      {/* 3. Process / How I Think */}
      <Section id="process" heading="Process / How I Think" bgColor="bg-white" className="snap-section">
        <Container>
          <p className="text-slate-500">Coming soon</p>
        </Container>
      </Section>

      {/* 4. Skills */}
      <Section id="skills" heading="Skills" bgColor="bg-slate-50" className="snap-section">
        <Container>
          {skills.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map(skillGroup => (
                <div key={skillGroup.category}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map(item => (
                      <li key={item.name} className="flex items-center gap-2">
                        <span
                          className={`inline-block h-2 w-2 rounded-full ${
                            item.proficiency === 'expert'
                              ? 'bg-slate-900'
                              : item.proficiency === 'proficient'
                                ? 'bg-slate-600'
                                : 'bg-slate-400'
                          }`}
                        />
                        <span className="text-slate-700">{item.name}</span>
                        <span className="text-xs text-slate-500 ml-auto">{item.proficiency}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </Container>
      </Section>

      {/* 5. Exploring Right Now - Scroll Animation */}
      <div id="exploring" className="snap-section">
        <ExploringSection />
      </div>

      {/* 6. Education */}
      <Section id="education" heading="Education" bgColor="bg-slate-50" className="snap-section">
        <Container>
          {education.length > 0 ? (
            <ul className="space-y-6">
              {education.map(edu => (
                <li
                  key={`${edu.institution}-${edu.year}`}
                  className="border-l-4 border-slate-300 pl-6"
                >
                  <p className="text-sm text-slate-500 font-medium">{edu.year}</p>
                  <h3 className="text-lg font-semibold text-slate-900">{edu.degree}</h3>
                  <p className="text-slate-600">{edu.institution}</p>
                  {edu.field && <p className="text-slate-500 text-sm mt-1">Field: {edu.field}</p>}
                </li>
              ))}
            </ul>
          ) : null}
        </Container>
      </Section>

      {/* 6b. Certificates */}
      <Section id="certificates" heading="Certificates" bgColor="bg-white" className="snap-section">
        <Container>
          {certificates.length > 0 ? (
            <ul className="space-y-4">
              {certificates.map(cert => (
                <li
                  key={`${cert.issuer}-${cert.year}`}
                  className="bg-slate-50 p-4 rounded-lg border border-slate-200"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{cert.title}</p>
                      <p className="text-slate-600 text-sm">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-900 text-sm font-medium underline ml-4 flex-shrink-0"
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

      {/* 7. Call to Action */}
      <Section id="call-to-action" heading="Let's Work Together" bgColor="bg-slate-900 text-white" className="snap-section">
        <Container>
          <p className="text-slate-300">Coming soon</p>
        </Container>
      </Section>

      {/* 8. Contact / Links */}
      <Section id="contact" heading="Contact & Links" bgColor="bg-white" className="snap-section">
        <Container>
          <p className="text-slate-500">Coming soon</p>
        </Container>
      </Section>

      {/* 9. Resume Download */}
      <Section id="resume" heading="Resume Download" bgColor="bg-slate-50" className="snap-section">
        <Container>
          <p className="text-slate-500">Coming soon</p>
        </Container>
      </Section>
    </main>
  );
}
