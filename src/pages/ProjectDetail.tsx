import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import MaterialHotspots from '../components/MaterialHotspots/MaterialHotspots';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const project = slug ? getProjectBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentProjects(slug) : { prev: null, next: null };

  useEffect(() => {
    if (project) {
      document.title = `${project.title} -- Render Forum`;
    }
    window.scrollTo({ top: 0 });
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  if (!project) return <Navigate to="/projects" replace />;

  const allImages = Array.from(new Set([project.coverImage, ...project.gallery]));

  return (
    <main className="project-detail" id="main-content">
      {/* HERO */}
      <section className="pd-hero" aria-label={`${project.title} hero image`}>
        <div className="pd-hero__image-wrap">
          <motion.img
            src={project.coverImage}
            alt={`${project.title} architectural render by Render Forum`}
            className="pd-hero__image"
            loading="eager"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="pd-hero__overlay" aria-hidden="true" />
        </div>

        <div className="pd-hero__content container">
          <motion.div
            className="pd-hero__meta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="label" style={{ color: 'rgba(255,255,255,0.5)' }}>{project.id}</span>
            <span className="label" style={{ color: 'rgba(255,255,255,0.3)' }}>&middot;</span>
            <span className="label" style={{ color: 'var(--color-accent)' }}>{project.category}</span>
          </motion.div>

          <motion.h1
            className="pd-hero__title display-xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.title}
          </motion.h1>

          {project.location && (
            <motion.p
              className="pd-hero__location label"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
            >
              {project.location}
            </motion.p>
          )}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="pd-overview section" aria-labelledby="pd-overview-heading">
        <div className="container">
          <div className="pd-overview__grid">
            <ScrollReveal>
              <div>
                <p className="label pd-overview__label">Project Overview</p>
                <h2 id="pd-overview-heading" className="pd-overview__tagline display-md">
                  {project.tagline}
                </h2>
                {project.description && (
                  <p className="pd-overview__desc body-lg">{project.description}</p>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="none">
              <div className="pd-details">
                <h3 className="pd-details__heading label">Project Details</h3>
                <dl className="pd-details__list">
                  {project.year && (
                    <>
                      <dt className="pd-details__term">Year</dt>
                      <dd className="pd-details__def">{project.year}</dd>
                    </>
                  )}
                  <dt className="pd-details__term">Category</dt>
                  <dd className="pd-details__def">{project.category}</dd>
                  {project.location && (
                    <>
                      <dt className="pd-details__term">Location</dt>
                      <dd className="pd-details__def">{project.location}</dd>
                    </>
                  )}
                  {project.area && (
                    <>
                      <dt className="pd-details__term">Area</dt>
                      <dd className="pd-details__def">{project.area}</dd>
                    </>
                  )}
                </dl>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pd-gallery" aria-label="Project image gallery">
        <div className="container">
          <div className="pd-gallery__grid">
            {allImages.map((src, i) => {
              const isFirst = i === 0;
              const isEven = i % 2 === 0;
              const itemClass = isFirst
                ? 'pd-gallery__item pd-gallery__item--full'
                : isEven
                ? 'pd-gallery__item pd-gallery__item--right'
                : 'pd-gallery__item pd-gallery__item--left';
              return (
                <motion.figure
                  key={src + i}
                  className={itemClass}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="pd-gallery__image-wrap img-wrapper"
                    onClick={() => setLightboxImg(src)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View full size image ${i + 1}`}
                    onKeyDown={(e) => e.key === 'Enter' && setLightboxImg(src)}
                    data-cursor="explore"
                  >
                    <img
                      src={src}
                      alt={`${project.title} view ${i + 1}`}
                      className="img-cover pd-gallery__image"
                      loading="lazy"
                    />
                  </div>
                </motion.figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPATIAL MATERIALITY HOTSPOTS */}
      <section className="container">
        <MaterialHotspots
          imageSrc={allImages[1] || project.coverImage}
          imageAlt={`${project.title} architectural detail`}
          title={`Spatial Materiality: ${project.title}`}
          subtitle="Explore the structural specification, material origins, and joinery detailing of this project."
        />
      </section>

      {/* PREV / NEXT */}
      <nav className="pd-nav" aria-label="Project navigation">
        <div className="divider" aria-hidden="true" />
        <div className="container pd-nav__inner">
          {prev ? (
            <Link to={`/projects/${prev.slug}`} className="pd-nav__link pd-nav__link--prev" id="prev-project-btn">
              <span className="label pd-nav__dir">Previous Project</span>
              <span className="pd-nav__title display-md">{prev.title}</span>
            </Link>
          ) : <div />}
          {next && (
            <Link to={`/projects/${next.slug}`} className="pd-nav__link pd-nav__link--next" id="next-project-btn">
              <span className="label pd-nav__dir">Next Project</span>
              <span className="pd-nav__title display-md">{next.title}</span>
            </Link>
          )}
        </div>
        <div className="divider" aria-hidden="true" />
      </nav>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            className="pd-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="pd-lightbox__close"
              onClick={() => setLightboxImg(null)}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <motion.img
              src={lightboxImg}
              alt="Full size view"
              className="pd-lightbox__image"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
