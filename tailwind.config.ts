import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#1E40AF',
          light: '#60A5FA',
          dark: '#1E3A8A',
        },
        surface: {
          light: '#EFF6FF',
          section: '#DBEAFE',
          dark: '#060D1A',
        },
        ink: {
          DEFAULT: '#0F172A',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
