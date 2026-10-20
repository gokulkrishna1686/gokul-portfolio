import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Github, X } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { Project } from '@/data/projects'
import { ACCENT_CYCLE, accentRgb, accentText } from '@/components/ui/accents'

type Props = {
  project: Project
  index: number
  onClose: () => void
}

const linkClass =
  'project-dialog-link inline-flex items-center gap-1.5 border px-3 py-2 text-xs font-semibold text-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:text-zinc-200 dark:focus-visible:ring-offset-ink-base'

export default function ProjectDialog({ project, index, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const number = String(index + 1).padStart(2, '0')
  const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length]
  const caseStyle = { '--case-rgb': accentRgb[accent] } as CSSProperties

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  return (
    <motion.div
      className="project-dialog-backdrop fixed inset-0 z-[100] grid place-items-center p-4 sm:p-6"
      style={caseStyle}
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        style={caseStyle}
        className="project-dialog-panel relative w-full max-w-2xl overflow-hidden border bg-[#fffef9] dark:bg-ink-raised"
        initial={{ opacity: 0, y: 36, scale: 0.965, rotateX: -4 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        exit={{ opacity: 0, y: 20, scale: 0.98, rotateX: 2 }}
        transition={{ type: 'spring', stiffness: 320, damping: 27, mass: 0.72 }}
      >
        <motion.div
          aria-hidden
          className="h-1 origin-left bg-[rgb(var(--case-rgb))]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.42, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="max-h-[calc(100vh-3rem)] overflow-y-auto p-6 sm:p-9">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className={`font-mono text-[10px] font-semibold tracking-[0.16em] ${accentText[accent]}`}>CASE STUDY · {number}</p>
              <h2 id="project-dialog-title" className="mt-3 font-display text-3xl font-bold tracking-tightest text-zinc-900 dark:text-white sm:text-4xl">
                {project.title}
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="project-dialog-link flex h-9 w-9 shrink-0 items-center justify-center border text-zinc-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:text-zinc-400 dark:focus-visible:ring-offset-ink-base"
              aria-label="Close project details"
            >
              <X size={17} />
            </button>
          </div>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="project-dialog-tag border bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-white/5 dark:text-zinc-300">
                {tag}
              </span>
            ))}
          </div>

          {(project.github || project.live || project.projectPage) && (
            <div className="mt-8 flex flex-wrap gap-2 border-t border-zinc-200 pt-5 dark:border-white/10">
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}><Github size={14} /> View code</a>}
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClass}><ExternalLink size={14} /> Visit project</a>}
              {project.projectPage && <a href={project.projectPage} className={linkClass}><BookOpen size={14} /> Project notes</a>}
            </div>
          )}
        </div>
      </motion.section>
    </motion.div>
  )
}
