import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ImageSquareComponent } from './image-square/image-square.component';
import { FilterComponent } from './filter/filter.component';
import { PerformanceStatsComponent } from './performance-stats/performance-stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FilterComponent,
    ImageSquareComponent,
    PerformanceStatsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, AfterViewInit {
  @ViewChild('scrollAnchor') scrollAnchor!: ElementRef;

  totalImages = 800;
  imagesPerLoad = 50;
  loadedCount = 50;
  order: 'asc' | 'desc' = 'asc';

  get allImages(): string[] {
    return Array.from({ length: this.loadedCount }, (_, i) => {
      const num = this.order === 'asc' ? i + 1 : this.totalImages - i;
      return `assets/photo(${num}).jpg`;
    });
  }

  onOrderChange(newOrder: 'asc' | 'desc') {
    this.order = newOrder;
    this.loadedCount = this.imagesPerLoad;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && this.loadedCount < this.totalImages) {
        this.loadedCount = Math.min(this.loadedCount + this.imagesPerLoad, this.totalImages);
      }
    });

    observer.observe(this.scrollAnchor.nativeElement);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
