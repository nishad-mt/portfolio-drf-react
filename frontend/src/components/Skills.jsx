import React from 'react'
import '../styles/Skills.css'

const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    skills: ['Django', 'React', 'Django REST Framework', 'FastAPI'],
  },
  {
    id: 'databases',
    label: 'Databases & Tools',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Git', 'GitHub', 'VS Code'],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    skills: ['REST APIs', 'OOP', 'MVC / MVT', 'DSA', 'Responsive Design', 'Authentication'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-inner">

        <div className="section-eyebrow">
          <span className="eyebrow-num">02</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-label">Skills</span>
        </div>

        <div className="skills-header">
          <h2 className="skills-heading">
            What I work with
          </h2>
          <p className="skills-sub">
            Tools and technologies I've used in real projects — not just read about.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.id}>
              <div className="skill-group-label">{group.label}</div>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills