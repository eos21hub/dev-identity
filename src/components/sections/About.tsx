import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

const stats = [
  { value: '15+', label: 'Projects Shipped' },
  { value: '3+',  label: 'Years Experience' },
  { value: '3',   label: 'Companies' },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 },
  }),
}

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-primary-600 rounded-2xl opacity-10" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-emerald-500 rounded-2xl opacity-8" />
              <div className="relative w-full aspect-[4/5] rounded-3xl bg-gradient-to-br
                from-blue-50 via-blue-100 to-emerald-50 border border-gray-200
                overflow-hidden flex items-center justify-center">
                {/* Replace contents with: <img src="/photo.jpg" alt="Emmanuel" className="w-full h-full object-cover" /> */}
                <div className="flex flex-col items-center gap-3 text-center px-8">
                  <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center">
                    <svg className="text-blue-400 w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <p className="text-xs text-blue-400 font-medium">Replace with your photo</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <div className="lg:col-span-3">
            <SectionHeader
              label="About Me"
              title={<>Building the future,<br />one app at a time</>}
            />

            <div className="mt-6 space-y-4">
              {[
                `I'm a Flutter and full-stack developer based in Ghana, passionate about building digital
                products that solve real problems for real people. With 3+ years of experience, I specialise
                in cross-platform mobile development and scalable web systems.`,
                `I've shipped products across healthcare, fintech, emergency services, and agri-tech — working
                from architecture through deployment. Whether it's a Flutter mobile app, a React dashboard,
                or a Node.js API, I focus on clean architecture, great UX, and code that lasts.`,
                `Outside of client work, I mentor junior developers and contribute to open source. I believe
                in building technology that uplifts communities — especially across Africa.`,
              ].map((text, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="text-gray-500 leading-[1.8]"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-6"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-black text-primary-600 tracking-tight">{value}</p>
                  <p className="mt-1 text-xs text-gray-400 font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
