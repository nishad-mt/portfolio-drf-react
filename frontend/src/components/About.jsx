import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <div className="about-split">
          {/* Left sticky label */}
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="about-label">01 // PHILOSOPHY</span>
          </motion.div>

          {/* Right massive content */}
          <div className="about-right">
            <motion.h2 
              className="about-headline"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              I build <span className="highlight-pill">robust systems</span> that feel effortless.
            </motion.h2>

            <motion.p 
              className="about-subheadline"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
            >
              My focus is on designing secure backend architectures while crafting cinematic, high-performance interfaces. I believe in writing code that scales, bridging the gap between <span className="text-muted">raw server power</span> and <span className="text-muted">fluid human interaction.</span> Less noise, more impact.
            </motion.p>

            <motion.div 
              className="about-stats"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              <div className="stat-block">
                <span className="stat-number">Full Stack</span>
                <span className="stat-text">DEVELOPMENT</span>
              </div>
              <div className="stat-block">
                <span className="stat-number">Kerala, IN</span>
                <span className="stat-text">REMOTE WORLDWIDE</span>
              </div>
              <div className="stat-block">
                <span className="stat-number">Python/React</span>
                <span className="stat-text">CORE STACK</span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
