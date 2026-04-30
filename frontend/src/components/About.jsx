import React from 'react'
import '../styles/About.css'

const facts = [
  { label: 'Education',  value: 'BSc Computer Science', icon: '🎓' },
  { label: 'Experience', value: '7+ months Professional', icon: '💼' },
  { label: 'Projects',   value: '3 Built · 2 Live', icon: '🚀' },
  { label: 'Location',   value: 'Kerala, India (Remote)', icon: '📍' },
]

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <div className="about-header">
          <div className="subheading-section">
            <span>Discover</span>
          </div>
          <h2 className="heading-section">About <span className="text-gradient">Me</span></h2>
        </div>

        <div className="about-content">
          
          {/* Visuals Side */}
          <div className="about-visuals">
            <div className="status-card glass-panel">
              <div className="status-header">
                <span className="dot pulse"></span>
                <span className="status-label">Open for Opportunities</span>
              </div>
              <div className="status-body">
                <h3>Currently available for freelance & full-time roles.</h3>
                <p>Based in Kerala, India — available for remote work globally.</p>
              </div>
              <div className="status-footer">
                <div className="status-badge glass-panel">
                  <span className="badge-icon">🐍</span> Python
                </div>
                <div className="status-badge glass-panel">
                  <span className="badge-icon">⚛️</span> React
                </div>
              </div>
            </div>
          </div>

          {/* Details Side */}
          <div className="about-details">
            <h3 className="about-subtitle">
              Engineering <span className="text-gradient">Impact.</span>
            </h3>
            
            <div className="about-description">
              <p>
                I am a Python Full Stack Developer focused on building robust backend architectures and sleek, high-performance user interfaces.
              </p>
              <p>
                Bridging the gap between design and engineering, I specialize in creating scalable systems that don't just work, but deliver a premium user experience.
              </p>
            </div>

            <div className="core-focus-list">
               <div className="focus-item">
                 <span className="focus-dot"></span>
                 <div className="focus-text">
                   <h4>Backend Architecture</h4>
                   <p>Designing secure REST APIs and scalable database models using Python & Django.</p>
                 </div>
               </div>
               <div className="focus-item">
                 <span className="focus-dot"></span>
                 <div className="focus-text">
                   <h4>Frontend Engineering</h4>
                   <p>Crafting responsive, cinematic interfaces with React and modern CSS.</p>
                 </div>
               </div>
            </div>

            <div className="stats-grid">
              {facts.map(({ label, value, icon }) => (
                <div className="stat-card glass-panel" key={label}>
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
