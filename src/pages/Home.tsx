import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ArchitecturalTicker from '../components/ArchitecturalTicker/ArchitecturalTicker';
import ComparisonSlider from '../components/ComparisonSlider/ComparisonSlider';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { processSteps } from '../data/process';
import './Home.css';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.4], ['0%', '20%']);

  useEffect(() => {
    document.title = 'Render Forum -- Architecture & Spatial Design';
  }, []);

  const featuredProject = projects[1]; // Building2 -- strongest visual

  return (
    <main className="home" id="main-content">
      {/* ========================================================
          SECTION 01 -- HERO
          ======================================================== */}
      <section className="hero" aria-label="Hero">
        {/* Parallax image */}
        <div className="hero__image-wrap" aria-hidden="true">
          <motion.div className="hero__image-inner" style={{ y: heroParallax }}>
            <img
              src="/img/Building2.png"
              alt="Render Forum -- Modern architectural design"
              className="hero__image"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>
          <div className="hero__overlay" />
        </div>

        {/* Content */}
        <div className="hero__content container">
          <motion.p
            className="hero__eyebrow label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Render Forum &nbsp;&middot;&nbsp; Architecture &nbsp;&middot;&nbsp; Design &nbsp;&middot;&nbsp; Space
          </motion.p>

          <motion.h1
            className="hero__title display-xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Designing Spaces<br />
            <em>That Belong.</em>
          </motion.h1>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            Architecture shaped by context, material, light and the people who experience it.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/projects" className="btn btn-white" id="hero-explore-btn">
              <span>Explore Projects</span>
            </Link>
            <Link to="/studio" className="btn btn-white-outline" id="hero-studio-btn">
              <span>Our Studio</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll-indicator"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.span
            className="hero__scroll-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.5, duration: 0.6, ease: 'easeOut' }}
          />
          <span className="hero__scroll-label label">Scroll</span>
        </motion.div>
      </section>

      {/* ========================================================
          SECTION 02 -- STUDIO INTRO
          ======================================================== */}
      <section className="home-intro section" aria-labelledby="intro-heading">
        <div className="container">
          <ScrollReveal>
            <SectionLabel number="01" label="Studio" />
          </ScrollReveal>

          <div className="home-intro__layout">
            <ScrollReveal delay={0.05}>
              <h2 id="intro-heading" className="home-intro__heading display-md">
                We create architecture<br />with a sense of place.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="none">
              <div className="home-intro__right">
                <p className="body-lg home-intro__body">
                  Render Forum is an architecture and spatial design studio committed to work
                  that is rooted in its context. We approach every project through the lens
                  of functionality, materiality and human experience -- designing spaces that
                  feel considered, purposeful and enduring.
                </p>
                <Link to="/about" className="btn btn-ghost home-intro__link" id="intro-about-btn">
                  <span>About the Studio</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="home-intro__arrow">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Architectural Marquee Ribbon (Light) */}
      <ArchitecturalTicker theme="light" />

      {/* ========================================================
          SECTION 03 -- SELECTED PROJECT
          ======================================================== */}
      <section className="home-featured section" aria-labelledby="featured-heading">
        <div className="container">
          <ScrollReveal>
            <SectionLabel number="02" label="Selected Project" />
          </ScrollReveal>

          <div className="home-featured__layout">
            <ScrollReveal className="home-featured__title-col" delay={0.05}>
              <h2 id="featured-heading" className="home-featured__num display-xl" aria-label={featuredProject.id}>
                {featuredProject.id}
              </h2>
            </ScrollReveal>

            <div className="home-featured__content">
              <ScrollReveal delay={0.1}>
                <div className="home-featured__meta">
                  <span className="label label-accent">{featuredProject.category}</span>
                  <span className="label" style={{ color: 'var(--color-light-gray)' }}>&middot;</span>
                  <span className="label">{featuredProject.location}</span>
                </div>
                <h3 className="home-featured__title display-md">
                  {featuredProject.title}
                </h3>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="home-featured__image-wrap img-wrapper">
                <img
                  src={featuredProject.coverImage}
                  alt={`${featuredProject.title} -- architectural render by Render Forum`}
                  className="img-cover home-featured__image"
                  loading="lazy"
                />
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="home-featured__footer">
                  <p className="home-featured__desc body-base">
                    {featuredProject.tagline}
                  </p>
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="btn btn-ghost"
                    id="featured-project-btn"
                  >
                    <span>View Project</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="home-intro__arrow">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04 -- PROJECTS GRID (Editorial)
          ======================================================== */}
      <section className="home-projects section" aria-labelledby="projects-heading">
        <div className="container">
          <ScrollReveal>
            <div className="home-projects__header">
              <SectionLabel number="03" label="Selected Work" />
              <Link to="/projects" className="btn btn-ghost" id="all-projects-btn">
                <span>All Projects</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h2 id="projects-heading" className="home-projects__heading display-md">
              Recent Projects
            </h2>
          </ScrollReveal>

          {/* Editorial asymmetric layout */}
          <div className="home-projects__grid">
            {/* Row 1: Large + Small */}
            <div className="home-projects__row home-projects__row--1">
              <ProjectCard project={projects[0]} variant="large" index={0} />
              <div className="home-projects__row--1-side">
                <ProjectCard project={projects[2]} variant="small" index={1} />
                <div className="home-projects__text-card">
                  <span className="label label-accent">Architecture &amp; Interiors</span>
                  <p className="home-projects__text-quote display-md">
                    Built work shaped by context.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Small + Large */}
            <div className="home-projects__row home-projects__row--2">
              <ProjectCard project={projects[3]} variant="small" index={2} />
              <ProjectCard project={projects[1]} variant="large" index={3} />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05 -- INTERACTIVE CRAFTSMANSHIP & CAD COMPARISON
          ======================================================== */}
      <section className="home-comparison section" aria-labelledby="comparison-heading">
        <div className="container">
          <ScrollReveal>
            <SectionLabel number="04" label="Digital Precision &amp; Reality" />
          </ScrollReveal>

          <div className="home-comparison__header">
            <ScrollReveal delay={0.05}>
              <h2 id="comparison-heading" className="display-md">
                From Digital Computation<br /><em>To Built Monument.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="body-lg home-comparison__intro">
                Drag the interactive slider to analyze our architectural workflow -- translating
                complex parametric volumes and computational light studies into tangible,
                enduring physical form.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="none">
            <ComparisonSlider
              beforeImage="/img/Building1.png"
              afterImage="/img/Building2.png"
              beforeLabel="PARAMETRIC STUDY // 3D MESH"
              afterLabel="PHYSICAL EXECUTION // BUILT REALITY"
              caption="Interactive comparative analysis: Monolithic commercial facade geometry study vs completed construction."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          SECTION 06 -- APPROACH (Typographic)
          ======================================================== */}
      <section className="home-approach section" aria-labelledby="approach-heading">
        <div className="container">
          <ScrollReveal>
            <SectionLabel number="05" label="Our Approach" />
          </ScrollReveal>

          <h2 id="approach-heading" className="sr-only">Design Approach</h2>

          <div className="home-approach__words" aria-label="Context, Material, Light, Experience">
            {['Context.', 'Material.', 'Light.', 'Experience.'].map((word, i) => (
              <ScrollReveal key={word} delay={i * 0.12} direction="none">
                <span className="home-approach__word display-lg" aria-hidden="true">
                  {word}
                </span>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5} direction="none">
            <div className="home-approach__footer">
              <p className="body-lg home-approach__desc">
                Every project at Render Forum begins with careful observation -- of the site,
                the programme and the people it will serve. From this grounding, we develop
                architecture and interiors that feel inherently suited to their place and purpose.
              </p>
              <Link to="/expertise" className="btn btn-ghost" id="approach-expertise-btn">
                <span>Our Expertise</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          SECTION 07 -- EXPERTISE
          ======================================================== */}
      <section className="home-expertise section-sm" aria-labelledby="expertise-heading">
        <div className="container">
          <ScrollReveal>
            <SectionLabel number="06" label="Expertise" />
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h2 id="expertise-heading" className="home-expertise__heading display-md">
              What we do
            </h2>
          </ScrollReveal>

          <div className="home-expertise__list" role="list">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <div className="home-expertise__item" role="listitem">
                  <div className="home-expertise__item-header">
                    <span className="home-expertise__num label">{service.number}</span>
                    <h3 className="home-expertise__title">{service.title}</h3>
                  </div>
                  <p className="home-expertise__desc body-base">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Marquee Ribbon (Dark) */}
      <ArchitecturalTicker
        theme="dark"
        speed="slow"
        items={[
          'PARAMETRIC MODELING',
          'SPATIAL CONTINUITY',
          'SHADOW STUDIES',
          'TACTILE MONOLITHS',
          'LIGHT AXIS ANALYSIS',
          'SUSTAINED INTEGRITY',
        ]}
      />

      {/* ========================================================
          SECTION 08 -- PROCESS
          ======================================================== */}
      <section className="home-process section" aria-labelledby="process-heading">
        <div className="home-process__bg" aria-hidden="true">
          <img
            src="/img/Building1.png"
            alt=""
            className="home-process__bg-image"
            loading="lazy"
          />
          <div className="home-process__bg-overlay" />
        </div>
        <div className="container home-process__inner">
          <ScrollReveal>
            <SectionLabel number="07" label="Process" dark />
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h2 id="process-heading" className="home-process__heading display-md">
              How we work
            </h2>
          </ScrollReveal>

          <div className="home-process__steps" role="list">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.09} direction="left">
                <div className="home-process__step" role="listitem">
                  <span className="home-process__step-num label">{step.number}</span>
                  <div className="home-process__step-body">
                    <h3 className="home-process__step-title">{step.title}</h3>
                    <p className="home-process__step-desc">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 09 -- CONTACT CTA
          ======================================================== */}
      <section className="home-cta section" aria-labelledby="cta-heading">
        <div className="home-cta__bg" aria-hidden="true">
          <img
            src="/img/Interior2.png"
            alt=""
            className="home-cta__bg-image"
            loading="lazy"
          />
          <div className="home-cta__overlay" />
        </div>
        <div className="container home-cta__inner">
          <ScrollReveal direction="none">
            <p className="home-cta__label label" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Start a conversation
            </p>
            <h2 id="cta-heading" className="home-cta__heading display-xl">
              Have a space<br />in mind?
            </h2>
            <p className="home-cta__sub">
              Let&apos;s talk about your project -- its context, its possibilities, and how we can bring it to life.
            </p>
            <Link to="/contact" className="btn btn-white" id="cta-contact-btn">
              <span>Start a Project</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
