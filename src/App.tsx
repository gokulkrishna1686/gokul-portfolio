import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Bento from '@/components/sections/Bento'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function App() {
  return (
    <div className="site-grid relative min-h-screen bg-[#f3f2ec] text-zinc-900 dark:bg-ink-base dark:text-zinc-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:bg-white dark:focus:text-zinc-900"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Bento />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
