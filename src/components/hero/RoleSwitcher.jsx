import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { profileData } from '../../data/profileData';
import './RoleSwitcher.css';

export function RoleSwitcher() {
  const currentRole = useTypewriter(profileData.roles, 90, 45, 2200);

  return (
    <div className="role-switcher-container">
      <span className="role-prefix">Specialized as a </span>
      <span className="role-text text-gradient-alt">{currentRole}</span>
      <span className="role-cursor" />
    </div>
  );
}
