// ContactForm — contact form UI.
//
// Controlled React inputs + lightweight client-side validation. Submission
// is routed through the contactService abstraction. Because the real backend
// does not exist yet (Phase 8), the service throws immediately — the form
// surfaces a clear, user-friendly error and does NOT fake success.
import { useState } from 'react'
import { submitContactMessage } from '../../services/contactService.js'
import './ContactForm.css'

const EMPTY_FORM = { name: '', email: '', message: '' }
const EMPTY_ERRORS = { name: '', email: '', message: '' }

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
  const [submitError, setSubmitError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear a field's own error as the user edits it.
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitError('')

    const nextErrors = validateField(formData)
    setErrors(nextErrors)
    const hasErrors = Object.values(nextErrors).some(Boolean)
    if (hasErrors) return

    setLoading(true)
    try {
      await submitContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      })
      // Real success path (future): show success message, reset form.
      setSuccess(true)
      setFormData(EMPTY_FORM)
      setErrors(EMPTY_ERRORS)
    } catch {
      // No fake success: since the API is not connected, this surfaces a
      // clear, user-friendly error state.
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-section__grid">
        <div className="contact-section__heading">
          <p className="contact-section__eyebrow">08 — Contact</p>
          <h2 className="contact-section__title">Contact</h2>
          <p className="contact-section__intro">
            Have a question, opportunity, or just want to connect? Send me a
            message.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
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

      {submitError && (
        <p className="contact-form__submit-error" role="alert">
          {submitError}
        </p>
      )}

      {success && (
        <p className="contact-form__success" role="status">
          Thanks for reaching out. Your message has been received.
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