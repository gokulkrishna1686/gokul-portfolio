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
      <div className="mb-3 flex items-center gap-2.5">
        {index && <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{index}</span>}
        <span className={cn('text-xs font-semibold uppercase tracking-wider', accentText[accent])}>
          {eyebrow}
        </span>
      </div>
      <h2 className="text-balance text-3xl font-black tracking-tightest text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  )
}
