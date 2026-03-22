import React from 'react';
import './Stepper.css';

export type StepStatus = 'pending' | 'active' | 'completed';

export interface Step {
  id: string;
  label: string;
  status: StepStatus;
}

export interface StepperProps {
  steps: Step[];
  className?: string;
}

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Stepper: React.FC<StepperProps> = ({ steps, className = '' }) => (
  <nav aria-label="Progress" className={`stepper ${className}`.trim()}>
    {steps.map((step, index) => (
      <div key={step.id} className={`stepper__step stepper__step--${step.status}`}>
        <div className="stepper__indicator">
          <div
            className="stepper__circle"
            aria-current={step.status === 'active' ? 'step' : undefined}
          >
            {step.status === 'completed' ? <CheckIcon /> : index + 1}
          </div>
          <span className="stepper__label">{step.label}</span>
        </div>
        {index < steps.length - 1 && (
          <div className="stepper__connector" aria-hidden="true" />
        )}
      </div>
    ))}
  </nav>
);
