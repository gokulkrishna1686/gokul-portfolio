import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import TimelineItem from '@/components/ui/TimelineItem'
import { experienceData } from '@/data/experience'

export default function Experience() {
  return (
    <SectionContainer id="experience">
      <SectionHeading index="04" eyebrow="Experience" accent="amber" title="Where I've worked." />
      <div className="relative ml-1.5 border-l border-zinc-200 pl-1 dark:border-white/10">
        {experienceData.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </SectionContainer>
  )
}
