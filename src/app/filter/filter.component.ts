import { Component, EventEmitter, Output, ChangeDetectionStrategy  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./filter.html',
  styleUrls: ['./filter.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @Output() orderChange = new EventEmitter<'asc' | 'desc'>();

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as 'asc' | 'desc';
    this.orderChange.emit(value);
  }
}
