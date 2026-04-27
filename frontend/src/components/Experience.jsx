import React from 'react'
import '../styles/Experience.css'

const timeline = [
  {
    id: 'internship',
    type: 'Internship',
    typeColor: 'teal',
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
    typeColor: 'blue',
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
    typeColor: 'green',
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

const typeStyles = {
  teal:  { bg: 'rgba(168,255,120,0.08)', color: '#a8ff78', border: 'rgba(168,255,120,0.2)' },
  blue:  { bg: 'rgba(100,180,255,0.08)', color: '#64b4ff', border: 'rgba(100,180,255,0.2)' },
  green: { bg: 'rgba(168,255,120,0.05)', color: '#8aff78', border: 'rgba(168,255,120,0.15)' },
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-inner">

        <div className="section-eyebrow">
          <span className="eyebrow-num">03</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-label">Experience</span>
        </div>

        <h2 className="exp-heading">The journey so far</h2>

        <div className="timeline">
          {timeline.map((item, idx) => {
            const style = typeStyles[item.typeColor]
            return (
              <div className="timeline-item" key={item.id}>
                <div className="timeline-left">
                  <span className="timeline-period">{item.period}</span>
                  <div className="timeline-connector">
                    <div className="timeline-dot" />
                    {idx < timeline.length - 1 && <div className="timeline-track" />}
                  </div>
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-top">
                    <span
                      className="type-badge"
                      style={{
                        background: style.bg,
                        color: style.color,
                        border: `1px solid ${style.border}`,
                      }}
                    >
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
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Experience