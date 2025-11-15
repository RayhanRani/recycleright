import { useState, useRef } from 'react';
import Hero from '../components/Hero';

function HelpAccessibility() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = formData.name.trim();
    const email = formData.email.trim();
    const msg = formData.message.trim();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const valid = !!(name && validEmail && msg);

    setError(!valid);
    setSuccess(valid);

    if (!valid) {
      if (!name) {
        nameRef.current?.focus();
      } else if (!validEmail) {
        emailRef.current?.focus();
      } else {
        messageRef.current?.focus();
      }
      return;
    }

    // Reset form on success
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error/success messages when user starts typing
    if (error || success) {
      setError(false);
      setSuccess(false);
    }
  };

  return (
    <>
      <Hero 
        variant="secondary"
        title="Accessibility & Support"
        subtitle="Our goal is to make Recycle Right usable for everyone on any device, with any ability."
      />

      <main className="container">
        <section>
          <h2>Accessibility Features</h2>
          <ul>
            <li>Keyboard navigation supported — use <kbd>Tab</kbd> and <kbd>Enter</kbd> to move and select.</li>
            <li>Screen readers are supported with clear headings and alt text.</li>
            <li>High-contrast colors and large buttons for readability.</li>
            <li>Mobile-friendly layout adapts to any screen size.</li>
          </ul>
        </section>

        <section>
          <h2>Contact / Feedback</h2>
          <form id="supportForm" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Name</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              required 
              ref={nameRef}
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              ref={emailRef}
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              required 
              ref={messageRef}
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit">Send</button>

            {error && (
              <p className="error-msg" role="alert" aria-live="assertive">
                ⚠ Please fill in all fields with a valid email.
              </p>
            )}
            {success && (
              <p className="success-msg" role="status" aria-live="polite">
                Thank you! Your message has been received.
              </p>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default HelpAccessibility;

