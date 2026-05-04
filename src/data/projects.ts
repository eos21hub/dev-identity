import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'hivemedix',
    title: 'HiveMedix — Healthcare Ecosystem',
    description:
      'A comprehensive healthcare platform built across three layers: a Flutter patient mobile app, a React web portal for healthcare providers, and a full admin dashboard. Features appointment booking, medical records management, real-time doctor-patient chat, and pharmacy integrations. Actively deployed for clinics across Ghana.',
    tags: ['Flutter', 'React', 'Node.js', 'Healthcare'],
    accentColor: '#3B82F6',
    bgGradient: 'from-blue-50 to-blue-100',
    strokeColor: '#3B82F6',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'agrolink',
    title: 'AgroLink AI — Smart Farming Platform',
    description:
      'An AI-powered agricultural marketplace connecting farmers directly with buyers and agronomists. Features crop disease detection via on-device ML, smart price suggestions from real-time market data, weather forecasting, and a community forum. Built to empower smallholder farmers across Ghana with technology-driven insights.',
    tags: ['Flutter', 'AI / ML', 'Firebase', 'Agri-Tech'],
    accentColor: '#10B981',
    bgGradient: 'from-emerald-50 to-emerald-100',
    strokeColor: '#10B981',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'Ghana-emergency-response',
    title: 'Ghana Emergency Response — Response App',
    description:
      'A life-critical emergency response app that lets users request help instantly, share live GPS location, and communicate with first responders. Offline SOS mode ensures the app works in low-connectivity environments. Features emergency contact management, incident history, and real-time dispatch alerts.',
    tags: ['Flutter', 'Real-time', 'Google Maps', 'Emergency'],
    accentColor: '#F43F5E',
    bgGradient: 'from-rose-50 to-rose-100',
    strokeColor: '#F43F5E',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'invoice-web',
    title: 'Invoice Web — Billing Platform',
    description:
      'A full-featured web invoice management system for freelancers and small businesses. Create and send professional invoices, track payment status, export PDFs, and manage clients — all from a clean dashboard. Includes multi-currency support, automated payment reminders, and Paystack integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'SaaS'],
    accentColor: '#F59E0B',
    bgGradient: 'from-amber-50 to-amber-100',
    strokeColor: '#F59E0B',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
  id: 'wificombat-elearning',

  title: 'Wificombat — Career Pathway E-Learning Platform',

  description:
    'A scalable, career-driven e-learning platform designed for students aged 5–18, combining structured tech education with entrepreneurship training. Features include AI-powered career pathway assessment, role-based dashboards (students, parents, teachers, admins), live virtual classrooms, social learning communities, real-time performance analytics, and subscription-based access. Built to support both individual learners and school-wide adoption with multi-language support and integrated payment systems.',

  tags: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'SaaS', 'EdTech'],

  accentColor: '#6366F1',

  bgGradient: 'from-indigo-50 to-indigo-100',

  strokeColor: '#6366F1',

  links: {
    demo: '#',
    github: '#',
  },
}
]
