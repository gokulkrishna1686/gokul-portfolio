import { type ReactNode } from 'react'
import SectionContainer from '@/components/ui/SectionContainer'

const focusItems = ['Multimodal AI', 'RAG systems', 'AI agents', 'Backend systems', 'Developer tooling']

/** Full-contrast emphasis word inside the muted statement. */
function Hi({ children }: { children: ReactNode }) {
  return <span className="text-zinc-900 dark:text-white">{children}</span>
}

export default function About() {
  return (
    <SectionContainer id="about">
      <div className="section-kicker mb-8 text-accent-indigo">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">01</span>
          <span className="text-xs font-semibold uppercase tracking-wider">About</span>
        </div>
      </div>

      <p className="font-display max-w-5xl text-pretty text-2xl font-medium leading-[1.35] tracking-tight text-zinc-500 dark:text-zinc-400 sm:text-3xl lg:text-[2.5rem] lg:leading-[1.32]">
        I&apos;m a <Hi>Computer Science (AI)</Hi> undergrad building intelligent systems that turn{' '}
        <Hi>applied AI research</Hi> into{' '}
        <span className="text-accent-indigo">reliable products people can use</span>. I&apos;ve built{' '}
        <Hi>multimodal document intelligence</Hi>, <Hi>real-time voice agents</Hi>, and{' '}
        <Hi>production backend systems</Hi> — from models and retrieval to robust APIs and clean interfaces.
      </p>

      <div className="hairline mb-10 mt-14" />

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Focus
          </p>
          <p className="flex flex-wrap items-center gap-x-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
            {focusItems.map((f, i) => (
              <span key={f} className="inline-flex items-center gap-x-2 whitespace-nowrap">
                {f}
                {i < focusItems.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" aria-hidden />
                )}
              </span>
            ))}
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Studying
          </p>
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            B.Tech CSE (AI), IIITDM Kancheepuram
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Based
          </p>
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Chennai, India · open to remote
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}
