import React, { useState } from 'react'
import '../styles/Contact.css'

const links = [
  { label: 'Gmail', value: 'nishadpaul64@gmail.com', href: 'mailto:nishadpaul64@gmail.com' },
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
    <section id="contact" className="contact">
      <div className="contact-inner">

        <div className="section-eyebrow">
          <span className="eyebrow-num">05</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-label">Contact</span>
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <h2 className="contact-heading">
              Let's work<br />
              <span className="accent-word">together.</span>
            </h2>
            <p className="contact-body">
              I'm actively looking for Python developer roles — full-time or freelance.
              If you have a project, an opportunity, or just want to say hello, I'd love to hear from you.
            </p>

            <div className="contact-links">
              {links.map(({ label, value, href }) => (
                <a href={href} className="contact-link-row" key={label} target="_blank" rel="noopener noreferrer">
                  <span className="contact-link-label">{label}</span>
                  <span className="contact-link-val">{value}</span>
                  <svg className="contact-link-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            {sent ? (
              <div className="form-success">
                <span className="dot" />
                <p>Message sent — I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
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
                    placeholder="you@email.com"
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
                    placeholder="What's on your mind?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <p className="form-error">{error}</p>
                )}

                <button type="submit" className="form-submit" disabled={loading}>
                  <span>{loading ? 'Sending...' : 'Send message'}</span>
                  {!loading && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      <footer className="site-footer">
        <span className="footer-name">Nishad M T</span>
        <span className="footer-copy">Built with React &amp; Django · © 2026</span>
      </footer>
    </section>
  )
}

export default Contact