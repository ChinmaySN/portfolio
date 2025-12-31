"use client";

import { useState, useRef, useEffect, useLayoutEffect, useCallback, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import type React from "react";

interface Project {
  id: string;
  image: string;
  title: string;
  link?: string;
  outcome?: string;
  approach?: string;
  problem?: string;
}

interface AnimatedFolderProps {
  title: string;
  projects: Project[];
  className?: string;
  isRevealed?: boolean;
}

export function AnimatedFolder({ title, projects, className, isRevealed = false }: AnimatedFolderProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);
  const [hiddenCardId, setHiddenCardId] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleProjectClick = (project: Project, index: number) => {
    const cardEl = cardRefs.current[index];
    if (cardEl) {
      setSourceRect(cardEl.getBoundingClientRect());
    }
    setSelectedIndex(index);
    setHiddenCardId(project.id);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
    setSourceRect(null);
  };

  const handleCloseComplete = () => {
    setHiddenCardId(null);
  };

  const handleNavigate = (newIndex: number) => {
    setSelectedIndex(newIndex);
    setHiddenCardId(projects[newIndex]?.id || null);
  };

  return (
    <>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center",
          "p-4 rounded-2xl",
          "bg-theme-secondary border border-theme",
          "transition-all duration-500 ease-out",
          isRevealed && "shadow-theme-lg border-theme-accent/30",
          "group",
          className
        )}
        style={{
          minWidth: "350px",
          minHeight: "450px",
          perspective: "1500px",
        }}
      >
        {/* Subtle background glow */}
        <div
          className="absolute inset-0 rounded-2xl transition-opacity duration-1000"
          style={{
            background: "radial-gradient(circle at 50% 70%, rgb(59 130 246) 0%, transparent 70%)",
            opacity: isRevealed ? 0.1 : 0,
          }}
        />

        <div className="relative flex items-center justify-center mb-3 mt-12" style={{ height: "240px", width: "240px" }}>
          {/* Folder back layer - z-index 10 */}
          <div
            className="absolute w-40 h-28 bg-folder-back rounded-xl shadow-lg"
            style={{
              transformOrigin: "bottom center",
              transform: isRevealed ? "rotateX(-15deg)" : "rotateX(0deg)",
              transition: "transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 10,
            }}
          />

          {/* Folder tab - z-index 10 */}
          <div
            className="absolute w-14 h-5 bg-folder-tab rounded-t-md"
            style={{
              top: "calc(50% - 56px - 14px)",
              left: "calc(50% - 80px + 20px)",
              transformOrigin: "bottom center",
              transform: isRevealed ? "rotateX(-25deg) translateY(-2px)" : "rotateX(0deg)",
              transition: "transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 10,
            }}
          />

          {/* Project cards - z-index 20, between back and front */}
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 20,
            }}
          >
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                image={project.image}
                title={project.title}
                delay={index * 100 + 400}
                isVisible={isRevealed}
                index={index}
                onClick={() => handleProjectClick(project, index)}
                isSelected={hiddenCardId === project.id}
                outcome={project.outcome}
                approach={project.approach}
                problem={project.problem}
              />
            ))}
          </div>

          {/* Folder front layer - z-index 30 */}
          <div
            className="absolute w-40 h-28 bg-folder-front rounded-xl shadow-xl"
            style={{
              top: "calc(50% - 56px + 5px)",
              transformOrigin: "bottom center",
              transform: isRevealed ? "rotateX(25deg) translateY(8px)" : "rotateX(0deg)",
              transition: "transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 30,
            }}
          />

          {/* Folder shine effect - z-index 31 */}
          <div
            className="absolute w-40 h-28 rounded-xl overflow-hidden pointer-events-none"
            style={{
              top: "calc(50% - 56px + 5px)",
              background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)",
              transformOrigin: "bottom center",
              transform: isRevealed ? "rotateX(25deg) translateY(8px)" : "rotateX(0deg)",
              transition: "transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 31,
            }}
          />
        </div>

        {/* Folder title */}
        <h3
          className="text-base font-semibold text-theme-primary mt-3 transition-all duration-500"
          style={{
            transform: isRevealed ? "translateY(4px)" : "translateY(0)",
            opacity: isRevealed ? 1 : 0.7,
          }}
        >
          {title}
        </h3>

        {/* Project count */}
        <p
          className="text-xs text-theme-secondary transition-all duration-500"
          style={{
            opacity: isRevealed ? 0.7 : 1,
          }}
        >
          {projects.length} projects
        </p>

        {/* Scroll hint */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs text-theme-dim transition-all duration-500"
          style={{
            opacity: isRevealed ? 0 : 0.6,
            transform: isRevealed ? "translateY(10px)" : "translateY(0)",
          }}
        >
          <span>Scroll to reveal</span>
        </div>
      </div>

      <ImageLightbox
        projects={projects.slice(0, 3)}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={handleCloseLightbox}
        sourceRect={sourceRect}
        onCloseComplete={handleCloseComplete}
        onNavigate={handleNavigate}
      />
    </>
  );
}

