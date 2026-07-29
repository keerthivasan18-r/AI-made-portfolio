import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (event) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return mousePosition;
}
