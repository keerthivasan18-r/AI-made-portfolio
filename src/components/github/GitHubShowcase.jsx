import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { GlassCard } from '../common/GlassCard';
import { Button } from '../common/Button';
import './GitHubShowcase.css';

export function GitHubShowcase() {
  return (
    <section id="github" className="github-section">
      <Container>
        <SectionTitle
          badgeText="Open Source & Activity"
          title="GitHub Engineering Showcase"
          subtitle="Commitment to continuous learning, version control hygiene, and open-source software contributions."
        />

        <div className="github-grid">
          {/* Left: Profile & Stats */}
          <div className="github-profile-card-wrapper reveal-on-scroll">
            <GlassCard className="github-card">
              <div className="github-user-header">
                <div className="github-avatar-circle">
                  <span>KV</span>
                </div>
                <div className="github-user-info">
                  <h3 className="user-name">Keerthivasan</h3>
                  <a
                    href="https://github.com/keerthivasan18-r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="user-handle"
                  >
                    @keerthivasan18-r ↗
                  </a>
                  <span className="user-bio">Full Stack Developer & Software Engineer</span>
                </div>
              </div>

              <div className="github-metrics-row">
                <div className="metric-box">
                  <span className="metric-num">7+</span>
                  <span className="metric-lbl">Repositories</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">100%</span>
                  <span className="metric-lbl">Clean Code</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">Active</span>
                  <span className="metric-lbl">Status</span>
                </div>
              </div>

              <div className="github-cta-box">
                <Button
                  variant="primary"
                  href="https://github.com/keerthivasan18-r"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    </svg>
                  }
                >
                  Visit GitHub Profile
                </Button>
              </div>
            </GlassCard>
          </div>

          {/* Right: Visual Commit Grid Widget */}
          <div className="github-activity-wrapper reveal-on-scroll reveal-delay-2">
            <GlassCard className="github-card activity-card">
              <h4 className="activity-title">Contribution & Development Rhythm</h4>
              <p className="activity-desc">Demonstrating structured Git workflows, feature branch management, and continuous commits.</p>

              <div className="commit-grid-visual" aria-hidden="true">
                {Array.from({ length: 48 }).map((_, i) => {
                  const level = (i * 7) % 4; // Simulated activity level (0-3)
                  return (
                    <span
                      key={i}
                      className={`commit-cell level-${level}`}
                      title={`Activity level ${level}`}
                    />
                  );
                })}
              </div>

              <div className="pinned-repo-preview">
                <span className="pinned-label">Pinned Highlight:</span>
                <div className="pinned-box">
                  <span className="pinned-title">⭐ ChronoAI & Expense Tracker</span>
                  <span className="pinned-desc">Engineered with modular React, SQL logic, and modern UI standards.</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
