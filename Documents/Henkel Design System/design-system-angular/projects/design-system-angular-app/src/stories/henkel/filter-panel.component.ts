import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface FilterOption {
  label: string;
  checked: boolean;
}

@Component({
  selector: 'hds-filter-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hds-filter-panel">
      <div class="hds-filter-panel__header">
        <span class="hds-filter-panel__title">{{ title }}</span>
        <button
          type="button"
          class="hds-filter-panel__toggle"
          [attr.aria-expanded]="expanded"
          (click)="toggleExpanded()"
        >
          <svg *ngIf="expanded" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
          </svg>
          <svg *ngIf="!expanded" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
          </svg>
        </button>
      </div>

      <div *ngIf="expanded" class="hds-filter-panel__body">
        <label
          *ngFor="let option of visibleOptions; let i = index"
          class="hds-filter-panel__option"
        >
          <span
            class="hds-filter-panel__checkbox"
            [class.hds-filter-panel__checkbox--checked]="option.checked"
            role="checkbox"
            [attr.aria-checked]="option.checked"
            tabindex="0"
            (click)="toggleOption(i)"
            (keydown.enter)="toggleOption(i)"
            (keydown.space)="toggleOption(i)"
          >
            <svg *ngIf="option.checked" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </span>
          <span class="hds-filter-panel__option-label">{{ option.label }}</span>
        </label>

        <button
          *ngIf="options.length > maxVisible && !showAll"
          type="button"
          class="hds-filter-panel__show-all"
          (click)="showAll = true"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          <span>Show all</span>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./filter-panel.css'],
})
export class FilterPanelComponent {
  /** Panel title */
  @Input() title = 'Filter';

  /** List of filter options */
  @Input() options: FilterOption[] = [];

  /** Max items to show before "Show all" */
  @Input() maxVisible = 5;

  /** Whether the panel is expanded */
  @Input() expanded = true;

  /** Emits updated options array when a checkbox changes */
  @Output() optionsChange = new EventEmitter<FilterOption[]>();

  /** Emits when expanded state changes */
  @Output() expandedChange = new EventEmitter<boolean>();

  showAll = false;

  get visibleOptions(): FilterOption[] {
    return this.showAll ? this.options : this.options.slice(0, this.maxVisible);
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
  }

  toggleOption(index: number): void {
    const updated = this.options.map((opt, i) =>
      i === index ? { ...opt, checked: !opt.checked } : opt
    );
    this.options = updated;
    this.optionsChange.emit(updated);
  }
}
