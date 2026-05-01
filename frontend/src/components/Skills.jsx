import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'HTML5', 'CSS3'] },
  { group: 'Frontend', items: ['React.js', 'Redux', 'TailwindCSS', 'Framer Motion'] },
  { group: 'Backend', items: ['Django', 'Django REST Framework', 'FastAPI', 'Node.js'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite'] },
  { group: 'DevOps & Tools', items: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux'] },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="skills-split">
          {/* Left sticky label */}
          <motion.div 
            className="skills-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="skills-label">03 // CAPABILITIES</span>
          </motion.div>

          {/* Right interactive accordion */}
          <div className="skills-right">
            <motion.h2 
              className="heading-section skills-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              What I <span className="text-muted">Work With</span>
            </motion.h2>

            <div className="skills-list">
              {skills.map((skillGroup, idx) => (
                <motion.div 
                  className="skill-row" 
                  key={skillGroup.group}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <h3 className="skill-group-title">{skillGroup.group}</h3>
                  <div className="skill-items-wrapper">
                    <p className="skill-items">
                      {skillGroup.items.join(' — ')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;