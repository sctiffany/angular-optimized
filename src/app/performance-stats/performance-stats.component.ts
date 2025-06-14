import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { onTTFB, onFCP, onLCP } from 'web-vitals';

@Component({
  selector: 'app-performance-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-stats.html',
  styleUrls: ['./performance-stats.css']
})
export class PerformanceStatsComponent implements OnInit {
  TTFB: string | null = null;
  FCP: string | null = null;
  LCP: string | null = null;

  ngOnInit() {
    onTTFB((metric) => this.TTFB = metric.value.toFixed(2) + ' ms');
    onFCP((metric) => this.FCP = metric.value.toFixed(2) + ' ms');
    onLCP((metric) => this.LCP = metric.value.toFixed(2) + ' ms');
  }
}
