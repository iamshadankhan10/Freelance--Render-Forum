import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectDirectory from '../components/ProjectDirectory/ProjectDirectory';
import { projects, categories } from '../data/projects';
import type { Project } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filtered, setFiltered] = useState<Project[]>(projects);
  const [viewMode, setViewMode] = useState<'grid' | 'index'>('grid');

  useEffect(() => {
    document.title = 'Projects -- Render Forum';
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFiltered(projects);
    } else {
      setFiltered(projects.filter((p) => p.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <main className="projects-page" id="main-content">
      <section className="projects-hero section">
        <div className="container">
          <ScrollReveal>
            <SectionLabel label="Our Work" />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="projects-hero__title display-xl">
              Selected<br /><em>Projects</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.18} direction="none">
            <p className="projects-hero__sub body-lg">
              A selection of architecture, interior, and spatial design projects -- each shaped
              by context, materiality, and the people they are built for.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Filter and View Mode Switcher */}
      <section className="projects-filter" aria-label="Filter projects by category">
        <div className="container projects-filter__wrapper">
          <div className="projects-filter__inner" role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat.value}
                role="tab"
                aria-selected={activeCategory === cat.value}
                className={`projects-filter__btn${activeCategory === cat.value ? ' projects-filter__btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.value)}
                id={`filter-${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* View Mode Toggle: Grid vs Index */}
          <div className="projects-view-toggle" role="group" aria-label="View layout switcher">
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'grid' ? 'view-toggle-btn--active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
              aria-label="Grid view"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <rect x="1" y="1" width="6" height="6" rx="1" />
                <rect x="9" y="1" width="6" height="6" rx="1" />
                <rect x="1" y="9" width="6" height="6" rx="1" />
                <rect x="9" y="9" width="6" height="6" rx="1" />
              </svg>
              <span>GRID</span>
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'index' ? 'view-toggle-btn--active' : ''}`}
              onClick={() => setViewMode('index')}
              title="Directory Index View"
              aria-label="Directory view"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <rect x="1" y="2" width="14" height="2" rx="0.5" />
                <rect x="1" y="7" width="14" height="2" rx="0.5" />
                <rect x="1" y="12" width="14" height="2" rx="0.5" />
              </svg>
              <span>INDEX</span>
            </button>
          </div>
        </div>
      </section>

      <section className="projects-grid-section section" aria-label="Projects list">
        <div className="container">
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div
                key={`grid-${activeCategory}`}
                className="projects-grid"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {filtered.length === 0 ? (
                  <p className="projects-empty body-lg">No projects in this category yet.</p>
                ) : (
                  filtered.map((project, i) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      variant={i === 0 ? 'large' : 'default'}
                      index={i}
                    />
                  ))
                )}
              </motion.div>
            ) : (
              <motion.div
                key={`index-${activeCategory}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectDirectory projects={filtered} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
