import React from 'react'
import '../styles/About.css'

// ── Replace this path with your actual photo path ──
import profilePhoto from '../assets/profile_.png'

const facts = [
  { label: 'Degree',     value: 'BSc Computer Science', icon: '🎓' },
  { label: 'Internship', value: '6 months · Python Developer', icon: '💻' },
  { label: 'Projects',   value: '3 built · 2 live hosted', icon: '🚀' },
  { label: 'Location',   value: 'Tamil Nadu, India', icon: '📍' },
]

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Decorative Background Elements */}
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>

        <div className="section-header">
          <div className="header-eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">Discover</span>
            <span className="eyebrow-line"></span>
          </div>
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        </div>

        <div className="about-content">
          
          {/* Image & Status Side */}
          <div className="about-visuals">
            <div className="about-portrait-wrapper">
              
              {/* Soft Gradient Circular Background */}
              <div className="about-circle-bg"></div>

              {/* Cut-out Portrait breaking the circle */}
              <img src={profilePhoto} alt="Nishad M T" className="about-portrait" />

              <div className="status-badge">
                <span className="status-dot"></span>
                <span className="status-text">Open to work</span>
              </div>
              
              {/* Floating tech stack badges */}
              <div className="floating-badge badge-py">Python</div>
              <div className="floating-badge badge-react">React</div>
            </div>
          </div>

          {/* Text & Details Side */}
          <div className="about-details">
            <h3 className="about-subtitle">
              CS Graduate. <br/>
              <span className="text-gradient">Self-Taught Developer.</span>
            </h3>
            
            <div className="about-description">
              <p>
                I didn't wait for a job to start building. With a strong academic
                foundation in computer science, I taught myself <strong>Django</strong> and{' '}
                <strong>React</strong> by building real, deployed applications — not just following tutorials.
              </p>
              <p>
                My internship taught me how to work in teams, ship under deadlines, and
                write code that others maintain. My self-learning taught me how to solve
                problems nobody else has already solved for you.
              </p>
              <div className="quote-box">
                <p>"Everything you see in this portfolio was built outside the classroom."</p>
              </div>
            </div>

            <div className="stats-grid">
              {facts.map(({ label, value, icon }) => (
                <div className="stat-card" key={label}>
                  <div className="stat-icon">{icon}</div>
                  <div className="stat-info">
                    <span className="stat-value">{value}</span>
                    <span className="stat-label">{label}</span>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About