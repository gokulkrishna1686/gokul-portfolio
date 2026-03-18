import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionContainer from '@/components/ui/SectionContainer'
import ProjectCard from '@/components/ui/ProjectCard'
import { projectsData } from '@/data/projects'

const GAP = 20
const PEEK = 0.08

const extended = [...projectsData, ...projectsData, ...projectsData]
const total = projectsData.length

export default function Projects() {
  const [current, setCurrent] = useState(total)
  const [transitioning, setTransitioning] = useState(true)
  const [paused, setPaused] = useState(false)
  const [cardWidth, setCardWidth] = useState(0)
  const [peekPx, setPeekPx] = useState(0)
  const viewportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current) return
      const w = viewportRef.current.offsetWidth
      const cols = w < 640 ? 1 : 2
      const peek = w * PEEK
      setPeekPx(peek)
      setCardWidth((w * (1 - PEEK * 2) - GAP * (cols - 1)) / cols)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (current <= 0 || current >= total * 2) {
      const t = setTimeout(() => {
        setTransitioning(false)
        setCurrent(c => total + (((c % total) + total) % total))
      }, 350)
      return () => clearTimeout(t)
    }
  }, [current])

  useEffect(() => {
    if (!transitioning) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setTransitioning(true))
      )
      return () => cancelAnimationFrame(id)
    }
  }, [transitioning])

  const next = useCallback(() => setCurrent(i => i + 1), [])
  const prev = () => setCurrent(i => i - 1)

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [next, paused])

  const x = cardWidth > 0 ? peekPx - current * (cardWidth + GAP) : 0
  const activeIndex = ((current % total) + total) % total

  return (
    <SectionContainer id="projects" className="bg-surface-section dark:bg-white/[0.05]">
      <p className="mb-2 text-xs font-semibold tracking-widest text-accent dark:text-accent-light uppercase">
        Projects
      </p>
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-ink dark:text-white">
        Things I&apos;ve built
      </h2>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          onClick={prev}
          aria-label="Previous project"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 shadow-md text-ink-muted dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors"
        >
          <ChevronLeft size={16} />
        </button>

        <div
          ref={viewportRef}
          className="overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{ x }}
            transition={
              transitioning
                ? { type: 'spring', stiffness: 280, damping: 30, mass: 0.8 }
                : { duration: 0 }
            }
          >
            {extended.map((project, i) => (
              <div
                key={i}
                style={{ minWidth: cardWidth || `calc(${(1 - PEEK * 2) * 100}% )` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={next}
          aria-label="Next project"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 shadow-md text-ink-muted dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="mt-6 flex justify-center items-center gap-2">
        {projectsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(total + i)}
            aria-label={`Project ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-5 h-1.5 bg-accent dark:bg-accent-light'
                : 'w-1.5 h-1.5 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </SectionContainer>
  )
}
