import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../data/projects';
import './ProjectDirectory.css';

interface ProjectDirectoryProps {
  projects: Project[];
}

export default function ProjectDirectory({ projects }: ProjectDirectoryProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);

    const updatePreviewPosition = () => {
      // Smooth lerp for floating preview
      setPreviewPos((prev) => ({
        x: prev.x + (mousePos.current.x - prev.x) * 0.15,
        y: prev.y + (mousePos.current.y - prev.y) * 0.15,
      }));
      animId = requestAnimationFrame(updatePreviewPosition);
    };

    animId = requestAnimationFrame(updatePreviewPosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="project-directory-wrapper">
      {/* Directory Table Header */}
      <div className="directory-header-row">
        <span className="col-code">REF</span>
        <span className="col-title">PROJECT / MONUMENT</span>
        <span className="col-category">TYPOLOGY</span>
        <span className="col-location">LOCATION</span>
        <span className="col-year">YEAR</span>
        <span className="col-action">EXPLORE</span>
      </div>

      {/* Directory List */}
      <div className="directory-list" onMouseLeave={() => setActiveProject(null)}>
        {projects.map((project, index) => {
          const code = `RF-0${index + 1}`;
          const isActive = activeProject?.id === project.id;

          return (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className={`directory-row ${isActive ? 'directory-row--active' : ''}`}
              onMouseEnter={() => setActiveProject(project)}
              data-cursor="view"
            >
              <span className="col-code">{code}</span>
              <span className="col-title">
                <span className="directory-project-name">{project.title}</span>
                <span className="directory-project-tagline">{project.tagline}</span>
              </span>
              <span className="col-category">
                <span className="category-pill">{project.category}</span>
              </span>
              <span className="col-location">{project.location}</span>
              <span className="col-year">{project.year}</span>
              <span className="col-action">
                <span className="directory-arrow">→</span>
              </span>
            </Link>
          );
        })}
      </div>

      {/* Floating Hover Image Preview Follower */}
      {activeProject && (
        <div
          className="directory-floating-preview"
          style={{
            transform: `translate3d(${previewPos.x + 30}px, ${previewPos.y - 120}px, 0)`,
          }}
          aria-hidden="true"
        >
          <div className="preview-image-box">
            <img src={activeProject.coverImage} alt={activeProject.title} />
          </div>
          <div className="preview-meta">
            <span className="preview-meta-title">{activeProject.title}</span>
            <span className="preview-meta-cat">{activeProject.category} &middot; {activeProject.year}</span>
          </div>
        </div>
      )}
    </div>
  );
}
