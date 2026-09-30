import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Studio', href: '/studio' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isOverHero = location.pathname === '/';

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navClass = [
    'navbar',
    isOverHero && !scrolled ? 'navbar--hero' : 'navbar--scrolled',
    scrolled ? 'navbar--solid' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <header className={navClass} role="banner">
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo" aria-label="Render Forum Home">
            <img src="/img/Logo.png" alt="Render Forum" className="navbar__logo-img" loading="eager" />
            <span className="navbar__logo-text">Render Forum</span>
          </Link>

          <nav className="navbar__nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`navbar__link${location.pathname === link.href ? ' navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="navbar__cta btn btn-primary" id="nav-cta">
            <span>Start a Project</span>
          </Link>

          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            id="hamburger-btn"
          >
            <span className={`navbar__hamburger-bar${menuOpen ? ' navbar__hamburger-bar--open' : ''}`} />
            <span className={`navbar__hamburger-bar${menuOpen ? ' navbar__hamburger-bar--open' : ''}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
          >
            <motion.div
              className="mobile-menu__bg"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
            <nav className="mobile-menu__nav" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link to={link.href} className="mobile-menu__link" onClick={() => setMenuOpen(false)}>
                    <span className="mobile-menu__num">0{i + 1}</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
              >
                <Link to="/contact" className="mobile-menu__cta btn btn-primary" onClick={() => setMenuOpen(false)}>
                  <span>Start a Project</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
