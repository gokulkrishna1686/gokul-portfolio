import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  id: string
  className?: string
  /** Full-bleed top border that separates this section from the previous one. */
  divider?: boolean
  children: React.ReactNode
}

export default function SectionContainer({
  id,
  className,
  divider = true,
  children,
}: SectionContainerProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'scroll-mt-[var(--nav-h)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24',
        divider && 'border-t border-zinc-200 dark:border-white/10',
        className
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  )
}
