import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useNavbar } from '@/hooks/useNavbar'
import { useActiveSection } from '@/hooks/useActiveSection'

const SECTION_IDS = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
]

export function Navbar() {
  const { scrolled, menuOpen, toggleMenu, closeMenu } = useNavbar()
  const activeSection = useActiveSection(SECTION_IDS)

  const isActive = useMemo(
    () => (href: string) => activeSection === href.replace('#', ''),
    [activeSection],
  )

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-[70px] transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="transition-all duration-200 hover:scale-105"
          >
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  'relative text-sm font-medium transition-colors duration-200 py-1',
                  'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full',
                  'after:bg-primary-600 after:transition-all after:duration-200',
                  isActive(href)
                    ? 'text-primary-600 after:w-full'
                    : 'text-gray-500 hover:text-gray-900 after:w-0 hover:after:w-full',
                )}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-semibold
                hover:bg-primary-700 transition-all duration-200 shadow-[0_2px_8px_rgba(37,99,235,0.25)]
                hover:shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            <motion.nav
              key="drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-[70px] left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg md:hidden"
              aria-label="Mobile"
            >
              <div className="flex flex-col p-4 gap-1">
                {NAV_LINKS.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className={cn(
                      'px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                      isActive(href)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    )}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 px-4 py-3 rounded-xl bg-primary-600 text-white text-sm font-semibold text-center
                    hover:bg-primary-700 transition-colors"
                >
                  Let's Talk
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
