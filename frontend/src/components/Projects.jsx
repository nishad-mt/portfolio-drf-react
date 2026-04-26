import React from 'react'
import '../styles/Project.css'

const projects = [
  {
    id: 'ecommerce',
    live: true,
    num: '01',
    title: 'E-commerce web app',
    description:
      'A full-stack shopping platform with product listings, cart management, user authentication, and order tracking. Built and deployed independently.',
    stack: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'drawing',
    live: true,
    num: '02',
    title: 'Virtual drawing app',
    description:
      'A browser-based canvas drawing tool with brush controls, colour picker, undo/redo, and PNG export. Built with vanilla JS and the HTML5 Canvas API.',
    stack: ['JavaScript', 'Canvas API', 'HTML5', 'CSS3'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'project3',
    live: false,
    num: '03',
    title: '[Your 3rd project]',
    description:
      'Add your third project here — a CLI tool, REST API, data dashboard, automation script, or anything you built that shows your Python skills.',
    stack: ['Python', 'Your stack'],
    liveUrl: null,
    githubUrl: '#',
  },
]

function Projects() {
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
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-left">
                <span className="project-num">{project.num}</span>
                <div className="project-top-row">
                  {project.live && (
                    <span className="live-badge">
                      <span className="dot" />
                      Live
                    </span>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span className="project-tech" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>Live demo</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
                <a href={project.githubUrl} className="project-link ghost" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects