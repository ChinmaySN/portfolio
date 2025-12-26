# Quick Integration - Add to app/page.tsx

## Step 1: Import the components at the top of your file

Add this after your existing imports in [app/page.tsx](../app/page.tsx):

\`\`\`tsx
import { 
  ProcessSection, 
  FeaturedProjectHero,
  SkillsShowcase,
  CallToActionScroll 
} from '@/components/sections/scroll-sections';
\`\`\`

---

## Step 2: Replace Sections (Choose what you want)

### Option A: Replace Process Section (Line ~111)

**BEFORE:**
\`\`\`tsx
{/* 3. Process / How I Think */}
<Section id="process" heading="Process / How I Think" bgColor="bg-white" className="snap-section">
  <Container>
    <p className="text-slate-500">Coming soon</p>
  </Container>
</Section>
\`\`\`

**AFTER:**
\`\`\`tsx
{/* 3. Process / How I Think */}
<div id="process" className="snap-section">
  <ProcessSection />
</div>
\`\`\`

---

### Option B: Add Hero Before Featured Projects (Line ~20)

**Add this NEW section between Hero and Featured Projects:**

\`\`\`tsx
{/* 1. Hero */}
<Hero />

{/* 1.5 Featured Project Hero - NEW! */}
<div className="snap-section">
  <FeaturedProjectHero />
</div>

{/* 2. Featured Projects */}
<Section id="featured-projects" heading="Featured Projects" bgColor="bg-slate-50" className="snap-section">
  {/* existing project code */}
</Section>
\`\`\`

---

### Option C: Replace CTA Section (Line ~218)

**BEFORE:**
\`\`\`tsx
{/* 7. Call to Action */}
<Section id="call-to-action" heading="Let's Work Together" bgColor="bg-slate-900 text-white" className="snap-section">
  <Container>
    <p className="text-slate-300">Coming soon</p>
  </Container>
</Section>
\`\`\`

**AFTER:**
\`\`\`tsx
{/* 7. Call to Action */}
<div id="call-to-action" className="snap-section">
  <CallToActionScroll />
</div>
\`\`\`

⚠️ **Don't forget to update your email in CallToActionScroll component!**

---

### Option D: Replace Skills with Animated Version (Line ~116)

**BEFORE:**
\`\`\`tsx
{/* 4. Skills */}
<Section id="skills" heading="Skills" bgColor="bg-slate-50" className="snap-section">
  <Container>
    {/* existing skills grid */}
  </Container>
</Section>
\`\`\`

**AFTER:**
\`\`\`tsx
{/* 4. Skills */}
<div id="skills" className="snap-section">
  <SkillsShowcase />
</div>
\`\`\`

---

## Step 3: Test it!

Run your dev server and scroll to see the animations:

\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000 and scroll through your portfolio!

---

## Full Example Integration

Here's a complete example of what your page structure could look like:

\`\`\`tsx
// app/page.tsx
import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Hero } from '@/components/hero/Hero';
import { 
  ProcessSection, 
  FeaturedProjectHero,
  SkillsShowcase,
  CallToActionScroll 
} from '@/components/sections/scroll-sections';
import { projects } from '@/data/projects';
// ... other imports

export default function Page() {
  return (
    <main className="w-full snap-container h-screen overflow-y-auto">
      {/* 1. Hero */}
      <Hero />

      {/* 1.5 Projects Intro with Scroll Animation - NEW! */}
      <div className="snap-section">
        <FeaturedProjectHero />
      </div>

      {/* 2. Featured Projects */}
      <Section id="featured-projects" heading="Featured Projects" bgColor="bg-slate-50" className="snap-section">
        <Container>
          {/* your existing projects code */}
        </Container>
      </Section>

      {/* 3. Process - NOW WITH ANIMATION! */}
      <div id="process" className="snap-section">
        <ProcessSection />
      </div>

      {/* 4. Skills - NOW WITH ANIMATION! */}
      <div id="skills" className="snap-section">
        <SkillsShowcase />
      </div>

      {/* 5-6. Keep your existing sections */}
      <Section id="exploring" heading="Exploring Right Now" bgColor="bg-white" className="snap-section">
        {/* existing code */}
      </Section>

      <Section id="education" heading="Education" bgColor="bg-slate-50" className="snap-section">
        {/* existing code */}
      </Section>

      <Section id="certificates" heading="Certificates" bgColor="bg-white" className="snap-section">
        {/* existing code */}
      </Section>

      {/* 7. Call to Action - NOW WITH ANIMATION! */}
      <div id="call-to-action" className="snap-section">
        <CallToActionScroll />
      </div>

      {/* 8-9. Keep remaining sections */}
      <Section id="contact" heading="Contact & Links" bgColor="bg-white" className="snap-section">
        {/* existing code */}
      </Section>

      <Section id="resume" heading="Resume Download" bgColor="bg-slate-50" className="snap-section">
        {/* existing code */}
      </Section>
    </main>
  );
}
\`\`\`

---

## Troubleshooting

### Scroll snap not working smoothly?
The ContainerScroll needs a lot of height (60-80rem). If scroll snap feels off:

1. **Remove snap from animated sections:**
   Change \`className="snap-section"\` to \`className=""\` for sections with scroll animations

2. **Or adjust snap in globals.css:**
   Change \`scroll-snap-type: y mandatory;\` to \`scroll-snap-type: y proximity;\`

### Images not loading?
Make sure you've updated [next.config.js](../next.config.js) (already done!) to allow external images.

### Want to customize?
- Edit titles and text directly in the component
- Change images to your own (place in /public folder)
- Adjust colors in the component styling
- See [SCROLL_ANIMATION_GUIDE.md](../SCROLL_ANIMATION_GUIDE.md) for detailed customization

---

## Next Steps

1. ✅ Choose which sections to replace
2. ✅ Copy the code snippets above
3. ✅ Update email in CallToActionScroll
4. ✅ Test in your browser
5. 🎨 Customize text, images, and colors to match your brand
6. 📸 Replace Unsplash images with your own project screenshots

Happy coding! 🚀
