import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

export function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 200);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`loading-screen ${isFading ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo-box">
          <span className="loading-logo-text">K</span>
          <div className="loading-ring" />
        </div>
        <div className="loading-text-group">
          <span className="loading-brand">KEERTHIVASAN</span>
          <span className="loading-role">Full Stack Developer</span>
        </div>
        <div className="loading-bar-wrapper">
          <div className="loading-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <span className="loading-counter">{Math.min(progress, 100)}%</span>
      </div>
    </div>
  );
}
