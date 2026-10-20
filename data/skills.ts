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
    skills: ['React', 'React Native', 'Expo', 'HTML/CSS', 'Vite'],
  },
  {
    name: 'Backend',
    skills: ['Spring Boot', 'FastAPI', 'Node.js', 'REST APIs', 'Convex'],
  },
  {
    name: 'AI / ML',
    skills: ['RAG', 'LangGraph', 'Hugging Face', 'PyTorch', 'GPT-4o', 'Mistral-7B'],
  },
  {
    name: 'Database',
    skills: ['PostgreSQL', 'Supabase', 'Relational databases', 'Indexing', 'Transactions'],
  },
  {
    name: 'Tools & Infra',
    skills: ['Docker', 'GitHub Actions', 'Flyway', 'Prometheus', 'Grafana', 'Linux'],
  },
]
