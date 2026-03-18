import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkillBadgeProps {
  skill: string
  className?: string
}

export default function SkillBadge({ skill, className }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
        'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300',
        'border border-slate-200 dark:border-white/10',
        'cursor-default select-none',
        className
      )}
    >
      {skill}
    </motion.span>
  )
}
