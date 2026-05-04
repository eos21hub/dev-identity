import { Github, Linkedin, Twitter } from 'lucide-react'

const socials = [
  { label: 'GitHub',   href: 'https://github.com/eos21hub',    Icon: Github },
  // { label: 'LinkedIn', href: 'https://linkedin.com/',  Icon: Linkedin },
  // { label: 'Twitter',  href: 'https://twitter.com/',   Icon: Twitter },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
            href="#hero"
            className="transition-all duration-200 hover:scale-105"
          >
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          </a>

        <p className="text-sm text-gray-400 order-last sm:order-none">
          © {new Date().getFullYear()} Emmanuel Oppong-Sarpong. Ideas meet professionalism.
        </p>

        <div className="flex items-center gap-2">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white
                text-gray-500 hover:border-primary-300 hover:text-primary-600
                transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-md"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
