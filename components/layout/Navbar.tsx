import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollTo } from '@/hooks/useScrollTo'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="h-9 w-9" />

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:text-zinc-900 dark:border-white/10 dark:text-zinc-400 dark:hover:text-white',
        focusRing
      )}
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const scrollTo = useScrollTo()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: mark the section currently in the upper viewport as active.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-25% 0px -60% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(href)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-zinc-300/80 bg-[#f3f2ec]/90 backdrop-blur-md dark:border-white/10 dark:bg-ink-base/85'
          : 'border-b border-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          onClick={(e) => handleNav(e, '#')}
          className={cn('font-display relative flex h-9 w-9 items-center justify-center border border-zinc-300 text-sm font-bold tracking-tightest text-zinc-900 transition-colors hover:border-zinc-500 dark:border-white/15 dark:text-white dark:hover:border-white/40', focusRing)}
        >
          GK
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'group relative rounded text-[11px] font-semibold uppercase tracking-wider transition-colors',
                    isActive
                      ? 'text-zinc-900 dark:text-white'
                      : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
                    focusRing
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1.5 left-0 h-px bg-zinc-900 transition-all duration-300 dark:bg-white',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 dark:border-white/10 dark:text-zinc-400 md:hidden',
              focusRing
            )}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-zinc-200 bg-white/95 backdrop-blur-md dark:border-white/10 dark:bg-ink-base/95 md:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors',
                      isActive
                        ? 'bg-zinc-100 text-zinc-900 dark:bg-white/5 dark:text-white'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white',
                      focusRing
                    )}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
