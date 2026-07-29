import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { TimelineItem } from './TimelineItem';
import { timelineItems } from '../../data/timelineData';
import './Timeline.css';

export function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <Container>
        <SectionTitle
          badgeText="Growth & Milestones"
          title="Engineering Journey"
          subtitle="A timeline tracking academic foundation, skills accumulation, project engineering, and career aspirations."
        />

        <div className="timeline-tree-container">
          <div className="timeline-central-line" />
          <div className="timeline-items-list">
            {timelineItems.map((item, idx) => (
              <TimelineItem key={item.phase} item={item} index={idx} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
