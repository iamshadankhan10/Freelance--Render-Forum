import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import './About.css';

export default function About() {
  useEffect(() => {
    document.title = 'About -- Render Forum';
  }, []);

  const values = [
    {
      title: 'Context',
      body: 'Every site has a story. We begin each project by reading the landscape, the neighbourhood, the light and the existing built fabric. Design emerges from this understanding.',
    },
    {
      title: 'Materiality',
      body: 'Materials are not merely surface choices -- they shape the atmosphere, the tactility and the longevity of a space. We select materials for their authenticity and their ability to age with grace.',
    },
    {
      title: 'Experience',
      body: 'Architecture is ultimately about the people who inhabit it. We design spaces that are functional, comfortable and emotionally resonant -- spaces that improve with familiarity.',
    },
    {
      title: 'Collaboration',
      body: "We work in close partnership with our clients throughout the design process. The best outcomes arise from a genuine exchange of ideas, where the client's knowledge of their needs meets our architectural expertise.",
    },
  ];

  return (
    <main className="about-page" id="main-content">
      <section className="about-hero section">
        <div className="container">
          <ScrollReveal>
            <SectionLabel label="About" />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="about-hero__title display-xl">
              A studio for<br /><em>thoughtful spaces.</em>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <div className="about-hero-image">
        <img
          src="/img/Building2.png"
          alt="Render Forum project -- modern residential architecture"
          className="about-hero-image__img"
          loading="eager"
        />
      </div>

      <section className="about-intro section" aria-labelledby="about-intro-heading">
        <div className="container">
          <div className="about-intro__grid">
            <ScrollReveal>
              <SectionLabel number="01" label="The Studio" />
              <h2 id="about-intro-heading" className="display-md about-intro__heading">
                Architecture rooted in its place.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="none">
              <div className="about-intro__right">
                <p className="body-lg">
                  Render Forum is a design studio focused on architecture, interior design, and
                  spatial planning. Our practice is built on a belief that good design begins with
                  a thorough understanding of place -- its character, its constraints, and its
                  latent possibilities.
                </p>
                <p className="body-base" style={{ marginTop: '1.25rem' }}>
                  We work across a range of project types, from private residences to commercial
                  developments, bringing the same rigour and care to each engagement regardless
                  of scale. Our process is collaborative and iterative -- we listen carefully,
                  design thoughtfully, and deliver with precision.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="divider" aria-hidden="true" />

      <section className="about-values section" aria-labelledby="values-heading">
        <div className="container">
          <ScrollReveal>
            <SectionLabel number="02" label="What Guides Us" />
          </ScrollReveal>

          <div className="about-values__grid" role="list">
            {values.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 0.1} direction="up">
                <article className="about-value" role="listitem">
                  <span className="about-value__num label label-accent">0{i + 1}</span>
                  <h3 className="about-value__title">{val.title}</h3>
                  <p className="body-base">{val.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-split" aria-labelledby="about-split-heading">
        <div className="about-split__image img-wrapper">
          <img
            src="/img/Interior2.png"
            alt="Render Forum interior -- contemporary living space"
            className="img-cover"
            loading="lazy"
          />
        </div>
        <div className="about-split__content">
          <ScrollReveal>
            <SectionLabel number="03" label="Our Approach" />
            <h2 id="about-split-heading" className="display-md about-split__heading">
              Designing with intention.
            </h2>
            <p className="body-lg about-split__body">
              We believe that the design process is as important as its outcome. Through
              careful research, rigorous detailing and close collaboration with craftspeople
              and contractors, we ensure that the quality of the initial vision is realised
              fully in the built work.
            </p>
            <Link to="/contact" className="btn btn-outline about-split__cta" id="about-cta-btn">
              <span>Work with Us</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
