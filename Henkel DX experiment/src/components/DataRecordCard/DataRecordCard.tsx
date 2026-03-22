import React from 'react';
import { StatusBadge, BadgeStatus } from '../Badge/Badge';
import { Button } from '../Button/Button';
import './DataRecordCard.css';

export interface DataRecordCardProps {
  title: string;
  status: BadgeStatus;
  lastModified?: string;
  recordCount?: number;
  icon?: string;
  onAction?: () => void;
  className?: string;
}

const actionLabel: Record<BadgeStatus, string> = {
  draft: 'Continue',
  'in-progress': 'Continue',
  completed: 'View',
  error: 'Review',
  'not-started': 'Start',
};

const actionVariant: Record<BadgeStatus, 'primary' | 'secondary' | 'ghost'> = {
  draft: 'primary',
  'in-progress': 'primary',
  completed: 'ghost',
  error: 'secondary',
  'not-started': 'secondary',
};

export const DataRecordCard: React.FC<DataRecordCardProps> = ({
  title,
  status,
  lastModified,
  recordCount,
  icon = '📄',
  onAction,
  className = '',
}) => (
  <div className={`card ${className}`.trim()}>
    <div className="card__left">
      <div className="card__icon" aria-hidden="true">{icon}</div>
      <div className="card__info">
        <span className="card__title">{title}</span>
        <div className="card__meta">
          <StatusBadge status={status} />
          {lastModified && (
            <span className="card__meta-item">Modified {lastModified}</span>
          )}
          {recordCount !== undefined && (
            <span className="card__meta-item">{recordCount.toLocaleString()} records</span>
          )}
        </div>
      </div>
    </div>
    <div className="card__right">
      <Button
        variant={actionVariant[status]}
        size="sm"
        onClick={onAction}
      >
        {actionLabel[status]}
      </Button>
    </div>
  </div>
);
