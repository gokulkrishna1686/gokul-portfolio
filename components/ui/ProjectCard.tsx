import { motion } from 'framer-motion'
import { Github, ExternalLink, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'group relative flex flex-col rounded-2xl p-4 sm:p-6',
        'bg-white dark:bg-white/5',
        'border border-slate-200 dark:border-white/10',
        'shadow-sm hover:shadow-md dark:hover:shadow-black/20',
        'transition-shadow duration-300'
      )}
    >
      <h3 className="mb-3 text-base font-semibold text-ink dark:text-white leading-snug">
        {project.title}
      </h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-muted dark:text-slate-400">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent dark:text-accent-light"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.github || project.live || project.projectPage) && (
        <div className="flex items-center gap-2 border-t border-slate-100 dark:border-white/5 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-ink-muted dark:text-slate-400 hover:text-accent dark:hover:text-accent-light hover:bg-accent/5 transition-colors"
            >
              <Github size={13} />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-ink-muted dark:text-slate-400 hover:text-accent dark:hover:text-accent-light hover:bg-accent/5 transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          {project.projectPage && (
            <a
              href={project.projectPage}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-ink-muted dark:text-slate-400 hover:text-accent dark:hover:text-accent-light hover:bg-accent/5 transition-colors"
            >
              <BookOpen size={13} />
              Project Page
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}
