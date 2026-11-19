import { useRef, useState } from 'react'
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Nav } from './components/Nav'
import { ProjectModal } from './components/ProjectModal'
import { ContactForm } from './components/ContactForm'
import { experience, projects, stackGroups, type Project } from './data/portfolio'
import { useGsapReveal } from './hooks/useGsapReveal'

function App() {
  const scope = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  useGsapReveal(scope)

  return (
    <div ref={scope} id="top">
      <Nav />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div className="hero-copy" data-reveal>
              <p className="availability"><span /> Available for opportunities</p>
              <h1 id="hero-title">MBA Emmanuel</h1>
              <p className="hero-role">Frontend Developer</p>
              <p className="hero-summary">
                I build responsive, accessible web interfaces with React and TypeScript.
                Based in Lagos, Nigeria.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View projects <ArrowRight size={16} /></a>
                <a className="button button-secondary" href="mailto:emmanuelmba329@gmail.com">Get in touch</a>
              </div>
            </div>
            <aside className="profile-card" aria-label="Profile summary" data-reveal>
              <div className="profile-monogram" aria-hidden="true">ME</div>
              <dl>
                <div><dt>Location</dt><dd>Lagos, Nigeria</dd></div>
                <div><dt>Focus</dt><dd>Frontend & Product UI</dd></div>
                <div><dt>Education</dt><dd>B.Sc. Computer Science</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <p className="section-kicker">About</p>
            <div className="about-grid" data-reveal>
              <h2>Turning product ideas into clear, usable interfaces.</h2>
              <div className="about-copy">
                <p>I’m pursuing a B.Sc. in Computer Science at Covenant University, Ogun State, with First Class Standing and an expected graduation in October 2026.</p>
                <p>My experience spans API integrations, responsive marketing pages, reusable React components, workshop support, and collaborative developer events.</p>
                <p><strong>Relevant coursework:</strong> Software Engineering, Project Management, and Human-Computer Interaction.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="projects">
          <div className="container">
            <p className="section-kicker">Selected projects</p>
            <div className="section-heading" data-reveal>
              <h2>Projects</h2>
              <p>Applications and systems built to solve practical problems.</p>
            </div>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className="project-row" key={project.title} data-reveal>
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="project-main">
                    <p className="project-role">{project.role}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <div className="project-actions">
                    <button type="button" onClick={() => setSelectedProject(project)}>Architecture details</button>
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>Visit project <ArrowRight size={14} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="stack">
          <div className="container">
            <p className="section-kicker">Technical toolkit</p>
            <div className="section-heading" data-reveal>
              <h2>Skills & tools</h2>
              <p>Technologies I use to design, build, and ship web applications.</p>
            </div>
            <div className="stack-grid">
              {stackGroups.map((group) => (
                <article className="stack-card" key={group.title} data-reveal>
                  <h3>{group.title}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="experience">
          <div className="container">
            <p className="section-kicker">Experience</p>
            <div className="section-heading" data-reveal>
              <h2>Professional experience</h2>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-row" key={item.organization} data-reveal>
                  <div className="timeline-period">{item.period}</div>
                  <div>
                    <p className="project-role">{item.organization}</p>
                    <h3>{item.role}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
              <article className="timeline-row" data-reveal>
                <div className="timeline-period">Certification</div>
                <div>
                  <p className="project-role">Cisco Networking Academy</p>
                  <h3>Introduction to Cybersecurity</h3>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div data-reveal>
              <p className="section-kicker">Contact</p>
              <h2>Let’s work together.</h2>
              <p className="contact-summary">For roles, collaborations, or project enquiries, send me a message or reach out directly.</p>
              <div className="contact-details">
                <a href="mailto:emmanuelmba329@gmail.com"><Mail size={17} /> emmanuelmba329@gmail.com</a>
                <a href="tel:+2349071863542"><MapPin size={17} /> +234 907 186 3542</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} MBA Emmanuel</p>
          <div className="social-links">
            <a href="https://github.com/MBA329" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

export default App
