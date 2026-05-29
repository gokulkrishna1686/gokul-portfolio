import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SocialHoverCardProps {
  href: string
  label: string
  handle: string
  children: React.ReactNode
  className?: string
}

export default function SocialHoverCard({
  href,
  label,
  handle,
  children,
  className,
}: SocialHoverCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
        {children}
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={cn(
              'pointer-events-none absolute bottom-full left-1/2 z-50 mb-2.5',
              'w-40 -translate-x-1/2 sm:w-44',
              'rounded-lg border border-zinc-200 bg-white shadow-lg shadow-black/5 dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/30',
              'px-3 py-2.5'
            )}
          >
            <p className="text-xs font-semibold text-zinc-900 dark:text-white">{label}</p>
            <p className="mt-0.5 truncate text-xs text-zinc-500 dark:text-zinc-400">{handle}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
