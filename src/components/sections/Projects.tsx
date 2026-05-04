import { motion } from 'framer-motion'
import { ExternalLink, Github, HeartPulse, Leaf, MapPin, FileText } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectTag } from '@/components/ui/Badge'
import { projects } from '@/data/projects'
import type { Project } from '@/types'

const thumbIcons = {
  hivemedix:      HeartPulse,
  agrolink:       Leaf,
  'kayd-emergency': MapPin,
  'invoice-web':  FileText,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

function ProjectCard({ project }: { project: Project }) {
  const ThumbIcon = thumbIcons[project.id as keyof typeof thumbIcons] ?? FileText

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: '0 28px 56px rgba(0,0,0,0.11)' }}
      transition={{ type: 'spring', stiffness: 250, damping: 24 }}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-card flex flex-col"
    >
      {/* Thumbnail */}
      <div className={`h-48 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center relative overflow-hidden`}>
        <ThumbIcon
          size={68}
          strokeWidth={1.25}
          style={{ color: project.strokeColor, opacity: 0.7 }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((t) => <ProjectTag key={t}>{t}</ProjectTag>)}
        </div>

        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">{project.title}</h3>

        <p className="text-sm text-gray-500 leading-[1.8] flex-1 mb-5">{project.description}</p>

        <div className="flex gap-2 mt-auto">
          {project.links.demo && (
            <a
              href={project.links.demo}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold
                text-primary-600 border border-primary-200 bg-primary-50
                hover:bg-primary-600 hover:text-white hover:border-primary-600
                transition-all duration-200"
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold
                text-gray-600 border border-gray-200 bg-gray-50
                hover:bg-gray-900 hover:text-white hover:border-gray-900
                transition-all duration-200"
            >
              <Github size={12} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50/70">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Featured Work"
          title="Projects I've Built"
          subtitle="Real-world products designed, built, and shipped — spanning mobile, web, and full-stack."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
