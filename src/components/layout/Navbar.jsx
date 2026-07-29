import React, { useState, useEffect } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Button } from '../common/Button';
import './Navbar.css';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Journey' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map(l => l.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-shrunk' : ''}`}>
      <nav className="navbar-container container" aria-label="Main Navigation">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, 'hero')}>
          <span className="logo-badge">KR</span>
          <span className="logo-text">Keerthivasan <span className="text-gradient">R</span></span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar-menu">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="nav-item">
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${isActive ? 'is-active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                  {isActive && <span className="active-underline" />}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action Button */}
        <div className="navbar-actions">
          <Button
            variant="secondary"
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="nav-cta-btn"
          >
            Contact Me
          </Button>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`hamburger-btn ${isMobileOpen ? 'is-open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${isMobileOpen ? 'is-open' : ''}`}>
          <ul className="mobile-menu">
            {navLinks.map((link) => (
              <li key={link.id} className="mobile-nav-item">
                <a
                  href={`#${link.id}`}
                  className={`mobile-nav-link ${activeSection === link.id ? 'is-active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
