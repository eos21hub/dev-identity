import { motion } from 'framer-motion'
import { Smartphone, Monitor, Database, Wrench } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SkillTag } from '@/components/ui/Badge'
import { skillCategories } from '@/data/skills'
import type { SkillCategory } from '@/types'

const icons = {
  mobile:   Smartphone,
  frontend: Monitor,
  backend:  Database,
  tools:    Wrench,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = icons[category.id as keyof typeof icons] ?? Wrench

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, boxShadow: '0 16px 36px rgba(0,0,0,0.10)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-card hover:border-gray-300 transition-colors"
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${category.iconBg}`}>
        <Icon size={20} className={category.iconColor} />
      </div>
      <h3 className="text-sm font-bold text-gray-900 mb-3">{category.title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <SkillTag key={skill}>{skill}</SkillTag>
        ))}
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50/70">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Skills & Tech"
          title="My Technical Toolkit"
          subtitle="Technologies I use daily to build scalable mobile apps, web platforms, and backend systems."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillCategories.map((cat) => (
            <SkillCard key={cat.id} category={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
