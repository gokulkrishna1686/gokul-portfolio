import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionContainer from '@/components/ui/SectionContainer'

export default function Education() {
  return (
    <SectionContainer id="education" className="bg-surface-section dark:bg-white/[0.05]">
      <p className="mb-2 text-xs font-semibold tracking-widest text-accent dark:text-accent-light uppercase">
        Education
      </p>
      <h2 className="mb-8 text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-white">
        Academic Background
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 sm:p-6"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
          <GraduationCap className="text-accent dark:text-accent-light" size={24} />
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
            <div>
              <h3 className="text-base font-semibold text-ink dark:text-white">
                Bachelor of Technology in Computer Science and Engineering (AI)
              </h3>
              <p className="mt-0.5 text-sm font-medium text-accent dark:text-accent-light">
                Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram — Chennai
              </p>
            </div>
            <p className="shrink-0 text-xs text-ink-muted dark:text-slate-500">Expected 2028</p>
          </div>
          <p className="mt-3 text-sm text-ink-muted dark:text-slate-400 leading-relaxed">
            Focusing on machine learning, intelligent systems, and scalable software. My coursework
            and projects center around AI, data-driven systems, and full-stack development.
          </p>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
