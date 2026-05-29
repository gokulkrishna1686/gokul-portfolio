import { GraduationCap } from 'lucide-react'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Education() {
  return (
    <SectionContainer id="education">
      <SectionHeading index="05" eyebrow="Education" accent="rose" title="Academic background." />

      <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 text-accent-rose dark:border-white/10">
            <GraduationCap size={20} />
          </span>
          <div>
            <h3 className="text-lg font-black tracking-tightest text-zinc-900 dark:text-white sm:text-xl">
              B.Tech, Computer Science &amp; Engineering (AI)
            </h3>
            <p className="mt-1 text-sm font-semibold text-accent-rose">IIITDM Kancheepuram — Chennai</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Machine learning, intelligent systems, and scalable software — with projects across AI,
              data-driven systems, and full-stack development.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-stretch gap-8 sm:gap-12">
          <div>
            <p className="text-4xl font-black tracking-tightest tabular-nums text-accent-rose sm:text-5xl">9.30</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              CGPA
            </p>
            <p className="text-[11px] text-zinc-400 dark:text-zinc-600">through Sem 4</p>
          </div>

          <div className="w-px self-stretch bg-zinc-200 dark:bg-white/10" aria-hidden />

          <div>
            <p className="text-4xl font-black tracking-tightest tabular-nums text-zinc-900 dark:text-white sm:text-5xl">2028</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Expected
            </p>
            <p className="text-[11px] text-zinc-400 dark:text-zinc-600">graduation</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
