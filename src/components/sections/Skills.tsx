import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { skillCategories } from '@/data/skills'
import type { SkillCategory } from '@/types'

/* ─── Brand SVG logos ─────────────────────────────────────────────────── */

function FlutterLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-label="Flutter">
      {/* Upper blade */}
      <path d="M21 3L37 19H27L11 3Z" fill="#54C5F8" />
      <path d="M21 3L11 3L20 12H30Z" fill="#01579B" opacity="0.8" />
      {/* Lower blade */}
      <path d="M27 19L37 19L21 35L11 25Z" fill="#29B6F6" />
      <path d="M21 35L11 25L17 31L21 39Z" fill="#01579B" />
      <path d="M21 27L27 19L21 35Z" fill="#0288D1" opacity="0.6" />
    </svg>
  )
}

function ReactLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-label="React">
      <circle cx="22" cy="22" r="3.5" fill="#61DAFB" />
      <ellipse cx="22" cy="22" rx="19" ry="7" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="22" cy="22" rx="19" ry="7" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 22 22)" />
      <ellipse cx="22" cy="22" rx="19" ry="7" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 22 22)" />
    </svg>
  )
}

function NodeLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-label="Node.js">
      {/* Hexagon */}
      <path
        d="M21 3L36 12V28L21 37L6 28V12Z"
        stroke="#68A063"
        strokeWidth="1.5"
        fill="rgba(104,160,99,0.08)"
      />
      {/* "≡" bars suggesting code/server */}
      <rect x="14" y="17" width="14" height="2" rx="1" fill="#68A063" />
      <rect x="14" y="21" width="10" height="2" rx="1" fill="#68A063" opacity="0.7" />
      <rect x="14" y="25" width="12" height="2" rx="1" fill="#68A063" opacity="0.5" />
    </svg>
  )
}

function TerminalLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-label="DevTools">
      {/* Window chrome */}
      <rect x="3" y="7" width="36" height="28" rx="5" stroke="#94A3B8" strokeWidth="1.5" fill="rgba(148,163,184,0.07)" />
      {/* Traffic lights */}
      <circle cx="11" cy="14" r="2.5" fill="#EF4444" opacity="0.75" />
      <circle cx="18" cy="14" r="2.5" fill="#F59E0B" opacity="0.75" />
      <circle cx="25" cy="14" r="2.5" fill="#22C55E" opacity="0.75" />
      {/* Separator */}
      <line x1="3" y1="19" x2="39" y2="19" stroke="#334155" strokeWidth="1" />
      {/* Prompt */}
      <path d="M10 28L15 23L10 18" stroke="#22C55E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="18" y="26.5" width="10" height="2" rx="1" fill="#94A3B8" opacity="0.6" />
    </svg>
  )
}

/* ─── Header configs per category ─────────────────────────────────────── */

const headerStyles: Record<string, { from: string; to: string; Logo: () => JSX.Element }> = {
  mobile: {
    from: '#01579B',
    to:   '#0288D1',
    Logo: FlutterLogo,
  },
  frontend: {
    from: '#1a1f2e',
    to:   '#20232A',
    Logo: ReactLogo,
  },
  backend: {
    from: '#14532d',
    to:   '#1a4731',
    Logo: NodeLogo,
  },
  tools: {
    from: '#1c2128',
    to:   '#0d1117',
    Logo: TerminalLogo,
  },
}

const chipColors: Record<string, string> = {
  mobile:   'bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100',
  frontend: 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100',
  backend:  'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100',
  tools:    'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100',
}

/* ─── Animations ──────────────────────────────────────────────────────── */

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const card = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

/* ─── SkillCard ───────────────────────────────────────────────────────── */

function SkillCard({ category }: { category: SkillCategory }) {
  const style  = headerStyles[category.id] ?? headerStyles.tools
  const chips  = chipColors[category.id] ?? chipColors.tools
  const { Logo } = style

  return (
    <motion.div
      variants={card}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.13)' }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-card flex flex-col group"
    >
      {/* ── Gradient header ── */}
      <div
        className="relative flex flex-col items-center justify-center gap-3 pt-7 pb-5 px-4 overflow-hidden"
        style={{ background: `linear-gradient(145deg, ${style.from}, ${style.to})` }}
      >
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize:  '18px 18px',
          }}
        />
        {/* Glow blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full blur-2xl opacity-30 bg-white pointer-events-none" />

        <div className="relative z-10 drop-shadow-lg">
          <Logo />
        </div>
        <p className="relative z-10 text-xs font-bold tracking-widest uppercase text-white/80 font-mono">
          {category.title}
        </p>
      </div>

      {/* ── Skill chips ── */}
      <div className="p-5 flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
              border transition-colors duration-150 cursor-default ${chips}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Section ─────────────────────────────────────────────────────────── */

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Skills & Tech"
          title="My Technical Toolkit"
          subtitle="Technologies I use daily to build scalable mobile apps, web platforms, and backend systems."
        />

        <motion.div
          variants={container}
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
