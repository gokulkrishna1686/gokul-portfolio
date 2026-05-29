import { Github, Linkedin, FileText, Mail, ArrowUpRight } from 'lucide-react'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

const EMAIL = 'gokulkrishna1686@gmail.com'

const links: { icon: React.ElementType; label: string; href: string; download?: boolean }[] = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/gokulkrishna1686' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gokul-krishna-balaji' },
  { icon: FileText, label: 'Résumé', href: '/resume.pdf', download: true },
]

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400'

export default function Contact() {
  return (
    <SectionContainer id="contact">
      <SectionHeading index="06" eyebrow="Contact" accent="indigo" title="Let's build something." />

      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-lg">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
            </span>
            Available for internships &amp; roles
          </span>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Have a project, a role, or just want to talk shop about AI? My inbox is always open — I&apos;ll
            get back to you within a day or two.
          </p>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className={cn(
            'group flex w-full items-center gap-3 rounded-2xl border border-zinc-300 px-4 py-4 transition-colors hover:border-zinc-400 dark:border-white/15 dark:hover:border-white/30 sm:gap-4 sm:px-5 lg:w-auto lg:shrink-0',
            focusRing
          )}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
            <Mail size={18} />
          </span>
          <span className="min-w-0 text-left">
            <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Email
            </span>
            <span className="block break-all text-sm font-semibold text-zinc-900 dark:text-white sm:text-base">
              {EMAIL}
            </span>
          </span>
          <ArrowUpRight
            size={18}
            className="ml-1 shrink-0 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>

      <div className="hairline my-10" />

      <div className="flex flex-wrap gap-x-8 gap-y-3">
        {links.map(({ icon: Icon, label, href, download }) => (
          <a
            key={label}
            href={href}
            target={download ? undefined : '_blank'}
            rel="noopener noreferrer"
            download={download}
            className={cn(
              'group inline-flex items-center gap-2 rounded text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white',
              focusRing
            )}
          >
            <Icon
              size={16}
              className="text-zinc-400 transition-colors group-hover:text-zinc-700 dark:group-hover:text-zinc-200"
            />
            {label}
            <ArrowUpRight size={13} className="-ml-0.5 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </SectionContainer>
  )
}
