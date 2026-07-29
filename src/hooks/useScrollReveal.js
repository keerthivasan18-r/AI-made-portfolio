import { useEffect } from 'react';

export function useScrollReveal(selector = '.reveal-on-scroll', threshold = 0.15) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll(selector);

    if (prefersReducedMotion) {
      elements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, unobserve to save GPU/CPU cycles
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: threshold,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selector, threshold]);
}
