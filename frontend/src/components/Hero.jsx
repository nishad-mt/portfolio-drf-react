import React, { useRef, useEffect } from 'react'
import '../styles/Hero.css'
import profilePhoto from '../assets/profile.PNG'

function Hero() {
  const stageRef = useRef(null)
  const rafRef = useRef(null)
  const cur = useRef({ x: 0, y: 0 })
  const tgt = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const onMove = (e) => {
      const r = stage.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2

      tgt.current = {
        x: ((e.clientY - cy) / (r.height / 2)) * -6,
        y: ((e.clientX - cx) / (r.width / 2)) * 6,
      }
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      cur.current.x = lerp(cur.current.x, tgt.current.x, 0.08)
      cur.current.y = lerp(cur.current.y, tgt.current.y, 0.08)

      if (stage) {
        stage.style.transform = `translateY(-50%) rotateX(${cur.current.x}deg) rotateY(${cur.current.y}deg)`
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section id="home" className="hero">

      {/* Background */}
      <div className="hero-bg" />

      {/* Photo */}
      <div ref={stageRef} className="hero-photo-stage">
        <div className="photo-card">
          <img src={profilePhoto} alt="Nishad M T" />
        </div>
      </div>

      {/* Content */}
      <div className="hero-content">

        <span className="hero-tag">Available for Work</span>

        <h1 className="hero-heading">
          Nishad <span>M T.</span>
        </h1>

        <h2 className="hero-role">
          Python Full Stack Developer
        </h2>

        <p className="hero-description">
          I build scalable and high-performance web applications
          using Python and React, focusing on clean architecture
          and real-world impact.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
        </div>
      </div>

    </section>
  )
}

export default Hero