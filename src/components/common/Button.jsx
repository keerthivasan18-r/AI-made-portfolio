import React, { useState } from 'react';
import './Button.css';

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  icon,
  isLoading = false,
  download = false,
  className = '',
  ...props
}) {
  const [ripple, setRipple] = useState(null);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, id: Date.now() });

    if (onClick) {
      onClick(e);
    }
  };

  const buttonContent = (
    <>
      {isLoading ? (
        <span className="btn-spinner" aria-label="Loading..." />
      ) : (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          <span className="btn-text">{children}</span>
        </>
      )}
      {ripple && (
        <span
          key={ripple.id}
          className="btn-ripple"
          style={{ left: ripple.x, top: ripple.y }}
          onAnimationEnd={() => setRipple(null)}
        />
      )}
    </>
  );

  const combinedClassName = `btn btn-${variant} ${className} ${isLoading ? 'btn-loading' : ''}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        onClick={handleClick}
        download={download}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClassName}
      onClick={handleClick}
      disabled={isLoading}
      {...props}
    >
      {buttonContent}
    </button>
  );
}
