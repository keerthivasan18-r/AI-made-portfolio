import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { SkillCard } from './SkillCard';
import { skillsCategories } from '../../data/skillsData';
import './Skills.css';

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <SectionTitle
          badgeText="Technical Competency"
          title="Skills & Technologies"
          subtitle="Core proficiencies across frontend engineering, backend systems, databases, and development workflows."
        />

        <div className="skills-categories-container">
          {skillsCategories.map((group, idx) => (
            <div key={group.category} className={`skills-group-box reveal-on-scroll reveal-delay-${idx + 1}`}>
              <div className="group-header">
                <h3 className="group-title">{group.category}</h3>
                <p className="group-desc">{group.description}</p>
              </div>

              <div className="skills-grid">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
