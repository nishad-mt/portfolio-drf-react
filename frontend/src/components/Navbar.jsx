import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const NAV_LINKS = [
  { href: '#home',       label: 'Home',       index: '01' },
  { href: '#about',      label: 'About',      index: '02' },
  { href: '#experience', label: 'Journey', index: '03' },
  { href: '#projects',   label: 'Projects',   index: '04' },
  { href: '#contact',    label: 'Contact',    index: '05' },
]

function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  /* Scroll listener — adds glass backdrop after 40px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLinkClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`}
           role="navigation" aria-label="Main navigation">

        {/* Logo / wordmark */}
        <a href="#home" className="navbar-logo" onClick={() => handleLinkClick('#home')} aria-label="Go to top">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">NMT</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links" role="list">
          {NAV_LINKS.map(({ href, label, index }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link${activeLink === href ? ' nav-link--active' : ''}`}
                onClick={() => handleLinkClick(href)}
              >
                <span className="nav-index">{index}</span>
                <span className="nav-label">{label}</span>
                <span className="nav-underline" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop only */}
        <a href="#contact" className="navbar-cta" onClick={() => handleLinkClick('#contact')}>
          Let's talk
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Hamburger — mobile only */}
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="bar bar-1" />
          <span className="bar bar-2" />
          <span className="bar bar-3" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-links" role="list">
          {NAV_LINKS.map(({ href, label, index }, i) => (
            <li key={href} style={{ '--i': i }}>
              <a
                href={href}
                className={`mobile-link${activeLink === href ? ' mobile-link--active' : ''}`}
                onClick={() => handleLinkClick(href)}
                tabIndex={menuOpen ? 0 : -1}
              >
                <span className="mobile-index">{index}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="mobile-cta" onClick={() => handleLinkClick('#contact')}
           tabIndex={menuOpen ? 0 : -1}>
          Hire me
        </a>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div className="menu-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  )
}

export default Navbar