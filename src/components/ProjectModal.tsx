import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '../data/portfolio'

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    closeButton.current?.focus()
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <article className="modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button ref={closeButton} className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
          <X size={20} />
        </button>
        <p className="section-kicker">{project.role}</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="modal-summary">{project.summary}</p>
        <h3>Architecture overview</h3>
        <ul className="architecture-list">
          {project.architecture.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <a className="button button-primary" href={project.link} target="_blank" rel="noreferrer">
          View project <ArrowUpRight size={16} />
        </a>
      </article>
    </div>
  )
}
