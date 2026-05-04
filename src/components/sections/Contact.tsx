import { type FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

const contactItems = [
  {
    Icon: Mail,
    label: 'Email',
    // Swap with your real email address if different
    value: 'emmaoppongsarpong21@gmail.com',
    href: 'mailto:emmaoppongsarpong21@gmail.com',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Kumasi, Ghana 🇬🇭',
    href: undefined,
  },
  {
    Icon: Clock,
    label: 'Availability',
    value: 'Open to opportunities',
    href: undefined,
  },
]

// WhatsApp number: replace +233XXXXXXXXX with your real number
const WHATSAPP_URL = 'https://wa.me/233547692027'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay: i * 0.08 },
  }),
}

function WhatsappIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name    = (form.elements.namedItem('name')    as HTMLInputElement).value.trim()
    const email   = (form.elements.namedItem('email')   as HTMLInputElement).value.trim()
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()

    if (!name || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setStatus('sending')
    // Integrate Formspree / EmailJS / your own endpoint here
    setTimeout(() => {
      setStatus('sent')
      form.reset()
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Let's Connect"
          title="Let's Transform Your Ideas into Reality!! 😌"
          subtitle="Have a project in mind or just want to say hello? I reply within 24 hours."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Info column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactItems.map(({ Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Icon size={17} className="text-primary-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-semibold text-gray-800 hover:text-primary-600 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-gray-800">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.a
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] text-white
                text-sm font-semibold w-fit mt-2
                shadow-[0_4px_14px_rgba(37,211,102,0.28)] hover:bg-[#1da851]
                hover:shadow-[0_6px_20px_rgba(37,211,102,0.38)]
                transition-all duration-200 hover:-translate-y-0.5"
            >
              <WhatsappIcon />
              Chat on WhatsApp
            </motion.a>
          </div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-gray-700">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl
                      outline-none transition-all duration-200
                      focus:border-primary-400 focus:ring-2 focus:ring-primary-100
                      placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-700">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="me@gmail.com"
                    className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl
                      outline-none transition-all duration-200
                      focus:border-primary-400 focus:ring-2 focus:ring-primary-100
                      placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-gray-700">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry, freelance work…"
                  className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl
                    outline-none transition-all duration-200
                    focus:border-primary-400 focus:ring-2 focus:ring-primary-100
                    placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-gray-700">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or what you'd like to discuss…"
                  className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl
                    outline-none transition-all duration-200 resize-y
                    focus:border-primary-400 focus:ring-2 focus:ring-primary-100
                    placeholder:text-gray-300"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full rounded-xl"
                disabled={status === 'sending' || status === 'sent'}
              >
                {status === 'idle' && <><Send size={15} /> Send Message</>}
                {status === 'sending' && <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>}
                {status === 'sent' && <><CheckCircle size={15} /> Message Sent!</>}
                {status === 'error' && <><Send size={15} /> Please fill required fields</>}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
