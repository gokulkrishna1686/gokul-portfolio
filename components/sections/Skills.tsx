import { motion, type Variants } from 'framer-motion'
import { Code2, Layout, Server, Brain, Database, Wrench } from 'lucide-react'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import { ACCENT_CYCLE, accentText, accentDot } from '@/components/ui/accents'
import { skillsData } from '@/data/skills'
import { cn } from '@/lib/utils'

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  'AI / ML': Brain,
  Database: Database,
  'Tools & Infra': Wrench,
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const rowVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  return (
    <SectionContainer id="skills">
      <SectionHeading index="03" eyebrow="Skills" accent="emerald" title="Tools of the trade." />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border-t border-zinc-200 dark:border-white/10"
      >
        {skillsData.map((category, i) => {
          const Icon = categoryIcons[category.name] ?? Code2
          const accent = ACCENT_CYCLE[i % ACCENT_CYCLE.length]
          return (
            <motion.div
              key={category.name}
              variants={rowVariant}
              className="group grid grid-cols-1 gap-3 border-b border-zinc-200 py-6 dark:border-white/10 sm:grid-cols-[200px_1fr] sm:items-center sm:gap-10"
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 transition-colors group-hover:border-current dark:border-white/10',
                    accentText[accent]
                  )}
                >
                  <Icon size={16} />
                </span>
                <span className="text-base font-black tracking-tightest text-zinc-900 dark:text-white">
                  {category.name}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-y-1.5 pl-12 sm:pl-0">
                {category.skills.map((skill, j) => (
                  <span key={skill} className="inline-flex items-center text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    {j > 0 && <span className={cn('mx-2.5 h-1 w-1 rounded-full opacity-50', accentDot[accent])} />}
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
