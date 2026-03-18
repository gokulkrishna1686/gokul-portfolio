import { motion } from 'framer-motion'
import type { Experience } from '@/data/experience'

interface TimelineItemProps {
  item: Experience
  index: number
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 sm:p-7"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-ink dark:text-white">{item.role}</h3>
        <span className="shrink-0 text-xs text-ink-muted dark:text-slate-500">{item.period}</span>
      </div>
      <p className="mt-0.5 mb-3 text-xs font-medium text-accent dark:text-accent-light">{item.company}</p>
      <ul className="mb-3 space-y-1">
        {item.description.map((line, i) => (
          <li key={i} className="flex gap-2 text-xs text-ink-muted dark:text-slate-400 leading-relaxed">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
            {line}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent dark:text-accent-light"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
