import SectionContainer from '@/components/ui/SectionContainer'
import TimelineItem from '@/components/ui/TimelineItem'
import { experienceData } from '@/data/experience'

export default function Experience() {
  return (
    <SectionContainer id="experience">
      <p className="mb-2 text-xs font-semibold tracking-widest text-accent dark:text-accent-light uppercase">
        Experience
      </p>
      <h2 className="mb-8 text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-white">
        Where I&apos;ve worked
      </h2>
      <div className="space-y-3">
        {experienceData.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </SectionContainer>
  )
}
