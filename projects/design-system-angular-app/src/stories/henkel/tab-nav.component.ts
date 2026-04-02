import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface HdsTab {
  /** Tab label text */
  label: string;
  /** Optional Material Icon name (e.g. 'history', 'adjust') */
  icon?: 'quick_reference_all' | 'adjust' | 'history' | string;
}

@Component({
  selector: 'hds-tab-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hds-tab-nav">
      <div class="hds-tab-nav__track">
        <button
          *ngFor="let tab of tabs; let i = index"
          type="button"
          class="hds-tab-nav__tab"
          [class.hds-tab-nav__tab--active]="i === activeIndex"
          (click)="selectTab(i)"
        >
          <svg *ngIf="tab.icon === 'quick_reference_all'" class="hds-tab-nav__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
          <svg *ngIf="tab.icon === 'adjust'" class="hds-tab-nav__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
          </svg>
          <svg *ngIf="tab.icon === 'history'" class="hds-tab-nav__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
          </svg>
          <span>{{ tab.label }}</span>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./tab-nav.css'],
})
export class TabNavComponent {
  /** Array of tab definitions */
  @Input() tabs: HdsTab[] = [];

  /** Index of the currently active tab */
  @Input() activeIndex = 0;

  /** Emits the index of the selected tab */
  @Output() tabChange = new EventEmitter<number>();

  selectTab(index: number): void {
    this.activeIndex = index;
    this.tabChange.emit(index);
  }
}
