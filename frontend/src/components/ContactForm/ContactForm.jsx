import { useRef, useState } from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'
import './ContactForm.css'

const EMPTY_FORM = { name: '', email: '', message: '' }
const EMPTY_ERRORS = { name: '', email: '', message: '' }

const CONTACT_LINKS = [
  {
    type: 'phone',
    label: 'Phone',
    value: '+91-6390679448',
    href: 'tel:6390679448',
    icon: FaPhone,
    isExternal: false,
  },
  {
    type: 'email',
    label: 'Email',
    value: 'thakurmadhu2448@gmail.com',
    href: 'mailto:thakurmadhu2448@gmail.com',
    icon: FaEnvelope,
    isExternal: false,
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/madhu-thakur-735790316',
    icon: FaLinkedin,
    isExternal: true,
  },
  {
    type: 'github',
    label: 'GitHub',
    value: 'GitHub Profile',
    href: 'https://github.com/Madhu-Thakur',
    icon: FaGithub,
    isExternal: true,
  },
]

function validateField(formData) {
  const errors = { ...EMPTY_ERRORS }

  if (!formData.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required.'
  }

  return errors
}

function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState(EMPTY_ERRORS)
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState({ text: '', type: '' })
  const contactForm = useRef(null)

  // Feedback helper for the form's success/error message area.
  const showMessage = (text, type) => {
    setFeedback({ text, type })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validateField(formData)
    setErrors(nextErrors)
    const hasErrors = Object.values(nextErrors).some(Boolean)
    if (hasErrors) return

    setLoading(true)
    try {
 
      showMessage(
        'Message sent successfully! Thank you for reaching out. I will get back to you soon.',
      )
 
      contactForm.current?.reset()
      setFormData(EMPTY_FORM)
      setErrors(EMPTY_ERRORS)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-section__grid">
        <div className="contact-section__heading">
          <h2 className="contact-section__title">Contact</h2>
          <p className="contact-section__intro">
            Have a question, opportunity, or just want to connect? Send me a
            message.
          </p>

          <ul className="contact-section__links">
            {CONTACT_LINKS.map((link) => {
              const Icon = link.icon
              return (
                <li key={link.type} className="contact-section__item">
                  <a
                    className="contact-section__link"
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    <span className="contact-section__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="contact-section__info">
                      <span className="contact-section__label">
                        {link.label}
                      </span>
                      <span className="contact-section__value">
                        {link.value}
                      </span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <form
          ref={contactForm}
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className={`contact-form__input${
            errors.name ? ' contact-form__input--error' : ''
          }`}
          value={formData.name}
          onChange={handleChange}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          disabled={loading}
        />
        {errors.name && (
          <p id="contact-name-error" className="contact-form__error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className={`contact-form__input${
            errors.email ? ' contact-form__input--error' : ''
          }`}
          value={formData.email}
          onChange={handleChange}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          disabled={loading}
        />
        {errors.email && (
          <p id="contact-email-error" className="contact-form__error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          className={`contact-form__input contact-form__textarea${
            errors.message ? ' contact-form__input--error' : ''
          }`}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          disabled={loading}
        />
        {errors.message && (
          <p id="contact-message-error" className="contact-form__error">
            {errors.message}
          </p>
        )}
      </div>

      {feedback.text && (
        <p
          className={
            feedback.type === 'error'
              ? 'contact-form__submit-error'
              : 'contact-form__success'
          }
          role={feedback.type === 'error' ? 'alert' : 'status'}
        >
          {feedback.text}
        </p>
      )}

      <div className="contact-form__actions">
        <button type="submit" className="btn btn--primary" disabled={loading}>
          {loading ? 'Sending…' : 'Send Message'}
        </button>
      </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm