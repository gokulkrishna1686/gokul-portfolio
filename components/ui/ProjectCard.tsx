import { Github, ExternalLink, BookOpen } from 'lucide-react'
import type { Project } from '@/data/projects'
import Tile from '@/components/ui/Tile'
import { ACCENT_CYCLE, accentText, accentDot } from '@/components/ui/accents'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index?: number
  large?: boolean
}

const chip =
  'rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400'

const link =
  'inline-flex items-center gap-1.5 rounded text-xs font-semibold text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400'

export default function ProjectCard({ project, index = 0, large = false }: ProjectCardProps) {
  const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length]
  const num = String(index + 1).padStart(2, '0')

  return (
    <Tile
      accent={accent}
      className="group h-full transition-[transform,border-color] duration-300 hover:-translate-y-1"
      bodyClassName={cn('flex h-full flex-col', large ? 'p-7 sm:p-9' : 'p-6 sm:p-7')}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className={cn('h-1.5 w-1.5 rounded-full', accentDot[accent])} />
        <span className={cn('font-mono text-xs', accentText[accent])}>{num}</span>
      </div>

      <h3
        className={cn(
          'font-display font-bold tracking-tightest text-zinc-900 dark:text-white',
          large ? 'text-2xl sm:text-3xl' : 'text-lg'
        )}
      >
        {project.title}
      </h3>

      <p
        className={cn(
          'mb-5 mt-2 flex-1 leading-relaxed text-zinc-600 dark:text-zinc-300',
          large ? 'max-w-2xl text-sm sm:text-base' : 'text-sm'
        )}
      >
        {project.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className={chip}>
            {tag}
          </span>
        ))}
      </div>

      {(project.github || project.live || project.projectPage) && (
        <div className="flex items-center gap-4 border-t border-zinc-200 pt-4 dark:border-white/10">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={link}>
              <Github size={13} />
              Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className={link}>
              <ExternalLink size={13} />
              Live
            </a>
          )}
          {project.projectPage && (
            <a href={project.projectPage} className={link}>
              <BookOpen size={13} />
              Details
            </a>
          )}
        </div>
      )}
    </Tile>
  )
}
