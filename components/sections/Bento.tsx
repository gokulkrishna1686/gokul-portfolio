import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight, ArrowDownRight, Download } from 'lucide-react'
import Tile from '@/components/ui/Tile'
import { useScrollTo } from '@/hooks/useScrollTo'
import { cn } from '@/lib/utils'

const PORTRAIT_SRC = '/portrait.jpg' // drop your photo here: public/portrait.jpg

const stack = ['TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'Node.js']

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/gokulkrishna1686' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gokul-krishna-balaji' },
  { icon: Mail, label: 'Email', href: 'mailto:gokulkrishna1686@gmail.com' },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

function Portrait() {
  const [errored, setErrored] = useState(false)
  if (errored) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-100 dark:bg-ink-raised">
        <span className="text-5xl font-black tracking-tightest text-zinc-300 dark:text-zinc-700">GK</span>
        <span className="px-4 text-center text-[11px] font-medium text-zinc-400 dark:text-zinc-600">
          add your photo at <span className="font-mono">public/portrait.jpg</span>
        </span>
      </div>
    )
  }
  return (
    <img
      src={PORTRAIT_SRC}
      alt="Gokul Krishna Balaji"
      onError={() => setErrored(true)}
      className="h-full w-full object-cover"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  )
}

export default function Bento() {
  const scrollTo = useScrollTo()

  return (
    <section className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
      >
        {/* Name / headline */}
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-4">
          <Tile accent="indigo" hairline className="h-full" bodyClassName="flex h-full flex-col justify-between gap-8 p-7 sm:p-9 lg:min-h-[390px]">
            <div className="flex items-center justify-between gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <span className="font-mono text-[10px] tracking-[0.16em] text-zinc-400">FIELD NOTES / 2026</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
              </span>
              <span>Available</span>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-zinc-600 dark:text-zinc-300">Gokul Krishna Balaji</p>
              <h1 className="font-display text-balance text-[clamp(2.25rem,12.5vw,3rem)] font-bold leading-[0.92] tracking-tightest text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl">
                Building useful
                <br />
                <span className="text-accent-indigo">intelligence.</span>
              </h1>
              <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                Full-stack &amp; AI engineer turning promising models into reliable products people can use.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo('#projects')}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200',
                  focusRing
                )}
              >
                View work
                <ArrowDownRight size={16} />
              </button>
              <a
                href="/resume.pdf"
                download
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-200 dark:hover:border-white/30 dark:hover:text-white',
                  focusRing
                )}
              >
                <Download size={15} />
                Resume
              </a>
            </div>
          </Tile>
        </motion.div>

        {/* Portrait */}
        <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
          <Tile accent="sky" spotlight={false} bodyClassName="p-0" className="h-full min-h-[300px] lg:min-h-[390px]">
            <Portrait />
          </Tile>
        </motion.div>

        {/* Stack */}
        <motion.div variants={item} className="lg:col-span-2">
          <Tile accent="sky" className="h-full">
            <p className="mb-4 font-mono text-[10px] font-semibold tracking-[0.16em] text-accent-sky">CORE STACK</p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {stack.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent-sky" />
                  {s}
                </li>
              ))}
            </ul>
          </Tile>
        </motion.div>

        {/* Status */}
        <motion.div variants={item} className="lg:col-span-2">
          <Tile accent="emerald" className="h-full">
            <p className="mb-4 font-mono text-[10px] font-semibold tracking-[0.16em] text-accent-emerald">CURRENT SIGNAL</p>
            <p className="font-display text-xl font-bold tracking-tightest text-zinc-900 dark:text-white">Open to internships &amp; roles</p>
            <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
              CSE (AI) @ IIITDM Kancheepuram · Remote / India
            </p>
          </Tile>
        </motion.div>

        {/* Socials */}
        <motion.div variants={item} className="lg:col-span-2">
          <Tile accent="amber" className="h-full">
            <p className="mb-4 font-mono text-[10px] font-semibold tracking-[0.16em] text-accent-amber">ON THE WEB</p>
            <ul className="space-y-1">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'group/link -mx-2 flex items-center justify-between rounded-lg px-2 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white',
                      focusRing
                    )}
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon size={15} className="text-zinc-400 group-hover/link:text-accent-amber" />
                      {label}
                    </span>
                    <ArrowUpRight size={14} className="text-zinc-400 opacity-0 transition-opacity group-hover/link:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </Tile>
        </motion.div>
      </motion.div>
    </section>
  )
}