interface ImageLightboxProps {
  projects: Project[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  sourceRect: DOMRect | null;
  onCloseComplete?: () => void;
  onNavigate: (index: number) => void;
}

function ImageLightbox({
  projects,
  currentIndex,
  isOpen,
  onClose,
  sourceRect,
  onCloseComplete,
  onNavigate,
}: ImageLightboxProps) {
  const [animationPhase, setAnimationPhase] = useState<"initial" | "animating" | "complete">("initial");
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  const [prevIndex, setPrevIndex] = useState(currentIndex);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const containerRef = useRef<HTMLDivElement>(null);

  const totalProjects = projects.length;
  const hasNext = internalIndex < totalProjects - 1;
  const hasPrev = internalIndex > 0;

  const currentProject = projects[internalIndex];
  const previousProject = projects[prevIndex];

  useEffect(() => {
    if (isOpen && currentIndex !== internalIndex && !isSliding) {
      const direction = currentIndex > internalIndex ? "left" : "right";
      setSlideDirection(direction);
      setPrevIndex(internalIndex);
      setIsSliding(true);

      const timer = setTimeout(() => {
        setInternalIndex(currentIndex);
        setIsSliding(false);
      }, 400);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [currentIndex, isOpen, internalIndex, isSliding]);

  useEffect(() => {
    if (isOpen) {
      setInternalIndex(currentIndex);
      setPrevIndex(currentIndex);
      setIsSliding(false);
    }
  }, [isOpen, currentIndex]);

  const navigateNext = useCallback(() => {
    if (internalIndex >= totalProjects - 1 || isSliding) return;
    onNavigate(internalIndex + 1);
  }, [internalIndex, totalProjects, isSliding, onNavigate]);

  const navigatePrev = useCallback(() => {
    if (internalIndex <= 0 || isSliding) return;
    onNavigate(internalIndex - 1);
  }, [internalIndex, isSliding, onNavigate]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    onClose();
    setTimeout(() => {
      setIsClosing(false);
      setShouldRender(false);
      setAnimationPhase("initial");
      onCloseComplete?.();
    }, 400);
  }, [onClose, onCloseComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") navigateNext();
      if (e.key === "ArrowLeft") navigatePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose, navigateNext, navigatePrev]);

  useLayoutEffect(() => {
    if (isOpen && sourceRect) {
      setShouldRender(true);
      setAnimationPhase("initial");
      setIsClosing(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimationPhase("animating");
        });
      });
      const timer = setTimeout(() => {
        setAnimationPhase("complete");
      }, 500);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isOpen, sourceRect]);

  const handleDotClick = (idx: number) => {
    if (isSliding || idx === internalIndex) return;
    onNavigate(idx);
  };

  if (!shouldRender || !currentProject) return null;

