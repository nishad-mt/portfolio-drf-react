import React from 'react'
import '../styles/About.css'

function About() {
  const facts = [
    { label: 'Degree', value: 'BSc Computer Science' },
    { label: 'Internship', value: '6 months · Python Developer' },
    { label: 'Projects', value: '3 built · 2 live hosted' },
    { label: 'Location', value: 'Tamil Nadu, India' },
  ]

  return (
    <section id="about" className="about">
      <div className="about-inner">

        <div className="section-eyebrow">
          <span className="eyebrow-num">01</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-label">About</span>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h2 className="about-heading">
              CS graduate.<br />
              <span className="accent-word">Self-taught.</span><br />
              Builder.
            </h2>
            <p className="about-body">
              I didn't wait for a job to start building. With a strong academic
              foundation in computer science, I taught myself <strong>Django</strong> and{' '}
              <strong>React</strong> by building real, deployed applications — not tutorials.
            </p>
            <p className="about-body">
              My internship taught me how to work in teams, ship under deadlines, and
              write code that others maintain. My self-learning taught me how to solve
              problems nobody else has already solved for you.
            </p>
            <p className="about-body muted">
              Everything you see in this portfolio was built outside the classroom.
            </p>
          </div>

          <div className="about-sidebar">
            {facts.map(({ label, value }) => (
              <div className="fact-card" key={label}>
                <span className="fact-label">{label}</span>
                <span className="fact-value">{value}</span>
              </div>
            ))}

            <div className="availability-badge">
              <span className="dot" />
              <span>Open to full-time roles</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About