import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hds-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="hds-button"
      [class.hds-button--primary]="variant === 'primary'"
      [class.hds-button--secondary]="variant === 'secondary'"
      [class.hds-button--ghost]="variant === 'ghost'"
      [class.hds-button--sm]="size === 'sm'"
      [class.hds-button--lg]="size === 'lg'"
      [disabled]="disabled"
      (click)="clicked.emit($event)"
    >
      <svg *ngIf="icon === 'add'" class="hds-button__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
      <svg *ngIf="icon === 'delete'" class="hds-button__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
      </svg>
      <svg *ngIf="icon === 'expand_more'" class="hds-button__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
      </svg>
      <svg *ngIf="icon === 'expand_less'" class="hds-button__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
      </svg>
      <span *ngIf="label" class="hds-button__label">{{ label }}</span>
    </button>
  `,
  styleUrls: ['./hds-button.css'],
})
export class HdsButtonComponent {
  /** Button label text */
  @Input() label = '';

  /** Visual variant */
  @Input() variant: 'primary' | 'secondary' | 'ghost' = 'primary';

  /** Size of the button */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /** Optional icon name to display before the label */
  @Input() icon?: 'add' | 'delete' | 'expand_more' | 'expand_less';

  /** Whether the button is disabled */
  @Input() disabled = false;

  /** Emits the click event */
  @Output() clicked = new EventEmitter<Event>();
}
