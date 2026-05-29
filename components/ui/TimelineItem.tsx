import { motion } from 'framer-motion'
import type { Experience } from '@/data/experience'
import { ACCENT_CYCLE, accentText, accentDot } from '@/components/ui/accents'
import { cn } from '@/lib/utils'

interface TimelineItemProps {
  item: Experience
  index: number
}

const chip =
  'rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400'

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative pb-10 pl-8 last:pb-0 sm:pl-10"
    >
      {/* Node on the timeline rail */}
      <span
        className={cn(
          'absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-zinc-50 transition-transform duration-300 group-hover:scale-125 dark:ring-ink-base',
          accentDot[accent]
        )}
      />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="text-lg font-black tracking-tightest text-zinc-900 dark:text-white sm:text-xl">
          {item.role}
        </h3>
        <span className="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">{item.period}</span>
      </div>
      <p className={cn('mb-4 mt-1 text-sm font-semibold', accentText[accent])}>{item.company}</p>

      <ul className="mb-4 max-w-3xl space-y-2">
        {item.description.map((line, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            <span className={cn('mt-2 h-1 w-1 shrink-0 rounded-full', accentDot[accent])} />
            {line}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <span key={t} className={chip}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
