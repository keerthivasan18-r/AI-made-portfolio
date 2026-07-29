import React, { useRef, useState } from 'react';
import './GlassCard.css';

export function GlassCard({
  children,
  className = '',
  enableTilt = true,
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' });
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!enableTilt || !cardRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate spotlight position
    setSpotlightPos({ x, y, opacity: 1 });

    // Calculate 3D Tilt angles (max 6 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;

    requestAnimationFrame(() => {
      setTiltStyle({
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
      });
    });
  };

  const handleMouseLeave = () => {
    setSpotlightPos(prev => ({ ...prev, opacity: 0 }));
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    });
  };

  return (
    <div
      ref={cardRef}
      className={`glass-panel glass-card-wrapper ${className}`}
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      <div
        className="glass-card-spotlight"
        style={{
          left: `${spotlightPos.x}px`,
          top: `${spotlightPos.y}px`,
          opacity: spotlightPos.opacity
        }}
      />
      <div className="glass-card-content">
        {children}
      </div>
    </div>
  );
}
