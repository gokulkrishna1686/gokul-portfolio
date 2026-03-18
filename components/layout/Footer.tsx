import { Github, Linkedin, Mail } from 'lucide-react'
import SocialHoverCard from '@/components/ui/SocialHoverCard'

const socials = [
  { icon: Github, href: 'https://github.com/gokulkrishna1686', label: 'GitHub', handle: '@gokulkrishna1686' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gokul-krishna-balaji', label: 'LinkedIn', handle: 'gokul-krishna-balaji' },
  { icon: Mail, href: 'mailto:gokulkrishna1686@gmail.com', label: 'Email', handle: 'gokulkrishna1686@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="text-sm text-ink-muted dark:text-slate-500">
          © {new Date().getFullYear()} Gokul Krishna Balaji. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label, handle }) => (
            <SocialHoverCard
              key={label}
              href={href}
              label={label}
              handle={handle}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-ink-muted dark:text-slate-500 hover:text-accent dark:hover:text-accent-light hover:border-accent/30 transition-colors"
            >
              <Icon size={15} />
            </SocialHoverCard>
          ))}
        </div>
      </div>
    </footer>
  )
}
