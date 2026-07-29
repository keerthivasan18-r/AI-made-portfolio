import React from 'react';
import { GlassCard } from '../common/GlassCard';
import './SkillCard.css';

export function SkillCard({ skill }) {
  return (
    <GlassCard className="skill-card-item">
      <div className="skill-card-top">
        <span className="skill-icon-badge">{skill.name.substring(0, 2).toUpperCase()}</span>
        <div className="skill-info">
          <h4 className="skill-name">{skill.name}</h4>
          <span className="skill-tag">{skill.tag}</span>
        </div>
      </div>
      
      <div className="skill-progress-bar-bg">
        <div
          className="skill-progress-bar-fill"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </GlassCard>
  );
}
