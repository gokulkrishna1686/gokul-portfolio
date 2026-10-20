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
    title: 'Sagar Prahari',
    description:
      'Contributed to the Swachh Sagar, Surakshit Sagar 2026 mobile app for a national coastal campaign by India’s Ministry of Earth Sciences. Built citizen and event workflows for photo proof, location data, registration, and participation tracking.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Convex', 'GPS'],
    featured: true,
    color: 'from-cyan-500 to-sky-400',
  },
  {
    title: 'InventoryForge',
    description:
      'Warehouse platform with 58 REST endpoints, inventory and order state machines, RBAC, immutable ledgers, and production monitoring. Used PostgreSQL row-level locking and idempotent APIs to validate zero overselling across 50 concurrent confirmations.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Docker'],
    github: PLACEHOLDER,
    featured: true,
    color: 'from-orange-500 to-amber-400',
  },
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
      'Natural-language media processing engine that turns video, audio, image, PDF, and OCR requests into validated Linux execution plans. Sandboxes untrusted work in Docker with path sanitization and ownership checks; won 2nd place at VIT Chennai’s national-level hackathon.',
    tags: ['Python', 'FastAPI', 'Docker', 'LangChain', 'Supabase'],
    github: PLACEHOLDER,
    live: PLACEHOLDER,
    projectPage: PLACEHOLDER,
    featured: true,
    color: 'from-violet-500 to-purple-400',
  },
  {
    title: 'Animal Image Classifier',
    description:
      'Computer vision model to classify animal species using CNNs trained on 5,400 images across 90 categories. Built a web interface for users to upload images and receive real-time predictions from the trained model.',
    tags: ['PyTorch', 'CNN', 'React', 'Flask'],
    github: PLACEHOLDER,
    live: PLACEHOLDER,
    projectPage: PLACEHOLDER,
    featured: false,
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
    featured: false,
    color: 'from-blue-500 to-cyan-400',
  },
]
