import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css';

const API_URL = 'http://127.0.0.1:8000/api/projects/';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="projects-section"><div className="projects-container">Loading...</div></div>;
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="heading-section">Selected<br/><span className="text-muted">Works</span></h2>
        </div>

        <div className="project-list">
          {projects.map((project, idx) => (
            <motion.div 
              className="project-row" 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="project-row-num">0{idx + 1}</div>
              <div className="project-row-content">
                <h3 className="project-row-title">{project.title}</h3>
                <p className="project-row-tech">
                  {Array.isArray(project.tech_stack) ? project.tech_stack.join(' — ') : project.tech_stack.replace(/,/g, ' — ')}
                </p>
              </div>
              <div className="project-row-actions">
                {project.live_link && (
                  <a href={project.live_link} target="_blank" rel="noreferrer" className="row-link">Live</a>
                )}
                {project.github_link && (
                  <a href={project.github_link} target="_blank" rel="noreferrer" className="row-link">Source</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;