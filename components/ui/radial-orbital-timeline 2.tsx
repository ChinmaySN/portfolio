"use client";
import { useState, useEffect, useRef } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
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
};

interface Skill {
  name: string;
  proficiency: number;
  iconName: string;
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
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedCategory(null);
      setAutoRotate(true);
    }
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || expandedCategory !== null) return;

    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [autoRotate, expandedCategory]);

  // Calculate category position on orbit
  const calculatePosition = (index: number, total: number) => {
    const angleStep = (2 * Math.PI) / total;
    const angle = index * angleStep + (rotationAngle * Math.PI) / 180;
    const radius = 225;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    const distanceFromFront = Math.sin(angle);
    const scale = 1;
    const opacity = 1;
    const zIndex = Math.round(50 + distanceFromFront * 50);

    return { x, y, scale, opacity, zIndex };
  };

  const getColorStyles = (color: string) => {
    const colors: Record<string, string> = {
      blue: "border-blue-500 text-blue-400 hover:bg-blue-500/10",
      purple: "border-purple-500 text-purple-400 hover:bg-purple-500/10",
      green: "border-green-500 text-green-400 hover:bg-green-500/10",
      orange: "border-orange-500 text-orange-400 hover:bg-orange-500/10",
      cyan: "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
      gray: "border-gray-500 text-gray-400 hover:bg-gray-500/10",
    };
    return colors[color] || colors.blue;
  };

  const handleCategoryClick = (categoryId: number, categoryIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
      setAutoRotate(true);
    } else {
      // Calculate angle to move clicked category to top (270 degrees / -90 degrees)
      const angleStep = (360) / categories.length;
      const targetRotation = (270 - (categoryIndex * angleStep)) % 360;
      
      setAutoRotate(false);
      setRotationAngle(targetRotation);
      
      // Expand after rotation animation
      setTimeout(() => {
        setExpandedCategory(categoryId);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8 overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl aspect-square flex items-center justify-center"
        onClick={handleContainerClick}
      >
        {/* Center title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none">
          <h2 className="text-4xl font-bold text-dark-text mb-2">Skills</h2>
          <p className="text-dark-text/60 text-sm">
            {expandedCategory ? "Click category to close" : "Click a category to explore"}
          </p>
        </div>

        {/* Orbital ring */}
        <div
          ref={orbitRef}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Orbit ring - subtle */}
          <div className="absolute w-[450px] h-[450px] rounded-full border border-dark-border/30"></div>

          {/* Categories on orbit */}
          {categories.map((category, index) => {
            const position = calculatePosition(index, categories.length);
            const isExpanded = expandedCategory === category.id;
            const isHovered = hoveredCategory === category.id;
            const Icon = iconMap[category.iconName] || Code;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px) scale(${
                isExpanded ? 1.2 : isHovered ? 1.1 : position.scale
              })`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div key={category.id}>
                {/* Category Node */}
                <div
                  className="absolute transition-all duration-500 cursor-pointer -translate-x-1/2 -translate-y-1/2"
                  style={nodeStyle}
                  onClick={(e) => handleCategoryClick(category.id, index, e)}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Category Circle */}
                  <div
                    className={`
                    relative w-24 h-24 rounded-full border-2 
                    bg-dark-bg/80 backdrop-blur-sm
                    flex items-center justify-center
                    transition-all duration-300
                    ${getColorStyles(category.color)}
                    ${
                      isExpanded
                        ? "scale-110 shadow-lg shadow-current/20"
                        : "hover:scale-105"
                    }
                  `}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Category Label */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <p className="text-sm font-medium text-dark-text text-center">
                      {category.title}
                    </p>
                  </div>
                </div>

                {/* Expanded Skills Panel */}
                {isExpanded && (
                  <div
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-300"
                    style={{ zIndex: 300 }}
                  >
                    <Card className="w-[500px] max-h-[600px] overflow-y-auto bg-dark-bg/95 backdrop-blur-xl border-dark-border shadow-2xl">
                      <CardHeader className="flex flex-row items-center justify-between pb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${getColorStyles(
                              category.color
                            )}`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-dark-text">
                              {category.title}
                            </CardTitle>
                            <p className="text-sm text-dark-text/60 mt-1">
                              {category.description}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedCategory(null);
                            setAutoRotate(true);
                          }}
                          className="w-8 h-8 rounded-full flex items-center justify-center border border-dark-border hover:bg-dark-border/20 transition-colors"
                        >
                          <X className="w-4 h-4 text-dark-text" />
                        </button>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {category.skills.map((skill, idx) => {
                          const SkillIcon = iconMap[skill.iconName] || Code;
                          return (
                            <div
                              key={idx}
                              className="group p-3 rounded-lg border border-dark-border bg-dark-bg/50 hover:bg-dark-border/20 transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full border border-dark-border flex items-center justify-center">
                                  <SkillIcon className="w-4 h-4 text-dark-text/70" />
                                </div>
                                <span className="font-medium text-dark-text">
                                  {skill.name}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
