import { Github, Linkedin, Mail } from 'lucide-react'
import SectionContainer from '@/components/ui/SectionContainer'
import ContactForm from '@/components/ui/ContactForm'

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'gokulkrishna1686',
    href: 'https://github.com/gokulkrishna1686',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'gokul-krishna-balaji',
    href: 'https://www.linkedin.com/in/gokul-krishna-balaji',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'gokulkrishna1686@gmail.com',
    href: 'mailto:gokulkrishna1686@gmail.com',
  },
]

export default function Contact() {
  return (
    <SectionContainer id="contact">
      <p className="mb-2 text-xs font-semibold tracking-widest text-accent dark:text-accent-light uppercase">Contact</p>
      <h2 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-white">
        Let&apos;s work together
      </h2>
      <p className="mb-8 text-sm sm:text-base text-ink-muted dark:text-slate-400">
        Open to full-time roles, freelance projects, and interesting collaborations.
      </p>

      <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2">
        {/* Social links */}
        <div className="space-y-3">
          {socials.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-4 hover:border-accent/40 hover:shadow-sm transition-all group"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Icon className="text-accent dark:text-accent-light" size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-ink-muted dark:text-slate-500">{label}</p>
                <p className="text-sm font-semibold text-ink dark:text-white group-hover:text-accent transition-colors">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </SectionContainer>
  )
}
