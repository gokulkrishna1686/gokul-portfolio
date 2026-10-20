import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDownRight, Download, Sparkles } from 'lucide-react'
import Tile from '@/components/ui/Tile'
import { useScrollTo } from '@/hooks/useScrollTo'
import { cn } from '@/lib/utils'

const PORTRAIT_SRC = '/portrait.jpg' // drop your photo here: public/portrait.jpg

const stack = ['Python', 'TypeScript', 'React', 'FastAPI', 'Spring Boot', 'Docker']

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
          <Tile accent="indigo" hairline className="bento-intro h-full" bodyClassName="flex h-full flex-col justify-between gap-8 p-7 sm:p-9 lg:min-h-[390px]">
            <div className="flex items-center justify-between gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <span className="font-mono text-[10px] tracking-[0.16em] text-zinc-400">FIELD NOTES · IN/26</span>
              <span className="inline-flex items-center gap-2 text-[11px] font-medium text-accent-emerald">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-emerald" />
                </span>
                Available now
              </span>
            </div>
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-300"><Sparkles size={14} className="text-accent-indigo" /> Gokul Krishna Balaji</p>
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
                  'action-corner inline-flex items-center gap-1.5 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200',
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
                  'action-corner inline-flex items-center gap-1.5 border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-500 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-200 dark:hover:border-white/30 dark:hover:text-white',
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
          <Tile accent="sky" spotlight={false} bodyClassName="p-0 sm:p-0" className="portrait-tile h-full min-h-[300px] lg:min-h-[390px]">
            <Portrait />
            <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-end justify-between gap-3 text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.72)]">
              <span className="font-mono text-[10px] font-medium tracking-[0.12em]">ENGINEER / BUILDER</span>
              <span className="font-display text-2xl font-bold leading-none">GK</span>
            </div>
          </Tile>
        </motion.div>

        {/* Stack */}
        <motion.div variants={item} className="lg:col-span-2">
          <Tile accent="sky" className="bento-stack h-full">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-accent-sky">CORE STACK</p>
              <span className="font-mono text-[10px] text-zinc-400">06</span>
            </div>
            <ul className="grid grid-cols-2 gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {stack.map((s, index) => (
                <li key={s} className="flex items-center gap-2 border-l border-sky-700/15 pl-2.5 dark:border-sky-300/15">
                  <span className="font-mono text-[9px] text-accent-sky/70">0{index + 1}</span>
                  {s}
                </li>
              ))}
            </ul>
          </Tile>
        </motion.div>

        {/* Status */}
        <motion.div variants={item} className="lg:col-span-2">
          <Tile accent="emerald" className="bento-status h-full">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-accent-emerald">CURRENT SIGNAL</p>
              <span className="h-2 w-2 rounded-full bg-accent-emerald shadow-[0_0_0_4px_rgba(36,117,94,0.12)]" />
            </div>
            <p className="font-display text-xl font-bold tracking-tightest text-zinc-900 dark:text-white">Open to internships &amp; roles</p>
            <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
              CSE (AI) @ IIITDM Kancheepuram · Remote / India
            </p>
          </Tile>
        </motion.div>

        {/* Socials */}
        <motion.div variants={item} className="lg:col-span-2">
          <Tile accent="amber" className="bento-socials h-full">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-accent-amber">ON THE WEB</p>
              <span className="font-mono text-[10px] text-zinc-400">03 LINKS</span>
            </div>
            <ul className="grid grid-cols-3 divide-x divide-amber-800/15 dark:divide-amber-200/10">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'group/link flex flex-col items-center gap-2 px-2 py-3 text-xs font-medium text-zinc-600 transition-colors hover:text-accent-amber dark:text-zinc-400',
                      focusRing
                    )}
                  >
                    <Icon size={22} strokeWidth={1.7} className="text-zinc-500 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:text-accent-amber dark:text-zinc-300" />
                    <span>{label}</span>
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
