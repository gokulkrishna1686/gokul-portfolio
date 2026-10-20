import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Curated muted accents — one hue per tile/area, used sparingly.
        accent: {
          indigo: 'rgb(var(--accent-indigo) / <alpha-value>)',
          sky: 'rgb(var(--accent-sky) / <alpha-value>)',
          emerald: 'rgb(var(--accent-emerald) / <alpha-value>)',
          amber: 'rgb(var(--accent-amber) / <alpha-value>)',
          rose: 'rgb(var(--accent-rose) / <alpha-value>)',
        },
        // Dark-mode elevation: a soft near-black canvas with stepped surfaces
        // on top, so cards read as raised rather than dissolving into black.
        ink: {
          base: 'rgb(var(--ink-base) / <alpha-value>)',
          raised: 'rgb(var(--ink-raised) / <alpha-value>)',
          overlay: 'rgb(var(--ink-overlay) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        // Seamless multi-hue strip for the animated hairline (loops back to indigo).
        hairline:
          'linear-gradient(90deg, #2459d3, #1685a7, #24755e, #ad6a1f, #b34d67, #2459d3)',
      },
      boxShadow: {
        tile: '3px 3px 0 rgba(24, 38, 34, 0.08)',
        'tile-hover': '6px 6px 0 rgba(24, 38, 34, 0.13)',
      },
      keyframes: {
        'hairline-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '-200% 50%' },
        },
      },
      animation: {
        'hairline-pan': 'hairline-pan 8s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
