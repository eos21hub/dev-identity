import { AnimatePresence, motion } from 'framer-motion'
import { Info, X } from 'lucide-react'

interface ToastProps {
  message: string
  visible: boolean
  onDismiss: () => void
}

export function Toast({ message, visible, onDismiss }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0,  scale: 1 }}
          exit={{  opacity: 0, y: 12,  scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50
            flex items-center gap-3 px-5 py-3.5 rounded-2xl
            bg-gray-900 text-white shadow-card-xl
            border border-white/10 max-w-sm w-[calc(100vw-3rem)]"
          role="alert"
        >
          <Info size={16} className="text-primary-400 flex-shrink-0" />
          <p className="text-sm font-medium leading-snug flex-1">{message}</p>
          <button
            onClick={onDismiss}
            aria-label="Dismiss"
            className="text-white/40 hover:text-white transition-colors flex-shrink-0"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
