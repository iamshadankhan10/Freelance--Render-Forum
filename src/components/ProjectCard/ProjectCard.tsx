import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'large' | 'small';
  index?: number;
}

export default function ProjectCard({ project, variant = 'default', index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      className={`project-card project-card--${variant}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/projects/${project.slug}`} className="project-card__link" aria-label={`View project: ${project.title}`}>
        <div className="project-card__image-wrap img-wrapper">
          <img
            src={project.coverImage}
            alt={`${project.title} architectural render by Render Forum`}
            className="img-cover"
            loading="lazy"
          />
          <div className="project-card__overlay" aria-hidden="true">
            <span className="project-card__view-label label">View Project</span>
            <svg className="project-card__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="project-card__info">
          <div className="project-card__meta">
            <span className="project-card__num label">{project.id}</span>
            <span className="project-card__category label">{project.category}</span>
          </div>
          <h3 className="project-card__title">{project.title}</h3>
          {project.location && <p className="project-card__location">{project.location}</p>}
        </div>
      </Link>
    </motion.article>
  );
}
