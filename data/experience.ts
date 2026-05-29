export interface Experience {
  role: string
  company: string
  period: string
  description: string[]
  tech: string[]
}

export const experienceData: Experience[] = [
  {
    role: 'Software Development Engineer Intern',
    company: 'Reelcat',
    period: 'Dec 2025 – Jan 2026',
    description: [
      'Built scalable video rendering pipelines with AWS Remotion Lambda and integrated OpenAI for smart captions, reducing manual editing effort by ~70%.',
      'Implemented Razorpay payment workflows and automated transactional email systems.',
    ],
    tech: ['React', 'TypeScript', 'Convex', 'AWS Remotion Lambda', 'OpenAI API', 'Razorpay', 'Resend'],
  },
  {
    role: 'Coordinator',
    company: 'Google Developer Student Club – IIITDM Kancheepuram',
    period: 'Aug 2025 – May 2026',
    description: [
      'Built a RAG-based chatbot for event and resource queries, serving 500+ students.',
      'Organized workshops on AI APIs, automation tools, and full-stack development.',
    ],
    tech: ['Python', 'LangChain', 'Vector Databases', 'LLM APIs'],
  },
]
