// ============================================
// COPY THIS CODE SNIPPET
// Add to the top of your app/page.tsx imports
// ============================================

import { 
  ProcessSection, 
  FeaturedProjectHero,
  SkillsShowcase,
  CallToActionScroll 
} from '@/components/sections/scroll-sections';

// ============================================
// THEN REPLACE YOUR SECTIONS WITH THESE
// ============================================

// ===== OPTION 1: Add Project Hero =====
// Place BEFORE "Featured Projects" section (around line 20)

<div className="snap-section">
  <FeaturedProjectHero />
</div>

// ===== OPTION 2: Replace Process Section =====
// Find line ~111 and replace existing Section with:

<div id="process" className="snap-section">
  <ProcessSection />
</div>

// ===== OPTION 3: Replace Skills Section =====
// Find line ~116 and replace existing Section with:

<div id="skills" className="snap-section">
  <SkillsShowcase />
</div>

// ===== OPTION 4: Replace Call to Action =====
// Find line ~218 and replace existing Section with:

<div id="call-to-action" className="snap-section">
  <CallToActionScroll />
</div>

// ============================================
// FULL PAGE EXAMPLE
// ============================================

export default function Page() {
  return (
    <main className="w-full snap-container h-screen overflow-y-auto">
      {/* 1. Hero */}
      <Hero />

      {/* 1.5 Projects Intro - NEW SCROLL ANIMATION! */}
      <div className="snap-section">
        <FeaturedProjectHero />
      </div>

      {/* 2. Featured Projects */}
      <Section id="featured-projects" heading="Featured Projects" bgColor="bg-slate-50" className="snap-section">
        <Container>
          {/* your existing projects code */}
        </Container>
      </Section>

      {/* 3. Process - NEW SCROLL ANIMATION! */}
      <div id="process" className="snap-section">
        <ProcessSection />
      </div>

      {/* 4. Skills - NEW SCROLL ANIMATION! */}
      <div id="skills" className="snap-section">
        <SkillsShowcase />
      </div>

      {/* 5. Exploring Right Now */}
      <Section id="exploring" heading="Exploring Right Now" bgColor="bg-white" className="snap-section">
        <Container>
          {/* existing code */}
        </Container>
      </Section>

      {/* 6. Education */}
      <Section id="education" heading="Education" bgColor="bg-slate-50" className="snap-section">
        <Container>
          {/* existing code */}
        </Container>
      </Section>

      {/* 6b. Certificates */}
      <Section id="certificates" heading="Certificates" bgColor="bg-white" className="snap-section">
        <Container>
          {/* existing code */}
        </Container>
      </Section>

      {/* 7. Call to Action - NEW SCROLL ANIMATION! */}
      <div id="call-to-action" className="snap-section">
        <CallToActionScroll />
      </div>

      {/* 8. Contact / Links */}
      <Section id="contact" heading="Contact & Links" bgColor="bg-white" className="snap-section">
        <Container>
          {/* existing code */}
        </Container>
      </Section>

      {/* 9. Resume Download */}
      <Section id="resume" heading="Resume Download" bgColor="bg-slate-50" className="snap-section">
        <Container>
          {/* existing code */}
        </Container>
      </Section>
    </main>
  );
}
