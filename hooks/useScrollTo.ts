import { useCallback } from 'react'

export const NAV_OFFSET = 64 // fixed navbar height; keep in sync with --nav-h / scroll-mt

/**
 * Smooth in-page scroll using native browser scrolling. Pass a hash like
 * "#about", or "#" to scroll to the top. Updates the URL hash without a
 * native jump. Honors prefers-reduced-motion (browser handles it).
 */
export function useScrollTo() {
  return useCallback((href: string) => {
    if (!href.startsWith('#')) return
    const toTop = href === '#'
    const target = toTop ? null : document.querySelector(href)

    if (toTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
      window.scrollTo({ top, behavior: 'smooth' })
    }

    history.replaceState(
      null,
      '',
      toTop ? window.location.pathname + window.location.search : href
    )
  }, [])
}
