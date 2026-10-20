import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectDialog from '@/components/ui/ProjectDialog'
import { projectsData, type Project } from '@/data/projects'

// Asymmetric bento: rows alternate wide + narrow (4/2, then 2/4) on desktop.
const layout = [
  { span: 'lg:col-span-4', large: true },
  { span: 'lg:col-span-2', large: false },
  { span: 'lg:col-span-2', large: false },
  { span: 'lg:col-span-4', large: true },
]

const INITIAL_PROJECT_COUNT = 4

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECT_COUNT)
  const [activeProject, setActiveProject] = useState<{ project: Project; index: number } | null>(null)
  const showAll = visibleCount === projectsData.length
  const visibleProjects = projectsData.slice(0, visibleCount)
  const hiddenCount = Math.max(projectsData.length - INITIAL_PROJECT_COUNT, 0)

  return (
    <SectionContainer id="projects">
      <SectionHeading index="03" eyebrow="Projects" accent="sky" title="Selected work." />
      <motion.div
        id="project-grid"
        layout
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {visibleProjects.map((project, i) => {
            const { span, large } = layout[i % layout.length]
            return (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 24, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.985 }}
                transition={{ duration: 0.45, delay: i >= INITIAL_PROJECT_COUNT ? (i - INITIAL_PROJECT_COUNT) * 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full ${span}`}
              >
                <ProjectCard project={project} index={i} large={large} onOpen={() => setActiveProject({ project, index: i })} />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {hiddenCount > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => (count === projectsData.length ? INITIAL_PROJECT_COUNT : projectsData.length))}
            aria-expanded={showAll}
            aria-controls="project-grid"
            className="action-corner group inline-flex items-center gap-2 border border-zinc-300 bg-[#fffef9]/70 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-accent-sky hover:text-accent-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sky dark:border-white/15 dark:bg-ink-raised/70 dark:text-zinc-200 dark:hover:border-accent-sky dark:hover:text-accent-sky"
          >
            {showAll ? 'Show less' : `See ${hiddenCount} more projects`}
            <motion.span animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.25 }}>
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </motion.span>
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {activeProject && (
          <ProjectDialog
            project={activeProject.project}
            index={activeProject.index}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionContainer>
  )
}
