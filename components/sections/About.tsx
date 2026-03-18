import SectionContainer from '@/components/ui/SectionContainer'

export default function About() {
  return (
    <SectionContainer id="about" className="bg-surface-section dark:bg-white/[0.05]">
      <div className="max-w-2xl">
        <p className="mb-2 text-xs font-semibold tracking-widest text-accent dark:text-accent-light uppercase">
          About Me
        </p>
        <h2 className="mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-white">
          Crafting ideas into products
        </h2>
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-ink-muted dark:text-slate-400">
          <p>
            I&apos;m a Computer Science (AI) undergraduate passionate about building intelligent systems
            that solve real-world problems. My work focuses on the intersection of machine learning, LLM
            applications, and full-stack engineering, where I turn AI models into practical, user-facing
            products.
          </p>
          <p>
            I&apos;ve built systems ranging from RAG-powered document assistants and AI grading platforms
            to ML-driven web applications, designing them end-to-end from model development and data
            pipelines to scalable backends and intuitive interfaces. I care deeply about building systems
            that are robust, efficient, and actually useful in real-world settings.
          </p>
          <p>
            Outside of projects, I spend time exploring deep learning, large language models, and modern
            AI architectures, constantly experimenting with new ideas and tools to push what intelligent
            systems can do.
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}
