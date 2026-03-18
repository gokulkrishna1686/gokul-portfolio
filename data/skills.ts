export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'Python', 'JavaScript', 'Java', 'C++', 'SQL'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'AI / ML',
    skills: ['LangChain', 'OpenAI API', 'HuggingFace', 'PyTorch', 'Scikit-learn', 'RAG'],
  },
  {
    name: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma'],
  },
  {
    name: 'Tools & Infra',
    skills: ['Git', 'Docker', 'Vercel', 'AWS', 'Linux', 'CI/CD'],
  },
]
