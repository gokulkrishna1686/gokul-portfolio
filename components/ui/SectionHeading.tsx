import { type ReactNode } from 'react'
import { type Accent, accentText } from '@/components/ui/accents'
import { cn } from '@/lib/utils'

type Props = {
  index?: string
  eyebrow: string
  title: ReactNode
  accent?: Accent
  className?: string
}

/** Section eyebrow (index + label) over a bold typographic heading. */
export default function SectionHeading({ index, eyebrow, title, accent = 'indigo', className }: Props) {
  return (
    <div className={cn('mb-10', className)}>
      <div className={cn('section-kicker mb-3', accentText[accent])}>
        <div className="flex items-center gap-2.5">
          {index && <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{index}</span>}
          <span className="text-xs font-semibold uppercase tracking-wider">{eyebrow}</span>
        </div>
      </div>
      <h2 className="font-display text-balance text-3xl font-bold tracking-tightest text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  )
}
