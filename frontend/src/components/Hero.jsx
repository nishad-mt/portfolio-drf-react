import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import profilePhoto from '../assets/profile.PNG';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="hero-text-container"
        >
          <div className="hero-tag-wrap">
            <span className="hero-tag">2026 // AVAILABLE FOR WORK</span>
          </div>
          <h1 className="hero-heading">
            Engineering<br />
            <span className="text-muted">Digital</span> Realities.
          </h1>
          <p className="hero-description">
            Nishad M T — Python Full Stack Developer. Bridging minimal aesthetics with complex architectures.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a href="#about" className="btn-secondary">
              About Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="photo-pill">
            <img src={profilePhoto} alt="Nishad M T" className="profile-img" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;