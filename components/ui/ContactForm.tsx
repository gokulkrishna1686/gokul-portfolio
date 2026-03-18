import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const inputClass = cn(
  'w-full rounded-xl border border-slate-200 dark:border-white/10',
  'bg-white dark:bg-white/5',
  'px-4 py-3 text-sm text-ink dark:text-white',
  'placeholder:text-slate-400 dark:placeholder:text-slate-600',
  'focus:outline-none focus:ring-2 focus:ring-accent/50',
  'transition-all duration-200'
)

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-10 text-center"
      >
        <CheckCircle className="text-accent dark:text-accent-light" size={40} />
        <p className="text-lg font-semibold text-ink dark:text-white">Message received!</p>
        <p className="text-sm text-ink-muted dark:text-slate-400">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-300">
            Name
          </label>
          <input type="text" placeholder="Your name" required className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-300">
            Email
          </label>
          <input type="email" placeholder="you@example.com" required className={inputClass} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-300">
          Subject
        </label>
        <input type="text" placeholder="What's this about?" required className={inputClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-300">
          Message
        </label>
        <textarea
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          required
          className={cn(inputClass, 'resize-none')}
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-dark transition-colors"
      >
        <Send size={16} />
        Send Message
      </motion.button>
    </form>
  )
}
