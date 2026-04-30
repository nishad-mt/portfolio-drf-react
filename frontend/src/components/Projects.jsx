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
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="projects-state glass-panel">
            <span className="state-mono pulse">Loading projects...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="projects-state glass-panel error-panel">
            <span className="state-mono">Could not load projects — {error}</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <div className="projects-header">
          <div className="subheading-section">
            <span>Portfolio</span>
          </div>
          <h2 className="heading-section">Things I've <span className="text-gradient">Built</span></h2>
          <p className="projects-sub">
            Real applications — designed, built, and shipped by me.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <article className="project-card glass-panel" key={project.id}>
              <div className="project-top-row">
                <span className="project-num">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {project.is_live && (
                  <span className="live-badge">
                    <span className="dot pulse" /> Live
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

              <div className="project-links">
                {project.live_link && (
                  <a href={project.live_link} className="btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                    <span>Live Demo</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
                {project.github_link && (
                  <a href={project.github_link} className="btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span>
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