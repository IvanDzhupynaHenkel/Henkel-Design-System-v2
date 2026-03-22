import React, { useEffect, useRef } from 'react';
import { Button } from '../Button/Button';
import { Stepper, Step } from '../Stepper/Stepper';
import './Modal.css';

export interface ModalProps {
  open: boolean;
  title: string;
  subtitle?: string;
  steps?: Step[];
  children?: React.ReactNode;
  onClose: () => void;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  title,
  subtitle,
  steps,
  children,
  onClose,
  footer,
  className = '',
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Trap focus and close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    dialogRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        ref={dialogRef}
        className={`modal ${className}`.trim()}
        tabIndex={-1}
      >
        <div className="modal__header">
          <div className="modal__header-text">
            <h2 id="modal-title" className="modal__title">{title}</h2>
            {subtitle && <p className="modal__subtitle">{subtitle}</p>}
          </div>
          <button
            className="modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {steps && steps.length > 0 && (
          <div className="modal__stepper">
            <Stepper steps={steps} />
          </div>
        )}

        {children && (
          <div className="modal__body">{children}</div>
        )}

        {footer && (
          <div className="modal__footer">{footer}</div>
        )}
      </div>
    </div>
  );
};

// Convenience footer component matching the Figma design
export interface ModalActionsProps {
  onCancel: () => void;
  onSaveDraft?: () => void;
  onContinue: () => void;
  continueLabel?: string;
  loading?: boolean;
}

export const ModalActions: React.FC<ModalActionsProps> = ({
  onCancel,
  onSaveDraft,
  onContinue,
  continueLabel = 'Continue with Ontology',
  loading = false,
}) => (
  <>
    <Button variant="tertiary" onClick={onCancel}>Cancel</Button>
    {onSaveDraft && (
      <Button variant="secondary" onClick={onSaveDraft}>Save as Draft</Button>
    )}
    <Button variant="primary" onClick={onContinue} loading={loading}>
      {continueLabel}
    </Button>
  </>
);
