import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { profileData } from '../../data/profileData';
import './About.css';

export function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <SectionTitle
          badgeText="Engineering Discipline"
          title="About Keerthivasan R"
          subtitle="Driven by technical precision, clean code standards, and passion for software product design."
        />

        <div className="about-grid">
          {/* Column 1: Bio & Summary & Internship & Languages */}
          <div className="about-bio-column reveal-on-scroll">
            <GlassCard className="about-main-card">
              <h3 className="about-card-title">Professional Overview</h3>
              <p className="about-bio-text">{profileData.bioSummary}</p>
              
              <div className="about-education-box">
                <div className="education-icon">🎓</div>
                <div className="education-details">
                  <span className="edu-degree">{profileData.education.degree}</span>
                  <span className="edu-field">{profileData.education.institution} ({profileData.education.period})</span>
                  <p className="edu-focus">{profileData.education.focus}</p>
                </div>
              </div>

              {/* Internship Highlight Box */}
              <div className="about-internship-box">
                <div className="internship-badge-header">
                  <span className="internship-icon">💼</span>
                  <span className="internship-role">{profileData.internship.role}</span>
                </div>
                <span className="internship-company">{profileData.internship.company} • {profileData.internship.period}</span>
                <ul className="internship-bullet-list">
                  {profileData.internship.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="about-languages-box">
                <span className="languages-label">Languages:</span>
                <div className="languages-list">
                  {profileData.languages.map((lang) => (
                    <Badge key={lang.name} variant="accent">
                      {lang.name} • {lang.level}
                    </Badge>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Column 2: Engineering Focus & Certifications */}
          <div className="about-philosophy-column reveal-on-scroll reveal-delay-2">
            <h3 className="sub-heading">Core Engineering Pillars</h3>
            <div className="philosophy-stack">
              {profileData.philosophy.map((pillar, idx) => (
                <GlassCard key={pillar.title} className="philosophy-card" enableTilt={false}>
                  <div className="pillar-header">
                    <span className="pillar-num">0{idx + 1}</span>
                    <h4 className="pillar-title">{pillar.title}</h4>
                  </div>
                  <p className="pillar-desc">{pillar.description}</p>
                </GlassCard>
              ))}
            </div>

            <h3 className="sub-heading certs-heading">Certifications & Training</h3>
            <div className="certifications-stack">
              {profileData.certifications.map((cert) => (
                <GlassCard key={cert.title} className="cert-card" enableTilt={false}>
                  <div className="cert-header">
                    <span className="cert-icon">📜</span>
                    <div className="cert-title-group">
                      <h4 className="cert-title">{cert.title}</h4>
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                  </div>
                  <p className="cert-desc">{cert.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="about-stats-grid reveal-on-scroll reveal-delay-3">
          {profileData.stats.map((stat) => (
            <GlassCard key={stat.label} className="stat-card">
              <span className="stat-value text-gradient">
                {stat.value}{stat.suffix}
              </span>
              <span className="stat-label">{stat.label}</span>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
