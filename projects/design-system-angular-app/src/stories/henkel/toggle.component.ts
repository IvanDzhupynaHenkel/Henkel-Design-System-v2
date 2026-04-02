import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'hds-toggle',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true,
    },
  ],
  template: `
    <label class="hds-toggle" [class.hds-toggle--disabled]="disabled">
      <span *ngIf="labelPosition === 'before'" class="hds-toggle__label hds-toggle__label--before">
        {{ label }}
      </span>

      <span
        class="hds-toggle__track"
        [class.hds-toggle__track--on]="checked"
        role="switch"
        [attr.aria-checked]="checked"
        [attr.aria-label]="label || 'Toggle'"
        [attr.tabindex]="disabled ? -1 : 0"
        (click)="toggle()"
        (keydown.enter)="toggle()"
        (keydown.space)="toggle()"
      >
        <span class="hds-toggle__handle"></span>
      </span>

      <span *ngIf="labelPosition === 'after'" class="hds-toggle__label hds-toggle__label--after">
        {{ label }}
      </span>
    </label>
  `,
  styleUrls: ['./toggle.css'],
})
export class ToggleComponent implements ControlValueAccessor {
  /** Whether the toggle is on */
  @Input() checked = false;

  /** Optional label text */
  @Input() label = '';

  /** Position of the label relative to the toggle */
  @Input() labelPosition: 'before' | 'after' = 'after';

  /** Whether the toggle is disabled */
  @Input() disabled = false;

  /** Emits the new checked state */
  @Output() checkedChange = new EventEmitter<boolean>();

  private onChange: (val: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  toggle(): void {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
    this.checkedChange.emit(this.checked);
  }

  writeValue(val: boolean): void {
    this.checked = val ?? false;
  }

  registerOnChange(fn: (val: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
