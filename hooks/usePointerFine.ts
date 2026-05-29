import { useEffect, useState } from 'react'

/**
 * True only on devices with a fine pointer (mouse/trackpad). Used to gate
 * pointer-only flourishes (custom cursor, magnetic buttons, 3D tilt, spotlight)
 * so touch/coarse-pointer devices get a clean, static experience.
 * Returns false on the first render (SSR/touch-safe) until the effect runs.
 */
export function usePointerFine() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(pointer: fine)')
    const update = () => setFine(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return fine
}
