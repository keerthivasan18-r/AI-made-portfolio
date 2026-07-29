import React from 'react';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import './FeaturedProjectCard.css';

export function FeaturedProjectCard({ project, index }) {
  const isReversed = index % 2 !== 0;

  return (
    <div className={`featured-project-wrapper ${isReversed ? 'is-reversed' : ''} reveal-on-scroll`}>
      <GlassCard className="featured-card">
        <div className="featured-card-grid">
          {/* Visual Banner side */}
          <div className="project-banner-side">
            <div className="banner-visual-box" style={{ background: project.gradient }}>
              <div className="banner-overlay-content">
                <span className="banner-badge">{project.badge}</span>
                <h3 className="banner-project-name">{project.title}</h3>
                <div className="banner-stat-pill">
                  <span>⚡ {project.stats.metrics}</span>
                  <span>🚀 {project.stats.speed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Detail side */}
          <div className="project-detail-side">
            <div className="project-header">
              <Badge variant="primary">{project.badge}</Badge>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>
            </div>

            <p className="project-overview">{project.overview}</p>

            <div className="project-challenge-box">
              <div className="box-section">
                <span className="box-title">Challenge:</span>
                <p>{project.challenge}</p>
              </div>
              <div className="box-section">
                <span className="box-title">Solution:</span>
                <p>{project.solution}</p>
              </div>
            </div>

            <div className="project-features-list">
              <span className="features-heading">Key Highlights:</span>
              <ul>
                {project.features.map((feat, i) => (
                  <li key={i}>✓ {feat}</li>
                ))}
              </ul>
            </div>

            <div className="project-tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project-actions">
              <Button
                variant="primary"
                href={project.githubUrl}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  </svg>
                }
              >
                GitHub Repository
              </Button>
              <Button
                variant="secondary"
                href={project.liveUrl}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                }
              >
                Live Demonstration
              </Button>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
