import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Studio', href: '/studio' },
  { label: 'Contact', href: '/contact' },
];

// TODO: Replace placeholder social links with actual client URLs
const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Behance', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo-link" aria-label="Render Forum Home">
              <img src="/img/Logo.png" alt="Render Forum" className="footer__logo" loading="lazy" />
            </Link>
            <p className="footer__tagline">
              Architecture shaped by context,<br />
              material, light and people.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <p className="footer__nav-label label">Navigation</p>
            <ul className="footer__nav-list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="footer__nav-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact">
            <p className="footer__nav-label label">Contact</p>
            <ul className="footer__contact-list">
              {/* TODO: Replace with actual client contact details */}
              <li>
                <a href="mailto:hello@renderforum.com" className="footer__nav-link">
                  hello@renderforum.com
                </a>
              </li>
              <li>
                <a href="tel:+910000000000" className="footer__nav-link">
                  +91 00 0000 0000
                </a>
              </li>
              <li className="footer__address">
                Studio Address,<br />
                City, State -- 000 000
              </li>
            </ul>
          </div>

          <div className="footer__social">
            <p className="footer__nav-label label">Follow</p>
            <ul className="footer__social-list">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer__nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Render Forum on ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom divider" />
        <div className="footer__bottom-row">
          <p className="footer__copy">
            2026 Render Forum. All rights reserved.
          </p>
          <p className="footer__sub">
            Realistic Render, Reliable Results.
          </p>
        </div>
      </div>
    </footer>
  );
}
