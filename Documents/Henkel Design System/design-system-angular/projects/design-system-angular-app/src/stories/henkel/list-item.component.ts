import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hds-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hds-list-item" [class.hds-list-item--expanded]="expanded">
      <div class="hds-list-item__row">
        <div class="hds-list-item__content">
          <span class="hds-list-item__title">{{ title }}</span>
          <span *ngIf="subtitle" class="hds-list-item__subtitle">{{ subtitle }}</span>
        </div>

        <div class="hds-list-item__actions">
          <button
            *ngIf="expandable"
            type="button"
            class="hds-list-item__action-btn"
            [attr.aria-expanded]="expanded"
            [attr.aria-label]="expanded ? 'Collapse' : 'Expand'"
            (click)="toggleExpand()"
          >
            <svg *ngIf="!expanded" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
            </svg>
            <svg *ngIf="expanded" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
            </svg>
          </button>

          <button
            *ngIf="deletable"
            type="button"
            class="hds-list-item__action-btn hds-list-item__action-btn--danger"
            aria-label="Delete"
            (click)="deleteItem.emit()"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
          </button>
        </div>
      </div>

      <div *ngIf="expanded && expandedContent" class="hds-list-item__expanded-content">
        <ng-container *ngTemplateOutlet="expandedContent"></ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./list-item.css'],
})
export class ListItemComponent {
  /** Primary title text */
  @Input() title = '';

  /** Secondary subtitle text */
  @Input() subtitle = '';

  /** Show the expand/collapse toggle */
  @Input() expandable = true;

  /** Show the delete button */
  @Input() deletable = true;

  /** Initial expanded state */
  @Input() expanded = false;

  /** Optional template for expanded content */
  @Input() expandedContent: any = null;

  /** Emits when the expand state changes */
  @Output() expandChange = new EventEmitter<boolean>();

  /** Emits when the delete button is clicked */
  @Output() deleteItem = new EventEmitter<void>();

  toggleExpand(): void {
    this.expanded = !this.expanded;
    this.expandChange.emit(this.expanded);
  }
}
