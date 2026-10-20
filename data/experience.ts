export interface Experience {
  role: string
  company: string
  period: string
  description: string[]
  tech: string[]
}

export const experienceData: Experience[] = [
  {
    role: 'AI Engineering Intern',
    company: 'Virtusa',
    period: 'May 2026 – Jul 2026',
    description: [
      'Built a multimodal document-QA system for PDFs, DOCX, and PPTX that reasons over text, tables, and images with embeddings, table reasoning, and GPT-4o visual captions.',
      'Cut mean latency by ~48% through lazy-loaded spaCy/Presidio models and document- and role-aware prompt caching, reaching 99.35% cached prompt tokens.',
      'Developed RAG evaluation scripts across 8+ metrics and a three-agent LangGraph research assistant spanning local files, Google Drive, and Tavily search.',
    ],
    tech: ['Python', 'GPT-4o', 'LangGraph', 'spaCy', 'Presidio', 'RAG'],
  },
  {
    role: 'Software Developer, Part-time',
    company: 'Promptli',
    period: 'Feb 2026 – Jul 2026',
    description: [
      'Built and deployed a production AI receptionist for four businesses, combining LiveKit Agents, Twilio SIP, and seven in-call tools for scheduling, knowledge search, notes, and follow-ups.',
      'Developed a React/Vite dashboard and Convex backend; indexed, time-bounded queries reduced calendar records scanned from 1,000 to 20 and booking records from 1,000 to 1.',
    ],
    tech: ['React', 'Vite', 'Convex', 'LiveKit Agents', 'Twilio SIP'],
  },
  {
    role: 'AI Research Intern',
    company: 'HPRCSE Lab, IIITDM Kancheepuram',
    period: 'Dec 2025 – Feb 2026',
    description: [
      'Built an end-to-end PyTorch and Hugging Face training pipeline to fine-tune Mistral-7B for programming education.',
      'Exposed the model through a FastAPI REST service with health and configurable generation endpoints.',
    ],
    tech: ['PyTorch', 'Hugging Face', 'Mistral-7B', 'FastAPI'],
  },
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
