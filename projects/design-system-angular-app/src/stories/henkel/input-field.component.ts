import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
  selector: 'hds-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
  template: `
    <div
      class="hds-input"
      [class.hds-input--focused]="focused"
      [class.hds-input--filled]="value"
      [class.hds-input--error]="errorMessage"
      [class.hds-input--disabled]="disabled"
    >
      <label class="hds-input__label" [for]="inputId">
        {{ label }}<span *ngIf="required" class="hds-input__required"> *</span>
      </label>
      <input
        class="hds-input__field"
        [id]="inputId"
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [(ngModel)]="value"
        (ngModelChange)="onValueChange($event)"
        (focus)="focused = true"
        (blur)="focused = false; onTouched()"
      />
      <span *ngIf="errorMessage" class="hds-input__error">{{ errorMessage }}</span>
      <span *ngIf="hint && !errorMessage" class="hds-input__hint">{{ hint }}</span>
    </div>
  `,
  styleUrls: ['./input-field.css'],
})
export class InputFieldComponent implements ControlValueAccessor {
  /** Label text shown above the input */
  @Input() label = '';

  /** Whether the field is required */
  @Input() required = false;

  /** HTML input type */
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'search' = 'text';

  /** Placeholder text */
  @Input() placeholder = '';

  /** Hint text shown below the input */
  @Input() hint = '';

  /** Validation error message */
  @Input() errorMessage = '';

  /** Whether the input is disabled */
  @Input() disabled = false;

  /** Current value */
  @Input() value = '';

  /** Unique ID for label association */
  @Input() inputId = `hds-input-${Math.random().toString(36).slice(2, 7)}`;

  /** Emits on value change */
  @Output() valueChange = new EventEmitter<string>();

  focused = false;

  // ControlValueAccessor
  private onChange: (val: string) => void = () => {};
  onTouched: () => void = () => {};

  onValueChange(val: string): void {
    this.value = val;
    this.onChange(val);
    this.valueChange.emit(val);
  }

  writeValue(val: string): void {
    this.value = val ?? '';
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
