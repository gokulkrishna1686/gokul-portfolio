import { motion, type Variants } from 'framer-motion'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import { projectsData } from '@/data/projects'

// Asymmetric bento: rows alternate wide + narrow (4/2, then 2/4) on desktop.
const layout = [
  { span: 'lg:col-span-4', large: true },
  { span: 'lg:col-span-2', large: false },
  { span: 'lg:col-span-2', large: false },
  { span: 'lg:col-span-4', large: true },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <SectionHeading index="02" eyebrow="Projects" accent="sky" title="Selected work." />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
      >
        {projectsData.map((project, i) => {
          const { span, large } = layout[i % layout.length]
          return (
            <motion.div key={project.title} variants={cardVariant} className={`h-full ${span}`}>
              <ProjectCard project={project} index={i} large={large} />
            </motion.div>
          )
        })}
      </motion.div>
    </SectionContainer>
  )
}
