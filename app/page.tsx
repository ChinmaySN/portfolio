'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export default function Page() {
  return (
    <main className="w-full">
      {/* 1. Hero */}
      <Section
        id="hero"
        heading="Hello, I'm [Your Name]"
        headingLevel="h1"
        bgColor="bg-gradient-to-b from-slate-50 to-white"
      >
        <Container>
          <p className="text-lg text-slate-600 mb-4">
            Welcome to my portfolio. I build things on the web.
          </p>
          <p className="text-slate-500">Coming soon</p>
        </Container>
      </Section>

      {/* 2. Featured Projects */}
      <Section id="featured-projects" heading="Featured Projects" bgColor="bg-slate-50">
        <Container>
          <p className="text-slate-500">Coming soon</p>
        </Container>
      </Section>

      {/* 3. Process / How I Think */}
      <Section id="process" heading="Process / How I Think" bgColor="bg-white">
        <Container>
          <p className="text-slate-500">Coming soon</p>
        </Container>
      </Section>

      {/* 4. Skills */}
      <Section id="skills" heading="Skills" bgColor="bg-slate-50">
        <Container>
          <p className="text-slate-500">Coming soon</p>
        </Container>
      </Section>

      {/* 5. Exploring Right Now */}
      <Section id="exploring" heading="Exploring Right Now" bgColor="bg-white">
        <Container>
          <p className="text-slate-500">Coming soon</p>
        </Container>
      </Section>

      {/* 6. Education */}
      <Section id="education" heading="Education" bgColor="bg-slate-50">
        <Container>
          <p className="text-slate-500">Coming soon</p>
        </Container>
      </Section>

      {/* 7. Call to Action */}
      <Section id="call-to-action" heading="Let's Work Together" bgColor="bg-slate-900 text-white">
        <Container>
          <p className="text-slate-300">Coming soon</p>
        </Container>
      </Section>

      {/* 8. Contact / Links */}
      <Section id="contact" heading="Contact & Links" bgColor="bg-white">
        <Container>
          <p className="text-slate-500">Coming soon</p>
        </Container>
      </Section>

      {/* 9. Resume Download */}
      <Section id="resume" heading="Resume Download" bgColor="bg-slate-50">
        <Container>
          <p className="text-slate-500">Coming soon</p>
        </Container>
      </Section>
    </main>
  );
}
