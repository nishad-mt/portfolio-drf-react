import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const links = [
  { label: 'Email', value: 'nishadpaul64@gmail.com', href: 'mailto:nishadpaul64@gmail.com' },
  { label: 'GitHub', value: 'github.com/nishad-mt', href: 'https://github.com/nishad-mt' },
  { label: 'LinkedIn', value: 'linkedin.com/in/nishad-mt', href: 'https://www.linkedin.com/in/nishad-mt/' },
];

function Contact() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError('Something went wrong. Try emailing me directly.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <motion.div 
          className="contact-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column */}
          <div className="contact-left">
            <h2 className="heading-section">Let's <br/><span className="text-muted">Talk</span></h2>
            <p className="contact-body">
              Actively seeking Python developer roles—full-time or freelance. Have an idea? Let's build it.
            </p>

            <div className="contact-links">
              {links.map(({ label, value, href }) => (
                <a href={href} className="contact-link" key={label} target="_blank" rel="noopener noreferrer">
                  <span className="link-label">{label}</span>
                  <span className="link-val">{value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="contact-right">
            {sent ? (
              <div className="form-success">
                <h3>Message Sent</h3>
                <p>I'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-field">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-field">
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="How can I help?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                {error && <div className="form-error">{error}</div>}

                <button type="submit" className="btn-primary form-submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>

      <footer className="site-footer">
        <div className="footer-content">
          <span className="footer-name">NISHAD M T</span>
          <span className="footer-copy">© 2026</span>
        </div>
      </footer>
    </section>
  );
}

export default Contact;