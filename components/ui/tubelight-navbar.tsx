"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Home, FolderOpen, Code, GraduationCap, Award, Mail, FileText, Compass } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavBarProps {
  className?: string
}

export function NavBar({ className }: NavBarProps) {
  // Match the order of sections in page.tsx
  const items = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'Projects', url: '#featured-projects', icon: FolderOpen },
    { name: 'Skills', url: '#skills', icon: Code },
    { name: 'Exploring', url: '#exploring', icon: Compass },
    { name: 'Education', url: '#education', icon: GraduationCap },
    { name: 'Certificates', url: '#certificates', icon: Award },
    { name: 'Contact', url: '#contact', icon: Mail },
    { name: 'Resume', url: '#resume', icon: FileText },
  ];
  const [activeTab, setActiveTab] = useState(items[0]?.name || 'Home')
  const [isMobile, setIsMobile] = useState(false)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({})

  // Calculate pill position based on active tab
  const updatePillPosition = () => {
    const activeElement = navRefs.current[activeTab]
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement
      setPillStyle({
        left: offsetLeft,
        width: offsetWidth,
      })
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      updatePillPosition()
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update pill position when active tab changes
  useEffect(() => {
    updatePillPosition()
  }, [activeTab, isMobile])

  // Track active section based on scroll position
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is at center of viewport
      threshold: 0
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          // Map section IDs to nav item names
          const sectionMap: { [key: string]: string } = {
            'hero': 'Home',
            'featured-projects': 'Projects',
            'skills': 'Skills',
            'education': 'Education',
            'exploring': 'Exploring',
            'certificates': 'Certificates',
            'contact': 'Contact',
            'resume': 'Resume'
          }
          const matchingItem = sectionMap[sectionId]
          if (matchingItem) {
            setActiveTab(matchingItem)
          }
        }
      })
    }

    // Observe all sections
    const sections = document.querySelectorAll('[id]')
    sections.forEach(section => {
      const observer = new IntersectionObserver(handleIntersection, observerOptions)
      observer.observe(section)
      observers.push(observer)
    })

    // Also observe the first section (Hero) which might not have an id
    const firstSection = document.querySelector('.scroll-snap-container > div:first-child')
    if (firstSection && !firstSection.id) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveTab('Home')
          }
        })
      }, observerOptions)
      observer.observe(firstSection)
      observers.push(observer)
    }

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none",
        className,
      )}
    >
      <div className="relative flex items-center gap-3 bg-dark-bg/80 border border-dark-border backdrop-blur-lg py-1.5 px-2 rounded-full shadow-2xl shadow-dark-accent/10 pointer-events-auto">
        {/* Sliding pill indicator - Light: black bg, Dark: white bg */}
        <div
          className="navbar-pill absolute rounded-full shadow-sm transition-all duration-300 ease-out"
          style={{
            transform: `translateX(${pillStyle.left}px)`,
            width: `${pillStyle.width}px`,
            height: 'calc(100% - 12px)',
            top: '6px',
            left: '0',
          }}
        />
        
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              ref={(el) => {
                navRefs.current[item.name] = el
              }}
              href={item.url}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 md:px-5 py-2 rounded-full transition-colors duration-200 z-10",
                isActive 
                  ? "navbar-pill-text-active" 
                  : "text-theme-secondary hover:text-theme-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
