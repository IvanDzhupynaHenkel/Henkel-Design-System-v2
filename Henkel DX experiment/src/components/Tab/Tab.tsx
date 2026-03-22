import React from 'react';
import { CountBadge } from '../Badge/Badge';
import './Tab.css';

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, activeId, onChange, className = '' }) => (
  <div className={`tabs ${className}`.trim()} role="tablist">
    {items.map((item) => (
      <button
        key={item.id}
        role="tab"
        aria-selected={item.id === activeId}
        aria-controls={`tabpanel-${item.id}`}
        className={`tab${item.id === activeId ? ' tab--active' : ''}`}
        onClick={() => onChange(item.id)}
        disabled={item.disabled}
      >
        {item.label}
        {item.count !== undefined && (
          <CountBadge count={item.count} active={item.id === activeId} />
        )}
      </button>
    ))}
  </div>
);
