import { Component } from '@angular/core';
import { ImageSquareComponent } from './image-square/image-square.component';
import { FilterComponent } from './filter/filter.component';
import { PerformanceStatsComponent } from './performance-stats/performance-stats.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FilterComponent, ImageSquareComponent, PerformanceStatsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css'],
})
export class App {
  totalImages = 800;
  order: 'asc' | 'desc' = 'asc';

  get allImages(): string[] {
    return Array.from({ length: this.totalImages }, (_, i) => {
      const num = this.order === 'asc' ? i + 1 : this.totalImages - i;
      return `assets/photo(${num}).jpg`;
    });
  }

  onOrderChange(newOrder: 'asc' | 'desc') {
    this.order = newOrder;
  }
}
