import { motion } from 'framer-motion'
import { MapPin, CreditCard, Tag } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TechTag } from '@/components/ui/Badge'
import { experiences } from '@/data/experience'
import type { Experience } from '@/types'
import { cn } from '@/utils/cn'

const dotIcons = { kaydtech: MapPin, opticash: CreditCard, freelance: Tag }

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const itemVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

function TimelineItem({ exp, isLast }: { exp: Experience; isLast: boolean }) {
  const DotIcon = dotIcons[exp.id as keyof typeof dotIcons] ?? Tag

  return (
    <motion.article variants={itemVariants} className="relative flex gap-6">
      {/* Line + dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 shadow-card
          flex items-center justify-center z-10 group-hover:border-primary-400 transition-colors">
          <DotIcon size={16} className="text-primary-600" />
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-gray-200 to-transparent min-h-[2rem]" />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ x: 4, boxShadow: '0 12px 32px rgba(0,0,0,0.09)' }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className={cn('flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-card', !isLast && 'mb-6')}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-gray-900 text-base">{exp.role}</h3>
            <p className="text-sm font-semibold text-primary-600 mt-0.5">{exp.company}</p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
            bg-gray-100 text-gray-500 border border-gray-200 whitespace-nowrap self-start sm:self-auto">
            {exp.period}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-[1.8] mb-4">{exp.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {exp.skills.map((s) => (
            <TechTag key={s}>{s}</TechTag>
          ))}
        </div>
      </motion.div>
    </motion.article>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Work History"
          title="Where I've Worked"
          subtitle="A track record of building impactful products across healthcare, fintech, and agri-tech."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 max-w-3xl"
        >
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} isLast={i === experiences.length - 1} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
