import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 -- Page Not Found | Render Forum';
  }, []);

  return (
    <main className="not-found" id="main-content" aria-labelledby="not-found-heading">
      <div className="not-found__bg" aria-hidden="true">
        <img
          src="/img/Building2.png"
          alt=""
          className="not-found__bg-image"
          loading="lazy"
        />
        <div className="not-found__overlay" />
      </div>

      <div className="not-found__content container">
        <p className="label not-found__num" aria-label="Error 404">404</p>

        <h1 id="not-found-heading" className="not-found__title display-xl">
          This space is still<br /><em>being designed.</em>
        </h1>

        <p className="not-found__sub">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="not-found__actions">
          <Link to="/" className="btn btn-white" id="not-found-home-btn">
            <span>Return to Studio</span>
          </Link>
          <Link to="/projects" className="btn btn-white-outline" id="not-found-projects-btn">
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
