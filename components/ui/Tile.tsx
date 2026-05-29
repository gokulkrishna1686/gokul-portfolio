import { type ReactNode } from 'react'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { type Accent, spotlightColor } from '@/components/ui/accents'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  className?: string
  /** Inner padding wrapper class (set to 'p-0' for full-bleed tiles). */
  bodyClassName?: string
  accent?: Accent
  /** Render the animated multi-hue hairline across the top edge. */
  hairline?: boolean
  /** Cursor-following spotlight glow (auto-disabled on touch). */
  spotlight?: boolean
}

/**
 * The bento/section building block: a neutral tile with a 1px border, an
 * optional cursor spotlight, and an optional animated gradient hairline.
 */
export default function Tile({
  children,
  className,
  bodyClassName,
  accent = 'indigo',
  hairline = false,
  spotlight = true,
}: Props) {
  const body = <div className={cn('relative h-full p-6 sm:p-7', bodyClassName)}>{children}</div>

  return (
    <div
      className={cn(
        'tile group relative overflow-hidden hover:border-zinc-300 dark:hover:border-white/20',
        className
      )}
    >
      {hairline && <div className="hairline absolute inset-x-0 top-0 z-10" aria-hidden />}
      {spotlight ? (
        <SpotlightCard color={spotlightColor[accent]} className="h-full">
          {body}
        </SpotlightCard>
      ) : (
        body
      )}
    </div>
  )
}
