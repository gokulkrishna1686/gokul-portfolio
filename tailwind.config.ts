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
          indigo: '#818cf8',
          sky: '#38bdf8',
          emerald: '#34d399',
          amber: '#fbbf24',
          rose: '#fb7185',
        },
        // Dark-mode elevation: a soft near-black canvas with stepped surfaces
        // on top, so cards read as raised rather than dissolving into black.
        ink: {
          base: '#000000', // page canvas (plain black)
          raised: '#0e0f14', // tiles / cards — deep, faintly cool near-black
          overlay: '#15161c', // popovers / dropdowns
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        // Seamless multi-hue strip for the animated hairline (loops back to indigo).
        hairline:
          'linear-gradient(90deg, #818cf8, #38bdf8, #34d399, #fbbf24, #fb7185, #818cf8)',
      },
      boxShadow: {
        tile: '0 1px 2px 0 rgba(0,0,0,0.04)',
        'tile-hover': '0 8px 30px -12px rgba(0,0,0,0.25)',
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
