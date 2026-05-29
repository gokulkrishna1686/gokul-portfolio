export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  projectPage?: string
  featured?: boolean
  color?: string
}

const PLACEHOLDER = 'https://github.com/gokulkrishna1686'

export const projectsData: Project[] = [
  {
    title: 'Redpen AI',
    description:
      'AI-powered grading system for handwritten subjective exams using a multimodal LLM with rubric-constrained evaluation and structured reasoning outputs. Full-stack interfaces for professors and students with automated batch grading and performance analytics. Won 1st place among 80+ teams at E-Summit \'26 Ideathon.',
    tags: ['Next.js', 'FastAPI', 'Supabase', 'Gemini API'],
    github: PLACEHOLDER,
    live: PLACEHOLDER,
    projectPage: PLACEHOLDER,
    featured: true,
    color: 'from-violet-500 to-purple-400',
  },
  {
    title: 'ReFile',
    description:
      'SaaS file transformation engine that converts natural language prompts into executable Linux CLI commands using LLMs. Implements secure execution of AI-generated commands inside isolated Docker containers for scalable and safe media/file processing. Won 2nd place at the VØID:V1 National Hackathon.',
    tags: ['FastAPI', 'OpenAI API', 'Docker', 'Linux'],
    github: PLACEHOLDER,
    live: PLACEHOLDER,
    projectPage: PLACEHOLDER,
    featured: true,
    color: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Animal Image Classifier',
    description:
      'Computer vision model to classify animal species using CNNs trained on 5,400 images across 90 categories. Built a web interface for users to upload images and receive real-time predictions from the trained model.',
    tags: ['PyTorch', 'CNN', 'React', 'Flask'],
    github: PLACEHOLDER,
    live: PLACEHOLDER,
    projectPage: PLACEHOLDER,
    featured: true,
    color: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'VectorNote',
    description:
      'Multi-document conversational AI system using a Retrieval-Augmented Generation (RAG) pipeline for querying PDFs. Implements recursive document chunking, semantic embeddings, vector storage, and context-aware retrieval for accurate multi-turn document Q&A.',
    tags: ['Flask', 'LangChain', 'Chroma', 'Gemini API'],
    github: PLACEHOLDER,
    live: PLACEHOLDER,
    projectPage: PLACEHOLDER,
    featured: true,
    color: 'from-blue-500 to-cyan-400',
  },
]
