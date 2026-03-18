import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  id: string
  className?: string
  children: React.ReactNode
}

export default function SectionContainer({ id, className, children }: SectionContainerProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('scroll-mt-[68px] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8', className)}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </motion.section>
  )
}
