# Portfolio Website

A modern, interactive portfolio website built with Next.js 14, featuring smooth animations, 3D effects, and a comprehensive dark/light theme system.

## ✨ Features

### 🎨 Theme System
- **Dual Theme Support**: Seamless light and dark mode switching
- **Sky Toggle**: Beautiful sun/moon animated toggle switch
- **CSS Variables**: Complete theme system with consistent colors across all components
- **Persistent Theme**: Saves user preference in localStorage

### 🧭 Navigation
- **Sliding Pill Indicator**: Modern navbar with smooth sliding active state indicator
- **Scroll-Spy**: Automatic active state tracking based on scroll position
- **Snap Scrolling**: Premium scroll experience with CSS scroll-snap
- **Mobile Responsive**: Adaptive navigation for all screen sizes

### 🎭 Interactive Components
- **3D Folder Animation**: Interactive project showcase with folder opening effects
- **Radial Orbital Timeline**: Skills displayed in an orbital layout with smooth animations
- **Typewriter Effect**: Dynamic text animation in hero section
- **Particle Buttons**: Interactive button effects with particles
- **Social Icons**: Animated social media links

### 📱 Sections
- **Hero**: Eye-catching introduction with animated elements
- **Featured Projects**: 3D folder cards with project details and live demos
- **Skills**: Orbital timeline showcasing technical expertise
- **Exploring**: Current interests and learning journey
- **Education**: Academic background
- **Certificates**: Professional certifications
- **Contact**: Get in touch section
- **Resume**: Downloadable resume

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Radix UI
- **Utilities**: class-variance-authority, clsx, tailwind-merge

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ChinmaySN/portfolio.git

# Navigate to project directory
cd portfolio/my-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check

# Format code
npm run format
```

## 🎯 Key Implementation Details

### Theme System
- Light theme variables defined in `:root`
- Dark theme variables in `.dark` class
- All components use CSS variables for consistent theming
- Automatic theme detection and persistence

### Scroll Behavior
- Native CSS scroll-snap for smooth section transitions
- IntersectionObserver for scroll-spy functionality
- Pure scroll-driven navbar (no programmatic scrolling)
- Prevents scroll conflicts and double-scrolling issues

### Component Architecture
- Modular component structure
- Reusable UI components in `/components/ui`
- Section-specific components in `/components/sections`
- Layout components for consistent structure

## 📂 Project Structure

```
my-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/
│   ├── hero/              # Hero section
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── data/                  # Static data files
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── public/                # Static assets
```

## 🌐 Deployment

This project is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel

# Or build and deploy manually
npm run build
```

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- GitHub: [@ChinmaySN](https://github.com/ChinmaySN)
- Portfolio: [([chinmaysn.vercel.app](https://chinmaysn.vercel.app/))]

---

Built with ❤️ using Next.js and TypeScript
