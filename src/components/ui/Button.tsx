import { cn } from '@/utils/cn'
import type { ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'ghost' | 'whatsapp'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant
  size?: Size
  asChild?: boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-white shadow-[0_4px_14px_rgba(37,99,235,0.28)] hover:bg-primary-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.38)]',
  ghost:
    'bg-transparent text-gray-900 border border-gray-200 hover:border-primary-600 hover:text-primary-600',
  whatsapp:
    'bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.28)] hover:bg-[#1da851] hover:shadow-[0_6px_20px_rgba(37,211,102,0.38)]',
}

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-sm px-5 py-2.5 gap-2',
  lg: 'text-base px-6 py-3 gap-2',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-full',
        'transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
        '-translate-y-0 hover:-translate-y-0.5',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

interface LinkButtonProps extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant
  size?: Size
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-full',
        'transition-all duration-200 ease-out focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
        '-translate-y-0 hover:-translate-y-0.5',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
