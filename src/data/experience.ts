import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'kaydtech',
    role: 'Web Developer',
    company: 'KaydTech',
    period: '2025 — Present',
    description:
      'A backend developer on the Hivemedix platform — a smart digital health solution focused on streamlining patient care, medical data access, and service delivery. Designed and implemented scalable server-side architecture using Node.js, built secure RESTful APIs for handling patient records, authentication, and real-time interactions, and integrated cloud database solutions for reliable data management. Collaborated with frontend and mobile teams to ensure seamless communication between systems while enforcing role-based access control and data security best practices.',
  skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication', 'RBAC', 'Cloud Deployment'],
  },
  {
    id: 'opticash',
    role: 'Web Developer — Fintech',
    company: 'Opticash',
    period: '2022 — 2023',
    description:
      'Developed and maintained the Opticash digital wallet with the Opticash Dev team — a fintech application enabling payments, peer-to-peer transfers, and financial management for everyday users. Implemented secure transaction flows including biometric authentication and a custom PIN system. Improved overall app performance by ~40% through targeted code splitting, lazy loading, and state optimisation. Shipped weekly releases in an agile team environment.',
    skills: ['Flutter', 'Dart', 'GetX', 'Hive', 'Biometrics', 'Payments API'],
  },
  {
    id: 'freelance',
    role: 'Freelance Full-Stack Developer',
    company: 'Independent — Various Clients',
    period: '2021 — Present',
    description:
      'Delivered end-to-end solutions for clients across healthcare platforms, e-learning platforms, agriculture, Invoicing web app and e-commerce. Together with team built the HiveMedix healthcare ecosystem (Flutter + React + admin dashboard), AgroLink AI agricultural marketplace, the Invoice Web billing platform and Wificombat e-learning platform to scale the career pathway and educational impact largerly. Managed complete project lifecycles — from discovery and requirements through design, development, and deployment — consistently shipping on time and maintaining long-term client relationships.',
    skills: ['Flutter', 'React', 'Node.js', 'MongoDB', 'Supabase', 'Firebase', 'Project Management'],
  },
]
