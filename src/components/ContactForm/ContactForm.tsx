import { useState, type FormEvent, type ChangeEvent } from 'react';
import './ContactForm.css';

// =============================================================================
// Form Types
// =============================================================================

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// =============================================================================
// Validation
// =============================================================================

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.message.trim()) errors.message = 'Please tell us about your project.';
  return errors;
}

// =============================================================================
// API Layer Placeholder
// Replace this function when connecting a backend / email service
// =============================================================================

async function submitContactForm(_data: FormData): Promise<void> {
  // TODO: Replace with actual API call, e.g.:
  // const response = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  // if (!response.ok) throw new Error('Submission failed');
  await new Promise((resolve) => setTimeout(resolve, 1200));
}

// =============================================================================
// Component
// =============================================================================

const projectTypes = [
  'Architecture',
  'Interior Design',
  'Spatial Design',
  'Planning & Consultation',
  'Other',
];

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('loading');
    try {
      await submitContactForm(form);
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form__success" role="alert" aria-live="polite">
        <div className="contact-form__success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="contact-form__success-title">Message received.</h3>
        <p className="contact-form__success-body">
          Thank you for reaching out. We will be in touch shortly.
        </p>
        <button className="btn btn-outline" onClick={() => setStatus('idle')}>
          <span>Send another message</span>
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <input
        type="text"
        name="website"
        className="contact-form__honeypot"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="contact-form__row">
        <div className={`contact-form__field${errors.name ? ' contact-form__field--error' : ''}`}>
          <label htmlFor="contact-name" className="contact-form__label label">
            Full Name <span aria-label="required">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="contact-form__input"
            placeholder="Your full name"
            autoComplete="name"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
            required
          />
          {errors.name && <p id="name-error" className="contact-form__error" role="alert">{errors.name}</p>}
        </div>

        <div className={`contact-form__field${errors.email ? ' contact-form__field--error' : ''}`}>
          <label htmlFor="contact-email" className="contact-form__label label">
            Email Address <span aria-label="required">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="contact-form__input"
            placeholder="your@email.com"
            autoComplete="email"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
            required
          />
          {errors.email && <p id="email-error" className="contact-form__error" role="alert">{errors.email}</p>}
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="contact-phone" className="contact-form__label label">Phone Number</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="contact-form__input"
            placeholder="+91 00 0000 0000"
            autoComplete="tel"
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-project-type" className="contact-form__label label">Project Type</label>
          <select
            id="contact-project-type"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="contact-form__select"
          >
            <option value="">Select a category</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={`contact-form__field${errors.message ? ' contact-form__field--error' : ''}`}>
        <label htmlFor="contact-message" className="contact-form__label label">
          Project Brief <span aria-label="required">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="contact-form__textarea"
          placeholder="Tell us about your project -- the space, your vision, the timeline..."
          rows={6}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
          required
        />
        {errors.message && <p id="message-error" className="contact-form__error" role="alert">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="contact-form__global-error" role="alert" aria-live="assertive">
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary contact-form__submit"
        disabled={status === 'loading'}
        id="contact-submit-btn"
        aria-busy={status === 'loading'}
      >
        <span>{status === 'loading' ? 'Sending...' : 'Send Enquiry'}</span>
        {status !== 'loading' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="contact-form__arrow">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {status === 'loading' && <span className="contact-form__spinner" aria-hidden="true" />}
      </button>
    </form>
  );
}
