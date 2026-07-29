import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { CompactProjectCard } from './CompactProjectCard';
import { featuredProjects, compactProjects } from '../../data/projectsData';
import './Projects.css';

export function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <SectionTitle
          badgeText="Software Craftsmanship"
          title="Featured & Flagship Projects"
          subtitle="Real-world software engineering applications built with clean architecture, high performance, and problem-solving focus."
        />

        {/* Flagship Projects */}
        <div className="flagship-projects-list">
          {featuredProjects.map((project, idx) => (
            <FeaturedProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Compact Projects Sub-section */}
        <div className="compact-projects-sub-container">
          <h3 className="compact-section-heading reveal-on-scroll">
            Additional Applications & Utilities
          </h3>
          <div className="compact-projects-grid">
            {compactProjects.map((project, idx) => (
              <div key={project.id} className={`reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}>
                <CompactProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
