import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Github, PenLine, Activity } from 'lucide-react'
import { LinkButton } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

const socials = [
  { label: 'GitHub',   href: 'https://github.com/eos21hub',   Icon: Github },
  // { label: 'LinkedIn', href: 'https://linkedin.com/', Icon: Linkedin },
  // { label: 'Twitter',  href: 'https://twitter.com/',  Icon: Twitter },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[70px] overflow-hidden
        bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/40"
    >
      {/* decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full
        bg-gradient-radial from-primary-100/60 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full
        bg-gradient-radial from-emerald-100/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={item}>
              <Badge dot dotColor="bg-emerald-500">
                Available for new projects
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-5 text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-black tracking-tighter leading-[1.1] text-gray-900"
            >
              Hi, I'm{' '}
              <span className="relative inline-block text-primary-600">
                Emmanuel
                <span className="absolute inset-x-0 bottom-1 h-2.5 bg-primary-100 rounded -z-10" />
              </span>
              <br />
              Oppong-Sarpong
            </motion.h1>

            <motion.p variants={item} className="mt-5 text-lg text-gray-500 leading-relaxed max-w-[480px]">
              Flutter &amp; Full-Stack Developer crafting high-performance mobile apps and web
              platforms — from concept to deployment, built to last.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="#projects" variant="primary" size="lg">
                View My Work <ArrowRight size={16} />
              </LinkButton>
              <LinkButton href="#contact" variant="ghost" size="lg">
                <MessageSquare size={16} /> Get in Touch
              </LinkButton>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              <span className="text-xs font-medium text-gray-400">Find me on</span>
              <div className="flex gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white
                      text-gray-500 hover:border-primary-300 hover:text-primary-600
                      transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-md"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right column — avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Avatar card */}
              <div className="w-[300px] h-[380px] rounded-3xl border-2 border-white shadow-card-xl overflow-hidden">
                <img
                  src="/image1.png"
                  alt="Emmanuel Oppong-Sarpong"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Stat card 1 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-14 top-[10%] bg-white rounded-2xl border border-gray-200
                  shadow-card-lg p-3 flex items-center gap-3 min-w-[140px]"
              >
                <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <PenLine size={16} className="text-primary-600" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium leading-none">Projects Built</p>
                  <p className="text-base font-bold text-gray-900 mt-0.5">5+</p>
                </div>
              </motion.div>

              {/* Stat card 2 */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -left-16 bottom-[18%] bg-white rounded-2xl border border-gray-200
                  shadow-card-lg p-3 flex items-center gap-3 min-w-[148px]"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Activity size={16} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium leading-none">Years Experience</p>
                  <p className="text-base font-bold text-gray-900 mt-0.5">3+</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
