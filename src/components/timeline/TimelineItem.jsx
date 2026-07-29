import React from 'react';
import { GlassCard } from '../common/GlassCard';
import './TimelineItem.css';

export function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`timeline-item ${isEven ? 'left' : 'right'} reveal-on-scroll`}>
      {/* Node Dot */}
      <div className="timeline-node">
        <span className="node-ring" />
      </div>

      {/* Card Content */}
      <div className="timeline-content">
        <GlassCard className="timeline-card">
          <div className="timeline-header">
            <span className="timeline-phase">{item.phase}</span>
            <span className="timeline-period">{item.period}</span>
          </div>

          <h4 className="timeline-title">{item.title}</h4>
          <p className="timeline-desc">{item.description}</p>

          <div className="timeline-tags">
            {item.tags.map((t) => (
              <span key={t} className="timeline-tag">{t}</span>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
