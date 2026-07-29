import React, { useState } from 'react';
import { validateContactForm } from '../../utils/validation';
import { Button } from '../common/Button';
import './ContactForm.css';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    // Simulate submission delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1200);
  };

  return (
    <form className="contact-form-element" onSubmit={handleSubmit} noValidate>
      {status === 'success' && (
        <div className="form-success-banner">
          <span className="banner-icon">✓</span>
          <div>
            <h4>Message Sent Successfully!</h4>
            <p>Thank you for reaching out, Keerthivasan will get back to you shortly.</p>
          </div>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name" className="form-label">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className={`form-input ${errors.name ? 'is-invalid' : ''}`}
          placeholder="e.g. Sarah Jenkins"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <span id="name-error" className="error-text">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-input ${errors.email ? 'is-invalid' : ''}`}
          placeholder="e.g. sarah@company.com"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <span id="email-error" className="error-text">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          className={`form-input ${errors.subject ? 'is-invalid' : ''}`}
          placeholder="e.g. Full Stack Developer Opportunity"
          value={formData.subject}
          onChange={handleChange}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && <span id="subject-error" className="error-text">{errors.subject}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className={`form-input form-textarea ${errors.message ? 'is-invalid' : ''}`}
          placeholder="Tell me about your project or opportunity..."
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <span id="message-error" className="error-text">{errors.message}</span>}
      </div>

      <Button
        variant="primary"
        type="submit"
        isLoading={status === 'submitting'}
        className="form-submit-btn"
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        }
      >
        Send Message
      </Button>
    </form>
  );
}
