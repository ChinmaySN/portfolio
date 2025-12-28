# Required Assets for SEO & Social Sharing

## 1. Open Graph Image
**Location:** `/public/og-image.png`

**Specifications:**
- Size: 1200x630px
- Format: PNG or JPG
- Content: Should include your name "Chinmay S N" and tagline "Creative Technologist"
- Background: Clean, professional design matching your portfolio style
- Text: Large, readable on small previews

**Purpose:** Appears when sharing your portfolio on social media (LinkedIn, Twitter, Facebook)

**Design Suggestion:**
- Background: Gradient from slate-50 to slate-100
- Main text: "Chinmay S N" (Large, bold)
- Subtitle: "Creative Technologist" (Medium)
- Small text: "Data • Trading • Web"
- Optional: Subtle geometric pattern or your photo

---

## 2. Favicon
**Location:** `/public/favicon.ico`

**Specifications:**
- Size: 32x32px (multiple sizes in one .ico file)
- Format: .ico
- Content: Simple icon/initials "CS" or "CSN"

**Purpose:** Appears in browser tab

**Quick Generation:**
- Use https://favicon.io to generate from text
- Or use your initials with a simple design

---

## 3. Apple Touch Icon
**Location:** `/public/apple-touch-icon.png`

**Specifications:**
- Size: 180x180px
- Format: PNG
- Content: Same as favicon but higher resolution

**Purpose:** Used when adding website to iOS home screen

---

## 4. Resume PDF
**Recommended Location:** `/public/resume-chinmay-sn.pdf`

**Specifications:**
- Format: PDF
- Naming: Use consistent, SEO-friendly naming (resume-chinmay-sn.pdf)
- Content: Latest resume

**Current Location:** You have certificates in `/public/certificates/`
**Action:** Add your resume PDF to `/public/` for easy access

---

## Quick Setup Instructions:

### Option 1: Create Placeholder OG Image (Using online tool)
1. Go to https://og-playground.vercel.app/
2. Design your OG image
3. Download as `og-image.png`
4. Place in `/public/`

### Option 2: Create Simple Favicon
1. Go to https://favicon.io/favicon-generator/
2. Enter "CS" or "CSN"
3. Download and extract
4. Rename `favicon.ico` and place in `/public/`
5. Rename `apple-touch-icon.png` and place in `/public/`

### Option 3: Use Canva (Professional Design)
1. Create 1200x630px design for OG image
2. Create 512x512px icon for favicon/touch icon
3. Export and place in `/public/`
