import React from 'react';

export function Container({ children, className = '', id, style }) {
  return (
    <div id={id} className={`container ${className}`} style={style}>
      {children}
    </div>
  );
}
