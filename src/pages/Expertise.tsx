import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { services } from '../data/services';
import './Expertise.css';

export default function Expertise() {
  const [openId, setOpenId] = useState<string | null>(services[0].id);

  useEffect(() => {
    document.title = 'Expertise -- Render Forum';
  }, []);

  return (
    <main className="expertise-page" id="main-content">
      {/* Header */}
      <section className="expertise-hero section">
        <div className="container">
          <ScrollReveal>
            <SectionLabel label="Expertise" />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="expertise-hero__title display-xl">
              What we<br /><em>do best.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="none">
            <p className="body-lg expertise-hero__sub">
              Our expertise spans the full spectrum of the design and build process -- from
              initial site analysis to the final details of a completed space.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Services Accordion */}
      <section className="expertise-services section" aria-labelledby="services-heading">
        <div className="container">
          <ScrollReveal>
            <SectionLabel number="01" label="Services" />
          </ScrollReveal>
          <h2 id="services-heading" className="sr-only">Our Services</h2>

          <div className="expertise-list" role="list">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.06}>
                <article className="expertise-item" role="listitem">
                  <button
                    className="expertise-item__header"
                    onClick={() => setOpenId(openId === service.id ? null : service.id)}
                    aria-expanded={openId === service.id}
                    aria-controls={`service-body-${service.id}`}
                    id={`service-btn-${service.id}`}
                  >
                    <span className="expertise-item__num label label-accent">{service.number}</span>
                    <h3 className="expertise-item__title">{service.title}</h3>
                    <span className="expertise-item__toggle" aria-hidden="true">
                      {openId === service.id ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openId === service.id && (
                      <motion.div
                        id={`service-body-${service.id}`}
                        className="expertise-item__body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        aria-labelledby={`service-btn-${service.id}`}
                      >
                        <div className="expertise-item__body-inner">
                          <p className="body-lg">{service.description}</p>
                          {service.tags && (
                            <div className="expertise-item__tags">
                              {service.tags.map((tag) => (
                                <span key={tag} className="expertise-item__tag label">{tag}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image grid */}
      <section className="expertise-images" aria-label="Expertise visual examples">
        <div className="expertise-images__grid">
          <div className="expertise-images__col">
            <div className="img-wrapper expertise-images__item">
              <img
                src="/img/Building1.png"
                alt="Commercial architecture by Render Forum"
                className="img-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="expertise-images__col expertise-images__col--offset">
            <div className="img-wrapper expertise-images__item">
              <img
                src="/img/Interior1.png"
                alt="Interior design by Render Forum"
                className="img-cover"
                loading="lazy"
              />
            </div>
            <div className="img-wrapper expertise-images__item">
              <img
                src="/img/Interior3.png"
                alt="Residential interior by Render Forum"
                className="img-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="expertise-cta section" aria-labelledby="expertise-cta-heading">
        <div className="container">
          <ScrollReveal direction="none">
            <div className="expertise-cta__inner">
              <h2 id="expertise-cta-heading" className="display-md expertise-cta__heading">
                Ready to begin?
              </h2>
              <p className="body-lg expertise-cta__sub">
                Tell us about your project and we'll explore how Render Forum can help bring it to life.
              </p>
              <Link to="/contact" className="btn btn-primary" id="expertise-cta-btn">
                <span>Start a Project</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
