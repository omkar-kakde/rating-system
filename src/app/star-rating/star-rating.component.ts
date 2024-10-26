import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true,
    },
  ],
})
export class StarRatingComponent implements ControlValueAccessor {
  @Input() rating: number = 0; // Initial rating
  @Input() readOnly: boolean = false; // Read-only flag
  @Output() ratingChange = new EventEmitter<number>();

  // Callbacks for ControlValueAccessor
  onChange: (value: number) => void = () => {};
  onTouched: () => void = () => {};

  setRating(value: number) {
    if (!this.readOnly) { // Check if readOnly is false
      this.rating = value;
      this.ratingChange.emit(this.rating);
      this.onChange(this.rating); // Notify Angular of the change
      this.onTouched(); // Mark as touched
    }
  }

  // ControlValueAccessor methods
  writeValue(value: number): void {
    this.rating = value; // Set the rating from the form control
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn; // Store the function to call when the value changes
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn; // Store the function to call when the control is touched
  }
}
