import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import SocialHoverCard from '@/components/ui/SocialHoverCard'

const lines = [
  { text: "Hi, I'm Gokul Krishna", tag: 'eyebrow' },
  { text: 'Full Stack + AI Engineer', tag: 'headline' },
  {
    text: 'I build fast, beautiful web products and AI-powered systems — from zero to production.',
    tag: 'sub',
  },
]

const socials = [
  { icon: Github, href: 'https://github.com/gokulkrishna1686', label: 'GitHub', handle: '@gokulkrishna1686' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gokul-krishna-balaji', label: 'LinkedIn', handle: 'gokul-krishna-balaji' },
  { icon: Mail, href: 'mailto:gokulkrishna1686@gmail.com', label: 'Email', handle: 'gokulkrishna1686@gmail.com' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="mx-auto max-w-5xl w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {line.tag === 'eyebrow' && (
                  <p className="mb-2 text-sm font-medium tracking-widest text-accent dark:text-accent-light uppercase">
                    {line.text}
                  </p>
                )}
                {line.tag === 'headline' && (
                  <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink dark:text-white leading-tight">
                    {line.text}
                  </h1>
                )}
                {line.tag === 'sub' && (
                  <p className="mb-8 max-w-xl text-base sm:text-lg text-ink-muted dark:text-slate-400 leading-relaxed">
                    {line.text}
                  </p>
                )}
              </motion.div>
            ))}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-dark transition-colors"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-6 py-3 text-sm font-semibold text-ink dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <Download size={15} />
                Resume
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 flex items-center justify-center md:justify-start gap-3"
            >
              {socials.map(({ icon: Icon, href, label, handle }) => (
                <SocialHoverCard
                  key={label}
                  href={href}
                  label={label}
                  handle={handle}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-ink-muted dark:text-slate-500 hover:text-accent dark:hover:text-accent-light hover:border-accent/30 transition-colors"
                >
                  <Icon size={16} />
                </SocialHoverCard>
              ))}
            </motion.div>
          </div>

          {/* Avatar with initials fallback */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative shrink-0"
          >
            <div className="relative h-44 w-44 sm:h-60 sm:w-60 md:h-72 md:w-72">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-2xl" />
              <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl shadow-accent/20 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-accent dark:text-accent-light select-none">GK</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
