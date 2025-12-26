# ContainerScroll Component Integration Guide

## ✅ Setup Complete

Your portfolio already has everything needed:
- ✅ TypeScript configured
- ✅ Tailwind CSS working
- ✅ framer-motion installed (v12.23.26)
- ✅ shadcn structure with `/components/ui`
- ✅ Next.js with App Router

## 📦 Component Files Created

1. **`/components/ui/container-scroll-animation.tsx`** - Main component
2. **`/components/ui/project-showcase.tsx`** - Simple usage example
3. **`/components/ui/scroll-showcase-section.tsx`** - Reusable section component
4. **`/components/ui/scroll-examples.tsx`** - Multiple integration examples

## 🎯 How the Component Works

The ContainerScroll component creates a 3D scroll animation with:
- **Rotation**: Card rotates from 20° to 0° as you scroll
- **Scale**: Scales from 1.05 to 1 (desktop) or 0.7 to 0.9 (mobile)
- **Translation**: Title moves up as you scroll
- **Perspective**: 3D depth effect with shadow

### Key Features:
- Responsive (different behavior on mobile vs desktop)
- Scroll-based animation (uses Framer Motion's `useScroll`)
- Accessibility friendly (respects user's motion preferences)
- Client-side only ("use client" directive)

## 📋 Quick Integration

### Option 1: Add to Existing Section

Add to your `app/page.tsx` between existing sections:

\`\`\`tsx
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';

// Inside your page component, add:
<section className="w-full bg-white">
  <ContainerScroll
    titleComponent={
      <>
        <h2 className="text-4xl font-semibold text-slate-900">
          Featured Work
        </h2>
        <p className="text-6xl font-bold mt-2">
          Your Project Name
        </p>
      </>
    }
  >
    <Image
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=720&fit=crop"
      alt="Project screenshot"
      height={720}
      width={1400}
      className="mx-auto rounded-2xl object-cover h-full"
      draggable={false}
    />
  </ContainerScroll>
</section>
\`\`\`

### Option 2: Use Pre-built Components

\`\`\`tsx
import { ProjectShowcase } from '@/components/ui/project-showcase';

// In your page:
<ProjectShowcase />
\`\`\`

### Option 3: Use Reusable Section

\`\`\`tsx
import { ScrollShowcaseSection } from '@/components/ui/scroll-showcase-section';

<ScrollShowcaseSection
  title="My Project"
  subtitle="Beautiful Design"
  imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=720&fit=crop"
  imageAlt="Project showcase"
/>
\`\`\`

## 🎨 Customization Guide

### Title Customization

\`\`\`tsx
titleComponent={
  <div className="max-w-4xl mx-auto">
    <p className="text-lg text-slate-600">Section Label</p>
    <h2 className="text-5xl font-bold text-slate-900">Main Heading</h2>
    <p className="text-xl text-slate-700 mt-4">Subheading or description</p>
  </div>
}
\`\`\`

### Image Options

\`\`\`tsx
// Full-width screenshot
<Image
  src="/your-screenshot.png"
  alt="Description"
  height={720}
  width={1400}
  className="mx-auto rounded-2xl object-cover h-full object-left-top"
/>

// Custom content instead of image
<div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 p-8">
  <h3 className="text-white text-3xl font-bold">Custom Content</h3>
  {/* Your custom JSX */}
</div>
\`\`\`

### Styling the Card

The card has default dark styling. To customize, edit the `Card` component in [container-scroll-animation.tsx](components/ui/container-scroll-animation.tsx#L80):

\`\`\`tsx
// Current styling (line 86-88):
className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full 
  border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] 
  rounded-[30px] shadow-2xl"

// Light theme example:
className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full 
  border-4 border-slate-200 p-2 md:p-6 bg-white 
  rounded-[30px] shadow-2xl"
\`\`\`

## 🖼️ Image Recommendations

### Unsplash URLs Used (Ready to Use):
- Developer workspace: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=720&fit=crop`
- Coding laptop: `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&h=720&fit=crop`
- Analytics dashboard: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=720&fit=crop`
- Mobile design: `https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=720&fit=crop`
- Web interface: `https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&h=720&fit=crop`
- Design mockups: `https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1400&h=720&fit=crop`
- Team collab: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=720&fit=crop`

### For Your Own Images:
- Recommended dimensions: 1400x720px (roughly 16:9 aspect ratio)
- Place in `/public` folder
- Use Next.js Image component for optimization
- Example: `src="/screenshots/project-hero.png"`

## 🏗️ Integration Examples

### Example 1: Replace "Process" Section

In [app/page.tsx](app/page.tsx#L111), replace the "Coming soon" content:

\`\`\`tsx
{/* 3. Process / How I Think */}
<Section id="process" heading="My Approach" bgColor="bg-white" className="snap-section">
  <ContainerScroll
    titleComponent={
      <>
        <h2 className="text-4xl font-semibold text-slate-900">
          How I Work
        </h2>
        <p className="text-6xl font-bold mt-2 text-slate-900">
          Design → Build → Iterate
        </p>
      </>
    }
  >
    <Image
      src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1400&h=720&fit=crop"
      alt="Design process"
      height={720}
      width={1400}
      className="mx-auto rounded-2xl object-cover h-full"
      draggable={false}
    />
  </ContainerScroll>
</Section>
\`\`\`

### Example 2: Add Scroll Animation to Projects

Create a new section before Featured Projects:

\`\`\`tsx
{/* Hero with Projects Intro */}
<section className="snap-section">
  <ContainerScroll
    titleComponent={
      <>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
          Building Digital Solutions
        </h2>
        <p className="text-5xl md:text-[7rem] font-bold mt-2">
          One Project at a Time
        </p>
      </>
    }
  >
    <Image
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=720&fit=crop"
      alt="Projects showcase"
      height={720}
      width={1400}
      className="mx-auto rounded-2xl object-cover h-full"
      draggable={false}
    />
  </ContainerScroll>
</section>

{/* 2. Featured Projects */}
<Section id="featured-projects" heading="Featured Projects" ...>
  {/* existing projects code */}
</Section>
\`\`\`

### Example 3: Multiple Scroll Sections

Create a dedicated projects page with scroll animations for each project:

\`\`\`tsx
// app/projects/page.tsx
"use client";
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="w-full">
      {projects.map((project, index) => (
        <section key={project.id} className="mb-20">
          <ContainerScroll
            titleComponent={
              <>
                <h2 className="text-2xl md:text-4xl font-semibold">
                  {project.title}
                </h2>
                <p className="text-4xl md:text-[6rem] font-bold mt-2">
                  {project.tags[0]}
                </p>
              </>
            }
          >
            <Image
              src={project.proofImages?.[0] || \`https://images.unsplash.com/photo-\${1460925895917 + index}?w=1400&h=720&fit=crop\`}
              alt={project.title}
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full"
              draggable={false}
            />
          </ContainerScroll>
        </section>
      ))}
    </main>
  );
}
\`\`\`

## ⚠️ Important Considerations

### Scroll Snap Compatibility
Your portfolio uses CSS scroll-snap. The ContainerScroll needs significant height (60-80rem). Consider:

1. **Option A**: Remove snap from scroll sections
   - Remove `snap-section` class from sections with ContainerScroll
   - Remove `snap-container` from parent if needed

2. **Option B**: Create dedicated pages
   - Use ContainerScroll in separate routes without scroll snap
   - Example: `/projects/[id]` pages

3. **Option C**: Adjust snap behavior
   - Change snap-type to `proximity` instead of `mandatory`
   - Update [globals.css](app/globals.css) scroll-snap settings

### Performance
- Use `priority` prop on above-fold images
- Use `loading="lazy"` on below-fold images
- Consider using optimized local images instead of external URLs

### Accessibility
- Ensure images have descriptive alt text
- Component respects `prefers-reduced-motion`
- Maintain proper heading hierarchy

## 🎓 Component Analysis

### Props & State:
- `titleComponent`: React.ReactNode | string - Header content
- `children`: React.ReactNode - Card content
- Internal state: `isMobile` (boolean) - Adjusts animation for mobile

### Dependencies:
- framer-motion: `useScroll`, `useTransform`, `motion`, `MotionValue`
- React: `useRef`, `useState`, `useEffect`

### Context/Hooks Required:
- None - Component is self-contained

### Responsive Behavior:
- Mobile (≤768px): Smaller scale range (0.7-0.9)
- Desktop (>768px): Larger scale range (1.05-1)
- Height adjusts: 60rem (mobile) → 80rem (desktop)

## 🚀 Next Steps

1. Choose an integration approach (see examples above)
2. Replace placeholder images with your own screenshots
3. Customize titles and text to match your content
4. Test scroll behavior with your existing snap sections
5. Adjust styling to match your portfolio theme

## 📚 More Examples

Check [scroll-examples.tsx](components/ui/scroll-examples.tsx) for:
- Hero section with scroll
- Project showcase variations
- Skills display
- About section
- Multiple showcase sections

## 🐛 Troubleshooting

**Issue**: Animation doesn't work
- ✓ Ensure component has "use client" directive
- ✓ Check framer-motion is installed
- ✓ Verify parent has enough scroll space

**Issue**: Images not loading
- ✓ Add Unsplash domains to next.config.js
- ✓ Use proper Next.js Image component
- ✓ Check image URLs are accessible

**Issue**: Conflicts with scroll-snap
- ✓ Remove snap-section class from ScrollContainer parents
- ✓ Consider dedicated pages for scroll animations
- ✓ Adjust snap-type to "proximity"

## 📝 Need Help?

Common questions:
- **Q**: Can I use videos instead of images?
- **A**: Yes! Replace Image with video element or iframe

- **Q**: How do I adjust animation speed?
- **A**: Modify the transform ranges in [container-scroll-animation.tsx](components/ui/container-scroll-animation.tsx#L36-L38)

- **Q**: Can I have multiple on one page?
- **A**: Yes, but ensure adequate spacing (each needs 60-80rem height)
