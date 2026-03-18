import { motion } from 'framer-motion'
import { Code2, Layout, Server, Brain, Database, Wrench } from 'lucide-react'
import SectionContainer from '@/components/ui/SectionContainer'
import { skillsData } from '@/data/skills'

const categoryIcons: Record<string, React.ElementType> = {
  'Languages':    Code2,
  'Frontend':     Layout,
  'Backend':      Server,
  'AI / ML':      Brain,
  'Database':     Database,
  'Tools & Infra': Wrench,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  return (
    <SectionContainer id="skills">
      <p className="mb-2 text-xs font-semibold tracking-widest text-accent dark:text-accent-light uppercase">
        Skills
      </p>
      <h2 className="mb-8 text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-white">
        What I work with
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillsData.map((category) => {
          const Icon = categoryIcons[category.name] ?? Code2
          return (
            <motion.div
              key={category.name}
              variants={cardVariant}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-5"
            >
              {/* Header */}
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                  <Icon size={15} className="text-accent dark:text-accent-light" />
                </div>
                <span className="text-sm font-semibold text-ink dark:text-white">
                  {category.name}
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-0.5 text-xs font-medium text-ink-muted dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionContainer>
  )
}
