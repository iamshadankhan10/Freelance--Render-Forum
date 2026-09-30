import { useEffect } from 'react';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import ContactForm from '../components/ContactForm/ContactForm';
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact -- Render Forum';
  }, []);

  return (
    <main className="contact-page" id="main-content">
      <section className="contact-hero section">
        <div className="container">
          <ScrollReveal>
            <SectionLabel label="Contact" />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="contact-hero__title display-xl">
              Let's start a<br /><em>conversation.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.18} direction="none">
            <p className="body-lg contact-hero__sub">
              Tell us about your project and we'll be in touch to explore what's possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider" aria-hidden="true" />

      <section className="contact-main section" aria-labelledby="contact-form-heading">
        <div className="container">
          <div className="contact-main__grid">
            {/* Info column */}
            <ScrollReveal className="contact-info" direction="none">
              <div>
                <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>
                <div className="contact-info__block">
                  <p className="label contact-info__label">Email</p>
                  {/* TODO: Replace with actual client email */}
                  <a href="mailto:hello@renderforum.com" className="contact-info__value">
                    hello@renderforum.com
                  </a>
                </div>

                <div className="contact-info__block">
                  <p className="label contact-info__label">Phone</p>
                  {/* TODO: Replace with actual client phone */}
                  <a href="tel:+910000000000" className="contact-info__value">
                    +91 00 0000 0000
                  </a>
                </div>

                <div className="contact-info__block">
                  <p className="label contact-info__label">Studio Address</p>
                  {/* TODO: Replace with actual client address */}
                  <address className="contact-info__address">
                    Studio Address Line 1<br />
                    City, State -- 000 000<br />
                    India
                  </address>
                </div>

                <div className="contact-info__block">
                  <p className="label contact-info__label">Social</p>
                  <div className="contact-info__social">
                    {/* TODO: Replace # with actual social URLs */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="contact-info__social-link">Instagram</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="contact-info__social-link">LinkedIn</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="contact-info__social-link">Behance</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form column */}
            <ScrollReveal delay={0.1} direction="none">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="contact-image-strip" aria-hidden="true">
        <div className="img-wrapper contact-image-strip__inner">
          <img
            src="/img/Interior1.png"
            alt=""
            className="img-cover"
            loading="lazy"
          />
          <div className="contact-image-strip__overlay" />
          <div className="contact-image-strip__text">
            <p className="display-md contact-image-strip__quote">
              "Every great design<br />begins with a conversation."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
