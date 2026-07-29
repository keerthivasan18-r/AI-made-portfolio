import React from 'react';
import { Badge } from './Badge';
import './SectionTitle.css';

export function SectionTitle({
  badgeText,
  title,
  subtitle,
  centered = true,
  className = ''
}) {
  return (
    <div className={`section-title ${centered ? 'text-center' : ''} ${className} reveal-on-scroll`}>
      {badgeText && <Badge variant="secondary">{badgeText}</Badge>}
      <h2 className="title-heading">
        {title}
      </h2>
      {subtitle && <p className="title-subtitle">{subtitle}</p>}
      <div className="title-divider" />
    </div>
  );
}
