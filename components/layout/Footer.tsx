import { Github, Linkedin, Mail } from 'lucide-react'
import SocialHoverCard from '@/components/ui/SocialHoverCard'

const socials = [
  { icon: Github, href: 'https://github.com/gokulkrishna1686', label: 'GitHub', handle: '@gokulkrishna1686' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gokul-krishna-balaji', label: 'LinkedIn', handle: 'gokul-krishna-balaji' },
  { icon: Mail, href: 'mailto:gokulkrishna1686@gmail.com', label: 'Email', handle: 'gokulkrishna1686@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-4 py-10 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Gokul Krishna Balaji — built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-2.5">
          {socials.map(({ icon: Icon, href, label, handle }) => (
            <SocialHoverCard
              key={label}
              href={href}
              label={label}
              handle={handle}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:text-zinc-900 dark:border-white/10 dark:text-zinc-400 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <Icon size={15} />
            </SocialHoverCard>
          ))}
        </div>
      </div>
    </footer>
  )
}
