import React from 'react';
import { heroFloatingTech } from '../../data/skillsData';
import './FloatingTechIcons.css';

export function FloatingTechIcons() {
  return (
    <div className="floating-tech-container" aria-hidden="true">
      {heroFloatingTech.map((tech, index) => (
        <div
          key={tech.name}
          className={`floating-tech-pill float-pos-${index + 1}`}
          style={{ animationDelay: `${index * -1.5}s` }}
        >
          <span className="tech-dot" style={{ backgroundColor: tech.color }} />
          <span className="tech-name">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}
