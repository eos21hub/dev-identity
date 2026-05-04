import type { ReactNode } from 'react'

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  accentColor: string
  bgGradient: string
  strokeColor: string
  links: {
    demo?: string
    github?: string
  }
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
  skills: string[]
}

export interface SkillCategory {
  id: string
  title: string
  iconBg: string
  iconColor: string
  skills: string[]
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: ReactNode
}
