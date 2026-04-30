import React from 'react'
import '../styles/Experience.css'

const timeline = [
  {
    id: 'internship',
    type: 'Internship',
    typeColor: 'accent-primary',
    period: '2026 · 6 months',
    title: 'Python Developer Intern',
    org: '[Catalyst skill - hub]',
    location: 'On-site / Remote',
    points: [
      'Built and maintained backend features using Python and Django',
      'Collaborated with a cross-functional team in an Agile workflow',
      'Wrote clean, tested, and documented code for production use',
    ],
  },
  {
    id: 'degree',
    type: 'Education',
    typeColor: 'accent-secondary',
    period: '2022 – 2025',
    title: 'BSc Computer Science',
    org: '[Calicut University]',
    location: 'Kerala, India',
    points: [
      'Core subjects: DSA, DBMS, Operating Systems, Networking',
      'Final year project: [Legal Advisor]',
      'Strong foundation in software engineering principles',
    ],
  },
  {
    id: 'selflearn',
    type: 'Self-learning',
    typeColor: 'accent-primary',
    period: 'Ongoing',
    title: 'Independent developer',
    org: 'Personal projects & online resources',
    location: 'Remote',
    points: [
      'Taught myself Django, React, REST APIs beyond the syllabus',
      'Built and deployed 2 live web applications independently',
      'Continuously learning: Docker, FastAPI, cloud deployment',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        <div className="experience-header">
          <div className="subheading-section">
            <span>Career</span>
          </div>
          <h2 className="heading-section">The <span className="text-gradient">Journey So Far</span></h2>
        </div>

        <div className="timeline">
          {timeline.map((item, idx) => (
            <div className="timeline-item" key={item.id}>
              
              {/* Left Column */}
              <div className="timeline-left">
                <span className="timeline-period">{item.period}</span>
                <div className="timeline-connector">
                  <div className={`timeline-dot bg-${item.typeColor}`} />
                  {idx < timeline.length - 1 && <div className="timeline-track" />}
                </div>
              </div>

              {/* Right Column (Card) */}
              <div className="timeline-card glass-panel">
                <div className="timeline-card-top">
                  <span className={`type-badge text-${item.typeColor} border-${item.typeColor}`}>
                    {item.type}
                  </span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-org">{item.org} · {item.location}</p>
                <ul className="timeline-points">
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience