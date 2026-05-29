import { useRef, type PointerEvent, type ReactNode } from 'react'
import { usePointerFine } from '@/hooks/usePointerFine'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  className?: string
  /** Glow color (rgba, kept low-opacity for a tasteful effect). */
  color?: string
  /** Glow diameter in px. */
  size?: number
}

/**
 * Subtle radial glow that follows the cursor across the element. Writes CSS
 * vars directly (no React re-render). Inert on coarse-pointer devices.
 */
export default function SpotlightCard({
  children,
  className,
  color = 'rgba(129,140,248,0.15)',
  size = 360,
}: Props) {
  const fine = usePointerFine()
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={fine ? onMove : undefined}
      className={cn('group/spot relative', className)}
    >
      {fine && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
          style={{
            background: `radial-gradient(${size}px circle at var(--mx, 50%) var(--my, 50%), ${color}, transparent 65%)`,
          }}
        />
      )}
      {children}
    </div>
  )
}
