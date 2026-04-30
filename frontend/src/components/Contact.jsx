import React, { useState } from 'react'
import '../styles/Contact.css'

const links = [
  { label: 'Email', value: 'nishadpaul64@gmail.com', href: 'mailto:nishadpaul64@gmail.com' },
  { label: 'GitHub', value: 'github.com/nishad-mt', href: 'https://github.com/nishad-mt' },
  { label: 'LinkedIn', value: 'linkedin.com/in/nishad-mt', href: 'https://www.linkedin.com/in/nishad-mt/' },
]

function Contact() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent]       = useState(false)
  const [error, setError]     = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError('Something went wrong. Try emailing me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-grid">
          {/* Left Column */}
          <div className="contact-left">
            <div className="subheading-section">
              <span>Connect</span>
            </div>
            <h2 className="heading-section">Let's Work<br /><span className="text-gradient">Together.</span></h2>
            <p className="contact-body">
              I'm actively looking for Python developer roles — full-time or freelance.
              If you have a project, an opportunity, or just want to say hello, I'd love to hear from you.
            </p>

            <div className="contact-links">
              {links.map(({ label, value, href }) => (
                <a href={href} className="contact-link-card glass-panel" key={label} target="_blank" rel="noopener noreferrer">
                  <div className="link-info">
                    <span className="link-label">{label}</span>
                    <span className="link-val">{value}</span>
                  </div>
                  <div className="link-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="contact-right">
            <div className="form-wrapper glass-panel">
              {sent ? (
                <div className="form-success">
                  <div className="success-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-header">
                    <h3>Send a Message</h3>
                  </div>

                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Tell me about your project..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  {error && (
                    <div className="form-error">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      {error}
                    </div>
                  )}

                  <button type="submit" className="btn-primary form-submit" disabled={loading}>
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    {!loading && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>

      <footer className="site-footer">
        <div className="footer-content">
          <span className="footer-name">Nishad M T</span>
          <span className="footer-copy">Built with React &amp; Django · © 2026</span>
        </div>
      </footer>
    </section>
  )
}

export default Contact