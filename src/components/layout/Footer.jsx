import React from 'react';
import { Container } from '../common/Container';
import { SocialIcon } from '../common/SocialIcon';
import { socialLinks } from '../../data/socialData';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-element">
      <Container className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-badge">KR</span>
              <span className="logo-text">Keerthivasan <span className="text-gradient">R</span></span>
            </a>
            <p className="footer-tagline">Software Developer • Java, Spring Boot & React</p>
          </div>

          <div className="footer-quick-links">
            <a href="#hero" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#timeline" className="footer-link">Journey</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <div className="footer-socials">
            {socialLinks.map((s) => (
              <SocialIcon key={s.name} name={s.name} url={s.url} icon={s.icon} />
            ))}
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {year} Keerthivasan R. Built with React & Vanilla CSS. Production Ready.
          </p>
          <p className="footer-crafted-by">
            Designed for high performance, responsive accessibility & clean code.
          </p>
        </div>
      </Container>
    </footer>
  );
}
