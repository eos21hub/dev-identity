import { cn } from '@/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  dot?: boolean
  dotColor?: string
}

export function Badge({ children, className, dot, dotColor = 'bg-emerald-500' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold',
        'bg-primary-50 text-primary-600 border border-primary-100',
        className,
      )}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse-dot', dotColor)} />}
      {children}
    </span>
  )
}

export function SkillTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        'bg-gray-100 text-gray-600 border border-gray-200',
        'hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50',
        'transition-colors duration-150 cursor-default',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function TechTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold',
        'bg-primary-50 text-primary-600 border border-primary-100',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function ProjectTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        'bg-white text-gray-600 border border-gray-200',
        className,
      )}
    >
      {children}
    </span>
  )
}
