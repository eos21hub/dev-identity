import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'Mobile Development',
    iconBg: 'bg-blue-50',
    iconColor: 'text-primary-600',
    skills: ['Flutter', 'Dart', 'GetX', 'BLoC', 'Riverpod', 'Provider', 'Firebase', 'Hive', 'SQLite'],
  },
  {
    id: 'frontend',
    title: 'Frontend Web',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    skills: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Framer', ' WordPress'],
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Figma', 'Postman', 'VS Code'],
  },
]
