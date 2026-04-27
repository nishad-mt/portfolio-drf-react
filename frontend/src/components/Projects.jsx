import React, { useEffect, useState } from 'react'
import '../styles/Project.css'

const API_URL = 'http://127.0.0.1:8000/api/projects/'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch projects')
        return res.json()
      })
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="projects-inner">
          <div className="projects-state">
            <span className="state-mono">Loading projects...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="projects">
        <div className="projects-inner">
          <div className="projects-state">
            <span className="state-mono error">Could not load projects — {error}</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">

        <div className="section-eyebrow">
          <span className="eyebrow-num">04</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-label">Projects</span>
        </div>

        <div className="projects-header">
          <h2 className="projects-heading">Things I've built</h2>
          <p className="projects-sub">
            Real applications — designed, built, and shipped by me.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, idx) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-left">
                <span className="project-num">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="project-top-row">
                  {project.is_live && (
                    <span className="live-badge">
                      <span className="dot" />
                      Live
                    </span>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-stack">
                  {Array.isArray(project.tech_stack)
                    ? project.tech_stack.map((tech) => (
                        <span className="project-tech" key={tech}>{tech}</span>
                      ))
                    : project.tech_stack.split(',').map((tech) => (
                        <span className="project-tech" key={tech}>{tech.trim()}</span>
                      ))
                  }
                </div>
              </div>

              <div className="project-links">
                {project.live_link && (
                  <a
                    href={project.live_link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live demo</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
                {project.github_link && (
                  <a
                    href={project.github_link}
                    className="project-link ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GitHub</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects