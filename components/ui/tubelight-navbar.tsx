"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, FolderOpen, Code, GraduationCap, Award, Mail, FileText, Compass } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavBarProps {
  className?: string
}

export function NavBar({ className }: NavBarProps) {
  // Match the order of sections in page.tsx
  const items = [
    { name: 'Home', url: '#', icon: Home },
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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
            '': 'Home',
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
      <div className="flex items-center gap-2 bg-dark-bg/80 border border-dark-border backdrop-blur-lg py-1.5 px-2 rounded-full shadow-2xl shadow-dark-accent/10 pointer-events-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 md:px-5 py-2 rounded-full transition-all duration-300",
                "text-dark-text-muted hover:text-dark-accent",
                isActive && "text-dark-accent",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-dark-accent/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-dark-accent rounded-t-full shadow-lg shadow-dark-accent/50">
                    <div className="absolute w-12 h-6 bg-dark-accent/30 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-dark-accent/30 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-dark-accent/30 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
