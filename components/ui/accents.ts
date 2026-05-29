// Curated muted accent palette. One hue per tile/area; used sparingly.
export type Accent = 'indigo' | 'sky' | 'emerald' | 'amber' | 'rose'

export const accentText: Record<Accent, string> = {
  indigo: 'text-accent-indigo',
  sky: 'text-accent-sky',
  emerald: 'text-accent-emerald',
  amber: 'text-accent-amber',
  rose: 'text-accent-rose',
}

export const accentDot: Record<Accent, string> = {
  indigo: 'bg-accent-indigo',
  sky: 'bg-accent-sky',
  emerald: 'bg-accent-emerald',
  amber: 'bg-accent-amber',
  rose: 'bg-accent-rose',
}

export const spotlightColor: Record<Accent, string> = {
  indigo: 'rgba(129,140,248,0.16)',
  sky: 'rgba(56,189,248,0.16)',
  emerald: 'rgba(52,211,153,0.16)',
  amber: 'rgba(251,191,36,0.16)',
  rose: 'rgba(251,113,133,0.16)',
}

// Cycle hues across repeated items (projects, skills, etc.)
export const ACCENT_CYCLE: Accent[] = ['indigo', 'sky', 'emerald', 'amber', 'rose']
