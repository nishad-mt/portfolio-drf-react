import React from 'react'
import '../styles/Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Background grid */}
      <div className="hero-grid" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="grid-line" />
        ))}
      </div>

      {/* Floating accent orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <div className="hero-content">

        {/* Eyebrow label */}
        <div className="hero-eyebrow">
          <span className="dot" />
          <span>Build  Scale  Ship</span>
        </div>

        <h1 className="hero-heading">
          <span className="line line-1"></span>
          <span className="line line-2 name-highlight">Nishad </span>
        </h1>

        <div className="hero-role">
          <span className="role-bracket">&lt;</span>
          <span className="role-text">Python Full Stack Developer</span>
          <span className="role-bracket"> /&gt;</span>
        </div>

        <p className="hero-description">
          I build scalable web applications using <strong>Django</strong> and <strong>React</strong>,
          focusing on clean design and efficient performance.
        </p>

        <div className="hero-stack">
          {['Django', 'React', 'Python', 'REST APIs', 'PostgreSQL'].map((tech) => (
            <span key={tech} className="stack-pill">{tech}</span>
          ))}
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>

        {/* Scroll cue */}
        <div className="scroll-cue" aria-hidden="true">
          <div className="scroll-line" />
          <span>scroll</span>
        </div>
      </div>

      {/* Decorative code snippet */}
      <div className="hero-code-deco" aria-hidden="true">
        <pre><code>{`def build_something(
  idea: str,
  passion: bool = True
) -> Product:
  return deploy(idea)`}</code></pre>
      </div>

    </section>
  )
}

export default Hero