import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed left-0 right-0 top-0 z-[100] h-0.5 bg-hairline bg-[length:200%_auto] motion-safe:animate-hairline-pan pointer-events-none"
    />
  )
}
