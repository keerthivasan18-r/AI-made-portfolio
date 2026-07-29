import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { RoleSwitcher } from './RoleSwitcher';
import { FloatingTechIcons } from './FloatingTechIcons';
import { profileData } from '../../data/profileData';
import './Hero.css';

export function Hero() {
  const nameChars = profileData.name.split('');

  return (
    <section id="hero" className="hero-section">
      <Container className="hero-container">
        <div className="hero-grid">
          {/* Left Column: Details & CTAs */}
          <div className="hero-text-content reveal-on-scroll">
            <div className="hero-badge-wrapper">
              <Badge variant="primary">Available for Opportunities</Badge>
            </div>

            <h1 className="hero-headline">
              Hi, I'm{' '}
              <span className="hero-name-animated">
                {nameChars.map((char, index) => (
                  <span
                    key={index}
                    className="hero-letter"
                    style={{ animationDelay: `${0.2 + index * 0.06}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>

            <RoleSwitcher />

            <p className="hero-tagline">
              {profileData.tagline}
            </p>

            <div className="hero-cta-group">
              <Button
                variant="primary"
                href="#projects"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                }
              >
                View Projects
              </Button>
              <Button
                variant="secondary"
                href="#contact"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                }
              >
                Get In Touch
              </Button>
            </div>

            {/* Quick Tech Badges */}
            <div className="hero-skills-strip">
              <span className="strip-label">Core Stack:</span>
              <div className="strip-tags">
                <span className="mini-tag">Java</span>
                <span className="mini-tag">Spring Boot</span>
                <span className="mini-tag">MySQL</span>
                <span className="mini-tag">React</span>
                <span className="mini-tag">JavaScript</span>
                <span className="mini-tag">Bootstrap</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Frame */}
          <div className="hero-visual-content reveal-on-scroll reveal-delay-2">
            <div className="hero-profile-frame-wrapper">
              <FloatingTechIcons />
              <div className="glass-panel hero-profile-frame">
                <div className="profile-image-container">
                  <div className="profile-placeholder-avatar">
                    <span className="avatar-initials">KR</span>
                    <span className="avatar-title">{profileData.name}</span>
                    <span className="avatar-sub">Software Developer</span>
                  </div>
                </div>
                <div className="frame-status-pill">
                  <span className="pulse-dot" />
                  <span>B.Sc CS • DG Vaishnav College</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Down Arrow Scroll Indicator */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to About section">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
