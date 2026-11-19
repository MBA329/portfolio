export type Project = {
  title: string
  summary: string
  role: string
  tags: string[]
  link: string
  architecture: string[]
}

export const projects: Project[] = [
  {
    title: 'Grade Vision / Errornet',
    summary: 'An OCR-driven automated code grading system that turns submitted code images into structured, actionable feedback.',
    role: 'Full-stack project',
    tags: ['React', 'Python', 'FastAPI', 'OCR'],
    link: 'https://grade-vision.vercel.app/',
    architecture: [
      'A React interface handles submission flow, processing states, and presentation of grading feedback.',
      'Python FastAPI provides the service boundary for OCR processing and grading orchestration.',
      'The project keeps automated results clear and reviewable rather than presenting them as an opaque outcome.',
    ],
  },
  {
    title: 'Habify',
    summary: 'A habit-building application focused on simple daily routines, clear progress, and consistent follow-through.',
    role: 'Frontend project',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/MBA329/habify',
    architecture: [
      'Reusable interface components keep habit entries, status signals, and empty states consistent.',
      'Client state is organized around clear actions for a fast, predictable daily workflow.',
      'Responsive layouts prioritize everyday use on mobile and desktop.',
    ],
  },
  {
    title: 'Bookmark API Monorepo',
    summary: 'A full-stack bookmark platform exploring REST API design, shared structure, and maintainable monorepo organization.',
    role: 'Full-stack project',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Monorepo'],
    link: 'https://github.com/MBA329/user-bookmark-site',
    architecture: [
      'The monorepo separates application concerns while keeping contracts and shared code discoverable.',
      'REST endpoints provide a clear foundation for bookmark creation, retrieval, updates, and deletion.',
      'The structure is designed to grow from a focused prototype into a maintainable product codebase.',
    ],
  },
]

export const stackGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand'],
  },
  {
    title: 'Backend & Database',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Prisma', 'Supabase'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Bun', 'pnpm', 'Railway', 'Render', 'DaVinci Resolve'],
  },
]

export const experience = [
  {
    period: 'March 2025 — August 2025',
    role: 'Frontend Developer Intern',
    organization: 'Clyp Technologies',
    detail:
      'Integrated third-party REST APIs, launched responsive marketing landing pages, and built reusable React UI components. Contributed to product growth to 10,000 monthly active users within three months.',
  },
  {
    period: 'June 2026',
    role: 'Volunteer',
    organization: 'Google Developer Group, Lagos',
    detail:
      'Created workshop content, gathered participant feedback, promoted activities, and assisted local developer events.',
  },
]