  const getInitialStyles = (): React.CSSProperties => {
    if (!sourceRect) return {};

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const targetWidth = Math.min(768, viewportWidth - 64);
    const targetHeight = Math.min(viewportHeight * 0.85, 600);

    const targetX = (viewportWidth - targetWidth) / 2;
    const targetY = (viewportHeight - targetHeight) / 2;

    const scaleX = sourceRect.width / targetWidth;
    const scaleY = sourceRect.height / targetHeight;
    const scale = Math.max(scaleX, scaleY);

    const translateX = sourceRect.left + sourceRect.width / 2 - (targetX + targetWidth / 2);
    const translateY = sourceRect.top + sourceRect.height / 2 - (targetY + targetHeight / 2);

    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity: 1,
    };
  };

  const getFinalStyles = (): React.CSSProperties => {
    return {
      transform: "translate(0, 0) scale(1)",
      opacity: 1,
    };
  };

  const currentStyles = animationPhase === "initial" && !isClosing ? getInitialStyles() : getFinalStyles();

  return (
    <div
      className={cn("fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8")}
      onClick={handleClose}
      style={{
        opacity: isClosing ? 0 : 1,
        transition: "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        style={{
          opacity: animationPhase === "initial" && !isClosing ? 0 : 1,
          transition: "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        className={cn(
          "absolute top-5 right-5 z-50",
          "w-10 h-10 flex items-center justify-center",
          "rounded-full bg-theme-tertiary/90 backdrop-blur-md",
          "border border-theme",
          "text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary",
          "transition-all duration-300 ease-out hover:scale-105 active:scale-95"
        )}
        style={{
          opacity: animationPhase === "complete" && !isClosing ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateY(0)" : "translateY(-10px)",
          transition: "opacity 300ms ease-out, transform 300ms ease-out",
        }}
      >
        <X className="w-4 h-4" strokeWidth={2.5} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          navigatePrev();
        }}
        disabled={!hasPrev || isSliding}
        className={cn(
          "absolute left-4 md:left-8 z-50",
          "w-12 h-12 flex items-center justify-center",
          "rounded-full bg-theme-tertiary/90 backdrop-blur-md",
          "border border-theme",
          "text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary",
          "transition-all duration-300 ease-out hover:scale-110 active:scale-95",
          "disabled:opacity-0 disabled:pointer-events-none"
        )}
        style={{
          opacity: animationPhase === "complete" && !isClosing && hasPrev ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateX(0)" : "translateX(-20px)",
          transition: "opacity 300ms ease-out 150ms, transform 300ms ease-out 150ms",
        }}
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          navigateNext();
        }}
        disabled={!hasNext || isSliding}
        className={cn(
          "absolute right-4 md:right-8 z-50",
          "w-12 h-12 flex items-center justify-center",
          "rounded-full bg-theme-tertiary/90 backdrop-blur-md",
          "border border-theme",
          "text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary",
          "transition-all duration-300 ease-out hover:scale-110 active:scale-95",
          "disabled:opacity-0 disabled:pointer-events-none"
        )}
        style={{
          opacity: animationPhase === "complete" && !isClosing && hasNext ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateX(0)" : "translateX(20px)",
          transition: "opacity 300ms ease-out 150ms, transform 300ms ease-out 150ms",
        }}
      >
        <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
      </button>

      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          ...currentStyles,
          transform: isClosing ? "translate(0, 0) scale(0.95)" : currentStyles.transform,
          transition:
            animationPhase === "initial" && !isClosing
              ? "none"
              : "transform 400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease-out",
          transformOrigin: "center center",
        }}
      >
        <div
          className={cn("relative overflow-hidden", "rounded-2xl", "bg-theme-tertiary", "ring-1 ring-theme", "shadow-theme-lg")}
          style={{
            borderRadius: animationPhase === "initial" && !isClosing ? "8px" : "16px",
            transition: "border-radius 500ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-400 ease-out"
              style={{
                transform: `translateX(-${internalIndex * 100}%)`,
                transition: isSliding ? "transform 400ms cubic-bezier(0.32, 0.72, 0, 1)" : "none",
              }}
            >
              {projects.map((project) => (
                <img
                  key={project.id}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-auto max-h-[70vh] object-contain bg-theme-secondary flex-shrink-0"
                  style={{ minWidth: "100%" }}
                />
              ))}
            </div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          </div>

          <div
            className={cn("px-6 py-5", "bg-theme-tertiary", "border-t border-theme")}
            style={{
              opacity: animationPhase === "complete" && !isClosing ? 1 : 0,
              transform: animationPhase === "complete" && !isClosing ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 300ms ease-out 100ms, transform 300ms ease-out 100ms",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-theme-primary tracking-tight truncate h-7">
                  {currentProject?.title}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <p className="text-sm text-theme-secondary">
                    <kbd className="px-1.5 py-0.5 mx-0.5 text-xs font-medium bg-theme-secondary text-theme-secondary rounded border border-theme">
                      ←
                    </kbd>
                    <kbd className="px-1.5 py-0.5 mx-0.5 text-xs font-medium bg-theme-secondary text-theme-secondary rounded border border-theme">
                      →
                    </kbd>{" "}
                    to navigate
                  </p>
                  <div className="flex items-center gap-1.5">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300 ring-1 ring-black/40 dark:ring-white/20",
                          idx === internalIndex
                            ? "bg-theme-accent scale-110"
                            : "bg-theme-dim hover:bg-theme-secondary"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {currentProject?.link && (
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2",
                    "text-sm font-medium text-theme-secondary",
                    "bg-theme-secondary hover:bg-theme-primary",
                    "rounded-lg border border-theme",
                    "transition-all duration-200 ease-out",
                    "hover:text-theme-primary hover:border-theme-accent"
                  )}
                >
                  <span>View</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  image: string;
  title: string;
  delay: number;
  isVisible: boolean;
  index: number;
  onClick: () => void;
  isSelected: boolean;
  outcome?: string;
  approach?: string;
  problem?: string;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ image, title, delay, isVisible, index, onClick, isSelected, outcome, approach, problem }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Card positioning: spread horizontally when visible
    const cardSpacing = 240; // Increased spacing for larger cards
    const xPosition = (index - 1) * cardSpacing; // -240, 0, 240 for left, center, right
    const yOffset = -200; // Increased fly up distance for larger cards
    const rotations = [-8, 0, 8]; // Subtle rotation for visual interest

    // Extract one sentence each for hover details
    const extractFirstSentence = (text: string = "") => {
      const sentence = text.split('.')[0];
      return sentence ? sentence + '.' : '';
    };

    const outcomeText = extractFirstSentence(outcome);
    const whatBuilt = extractFirstSentence(approach);
    const contextText = extractFirstSentence(problem);

    return (
      <div
        ref={ref}
        className={cn(
          "absolute rounded-xl overflow-visible shadow-theme-lg",
          "cursor-pointer",
          "transition-all duration-300",
          isSelected && "opacity-0"
        )}
        style={{
          width: "220px",
          height: "280px",
          transform: isVisible
            ? `translateX(${xPosition}px) translateY(${yOffset}px) rotate(${rotations[index]}deg) scale(1)`
            : "translateX(0px) translateY(0px) rotate(0deg) scale(0.3)",
          opacity: isSelected ? 0 : isVisible ? 1 : 0,
          transition: `all 650ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
          zIndex: 20 + index,
          left: "50%",
          top: "50%",
          marginLeft: "-110px", // Half of width to center
          marginTop: "-140px", // Half of height to center
          perspective: "1000px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        tabIndex={0}
        role="button"
        aria-label={`View ${title} project details`}
      >
        {/* Card inner container with flip transform */}
        <div
          className="relative w-full h-full transition-transform duration-500 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front face - Image and title */}
          <div
            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-theme-tertiary border-2 border-theme hover:border-theme-accent shadow-theme-lg"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-base font-bold text-white line-clamp-2 drop-shadow-lg">
                {title}
              </h3>
            </div>
          </div>

          {/* Back face - Project details */}
          <div
            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 p-5 shadow-theme-lg border-2 border-blue-400"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="h-full flex flex-col justify-start space-y-4 text-white overflow-y-auto">
              <h3 className="text-sm font-bold mb-2 line-clamp-2">{title}</h3>
              
              {outcomeText && (
                <div className="flex-shrink-0">
                  <p className="text-xs font-semibold text-yellow-200 mb-1">Outcome</p>
                  <p className="text-xs leading-relaxed text-white/95">{outcomeText}</p>
                </div>
              )}
              
              {whatBuilt && (
                <div className="flex-shrink-0">
                  <p className="text-xs font-semibold text-yellow-200 mb-1">What I Built</p>
                  <p className="text-xs leading-relaxed text-white/95">{whatBuilt}</p>
                </div>
              )}
              
              {contextText && (
                <div className="flex-shrink-0">
                  <p className="text-xs font-semibold text-yellow-200 mb-1">Context</p>
                  <p className="text-xs leading-relaxed text-white/95">{contextText}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
