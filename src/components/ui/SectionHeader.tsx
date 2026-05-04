import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface SectionHeaderProps {
  label: string
  title: React.ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={cn(align === 'center' && 'text-center', className)}
    >
      <motion.span
        variants={itemVariants}
        className="block font-mono text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
      >
        {label}
      </motion.span>
      <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={cn(
            'mt-4 text-gray-500 leading-relaxed text-base sm:text-lg',
            align === 'left' ? 'max-w-xl' : 'max-w-2xl mx-auto',
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
