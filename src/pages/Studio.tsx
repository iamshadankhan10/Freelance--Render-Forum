import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { processSteps } from '../data/process';
import './Studio.css';

export default function Studio() {
  useEffect(() => {
    document.title = 'Studio -- Render Forum';
  }, []);

  return (
    <main className="studio-page" id="main-content">
      {/* Hero */}
      <section className="studio-hero">
        <div className="studio-hero__image-wrap">
          <img
            src="/img/Building2.png"
            alt="Render Forum -- architecture studio"
            className="studio-hero__image"
            loading="eager"
          />
          <div className="studio-hero__overlay" aria-hidden="true" />
        </div>
        <div className="studio-hero__content container">
          <ScrollReveal direction="none">
            <p className="label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem' }}>
              Studio
            </p>
            <h1 className="studio-hero__title display-xl">
              Where ideas<br /><em>become spaces.</em>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="studio-philosophy section" aria-labelledby="philosophy-heading">
        <div className="container">
          <ScrollReveal>
            <SectionLabel number="01" label="Philosophy" />
          </ScrollReveal>

          <div className="studio-philosophy__grid">
            <ScrollReveal delay={0.05}>
              <h2 id="philosophy-heading" className="display-md studio-philosophy__heading">
                Design that begins<br />with understanding.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.18} direction="none">
              <div>
                <p className="body-lg" style={{ marginBottom: '1.25rem' }}>
                  Render Forum operates at the intersection of architecture and spatial experience.
                  We believe that the most enduring designs are those that emerge from a deep
                  understanding of place, purpose and the lives of the people who will inhabit them.
                </p>
                <p className="body-base">
                  Our work is characterised by clarity of intent, precision of execution, and a
                  commitment to materials and techniques that stand the test of time. We design
                  spaces that are neither nostalgic nor fashionable -- they are simply right for
                  their context and their moment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Images interlude */}
      <div className="studio-images" aria-hidden="true">
        <div className="studio-images__left img-wrapper">
          <img src="/img/Interior2.png" alt="" className="img-cover" loading="lazy" />
        </div>
        <div className="studio-images__right">
          <div className="img-wrapper studio-images__top">
            <img src="/img/Interior3.png" alt="" className="img-cover" loading="lazy" />
          </div>
          <div className="studio-images__quote">
            <p className="display-md studio-images__quote-text">
              "Realistic Render.<br />Reliable Results."
            </p>
            <span className="label" style={{ color: 'var(--color-warm-gray)' }}>Render Forum</span>
          </div>
        </div>
      </div>

      {/* Process */}
      <section className="studio-process section" aria-labelledby="studio-process-heading">
        <div className="container">
          <ScrollReveal>
            <SectionLabel number="02" label="Our Process" />
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h2 id="studio-process-heading" className="display-md studio-process__heading">
              Five stages.<br />One vision.
            </h2>
          </ScrollReveal>

          <div className="studio-process__steps" role="list">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.08}>
                <div className="studio-process__step" role="listitem">
                  <div className="studio-process__step-header">
                    <span className="label label-accent">{step.number}</span>
                    <h3 className="studio-process__step-title">{step.title}</h3>
                  </div>
                  <p className="body-base studio-process__step-desc">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="studio-cta section" aria-labelledby="studio-cta-heading">
        <div className="container">
          <div className="studio-cta__inner">
            <ScrollReveal direction="none">
              <h2 id="studio-cta-heading" className="display-md">
                Let's create something<br />together.
              </h2>
              <p className="body-lg studio-cta__sub">
                We welcome enquiries from individuals, developers, and organisations
                looking for thoughtful design.
              </p>
              <div className="studio-cta__btns">
                <Link to="/contact" className="btn btn-primary" id="studio-contact-btn">
                  <span>Get in Touch</span>
                </Link>
                <Link to="/projects" className="btn btn-outline" id="studio-projects-btn">
                  <span>See Our Work</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
