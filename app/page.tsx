import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { ScrollSnap } from '@/components/layout/ScrollSnap';
import { SnapSection } from '@/components/layout/SnapSection';
import { Hero } from '@/components/hero/Hero';
import { ExploringSection } from '@/components/sections/exploring-section';
import { FeaturedProjectsFolders } from '@/components/sections/featured-projects-folders';
import { WorkTogetherCTA } from '@/components/sections/work-together-cta';
import { SocialIcons } from '@/components/ui/social-icons';
import { skills } from '@/data/skills';
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

      {/* 3. Skills */}
      <SnapSection>
        <Section id="skills" heading="Skills" bgColor="bg-dark-bg-alt">
          <Container>
            {skills.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                {skills.map(skillGroup => (
                  <div key={skillGroup.category} className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-dark-text">
                        {skillGroup.category}
                      </h3>
                      {skillGroup.description && (
                        <p className="text-xs text-dark-text-muted leading-relaxed">
                          {skillGroup.description}
                        </p>
                      )}
                    </div>
                    <ul className="space-y-2.5">
                      {skillGroup.items.map(item => (
                        <li key={item.name} className="flex items-start gap-2.5">
                          <span
                            className={`inline-block h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                              item.proficiency === 'expert'
                                ? 'bg-dark-accent'
                                : item.proficiency === 'proficient'
                                  ? 'bg-dark-text-muted'
                                  : 'bg-dark-text-dim'
                            }`}
                            aria-label={item.proficiency}
                          />
                          <span className="text-dark-text-muted text-sm leading-relaxed">
                            {item.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
          </Container>
        </Section>
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
        <Section id="education" heading="Education" bgColor="bg-dark-bg">
          <Container>
            {education.length > 0 ? (
              <ul className="space-y-6">
                {education.map(edu => (
                  <li
                    key={`${edu.institution}-${edu.year}`}
                    className="border-l-4 border-dark-accent pl-6"
                  >
                    <p className="text-sm text-dark-text-muted font-medium">{edu.year}</p>
                    <h3 className="text-lg font-semibold text-dark-text">{edu.degree}</h3>
                    <p className="text-dark-text-muted">{edu.institution}</p>
                    {edu.field && <p className="text-dark-text-dim text-sm mt-1">Field: {edu.field}</p>}
                  </li>
                ))}
              </ul>
            ) : null}
          </Container>
        </Section>
      </SnapSection>

      {/* 6b. Certificates */}
      <SnapSection>
        <Section id="certificates" heading="Certificates" bgColor="bg-dark-bg-alt">
          <Container>
            {certificates.length > 0 ? (
              <ul className="space-y-4">
                {certificates.map(cert => (
                  <li
                    key={`${cert.issuer}-${cert.year}`}
                    className="bg-dark-bg-lighter p-4 rounded-lg border border-dark-border"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-dark-text">{cert.title}</p>
                        <p className="text-dark-text-muted text-sm">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-accent hover:text-dark-accent-hover text-sm font-medium underline ml-4 flex-shrink-0"
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

      {/* 7. Call to Action */}
      <SnapSection>
        <Section id="call-to-action" heading="Let's Work Together" bgColor="bg-dark-bg text-dark-text">
          <Container>
            <WorkTogetherCTA />
          </Container>
        </Section>
      </SnapSection>

      {/* 8. Contact / Links */}
      <SnapSection>
        <Section id="contact" heading="Contact & Links" bgColor="bg-dark-bg-alt">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-lg text-dark-text-muted max-w-2xl mx-auto leading-relaxed">
                  Connect with me through any of these platforms. I'm always open to discussing new projects, opportunities, or collaborations.
                </p>
              </div>

              <div className="flex justify-center mb-12">
                <SocialIcons />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-dark-bg-lighter border border-dark-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-dark-accent text-white p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-dark-text mb-1">Email</h3>
                      <a href="mailto:csneelagiri2020@gmail.com" className="text-dark-text-muted hover:text-dark-accent transition-colors break-all">
                        csneelagiri2020@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-bg-lighter border border-dark-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-dark-accent text-white p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-dark-text mb-1">Phone</h3>
                      <a href="tel:+919686517442" className="text-dark-text-muted hover:text-dark-accent transition-colors">
                        +91 96865 17442
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-bg-lighter text-dark-text rounded-xl p-8 text-center border border-dark-border">
                <h3 className="text-xl font-semibold mb-3">Let's Build Something Great</h3>
                <p className="text-dark-text-muted max-w-xl mx-auto">
                  Whether it's a new project, collaboration opportunity, or just a tech discussion, I'm always excited to connect with fellow builders and innovators.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </SnapSection>

      {/* 9. Resume Download */}
      <SnapSection>
        <Section id="resume" heading="Resume" bgColor="bg-dark-bg">
          <Container>
            <div className="flex flex-col items-center gap-6 py-8">
              <p className="text-dark-text-muted text-center max-w-md">
                Download my resume to learn more about my experience, skills, and projects.
              </p>
              <a
                href="/resume-chinmay-sn.pdf"
                download="Chinmay_SN_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-dark-accent text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-dark-accent-hover transition-all focus:ring-2 focus:ring-dark-accent focus:ring-offset-2"
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
