import { BookOpen, ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { Project } from '@/data/projects'
import Tile from '@/components/ui/Tile'
import { ACCENT_CYCLE, accentText, accentDot, accentRgb } from '@/components/ui/accents'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index?: number
  large?: boolean
  onOpen: () => void
}

const chip = 'rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400'

const link =
  'inline-flex items-center gap-1.5 rounded text-xs font-semibold text-zinc-500 transition-colors hover:text-accent-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sky dark:text-zinc-400'

export default function ProjectCard({ project, index = 0, large = false, onOpen }: ProjectCardProps) {
  const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length]
  const num = String(index + 1).padStart(2, '0')
  const caseStyle = { '--case-rgb': accentRgb[accent] } as CSSProperties

  return (
    <Tile
      accent={accent}
      onClick={onOpen}
      className="project-card group h-full cursor-pointer transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-tile-hover"
      bodyClassName="flex h-full flex-col p-0 sm:p-0"
    >
      <div className="project-visual" style={caseStyle} aria-hidden>
        <span className="project-number">{num}</span>
        <span className="project-orbit project-orbit-one" />
        <span className="project-orbit project-orbit-two" />
        <span className="project-crosshair" />
      </div>
      <div className={cn('relative flex flex-1 flex-col', large ? 'p-7 sm:p-9' : 'p-6 sm:p-7')}>
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className={cn('flex items-center gap-2 font-mono text-[10px] tracking-[0.14em]', accentText[accent])}>
            <span className={cn('h-1.5 w-1.5 rounded-full', accentDot[accent])} />
            CASE {num}
          </span>
          <ArrowUpRight size={15} className="text-zinc-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-zinc-600" />
        </div>

        <h3 className={cn('font-display font-bold tracking-tightest text-zinc-900 dark:text-white', large ? 'text-2xl sm:text-3xl' : 'text-xl')}>
          {project.title}
        </h3>

        <p className={cn('project-description mb-5 mt-2 flex-none leading-relaxed text-zinc-600 dark:text-zinc-300', large ? 'max-w-2xl text-sm sm:text-base' : 'text-sm')}>
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => <span key={tag} className={chip}>{tag}</span>)}
        </div>

        <div className="mt-auto border-t border-zinc-200 pt-4 dark:border-white/10">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onOpen()
            }}
            className="group/open inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 transition-colors hover:text-accent-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sky dark:text-zinc-300"
            aria-haspopup="dialog"
          >
            <BookOpen size={14} />
            Open case study
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/open:translate-x-0.5 group-hover/open:-translate-y-0.5" />
          </button>

          {(project.github || project.live || project.projectPage) && (
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className={link}><Github size={13} />Code</a>}
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className={link}><ExternalLink size={13} />Live</a>}
              {project.projectPage && <a href={project.projectPage} onClick={(event) => event.stopPropagation()} className={link}><BookOpen size={13} />Details</a>}
            </div>
          )}
        </div>
      </div>
    </Tile>
  )
}
