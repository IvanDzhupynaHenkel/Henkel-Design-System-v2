import React from 'react';
import './Badge.css';

export type BadgeStatus = 'draft' | 'in-progress' | 'completed' | 'error' | 'not-started';

export interface StatusBadgeProps {
  status: BadgeStatus;
  label?: string;
  showDot?: boolean;
  className?: string;
}

const defaultLabels: Record<BadgeStatus, string> = {
  draft: 'Draft',
  'in-progress': 'In Progress',
  completed: 'Completed',
  error: 'Error',
  'not-started': 'Not Started',
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  showDot = true,
  className = '',
}) => (
  <span className={`badge badge--${status} ${className}`.trim()}>
    {showDot && <span className="badge__dot" aria-hidden="true" />}
    {label ?? defaultLabels[status]}
  </span>
);

export interface CountBadgeProps {
  count: number;
  active?: boolean;
  className?: string;
}

export const CountBadge: React.FC<CountBadgeProps> = ({
  count,
  active = true,
  className = '',
}) => (
  <span
    className={`badge badge--count badge--count-${active ? 'active' : 'inactive'} ${className}`.trim()}
    aria-label={`${count} items`}
  >
    {count}
  </span>
);
