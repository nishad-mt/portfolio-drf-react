import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const timeline = [
  {
    id: 'internship',
    type: 'Internship',
    period: '2026',
    title: 'Python Developer Intern',
    org: 'Catalyst skill - hub',
    points: [
      'Built and maintained backend features using Python and Django',
      'Collaborated with a cross-functional team in an Agile workflow',
      'Wrote clean, tested, and documented code for production use',
    ],
  },
  {
    id: 'degree',
    type: 'Education',
    period: '2022–2025',
    title: 'BSc Computer Science',
    org: 'Calicut University',
    points: [
      'Core subjects: DSA, DBMS, Operating Systems, Networking',
      'Final year project: Legal Advisor',
      'Strong foundation in software engineering principles',
    ],
  },
  {
    id: 'selflearn',
    type: 'Independent',
    period: 'Ongoing',
    title: 'Self-learning & Projects',
    org: 'Remote',
    points: [
      'Taught myself Django, React, REST APIs beyond the syllabus',
      'Built and deployed 2 live web applications independently',
      'Continuously learning: Docker, FastAPI, cloud deployment',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-section">Career<br/><span className="text-muted">Trajectory</span></h2>
        </motion.div>

        <div className="experience-list">
          {timeline.map((item, idx) => (
            <motion.div 
              className="experience-row" 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="exp-period">
                {item.period}
              </div>
              <div className="exp-content">
                <h3 className="exp-title">{item.title}</h3>
                <p className="exp-org">{item.org} — <span className="text-muted">{item.type}</span></p>
                <ul className="exp-points">
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;