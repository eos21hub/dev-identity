import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'kaydtech',
    role: 'Web Developer',
    company: 'KaydTech',
    period: '2025 — Present',
    description:
      'Lead mobile developer on the KaydTech Emergency Response platform — a life-critical application connecting users to first responders across Ghana. Architected the entire Flutter codebase using BLoC state management, built real-time GPS tracking, offline SOS mode, push notifications, and emergency contact management. Worked closely with backend engineers to design and consume RESTful APIs, shipping the app to production for hundreds of active users.',
    skills: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'Google Maps SDK', 'REST APIs'],
  },
  {
    id: 'opticash',
    role: 'Web Developer — Fintech',
    company: 'Opticash',
    period: '2022 — 2023',
    description:
      'Developed and maintained the Opticash digital wallet — a fintech application enabling payments, peer-to-peer transfers, and financial management for everyday users. Implemented secure transaction flows including biometric authentication and a custom PIN system. Improved overall app performance by ~40% through targeted code splitting, lazy loading, and state optimisation. Shipped weekly releases in an agile team environment.',
    skills: ['Flutter', 'Dart', 'GetX', 'Hive', 'Biometrics', 'Payments API'],
  },
  {
    id: 'freelance',
    role: 'Freelance Full-Stack Developer',
    company: 'Independent — Various Clients',
    period: '2021 — Present',
    description:
      'Delivered end-to-end solutions for clients across healthcare, agriculture, and e-commerce. Built the HiveMedix healthcare ecosystem (Flutter + React + admin dashboard), AgroLink AI agricultural marketplace, and the Invoice Web billing platform. Managed complete project lifecycles — from discovery and requirements through design, development, and deployment — consistently shipping on time and maintaining long-term client relationships.',
    skills: ['Flutter', 'React', 'Node.js', 'MongoDB', 'Firebase', 'Project Management'],
  },
]
