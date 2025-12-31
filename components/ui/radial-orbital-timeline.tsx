"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  TrendingUp, 
  Workflow, 
  Brain, 
  Eye, 
  BarChart3, 
  LineChart, 
  BotMessageSquare, 
  GitBranch, 
  Server, 
  Layers,
  Globe,
  Zap,
  Cpu,
  Layout,
  Network,
  Palette,
  Target,
  MessageSquare,
  Webhook,
  Cog,
  Wrench,
  Terminal,
  Package,
  RefreshCw,
  X,
  type LucideIcon 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { primaryStack } from "@/data/skills-timeline";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Code, Database, TrendingUp, Workflow, Brain, Eye, BarChart3, LineChart,
  BotMessageSquare, GitBranch, Server, Layers, Globe, Zap, Cpu, Layout,
  Network, Palette, Target, MessageSquare, Webhook, Cog, Wrench, Terminal,
  Package, RefreshCw,
};

interface Skill {
  name: string;
  proficiency: number;
  iconName: string;
  context?: string;
}

interface CategoryItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
  skills: Skill[];
  color: string;
}

interface RadialOrbitalTimelineProps {
  categories: CategoryItem[];
}

export default function RadialOrbitalTimeline({
  categories,
}: RadialOrbitalTimelineProps) {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hasAutoExpanded, setHasAutoExpanded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [rotation, setRotation] = useState(0); // Start with Languages (index 0) at right position
  const [activeCategory, setActiveCategory] = useState<number>(0); // Track which category is at right position
  const [selectedSkill, setSelectedSkill] = useState<{ skill: Skill; categoryId: number; categoryTitle: string; categoryColor: string } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Auto-expand first category on scroll into view (once)
  useEffect(() => {
    if (hasAutoExpanded || expandedCategory !== null) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoExpanded) {
            setTimeout(() => {
              setExpandedCategory(1); // Auto-expand Languages
              setHasAutoExpanded(true);
            }, 400);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAutoExpanded, expandedCategory]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedCategory(null);
    }
  };

  // Calculate category position on orbit
  const calculatePosition = (index: number, total: number) => {
    const angleStep = (2 * Math.PI) / total;
    // Start at right (0 rad), items distributed counterclockwise
    // No rotation applied here - rotation handled by orbit container
    const angle = index * angleStep;
    const radius = 200; // Match the orbit ring diameter (400px / 2)
    const x = Math.round(Math.cos(angle) * radius * 100) / 100; // Round to 2 decimal places
    const y = Math.round(Math.sin(angle) * radius * 100) / 100; // Round to 2 decimal places

    return { x, y, angle };
  };

  const getColorStyles = (color: string, isExpanded: boolean): { border: string; text: string; glow: string } => {
    const colors: Record<string, { border: string; text: string; glow: string }> = {
      blue: { 
        border: "border-blue-500/70", 
        text: "text-blue-400/95", 
        glow: isExpanded ? "shadow-blue-500/10" : "shadow-blue-500/5"
      },
      purple: { 
        border: "border-purple-500/70", 
        text: "text-purple-400/95", 
        glow: isExpanded ? "shadow-purple-500/10" : "shadow-purple-500/5"
      },
      green: { 
        border: "border-green-500/70", 
        text: "text-green-400/95", 
        glow: isExpanded ? "shadow-green-500/10" : "shadow-green-500/5"
      },
      orange: { 
        border: "border-orange-500/70", 
        text: "text-orange-400/95", 
        glow: isExpanded ? "shadow-orange-500/10" : "shadow-orange-500/5"
      },
      cyan: { 
        border: "border-cyan-500/70", 
        text: "text-cyan-400/95", 
        glow: isExpanded ? "shadow-cyan-500/10" : "shadow-cyan-500/5"
      },
      gray: { 
        border: "border-gray-500/70", 
        text: "text-gray-400/95", 
        glow: isExpanded ? "shadow-gray-500/10" : "shadow-gray-500/5"
      },
    };
    const defaultStyle = { 
      border: "border-blue-500/70", 
      text: "text-blue-400/95", 
      glow: isExpanded ? "shadow-blue-500/10" : "shadow-blue-500/5"
    };
    return colors[color] || defaultStyle;
  };

  const handleCategoryClick = (categoryId: number, categoryIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Calculate shortest rotation path
    const angleStep = 360 / categories.length;
    const targetRotation = -(categoryIndex * angleStep);
    
    // Normalize current rotation to 0-360 range
    const normalizedCurrent = ((rotation % 360) + 360) % 360;
    const normalizedTarget = ((targetRotation % 360) + 360) % 360;
    
    // Calculate clockwise and counter-clockwise differences
    let clockwiseDiff = (normalizedTarget - normalizedCurrent + 360) % 360;
    let counterClockwiseDiff = (normalizedCurrent - normalizedTarget + 360) % 360;
    
    // Choose shortest path (prefer clockwise if equal)
    let finalRotation;
    if (clockwiseDiff <= counterClockwiseDiff) {
      // Rotate clockwise
      finalRotation = rotation + clockwiseDiff;
    } else {
      // Rotate counter-clockwise
      finalRotation = rotation - counterClockwiseDiff;
    }
    
    // If clicking the same category that's already expanded and at right position
    if (expandedCategory === categoryId && activeCategory === categoryIndex) {
      // Don't collapse - do nothing
      return;
    } else {
      // Rotate to position
      setRotation(finalRotation);
      setActiveCategory(categoryIndex);
      
      // Expand after rotation animation (or immediately if already at position)
      const isAlreadyAtPosition = activeCategory === categoryIndex;
      setTimeout(() => {
        setExpandedCategory(categoryId);
      }, isAlreadyAtPosition ? 0 : 400);
    }
  };

  const handleKeyDown = (categoryId: number, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    }
  };

  const handleSkillClick = (skill: Skill, categoryId: number, categoryTitle: string, categoryColor: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedSkill({ skill, categoryId, categoryTitle, categoryColor });
    setExpandedCategory(null); // Close the category panel
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        {/* Primary Stack Summary - Fixed Position */}
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-wider text-dark-text/40 mb-3 font-medium">
            Primary Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {primaryStack.map((skill, idx) => (
              <span
                key={idx}
                className="text-sm text-dark-text/70 font-medium"
              >
                {skill}
                {idx < primaryStack.length - 1 && (
                  <span className="mx-2 text-dark-text/30">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex gap-12 items-center">
        {/* Left: Circular Navigation */}
        <div
          ref={containerRef}
          className="relative w-[500px] h-[500px] flex items-center justify-center flex-shrink-0"
          onClick={handleContainerClick}
        >
          {/* Center title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none">
            <h2 className="text-xl font-semibold text-dark-text/70 mb-0.5 tracking-tight">Skills</h2>
            <p className="text-dark-text/40 text-[10px] tracking-wide uppercase">
              Click category
            </p>
          </div>

          {/* Orbital ring */}
          <motion.div
            ref={orbitRef}
            className="relative w-full h-full flex items-center justify-center"
            animate={{ rotate: rotation }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              ease: "easeInOut"
            }}
          >
            {/* Orbit ring - very subtle */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-dark-border/15"></div>

            {/* Categories on orbit */}
            {categories.map((category, index) => {
              const position = calculatePosition(index, categories.length);
              const isExpanded = expandedCategory === category.id;
              const isHovered = hoveredCategory === category.id;
              const Icon = iconMap[category.iconName] || Code;
              const colorStyles = getColorStyles(category.color, isExpanded);
              
              // Check if this is the active category (at right position)
              const isAtRight = index === activeCategory;

              const nodeStyle = {
                left: '50%',
                top: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                transformOrigin: 'center center',
                zIndex: isAtRight ? 200 : 50,
              };

              return (
                <div
                  key={category.id}
                  className="absolute cursor-pointer focus:outline-none rounded-full"
                  style={nodeStyle}
                  onClick={(e) => handleCategoryClick(category.id, index, e)}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  onKeyDown={(e) => handleKeyDown(category.id, e)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                  aria-label={`${category.title} category`}
                >
                  {/* Node group - optically centered */}
                  <div 
                    className="relative flex flex-col items-center transition-transform duration-400 ease-out" 
                    style={{ 
                      transform: `translate(-50%, -50%) rotate(${-rotation}deg) scale(${
                        isAtRight ? 1.15 : isHovered ? 1.02 : 1
                      })`,
                      transition: prefersReducedMotion ? 'none' : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {/* Category Circle */}
                    <div
                      className={`
                        relative w-[72px] h-[72px] rounded-full transition-all duration-300
                        flex items-center justify-center
                        ${colorStyles.text}
                        ${isAtRight ? `bg-dark-bg backdrop-blur-md border-[2.5px] ${colorStyles.border.replace('/70', '')} shadow-xl ${colorStyles.glow.replace('/5', '/15').replace('/10', '/20')}` : `bg-dark-bg/95 backdrop-blur-sm border-[1.5px] ${colorStyles.border} shadow-lg ${colorStyles.glow}`}
                      `}
                    >
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>

                    {/* Category Label - optically anchored */}
                    <div className="absolute whitespace-nowrap" style={{ top: '76px' }}>
                      <p className="text-[11px] font-medium text-dark-text/75 text-center tracking-wide">
                        {category.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right: Expanded Skills Panel or Selected Skill Detail */}
        <div className="flex-1 min-h-[500px]">
          {selectedSkill ? (
            <Card className="w-full h-full bg-dark-bg/95 backdrop-blur-md border-dark-border/60 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-dark-border/30">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${
                      getColorStyles(selectedSkill.categoryColor, true).border
                    } ${getColorStyles(selectedSkill.categoryColor, true).glow}`}
                  >
                    {(() => {
                      const SkillIcon = iconMap[selectedSkill.skill.iconName] || Code;
                      return <SkillIcon className={`w-8 h-8 ${getColorStyles(selectedSkill.categoryColor, true).text}`} />;
                    })()}
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-dark-text/95 mb-1">
                      {selectedSkill.skill.name}
                    </CardTitle>
                    <p className="text-sm text-dark-text/50">
                      {selectedSkill.categoryTitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSkill(null);
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-dark-border/50 hover:bg-dark-border/10 transition-colors focus:outline-none focus:ring-2 focus:ring-dark-text/50"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-dark-text/70" />
                </button>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-dark-text/70">Proficiency</p>
                    <p className="text-sm font-semibold text-dark-text/90">{selectedSkill.skill.proficiency}%</p>
                  </div>
                  <div className="w-full h-3 bg-dark-border/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.skill.proficiency}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`h-full rounded-full ${getColorStyles(selectedSkill.categoryColor, true).border.replace('border-', 'bg-').replace('/70', '/60')}`}
                    />
                  </div>
                </div>

                {/* Context/Description */}
                {selectedSkill.skill.context && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-dark-text/70">Context</p>
                    <p className="text-base text-dark-text/80 leading-relaxed">
                      {selectedSkill.skill.context}
                    </p>
                  </div>
                )}

                {/* Back to category button */}
                <button
                  onClick={() => {
                    setSelectedSkill(null);
                    setExpandedCategory(selectedSkill.categoryId);
                  }}
                  className="w-full mt-4 px-4 py-2.5 rounded-lg border border-dark-border/50 bg-dark-bg/50 hover:bg-dark-border/10 text-dark-text/70 hover:text-dark-text/90 text-sm font-medium transition-all"
                >
                  ← Back to {selectedSkill.categoryTitle}
                </button>
              </CardContent>
            </Card>
          ) : expandedCategory ? (
            <Card className="w-full h-full bg-dark-bg/95 backdrop-blur-md border-dark-border/60 shadow-xl">
              <CardHeader className="pb-4 border-b border-dark-border/30">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                      getColorStyles(
                        categories.find((c) => c.id === expandedCategory)?.color ?? 'blue',
                        true
                      ).border
                    }`}
                  >
                    {(() => {
                      const cat = categories.find((c) => c.id === expandedCategory);
                      const Icon = cat ? iconMap[cat.iconName] ?? Code : Code;
                      return <Icon className={`w-6 h-6 ${getColorStyles(cat?.color ?? 'blue', true).text}`} />;
                    })()}
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-dark-text/90">
                      {categories.find((c) => c.id === expandedCategory)?.title}
                    </CardTitle>
                    <p className="text-sm text-dark-text/50 mt-1">
                      {categories.find((c) => c.id === expandedCategory)?.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 pt-4">
                {categories
                  .find((c) => c.id === expandedCategory)
                  ?.skills.map((skill, idx) => {
                    const SkillIcon = iconMap[skill.iconName] || Code;
                    const currentCategory = categories.find((c) => c.id === expandedCategory);
                    return (
                      <div
                        key={idx}
                        onClick={(e) => currentCategory && handleSkillClick(skill, currentCategory.id, currentCategory.title, currentCategory.color, e)}
                        className="group p-3 rounded-lg border border-dark-border/40 bg-dark-bg/30 hover:bg-dark-border/10 hover:border-dark-border/60 cursor-pointer transition-all animate-in fade-in slide-in-from-left duration-300"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full border border-dark-border/50 flex items-center justify-center flex-shrink-0 group-hover:border-dark-border/70">
                            <SkillIcon className="w-4 h-4 text-dark-text/60 group-hover:text-dark-text/80" />
                          </div>
                          <p className="font-medium text-base text-dark-text/90 group-hover:text-dark-text">
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </CardContent>
            </Card>
          ) : (
            <div className="w-full h-full flex items-center justify-center border border-dark-border/30 rounded-lg bg-dark-bg/30">
              <p className="text-dark-text/40 text-sm">
                Select a category to view skills
              </p>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
